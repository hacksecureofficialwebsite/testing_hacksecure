"use client"

import { useState, useEffect } from "react"
import SectionBase from "./SectionBase"

export default function Section1() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/user-status")
        if (!res.ok) {
          window.location.href = "/sign-in"
          return
        }
        setLoading(false)
      } catch (error) {
        window.location.href = "/sign-in"
      }
    }
    checkAuth()
  }, [])

  if (loading) return <div className="p-6">Loading...</div>

  return (
    <SectionBase title="Section 1: Announcement">
      <h2 className="text-xl font-semibold mb-4">Announcement soon ...</h2>
      
      <div className="mb-6">
        <p className="mb-3">
          
        </p>
      </div>

      <h3 className="text-lg font-semibold mb-3"></h3>
      <div className="mb-6">
        <ul className="list-disc pl-6">
          
        </ul>
      </div>

      <h3 className="text-lg font-semibold mb-3"></h3>
      <div className="mb-6">
        <p className="mb-3"></p>
        
      </div>

      
    </SectionBase>
  )
}

