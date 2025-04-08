"use client"

import { useScrollAnimation } from "@/utils/useScrollAnimation"
import Image from "next/image"
import { useState } from "react"

export default function Community() {
  const [headingRef, isHeadingVisible] = useScrollAnimation()
  const [contentRef, isContentVisible] = useScrollAnimation(0.2)
  const [currentIndex, setCurrentIndex] = useState(0)

  const communityImages = [
    {
      src: "/community1.jpg",
      alt: "Community Event 1"
    },
    {
      src: "/community2.jpg",
      alt: "Community Event 2"
    },
    {
      src: "/community3.jpg",
      alt: "Community Event 3"
    },
    {
      src: "/community4.jpg",
      alt: "Community Event 4"
    },
    {
      src: "/community5.jpg",
      alt: "Community Event 5"
    },
    {
      src: "/community6.jpg",
      alt: "Community Event 6"
    },
    {
      src: "/community7.jpg",
      alt: "Community Event 7"
    },
    {
      src: "/community8.jpg",
      alt: "Community Event 8"
    },
    {
      src: "/community9.jpg",
      alt: "Community Event 9"
    },
    {
      src: "/community10.jpg",
      alt: "Community Event 10"
    },
    {
      src: "/community11.jpg",
      alt: "Community Event 11"
    },
    {
      src: "/community12.jpg",
      alt: "Community Event 12"
    }
  ]

  const handleNext = (index) => {
    setCurrentIndex(index * 3)
  }

  const totalSets = Math.ceil(communityImages.length / 3)

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-1000 transform ${
            isHeadingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Community</h2>
          <p className="text-gray-400 text-lg">Join our thriving community of cybersecurity enthusiasts</p>
          <button className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors">
            1000+ Registered
          </button>
        </div>

        {/* Image Grid */}
        <div
          ref={contentRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-300 transform ${
            isContentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {communityImages.slice(currentIndex, currentIndex + 3).map((image, index) => (
              <div 
                key={index}
                className="relative h-40 rounded-lg overflow-hidden border border-gray-800"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  style={{ transform: 'none' }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleNext(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index * 3 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`View set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 