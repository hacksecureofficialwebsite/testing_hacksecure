"use client"

import { useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { getSupabaseClient, isAuthenticated } from "@/lib/supabase-client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function InternLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated()
      setAuthenticated(isAuth)

      if (!isAuth) {
        router.push("/signin")
      } else {
        setLoading(false)
      }
    }

    checkAuth()

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setAuthenticated(true)
      } else if (event === "SIGNED_OUT") {
        setAuthenticated(false)
        router.push("/signin")
      }
    })

    return () => {
      if (authListener && authListener.subscription) {
        authListener.subscription.unsubscribe()
      }
    }
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
          <p>Please wait while we verify your session.</p>
        </div>
      </div>
    )
  }

  if (!authenticated) {
    return null // Don't render anything, we're redirecting
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

