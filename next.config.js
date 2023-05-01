/** @type {import('next').NextConfig} */
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_HASURA_URL: process.env.REACT_APP_HASURA_URL,
  },
}

module.exports = nextConfig
