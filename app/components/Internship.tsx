"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Users, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Internship() {
  return (
    <section className="w-full py-12 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl animate-slide-down">Internship Opportunities</h2>
          <p className="max-w-[700px] md:text-xl text-white animate-slide-down animate-delay-100">
            Gain real-world experience and kickstart your career with our industry-leading internship programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((internship, index) => (
            <div 
              key={index} 
              className={`animate-slide-down animate-delay-${(index + 2) * 100}`}
            >
              <InternshipCard internship={internship} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

interface InternshipType {
  title: string
  company: string
  location: string
  duration: string
  candidates: string
  tags: string[]
  status: "ongoing" | "coming-soon" | "expired"
}

function InternshipCard({ internship }: { internship: InternshipType }) {
  const router = useRouter()
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "coming-soon":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "expired":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const handleApply = () => {
    if (internship.status === "ongoing") {
      router.push("/intern")
    }
  }

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-0 overflow-hidden text-white transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-white">{internship.title}</h3>
          <Badge className={`${getStatusColor(internship.status)} border font-bold bg-black/50 px-2 py-1`}>
            {internship.status === "ongoing" && "Ongoing"}
            {internship.status === "coming-soon" && "Coming Soon"}
            {internship.status === "expired" && "Expired"}
          </Badge>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="text-gray-200">{internship.company}</span>
          </div>

          <div className="flex items-center">
            <Globe className="h-4 w-4 mr-2" />
            <span className="text-gray-200">{internship.location}</span>
          </div>

          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-gray-200">{internship.duration}</span>
          </div>

          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span className="text-gray-200">{internship.candidates} candidates applied</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {internship.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs text-gray-200 border-gray-400 bg-gray-800">
              {tag}
            </Badge>
          ))}
        </div>

        <Button 
          onClick={handleApply}
          className={`w-full ${
            internship.status === "ongoing" 
              ? "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800" 
              : "bg-gray-500 cursor-not-allowed"
          } text-white transition-all duration-300 hover:scale-105`}
          disabled={internship.status !== "ongoing"}
        >
          {internship.status === "ongoing" && "Apply Now"}
          {internship.status === "coming-soon" && "Coming Soon"}
          {internship.status === "expired" && "Expired"}
        </Button>
      </CardContent>
    </Card>
  )
}

const internships: InternshipType[] = [
  {
    title: "Cybersecurity April 2025",
    company: "Hack Secure",
    location: "Remote",
    duration: "3 weeks",
    candidates: "1000+",
    tags: ["Red Teaming", "Blue Teaming", "CTF"],
    status: "ongoing"
  },
  {
    title: "Digital Forensics 2025",
    company: "Hack Secure",
    location: "Remote",
    duration: "Na",
    candidates: "Na",
    tags: ["DigitalForensics", "DataBreach", "MobileForensics", "CyberForensics"],
    status: "coming-soon"
  },
  {
    title: "Data Science 2025",
    company: "Hack Secure",
    location: "Remote",
    duration: "Na",
    candidates: "Na",
    tags: ["MachineLearning", "ArtificialIntelligence", "DeepLearning", "NeuralNetworks"],
    status: "coming-soon"
  },
  {
    title: "Cybersecurity Feb 2025",
    company: "Hack Secure",
    location: "Remote",
    duration: "1 Month",
    candidates: "1000+",
    tags: ["Red Teaming", "Blue Teaming", "CTF"],
    status: "expired"
  },
  {
    title: "Cybersecurity Jan 2025",
    company: "Hack Secure",
    location: "Remote",
    duration: "1 months",
    candidates: "1000+",
    tags: ["Red Teaming", "Blue Teaming", "CTF"],
    status: "expired"
  },
  
]
