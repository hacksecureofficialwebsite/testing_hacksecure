"use client"

import { useState } from "react"
import SectionBase from "./SectionBase"
import Image from "next/image"

export default function Section4() {
  const [selectedSession, setSelectedSession] = useState<"blue" | "forensics" | "malware" | null>(null)
  const [hoveredSession, setHoveredSession] = useState<"blue" | "forensics" | "malware" | null>(null)

  if (selectedSession === "blue") {
    return (
      <SectionBase title="Red Teaming & Blue Team Live Session">
        <div className="w-full h-[calc(100vh-12rem)]">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/qowSkon1m9k"
            title="Blue Team Live Session"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </SectionBase>
    )
  }

  if (selectedSession === "forensics") {
    return (
      <SectionBase title="Digital Forensics Live Session">
        <div className="w-full h-[calc(100vh-12rem)]">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/8fD6xY99l-k"
            title="Digital Forensics Live Session"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </SectionBase>
    )
  }

  if (selectedSession === "malware") {
    return (
      <SectionBase title="Malware Analysis Live Session">
        <div className="w-full h-[calc(100vh-12rem)]">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/9lpjmBxdAfM"
            title="Malware Analysis Live Session"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </SectionBase>
    )
  }

  return (
    <SectionBase title="Section 4: Live Sessions">
      <div className="relative min-h-[60vh]">
        {/* Background Images */}
        <div className="absolute inset-0 transition-opacity duration-500">
          <Image
            src="/red&blue.jpg"
            alt="Blue Team Background"
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoveredSession === "blue" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/digital_forensics.jpg"
            alt="Forensics Background"
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoveredSession === "forensics" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="osint.jpg"
            alt="Malware Analysis Background"
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoveredSession === "malware" ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <div className="w-full max-w-3xl">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Choose Your Live Session</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <button
                  className={`relative h-48 rounded-xl overflow-hidden transition-all duration-500 ${
                    hoveredSession === "blue" ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredSession("blue")}
                  onMouseLeave={() => setHoveredSession(null)}
                  onClick={() => setSelectedSession("blue")}
                >
                  <Image
                    src="/red&blue.jpg"
                    alt="Blue Team"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      hoveredSession === "blue" ? "opacity-100" : "opacity-70"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">Red Teaming & Blue Team</h3>
                    <p className="text-gray-300">Defensive Security</p>
                  </div>
                </button>

                <button
                  className={`relative h-48 rounded-xl overflow-hidden transition-all duration-500 ${
                    hoveredSession === "forensics" ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredSession("forensics")}
                  onMouseLeave={() => setHoveredSession(null)}
                  onClick={() => setSelectedSession("forensics")}
                >
                  <Image
                    src="/digital_forensics.jpg"
                    alt="Digital Forensics"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      hoveredSession === "forensics" ? "opacity-100" : "opacity-70"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">Digital Forensics</h3>
                    <p className="text-gray-300">Investigation & Analysis</p>
                  </div>
                </button>

                <button
                  className={`relative h-48 rounded-xl overflow-hidden transition-all duration-500 ${
                    hoveredSession === "malware" ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredSession("malware")}
                  onMouseLeave={() => setHoveredSession(null)}
                  onClick={() => setSelectedSession("malware")}
                >
                  <Image
                    src="/osint.jpg"
                    alt="Malware Analysis"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      hoveredSession === "malware" ? "opacity-100" : "opacity-70"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">OSINT Framework</h3>
                    <p className="text-gray-300">Threat Analysis</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  )
} 