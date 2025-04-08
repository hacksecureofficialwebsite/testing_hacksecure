/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you're exporting a static site, uncomment this:
  // output: "export",

  reactStrictMode: true,

  images: {
    unoptimized: true, // Needed for static export (no next/image optimization)
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"], // Your image domains
  },

  env: {
    JWT_SECRET: process.env.JWT_SECRET ?? "",
    SMTP_FROM_EMAIL: process.env.SMTP_FROM_EMAIL ?? "",
    SMTP_HOST: process.env.SMTP_HOST ?? "",
    SMTP_PORT: process.env.SMTP_PORT ?? "",
    SMTP_USER: process.env.SMTP_USER ?? "",
    SMTP_PASS: process.env.SMTP_PASS ?? "",
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000",
  },

  // ✅ Disable SWC minifier and fallback to Webpack transforms
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },

  webpack(config) {
    return config
  },
}

module.exports = nextConfig
