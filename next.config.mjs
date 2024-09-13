/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: process.env.NEXT_IMAGE_DOMAIN ?? "http://localhost:3000",
      },
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "assets.aceternity.com",
      },
      {
        hostname:"example.com"
      }
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
