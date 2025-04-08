'use client'

import { Facebook, Twitter, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const Discord = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.369a19.933 19.933 0 00-4.885-1.515.075.075 0 00-.079.037c-.212.378-.453.868-.617 1.255a18.568 18.568 0 00-5.499 0c-.164-.387-.405-.877-.617-1.255a.077.077 0 00-.079-.037c-1.733.33-3.394.855-4.885 1.515a.07.07 0 00-.032.028C.533 9.056-.319 13.636.099 18.151a.082.082 0 00.031.056c2.052 1.507 4.042 2.422 5.999 3.025a.077.077 0 00.084-.028c.462-.631.873-1.3 1.226-1.999a.076.076 0 00-.041-.103 12.771 12.771 0 01-1.805-.859.076.076 0 01-.008-.126c.122-.091.244-.186.361-.282a.075.075 0 01.078-.01c3.797 1.732 7.892 1.732 11.682 0a.075.075 0 01.079.009c.117.096.239.191.361.282a.076.076 0 01-.008.126c-.577.371-1.179.656-1.805.859a.076.076 0 00-.041.103c.354.699.765 1.368 1.226 1.999a.077.077 0 00.084.028c1.958-.603 3.947-1.518 5.999-3.025a.082.082 0 00.031-.056c.425-4.515-.434-9.095-3.564-13.754a.07.07 0 00-.032-.028zM8.02 15.708c-1.2 0-2.188-1.093-2.188-2.436 0-1.342.968-2.437 2.188-2.437 1.22 0 2.188 1.095 2.188 2.437 0 1.343-.968 2.436-2.188 2.436zm7.961 0c-1.2 0-2.188-1.093-2.188-2.436 0-1.342.968-2.437 2.188-2.437s2.188 1.095 2.188 2.437c0 1.343-.968 2.436-2.188 2.436z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand Name */}
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">HACK SEC</Link>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row md:space-x-12 text-center mb-4 md:mb-0">
          <div>
            <h4 className="text-lg font-semibold mb-2">Products</h4>
            <Link href="/coming-soon" className="block text-gray-400 hover:text-gray-300">Courses</Link>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <Link href="/about" className="block text-gray-400 hover:text-gray-300">About Us</Link>
          <Link href="/contact" className="block text-gray-400 hover:text-gray-300">Contact Us</Link>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Resources</h4>
            <Link href="/job-board" className="block text-gray-400 hover:text-gray-300">Job-Board</Link>
            <Link href="/internship" className="block text-gray-400 hover:text-gray-300">Internship</Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <Link href="https://chat.whatsapp.com/EptI5vaR2ZVEUK7kBJQQHP" target="_blank" className="hover:text-gray-300">
            <MessageCircle size={24} />
            <span className="sr-only">WhatsApp</span>
          </Link>
          <Link href="https://www.youtube.com/@hacksecureofficial" target="_blank" className="hover:text-gray-300">
            <Youtube size={24} />
            <span className="sr-only">YouTube</span>
          </Link>
          <Link href="https://www.linkedin.com/company/hacksecureofficial/" target="_blank" className="hover:text-gray-300">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://discord.gg/Nvj3ReQrjj" target="_blank" className="hover:text-gray-300">
            <Discord size={24} />
            <span className="sr-only">Discord</span>
          </Link>
          <Link href="https://x.com/hacksecure_?t=COlo1HSvIt30or1jTDEI7w&s=09" target="_blank" className="hover:text-gray-300">
            <Twitter size={24} />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}