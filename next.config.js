const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
});

/** @type {import('next').NextConfig} */
const config = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  compiler: {
    styledComponents: true
  },
  async headers() {
    return [{
      source: '/:all*(svg|jpg|png|woff2)',
      locale: false,
      headers: [{
        key: 'Cache-Control',
        value: 'public, max-age=9999999999, must-revalidate',
      }],
    }, ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/**',
      },
    ],
  },
})

const nextConfig = config;

module.exports = nextConfig;