/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.restaurants.tectify.io"],
  },
};

module.exports = nextConfig;
