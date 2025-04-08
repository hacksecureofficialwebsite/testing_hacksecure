"use client"

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionBase({ title, children }: SectionProps) {
  return (
    <div className="p-6 text-white">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <div className="prose prose-invert max-w-none mb-6">
        {children}
      </div>
    </div>
  )
} 