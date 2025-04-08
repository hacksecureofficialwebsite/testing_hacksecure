"use client"

import { useState } from "react"
import SectionBase from "./SectionBase"
import Image from "next/image"
import { Download } from "lucide-react"

export default function Section3() {
  const [selectedTeam, setSelectedTeam] = useState<"red" | "blue" | null>(null)
  const [hoveredTeam, setHoveredTeam] = useState<"red" | "blue" | null>(null)

  const handleDownload = (team: "red" | "blue") => {
    const pdfUrl = team === "red" ? "/red_team.pdf" : "/blue_team.pdf"
    window.open(pdfUrl, "_blank")
  }

  return (
    <SectionBase title="Section 3: Task List">
      <div className="relative min-h-[60vh]">
        {/* Background Images */}
        <div className="absolute inset-0 transition-opacity duration-500">
          <Image
            src="/red_teaming.jpeg"
            alt="Red Team Background"
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoveredTeam === "red" ? "opacity-100" : "opacity-0"
            }`}
          />
          <Image
            src="/blue_team.jpg"
            alt="Blue Team Background"
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoveredTeam === "blue" ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <div className="w-full max-w-2xl">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Choose Your Path</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  className={`relative h-48 rounded-xl overflow-hidden transition-all duration-500 ${
                    hoveredTeam === "red" ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredTeam("red")}
                  onMouseLeave={() => setHoveredTeam(null)}
                  onClick={() => setSelectedTeam("red")}
                >
                  <Image
                    src="/red_teaming.jpeg"
                    alt="Red Team"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      hoveredTeam === "red" ? "opacity-100" : "opacity-70"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">Red Team</h3>
                    <p className="text-gray-300">Offensive Security Training</p>
                  </div>
                </button>

                <button
                  className={`relative h-48 rounded-xl overflow-hidden transition-all duration-500 ${
                    hoveredTeam === "blue" ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setHoveredTeam("blue")}
                  onMouseLeave={() => setHoveredTeam(null)}
                  onClick={() => setSelectedTeam("blue")}
                >
                  <Image
                    src="/blue_team.jpg"
                    alt="Blue Team"
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      hoveredTeam === "blue" ? "opacity-100" : "opacity-70"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-bold text-white">Blue Team</h3>
                    <p className="text-gray-300">Defensive Security Training</p>
                  </div>
                </button>
              </div>

              {/* Download Buttons */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => handleDownload("red")}
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Red Team PDF
                </button>
                <button
                  onClick={() => handleDownload("blue")}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Blue Team PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  )
} 