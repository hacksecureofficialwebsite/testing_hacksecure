"use client"

import { useScrollAnimation } from "@/utils/useScrollAnimation"
import { Check } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

// Counting animation hook
const useCountAnimation = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const startTime = performance.now()
      const updateCount = (currentTime) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const currentCount = Math.floor(progress * (end - start) + start)
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        } else {
          setCount(end)
        }
      }
      requestAnimationFrame(updateCount)
    }
  }, [isVisible, end, duration, start])

  return { count, setIsVisible }
}

export default function Solutions() {
  const [headingRef, isHeadingVisible] = useScrollAnimation()
  const [redTeamRef, isRedTeamVisible] = useScrollAnimation()
  const [blueTeamRef, isBlueTeamVisible] = useScrollAnimation()
  const [descRef, isDescVisible] = useScrollAnimation()
  const [featuresRef, isFeaturesVisible] = useScrollAnimation(0.2)
  const [countRef, isCountVisible] = useScrollAnimation(0.4)

  const { count, setIsVisible } = useCountAnimation(7000, 2000)

  useEffect(() => {
    if (isCountVisible) {
      setIsVisible(true)
    }
  }, [isCountVisible, setIsVisible])

  return (
    <section className="relative min-h-[80vh] bg-black text-white overflow-hidden py-12">
      {/* Background Image Pattern */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
        <div className="absolute transform rotate-45 right-[-10%] top-[0%]">
          <Image
            src="/hacksec_logo.jpeg"
            alt="HackSec"
            width={384}
            height={384}
            className="w-72 h-72 rounded-3xl opacity-30"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-3xl mb-12 transition-all duration-1000 transform ${
            isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Solutions for all cybersecurity domains.
          </h1>
        </div>

        {/* Red and Blue Teams */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div
            ref={redTeamRef}
            className={`transition-all duration-1000 delay-300 transform ${
              isRedTeamVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-3 text-red-500">Red Teams</h2>
              <p className="text-gray-400">
                Offensive security experts who simulate real-world cyber attacks to test your defenses.
              </p>
            </div>
          </div>

          <div
            ref={blueTeamRef}
            className={`transition-all duration-1000 delay-500 transform ${
              isBlueTeamVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-3 text-blue-500">Blue Teams</h2>
              <p className="text-gray-400">
                Defensive security specialists who protect and monitor your systems 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div
          ref={descRef}
          className={`max-w-2xl mb-12 transition-all duration-1000 delay-700 transform ${
            isDescVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-lg text-gray-400">
            Test and grow your skills in all penetration testing and adversarial domains, from information gathering to
            documentation and reporting.
          </p>
        </div>

        {/* Features */}
        <div
          ref={featuresRef}
          className={`grid md:grid-cols-2 gap-6 transition-all duration-1000 delay-1000 transform ${
            isFeaturesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            "Internships: Gain real-world experience.",
            "Workshops & Courses: Master cutting-edge skills.",
            "Events & Competitions: Showcase your talents.",
            "Leadership Roles: Grow as a Campus Ambassador.",
          ].map((feature, i) => (
            <div key={i} className="flex items-center space-x-3">
              <Check className="text-green-500 h-5 w-5" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* Globe Video */}
        <div className="flex justify-center mt-12 mb-8 px-4">
          <video
            key="globe-video"
            className="w-full max-w-7xl aspect-video rounded-lg shadow-xl object-contain"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/globe.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Count Animation */}
        <div
          ref={countRef}
          className={`text-center mt-12 transition-all duration-1000 transform ${
            isCountVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <span className="text-blue-500">{count.toLocaleString()}</span>+ Members World Wide
          </h2>
        </div>
      </div>
    </section>
  )
}
