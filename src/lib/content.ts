/**
 * Content model shared by Starter Guides (src/content/guides) and the Wiki
 * (src/content/wiki). Pages are typed data, not MDX: no extra dependencies,
 * full type checking, and one renderer (src/components/content/ContentBlocks).
 *
 * Owner: SITE ARCHITECT / INTEGRATOR. Writers need a new block type? Ask in
 * your report. Until it lands, render custom JSX in your own route file.
 *
 * INLINE MARKUP inside any `text` / list item / table cell string:
 *   `/plot auto`          -> command chip in the terminal font
 *   **bold**              -> strong
 *   [label](/wiki/ranks)  -> link (internal = next/link, http = new tab)
 * Nothing else is parsed. No raw HTML.
 */
import type { PixelIconName } from '@/components/ui/pixel-icons'
import type { CalloutTone } from '@/components/ui/Callout'
import type { Rarity, TooltipLine } from '@/components/ui/TooltipCard'

export type { Rarity, CalloutTone }

/** Which ranks can use something. 'everyone' = default players. */
export type RankId = 'vip' | 'vip-plus' | 'mvp' | 'mvp-plus' | 'mvp-plus-plus'

export interface CommandRow {
  command: string
  description: string
  /** Lowest rank that can use it. Omit or 'everyone' for all players. */
  rank?: RankId | 'everyone'
}

export interface SlotItem {
  label: string
  icon?: PixelIconName
  count?: number
  rarity?: Rarity
  lines?: TooltipLine[]
}

export type ContentBlock =
  | { type: 'h2'; text: string; id?: string }
  | { type: 'h3'; text: string; id?: string }
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'steps'; items: { title: string; text: string; command?: string }[] }
  | { type: 'commands'; title?: string; items: CommandRow[] }
  | { type: 'callout'; tone: CalloutTone; title?: string; text: string }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }
  | { type: 'slots'; title?: string; label: string; columns?: number; items: SlotItem[] }
  | { type: 'image'; src: string; alt: string; width: number; height: number; caption?: string }
  | { type: 'divider' }

/* ------------------------------------------------------------------------ */
/* Starter guides                                                           */
/* ------------------------------------------------------------------------ */

/** Where in a new player's journey the guide sits. Drives grouping on /guides. */
export type GuideStage = 'join' | 'first-day' | 'next-steps'

export interface Guide {
  /** URL: /guides/<slug>. Lowercase, hyphenated. Contracted slugs are listed in docs/SITE_PLAN.md. */
  slug: string
  title: string
  /** One or two plain sentences, shown on cards and as meta description. */
  summary: string
  icon: PixelIconName
  stage: GuideStage
  /** Sort order inside the stage. */
  order: number
  /** Honest reading/doing time in minutes. */
  minutes: number
  /** ISO date the facts were last checked against the server, e.g. '2026-11-25'. */
  updated: string
  body: ContentBlock[]
  /** Slug of the guide to read next. */
  next?: string
  /** Wiki slugs worth linking at the end. */
  related?: string[]
}

/* ------------------------------------------------------------------------ */
/* Wiki                                                                     */
/* ------------------------------------------------------------------------ */

export type WikiCategory = 'basics' | 'economy' | 'features' | 'dungeon' | 'ranks' | 'rules' | 'help'

export const wikiCategoryLabels: Record<WikiCategory, string> = {
  basics: 'Getting around',
  economy: 'Money and trading',
  features: 'Features',
  dungeon: 'Dungeons',
  ranks: 'Ranks and perks',
  rules: 'Rules',
  help: 'Help',
}

export interface WikiPage {
  /** URL: /wiki/<slug>. Contracted slugs are listed in docs/SITE_PLAN.md. */
  slug: string
  title: string
  summary: string
  icon: PixelIconName
  category: WikiCategory
  order: number
  /** ISO date the facts were last checked against the server configs. */
  updated: string
  body: ContentBlock[]
  related?: string[]
  /** Extra words for the wiki search box (command names, aliases). */
  keywords?: string[]
}

/* ------------------------------------------------------------------------ */
/* Helpers                                                                  */
/* ------------------------------------------------------------------------ */

/** Stable heading ids: "Selling to /shop" -> "selling-to-shop". */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/`|\*\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export interface TocEntry {
  id: string
  text: string
  level: 2 | 3
}

/** Table of contents from h2/h3 blocks (ids match what ContentBlocks renders). */
export function tocFromBlocks(blocks: ContentBlock[]): TocEntry[] {
  const out: TocEntry[] = []
  for (const b of blocks) {
    if (b.type === 'h2' || b.type === 'h3') {
      out.push({ id: b.id ?? slugify(b.text), text: b.text.replace(/`|\*\*/g, ''), level: b.type === 'h2' ? 2 : 3 })
    }
  }
  return out
}
