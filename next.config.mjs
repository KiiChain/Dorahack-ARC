/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ipfs.io", "google.com", "unsplash.com"],
    remotePatterns: [
      {
        hostname: process.env.NEXT_IMAGE_DOMAIN ?? "http://localhost:3000",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    scrollRestoration: false,
  },
}

export default nextConfig
