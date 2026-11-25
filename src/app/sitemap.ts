import type { MetadataRoute } from 'next'
import { latestDate } from '@/components/wiki/format'
import { guides } from '@/content/guides'
import { wikiPages } from '@/content/wiki'
import { site } from '@/lib/site'

/*
 * /sitemap.xml. Owner: SITE ARCHITECT / INTEGRATOR (added by the tech fixer).
 * Every public page. Guides and wiki articles are read from their registries, so a new
 * page shows up here without touching this file. lastModified is the date the facts were
 * last checked against the server; hub pages use the newest date in their section.
 * /styleguide is internal and left out on purpose (robots.ts disallows it too).
 */
type Entry = MetadataRoute.Sitemap[number]

function entry(path: string, lastModified: string, priority: number, changeFrequency: Entry['changeFrequency']): Entry {
  return { url: `${site.url}${path === '/' ? '' : path}`, lastModified, changeFrequency, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const guidesChecked = latestDate(guides.map((g) => g.updated))
  const wikiChecked = latestDate(wikiPages.map((p) => p.updated))
  const siteChecked = latestDate([guidesChecked, wikiChecked])

  return [
    entry('/', siteChecked, 1, 'weekly'),
    entry('/play', guidesChecked, 0.9, 'monthly'),
    entry('/guides', guidesChecked, 0.8, 'weekly'),
    ...guides.map((g) => entry(`/guides/${g.slug}`, g.updated, 0.7, 'monthly')),
    entry('/wiki', wikiChecked, 0.8, 'weekly'),
    ...wikiPages.map((p) => entry(`/wiki/${p.slug}`, p.updated, 0.6, 'monthly')),
    entry('/store', siteChecked, 0.7, 'monthly'),
    entry('/vote', siteChecked, 0.4, 'monthly'),
    entry('/community', siteChecked, 0.5, 'monthly'),
    entry('/games', siteChecked, 0.5, 'monthly'),
    entry('/games/minecraft', siteChecked, 0.7, 'monthly'),
    entry('/games/roblox', siteChecked, 0.3, 'monthly'),
  ]
}
