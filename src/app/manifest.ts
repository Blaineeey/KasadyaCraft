import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

/*
 * /manifest.webmanifest: name, colours and icons for "Add to Home Screen".
 * Owner: SITE ARCHITECT / INTEGRATOR (added by the tech fixer).
 * The icons are the same original pixel K tile as the favicon, scaled by whole pixels.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: '/',
    scope: '/',
    display: 'browser',
    background_color: '#120e1a',
    theme_color: '#120e1a',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  }
}
