/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com", "firebasestorage.googleapis.com"], // Add any other domains as needed
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig
