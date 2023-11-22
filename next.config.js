/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.com",
      "firebasestorage.googleapis.com",
      "www.w3.org",
      "upload.wikimedia.org",
      "seeklogo.com",
      "developer.android.com",
      "camo.githubusercontent.com",
      "github.githubassets.com",
      "truehost-coke.b-cdn.net",
      "i.pinimg.com",
      "getbootstrap.com",
      "raw.githubusercontent.com",
      "imgs.search.brave.com",
      "git-scm.com",
      "truehost.com",
    ], // Add any other domains as needed
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig
