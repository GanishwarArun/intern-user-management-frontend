/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    PORT: 3000,
  },
  serverRuntimeConfig: {
    port: 3000,
  },
  publicRuntimeConfig: {
    port: 3000,
  },
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;

// // next.config.js
// module.exports = {
//   reactStrictMode: true,
//   // Other configuration options...
// };

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
