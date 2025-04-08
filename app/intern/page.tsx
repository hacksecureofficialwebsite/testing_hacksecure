"use client"

import { useState, useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Sidebar from "./components/Sidebar"
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import Section5 from "./components/Section5"

export default function InternPage() {
  const [activeSection, setActiveSection] = useState(1)
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

  const renderSection = () => {
    switch (activeSection) {
      case 1:
        return <Section1 />
      case 2:
        return <Section2 />
      case 3:
        return <Section3 />
      case 4:
        return <Section4 />
      case 5:
        return <Section5 />
      default:
        return <Section1 />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-1 ml-64 p-8">
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  )
}
