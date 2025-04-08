"use client"

interface SidebarProps {
  activeSection: number;
  setActiveSection: (section: number) => void;
}

export default function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const sections = [
    { id: 1, title: "Announcement" },
    { id: 2, title: "Introduction" },
    { id: 3, title: "Task Lists" },
    { id: 4, title: "Live Sessions" },
    { id: 5, title: "Submission" }
  ]

  return (
    <div className="w-64 bg-black border-r border-gray-800 h-screen fixed left-0 top-0 pt-16">
      <div className="p-4">
        <h2 className="text-xl font-semibold text-white mb-4">Sections</h2>
        <div className="space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? "bg-blue-900 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
} 