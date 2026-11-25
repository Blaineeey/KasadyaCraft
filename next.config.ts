import type { NextConfig } from 'next'

const DISCORD = 'https://discord.gg/8DY3eXHnAg'

/*
 * Owner: SITE ARCHITECT / INTEGRATOR.
 * permanent: true  = old URLs that moved for good (SEO keeps its value).
 * permanent: false = vanity shortcuts that mirror in-game commands; they may change.
 */
const nextConfig: NextConfig = {
  // Lets a verification build run in a separate folder while `next dev` is active.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  // images.formats stays on the default (WebP). AVIF was measured on the hero logo, the LCP image:
  // 384w 21.9 KB AVIF vs 22.0 KB WebP, 640w 24.7 KB vs 23.3 KB. No saving, and AVIF is slower to
  // encode on a cold cache and to decode on low-end phones.
  async redirects() {
    return [
      // ---- Old site structure -------------------------------------------------
      { source: '/servers', destination: '/games', permanent: true },
      { source: '/servers/:path*', destination: '/games/:path*', permanent: true },
      { source: '/smp', destination: '/games/minecraft', permanent: true },
      { source: '/staff', destination: '/community', permanent: true },
      { source: '/products', destination: '/store', permanent: true },
      // The old wiki covered another modpack (Slimefun/Epidemic). No 1:1 pages exist, so
      // every old article lands on the new wiki index.
      { source: '/smp/wiki', destination: '/wiki', permanent: true },
      { source: '/smp/wiki/:slug*', destination: '/wiki', permanent: true },
      { source: '/games/minecraft/wiki', destination: '/wiki', permanent: true },
      { source: '/games/minecraft/wiki/:slug*', destination: '/wiki', permanent: true },

      // ---- Vanity shortcuts (same words players type in game) ------------------
      { source: '/join', destination: '/play', permanent: false },
      { source: '/ip', destination: '/play', permanent: false },
      { source: '/start', destination: '/guides', permanent: false },
      { source: '/guide', destination: '/guides', permanent: false },
      { source: '/rules', destination: '/wiki/rules', permanent: false },
      { source: '/faq', destination: '/wiki/faq', permanent: false },
      { source: '/ranks', destination: '/wiki/ranks', permanent: false },
      { source: '/commands', destination: '/wiki/commands', permanent: false },
      { source: '/dungeon', destination: '/wiki/dungeon', permanent: false },
      { source: '/shop', destination: '/store', permanent: false },
      { source: '/buy', destination: '/store', permanent: false },
      { source: '/discord', destination: DISCORD, permanent: false },
    ]
  },
}

export default nextConfig
