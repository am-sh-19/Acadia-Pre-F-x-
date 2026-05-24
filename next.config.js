/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Add external image domains here if needed
    // domains: ['images.unsplash.com'],
    remotePatterns: [],
  },
  // Enable static export for simple Vercel deployment
  // output: 'export', // Uncomment this if you want a static site
};

module.exports = nextConfig;
