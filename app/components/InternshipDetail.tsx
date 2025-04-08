import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, Calendar, MapPin, Users, CheckCircle, Clock, DollarSign } from "lucide-react"

export default function InternshipDetails() {
  // This would typically come from a database or API
  const internship = {
    id: "kubernetes-intern-2023",
    title: "Kubernetes Engineering Intern",
    company: "KodeKloud",
    location: "Remote",
    duration: "3 months",
    positions: 5,
    stipend: "$1000 - $1500 per month",
    applicationDeadline: "April 30, 2023",
    startDate: "May 15, 2023",
    tags: ["Kubernetes", "Docker", "Cloud", "DevOps"],
    status: "ongoing",
    description:
      "Join our team as a Kubernetes Engineering Intern and gain hands-on experience with container orchestration technologies. You'll work alongside experienced engineers to design, implement, and maintain Kubernetes clusters and containerized applications.",
    responsibilities: [
      "Assist in designing and implementing Kubernetes-based solutions",
      "Help troubleshoot issues in Kubernetes clusters",
      "Contribute to automation scripts and CI/CD pipelines",
      "Participate in code reviews and technical discussions",
      "Document best practices and learnings",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Basic understanding of containerization technologies",
      "Familiarity with Linux operating systems",
      "Knowledge of at least one programming language (Go, Python, etc.)",
      "Strong problem-solving skills and eagerness to learn",
    ],
    benefits: [
      "Competitive stipend",
      "Flexible working hours",
      "Mentorship from industry experts",
      "Opportunity for full-time employment",
      "Access to learning resources and courses",
      "Certificate upon successful completion",
    ],
  }

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

  return (
    <section className="w-full py-12 md:py-24 bg-black text-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Left column - Internship details */}
          <div className="md:col-span-2 space-y-8">
            <div className="animate-slide-down">
              <div className="flex items-center gap-2 mb-2">
                <Badge className={`${getStatusColor(internship.status)} border font-bold bg-black/50 px-2 py-1`}>
                  {internship.status === "ongoing" && "Ongoing"}
                  {internship.status === "coming-soon" && "Coming Soon"}
                  {internship.status === "expired" && "Expired"}
                </Badge>
                <span className="text-gray-400">Posted 2 weeks ago</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 text-white">{internship.title}</h1>
              <div className="flex flex-wrap gap-4 text-gray-400 mb-6">
                <div className="flex items-center">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{internship.company}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{internship.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{internship.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{internship.positions} positions</span>
                </div>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full animate-slide-down animate-delay-100">
              <TabsList className="bg-gray-800">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                <TabsTrigger value="requirements">Requirements</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="p-4 bg-gray-800/50 rounded-md mt-2">
                <p className="text-gray-300">{internship.description}</p>
              </TabsContent>
              <TabsContent value="responsibilities" className="p-4 bg-gray-800/50 rounded-md mt-2">
                <ul className="space-y-2">
                  {internship.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="requirements" className="p-4 bg-gray-800/50 rounded-md mt-2">
                <ul className="space-y-2">
                  {internship.requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="benefits" className="p-4 bg-gray-800/50 rounded-md mt-2">
                <ul className="space-y-2">
                  {internship.benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>

            <div className="flex flex-wrap gap-2 animate-slide-down animate-delay-200">
              {internship.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs text-gray-200 border-gray-400 bg-gray-800">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right column - Application card */}
          <div className="animate-slide-down animate-delay-300">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-0 sticky top-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-400">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>Stipend</span>
                    </div>
                    <span className="font-medium text-gray-200">{internship.stipend}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-400">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>Apply by</span>
                    </div>
                    <span className="font-medium text-gray-200">{internship.applicationDeadline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Start date</span>
                    </div>
                    <span className="font-medium text-gray-200">{internship.startDate}</span>
                  </div>
                </div>

                <Button 
                  className={`w-full ${
                    internship.status === "ongoing" 
                      ? "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800" 
                      : "bg-gray-500 cursor-not-allowed"
                  } text-white py-6 text-lg rounded-md transition-all duration-300 hover:scale-105`}
                  disabled={internship.status !== "ongoing"}
                >
                  {internship.status === "ongoing" && "Apply Now"}
                  {internship.status === "coming-soon" && "Coming Soon"}
                  {internship.status === "expired" && "Expired"}
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Save for Later
                </Button>

                <div className="text-center text-sm text-gray-400">
                  <p>Need more information?</p>
                  <a href="#" className="text-gray-300 hover:underline">
                    Contact the recruiter
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

