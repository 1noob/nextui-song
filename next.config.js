// next.config.js
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ }
    ];
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true
  }
};

module.exports = withContentlayer(nextConfig);
