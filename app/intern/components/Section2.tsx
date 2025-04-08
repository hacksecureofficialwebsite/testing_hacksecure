"use client"

import SectionBase from "./SectionBase"

export default function Section2() {
  return (
    <SectionBase title="Section 2: Basic Concepts">
      <div className="w-full h-[calc(100vh-8rem)]">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/an9zpwVvh2k"
          title="Cybersecurity Basics"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </SectionBase>
  )
} 