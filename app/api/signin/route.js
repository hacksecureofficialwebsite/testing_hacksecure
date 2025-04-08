import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    console.log('Login attempt for email:', email) // Debug log

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // First check if user exists
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email.toLowerCase().trim()) // Normalize email
      .single()

    console.log('Query result:', { userData, userError }) // Debug log

    if (userError) {
      console.error('Database error:', userError)
      return NextResponse.json({ 
        error: 'Invalid email or password' 
      }, { status: 401 })
    }

    if (!userData) {
      console.log('No user found with email:', email)
      return NextResponse.json({ 
        error: 'Invalid email or password' 
      }, { status: 401 })
    }

    // Check password
    if (userData.password !== password) {
      console.log('Password mismatch for user:', email)
      return NextResponse.json({ 
        error: 'Invalid email or password' 
      }, { status: 401 })
    }

    // Set cookie for session management
    cookies().set('userId', userData.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 // 1 week
    })

    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email,
        vip_subscription: userData.vip_subscription
      },
      redirectTo: '/courses' // Add redirect URL
    })

  } catch (error) {
    console.error('Signin error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

