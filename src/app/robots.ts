import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

/*
 * /robots.txt. Owner: SITE ARCHITECT / INTEGRATOR (added by the tech fixer).
 * Everything is public except the internal UI gallery and the JSON API.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/styleguide', '/api/'] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
