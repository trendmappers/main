/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};

module.exports = nextConfig;
