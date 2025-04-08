'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function Navbar() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    checkUserStatus()
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const checkUserStatus = async () => {
    try {
      console.log('Checking user status...')
      const response = await fetch('/api/user-status', {
        credentials: 'include'
      })
      const data = await response.json()
      console.log('User status response:', data)
      
      if (data.isLoggedIn && data.user) {
        console.log('User is logged in:', data.user)
        setUser(data.user)
      } else {
        console.log('User is not logged in')
        setUser(null)
      }
    } catch (error) {
      console.error('Error checking user status:', error)
      setUser(null)
    }
  }

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (response.ok) {
        setUser(null)
        localStorage.clear()
        window.location.href = '/signin'
      } else {
        console.error('Logout failed:', await response.text())
      }
    } catch (error) {
      console.error('Error logging out:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  const handleInternshipClick = async (e) => {
    e.preventDefault()
    console.log('Internship clicked, current user:', user)
    
    // Recheck user status before redirecting
    try {
      const response = await fetch('/api/user-status', {
        credentials: 'include'
      })
      const data = await response.json()
      console.log('Current auth status:', data)

      if (data.isLoggedIn && data.user) {
        console.log('User is authenticated, redirecting to /intern')
        router.push('/internship')
      } else {
        console.log('User is not authenticated, redirecting to /signin')
        router.push('/signin')
      }
    } catch (error) {
      console.error('Error checking authentication:', error)
      router.push('/signin')
    }
  }

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-lg' : 'bg-black'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">HACK SECURE</Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/coming-soon" className="text-gray-300 hover:text-white transition-colors">Courses</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            {/* <Link href="/courses/payment" className="hover:text-gray-300">VIP</Link> */}
            <Link href="/job-board" className="hover:text-gray-300">Job Board</Link>
            <Link href="/internship" onClick={handleInternshipClick} className="text-gray-300 hover:text-white transition-colors">Internship</Link>
            {/* <Link href="/coming-soon" className="text-gray-300 hover:text-white transition-colors">Certification</Link> */}
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-300">Welcome, {user.name}</span>
                <Button
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                >
                  {isLoggingOut ? 'Logging out...' : 'Logout'}
                </Button>
              </>
            ) : (
              <>
                <Link href="/signup">
                  <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
