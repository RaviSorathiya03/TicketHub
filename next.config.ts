import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "www.pexels.com",
      "images.unsplash.com", // Added images.unsplash.com to the domains array
    ],
  },
  reactStrictMode: true, // Optional: Enables React's strict mode
  swcMinify: true, // Optional: Enables faster builds using the SWC compiler
};

export default nextConfig;
