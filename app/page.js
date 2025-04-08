import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Courses from './components/Courses'
import Internship from "../components/Internship"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Internship />
      {/* <Courses /> */}
      <Partners />
      <Footer />
    </main>
  )
}

