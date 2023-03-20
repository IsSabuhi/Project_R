/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

/* eslint-disable no-undef */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
