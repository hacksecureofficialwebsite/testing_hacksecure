import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'

export async function GET(request) {
  try {
    console.log('Checking user status...')
    const cookieStore = cookies()
    
    // First check for userId cookie (custom auth)
    const userId = cookieStore.get('userId')?.value
    console.log('UserId from cookie:', userId)

    if (userId) {
      console.log('Found userId in cookie, checking user data...')
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id, name, email, vip_subscription')
        .eq('id', userId)
        .single()

      if (!userError && userData) {
        console.log('Found user data:', userData)
        const response = NextResponse.json({
          isLoggedIn: true,
          user: userData,
          userId: userData.id
        })

        // Ensure cookie is set
        response.cookies.set('userId', userData.id, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        })

        return response
      }
    }

    // If no userId cookie or invalid, try Supabase session
    console.log('Checking Supabase session...')
    const supabaseClient = createRouteHandlerClient({ cookies })
    const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession()
    console.log('Supabase session:', session ? 'Found' : 'Not found')

    if (session?.user) {
      console.log('Found Supabase session, getting user data...')
      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('id, name, email, vip_subscription')
        .eq('id', session.user.id)
        .single()

      if (!userError && userData) {
        console.log('Found user data from Supabase:', userData)
        const response = NextResponse.json({
          isLoggedIn: true,
          user: userData,
          userId: userData.id
        })

        // Set both cookies
        response.cookies.set('userId', userData.id, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax',
          path: '/'
        })

        return response
      }
    }

    console.log('No valid authentication found')
    // No valid authentication found
    return NextResponse.json({ 
      isLoggedIn: false,
      user: null,
      userId: null
    })
  } catch (error) {
    console.error('User status error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 