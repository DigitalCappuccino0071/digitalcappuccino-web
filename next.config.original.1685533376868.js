/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['storagedc.s3.ap-south-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
