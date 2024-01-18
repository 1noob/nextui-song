// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true
  }
};

module.exports = withContentlayer(nextConfig);
