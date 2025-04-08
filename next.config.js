/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // ✅ Enable static export

  reactStrictMode: true,

  images: {
    unoptimized: true, // ✅ Required for static export (fixes Next.js image issues)
    domains: ["hebbkx1anhila5yf.public.blob.vercel-storage.com"], // Allowed external image domain
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

  // 🚨 Rewrites DO NOT work with static export.
  // Static export requires pre-rendered pages, so API routes won't work.
  // If you NEED API routes, remove `output: "export"` and use `npm run build && npm start`
};

module.exports = nextConfig;
