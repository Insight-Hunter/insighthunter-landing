module.exports = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});
const { withNextOnPages } = require('@cloudflare/next-on-pages');

/** @type {import('next').NextConfig} */
const nextConfig = {

  output: 'export',  // For static export if no SSR
};

module.exports = withNextOnPages(nextConfig);