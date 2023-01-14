/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/MoleXprof.github.io/' : ' ',
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;