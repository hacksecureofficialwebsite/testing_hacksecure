"use client"

import { useState } from "react"
import SectionBase from "./SectionBase"
import Image from "next/image"
import { Download } from "lucide-react"

export default function Section5() {
  const [isHovered, setIsHovered] = useState(false)

  const handleDownload = () => {
    window.open("/final_report.pdf", "_blank")
  }

  return (
    <SectionBase title="Section 5: Submit Your Work">
      <div className="relative min-h-[60vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/notebook.jpg"
            alt="Submission Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] space-y-8">
          <div className="w-full max-w-2xl">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Submit Your Work</h2>
              <p className="text-gray-300 text-center mb-8">
                Click the button below to submit your completed tasks and assignments.
              </p>
              <div className="flex justify-center">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative inline-block px-8 py-4 text-xl font-bold text-white rounded-lg transition-all duration-500 ${
                    isHovered ? "scale-105" : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{
                    background: isHovered
                      ? "linear-gradient(45deg, #4285F4, #34A853, #FBBC05, #EA4335)"
                      : "linear-gradient(45deg, #4285F4, #34A853)",
                  }}
                >
                  <span className="relative z-10">Submit Now</span>
                  <div className="absolute inset-0 bg-black/20 rounded-lg" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Example Section */}
        <div className="relative z-10 mt-12">
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8">Example Report</h2>
              <p className="text-gray-300 text-center mb-8">
                Download our example final report to understand the expected format and content.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white font-bold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download Example Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionBase>
  )
} 