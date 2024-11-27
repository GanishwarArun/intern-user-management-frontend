/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensures React's strict mode is enabled.
  compiler: {
    styledComponents: true, // If using styled-components, enables its support.
  },
  env: {
    PORT: "3000", // Environment variable for port.
  },
  serverRuntimeConfig: {
    port: 3000, // Server-specific config.
  },
  publicRuntimeConfig: {
    port: 3000, // Public runtime-specific config.
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    }; // Prevents webpack errors for Node.js built-ins.
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
