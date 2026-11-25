/**
 * Shared page metadata: canonical URL, Open Graph and Twitter cards.
 *
 * Next.js REPLACES a parent's `openGraph` / `twitter` object when a page sets its own,
 * it never merges them. So every page builds the full object here instead of setting
 * a partial one, and every share (Discord, X, Messenger) gets the image, URL and site name.
 * Paths are relative; `metadataBase` in the root layout turns them into absolute URLs.
 *
 * Owner: SITE ARCHITECT / INTEGRATOR (added by the tech fixer).
 */
import type { Metadata } from 'next'
import { site } from './site'

/**
 * Original 1200x630 share card (public/og.png, 65 KB): the official logo under festival bunting
 * on a stepped pixel dusk sky over grass and dirt, with the server address. No Mojang assets.
 */
export const ogImage = {
  url: '/og.png',
  width: 1200,
  height: 630,
  alt: 'The KasadyaCraft logo under festival bunting on a pixel dusk sky, next to the server address play.kasadyacraft.com',
} as const

export interface PageMetadataInput {
  /** Becomes "<title> | KasadyaCraft" through the root title template. Leave out on the home page. */
  title?: string
  /** Title on share cards. Defaults to "<title> | KasadyaCraft", or the site name on the home page. */
  socialTitle?: string
  description: string
  /** Canonical path, starting with "/". */
  path: string
  /** "article" for guides and wiki pages. */
  type?: 'website' | 'article'
  /** ISO date the facts were last checked (articles only). */
  modifiedTime?: string
}

export function pageMetadata({ title, socialTitle, description, path, type = 'website', modifiedTime }: PageMetadataInput): Metadata {
  const shareTitle = socialTitle ?? (title ? `${title} | ${site.name}` : site.name)
  const common = {
    title: shareTitle,
    description,
    url: path,
    siteName: site.name,
    locale: 'en_US',
    images: [ogImage],
  }
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph:
      type === 'article'
        ? { ...common, type: 'article', ...(modifiedTime ? { modifiedTime } : {}) }
        : { ...common, type: 'website' },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description,
      images: [{ url: ogImage.url, alt: ogImage.alt }],
    },
  }
}
