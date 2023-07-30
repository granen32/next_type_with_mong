/** @type {import('next').NextConfig} */
const withTwin = require("./withTwin");
const nextConfig = withTwin({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: { appDir: true },
});

module.exports = nextConfig;
