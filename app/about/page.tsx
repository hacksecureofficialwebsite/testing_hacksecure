'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Button } from "@/components/ui/button"
import Community from "../components/Community"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

const slideIn = {
  hidden: { x: -60, opacity: 0 },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 }
  }
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white relative" style={{ backgroundImage: "url('/hacksec_background1.png')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      <div className="relative z-10">
        <Navbar />

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="container mx-auto px-4 py-16 md:py-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto text-center text-gray-300">
            <p className="text-lg md:text-xl mb-8">
              HACK SEC focuses on empowering individuals and businesses with top-tier cybersecurity skills. We provide hands-on training and practical solutions tailored to meet the unique challenges of the digital world, helping you secure the future with confidence.
            </p>
          </div>
        </motion.section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Mission</h2>
              <p className="text-gray-300">Provide relevant and effective training solutions.</p>
              <p className="text-gray-300">Security Awareness ensuring a more secure digital world for everyone.</p>
              <p className="text-gray-300">Providing services with the best quality and competitive prices.</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src="/WEBINAR_POSTERS .png" // Image from public folder
                alt="Our mission illustration"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] w-full rounded-lg overflow-hidden"
            >
              <Image
                src="/discord.png"
                alt="Our values illustration"
                fill
                className="object-contain"
              />
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Our Discord Community</h2>
              <p className="text-gray-300">
                Our brand-new Discord community is designed for ethical hackers, cybersecurity professionals, and tech enthusiasts! Here, you'll find a thriving space to learn, connect, and grow.
              </p>
              <a href="https://discord.gg/Nvj3ReQrjj" target="_blank" rel="noopener noreferrer">
                <Button className="mt-4 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-700 transition duration-300">
                  Join Our Discord
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        <Community />

        <Footer />
      </div>
    </div>
  )
}