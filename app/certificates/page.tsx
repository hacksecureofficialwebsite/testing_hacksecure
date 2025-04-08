"use client"; // Add this line at the top

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface Certificate {
  id: string;
  user_id: string;
  course_id: string;
  issued_date: string;
  // add other certificate properties you have
}

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/certificates');
      if (!response.ok) {
        throw new Error('Failed to fetch certificates');
      }
      const data = await response.json();
      setCertificates(data || []); // Ensure we always set an array
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load certificates');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (imageUrl: string, firstName: string, lastName: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${firstName}_${lastName}_Certificate.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download the certificate. Please try again.');
    }
  };

  const formatDate = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Your Achievements</h1>
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (!certificates || certificates.length === 0) ? (
          <p className="text-gray-500">No certificates found. Complete courses to earn certificates!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="border rounded shadow p-4">
                <h2 className="text-xl font-semibold mb-2">Certificate ID: {certificate.id}</h2>
                <p className="text-gray-600">Issued: {new Date(certificate.issued_date).toLocaleDateString()}</p>
                <button
                  onClick={() => router.push(`/certificates/${certificate.id}`)}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  View Certificate
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
