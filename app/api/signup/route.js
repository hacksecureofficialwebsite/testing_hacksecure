import { supabaseAdmin } from '@/lib/supabase-admin'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { email, password, name } = await req.json()

    // Validate input
    if (!email || !password || !name) {
      return NextResponse.json({
        error: 'Email, password and name are required'
      }, { status: 400 })
    }

    // Input validation
    if (password.length < 6) {
      return NextResponse.json({
        error: 'Password must be at least 6 characters'
      }, { status: 400 })
    }

    if (!email.includes('@')) {
      return NextResponse.json({
        error: 'Invalid email format'
      }, { status: 400 })
    }

    // Insert directly into users table using service role client
    const { data: userData, error: userError } = await supabaseAdmin
      .from('users')
      .insert([
        {
          name,
          email: email.toLowerCase().trim(),
          password, // In production, hash this password
          vip_subscription: false,
          verified: false,
          verification_token: crypto.randomUUID()
        }
      ])
      .select()
      .single()

    if (userError) {
      console.error('User creation error:', userError)
      return NextResponse.json({
        error: 'Failed to create user: ' + userError.message
      }, { status: 400 })
    }

    // Insert into user_scores table
    const { error: scoreError } = await supabaseAdmin
      .from('user_scores')
      .insert([
        {
          user_id: userData.id,
          score: 0,
          date: new Date().toISOString(),
          passed: false
        }
      ])

    if (scoreError) {
      console.error('Score creation error:', scoreError)
    }

    return NextResponse.json({
      message: 'User created successfully',
      user: {
        id: userData.id,
        name: userData.name,
        email: userData.email
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json({
      error: 'Internal server error'
    }, { status: 500 })
  }
}