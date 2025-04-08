'use client'  // Ensure this file is treated as a client-side component

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Course {
  id: string
  title: string
  description: string
  // add other course properties
}

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/courses')
      if (!response.ok) {
        throw new Error('Failed to fetch courses')
      }
      const data = await response.json()
      setCourses(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load courses')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Available Courses</title>
        <meta
          name="description"
          content="List of available courses."
        />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Available Courses</h1>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (!courses || courses.length === 0) ? (
            <p className="text-gray-500">No courses available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div key={course.id} className="border rounded shadow p-4">
                  <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
                  <p className="text-gray-600">{course.description}</p>
                  <button
                    onClick={() => router.push(`/courses/${course.id}`)}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    View Course
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <Footer />
      </main>
    </>
  )
}
