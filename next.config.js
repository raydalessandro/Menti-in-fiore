/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mentiinfiore.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}

module.exports = nextConfig
