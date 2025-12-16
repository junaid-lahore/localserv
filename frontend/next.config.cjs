const path = require('path');
/**** Next.js configuration ****/
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure rewrites similar to Vite proxy if needed
  async rewrites() {
    return [
      {
        source: '/routes',
        destination: 'http://127.0.0.1:8000/routes',
      },
    ];
  },
  // Support path aliases by leveraging tsconfig.json
  webpack: (config, { isServer }) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-router-dom': path.resolve(__dirname, 'shims/react-router-dom.ts'),
      ...(isServer ? { 'react-router-dom/server': path.resolve(__dirname, 'shims/react-router-dom-server.ts') } : {}),
    };
    return config;
  },
};

module.exports = nextConfig;
