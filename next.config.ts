import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Lets a verification build run in a separate folder while `next dev` is active.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  async redirects() {
    return [
      { source: '/servers', destination: '/games', permanent: true },
      { source: '/servers/:path*', destination: '/games/:path*', permanent: true },
      { source: '/smp', destination: '/games/minecraft', permanent: true },
      { source: '/smp/wiki', destination: '/games/minecraft/wiki', permanent: true },
      { source: '/smp/wiki/:slug', destination: '/games/minecraft/wiki/:slug', permanent: true },
      { source: '/staff', destination: '/community', permanent: true },
    ]
  },
}

export default nextConfig
