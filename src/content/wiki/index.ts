/**
 * Wiki registry. One file per page in this folder, imported and listed here.
 * Owner: WIKI WRITER.
 *
 * Every fact was checked read-only against the live Survival + Hub configs on
 * 2026-11-25 (each page file lists its sources); chat, fishing, custom-enchants, chat-games, tags, plots (fly time), the
 * vote facts and the Lab/delve daily limits were (re)checked on 2026-11-27. The delves pages (delves, gloomhold-keep, cinderworks)
 * were checked against the KasadyaDelves plugin data on 2026-11-26 (see ./delve-facts.ts). Rank perks/prices and crate key
 * prices are NOT stored here: they render from src/lib/store.ts.
 */
import type { PixelIconName } from '@/components/ui/pixel-icons'
import { tocFromBlocks, wikiCategoryLabels, type WikiCategory, type WikiPage } from '@/lib/content'
import { afkPool } from './afk-pool'
import { chat } from './chat'
import { chatGames } from './chat-games'
import { cinderworks } from './cinderworks'
import { commands } from './commands'
import { crates } from './crates'
import { customEnchants } from './custom-enchants'
import { delves } from './delves'
import { dungeon } from './dungeon'
import { dungeonItems } from './dungeon-items'
import { economy } from './economy'
import { faq } from './faq'
import { features } from './features'
import { fishing } from './fishing'
import { gloomholdKeep } from './gloomhold-keep'
import { legendaryWeapons } from './legendary-weapons'
import { painting } from './painting'
import { playerShops } from './player-shops'
import { plots } from './plots'
import { ranks } from './ranks'
import { rewards } from './rewards'
import { rules } from './rules'
import { spawners } from './spawners'
import { tags } from './tags'
import { worldAndWarps } from './world-and-warps'

export const wikiPages: WikiPage[] = [
  // basics
  features,
  worldAndWarps,
  plots,
  commands,
  chat,
  // economy
  economy,
  playerShops,
  // features
  rewards,
  tags,
  fishing,
  customEnchants,
  afkPool,
  chatGames,
  crates,
  spawners,
  legendaryWeapons,
  painting,
  // dungeon
  dungeon,
  dungeonItems,
  delves,
  gloomholdKeep,
  cinderworks,
  // ranks, rules, help
  ranks,
  rules,
  faq,
]

/** Category order on /wiki, with an icon and a one-line blurb for each section. */
export const wikiCategories: { id: WikiCategory; label: string; icon: PixelIconName; blurb: string }[] = [
  { id: 'basics', label: wikiCategoryLabels.basics, icon: 'compass', blurb: 'The map, your plot, warps, chat and every command.' },
  { id: 'economy', label: wikiCategoryLabels.economy, icon: 'coin', blurb: 'Money, the server shop and player shops.' },
  { id: 'features', label: wikiCategoryLabels.features, icon: 'star', blurb: 'Rewards, fishing, custom enchants, crates, spawners and the fun extras.' },
  { id: 'dungeon', label: wikiCategoryLabels.dungeon, icon: 'skull', blurb: 'The Lab of Horrors, the delves Gloomhold Keep and Cinderworks, and their loot.' },
  { id: 'ranks', label: wikiCategoryLabels.ranks, icon: 'crown', blurb: 'What each rank adds and how to get it.' },
  { id: 'rules', label: wikiCategoryLabels.rules, icon: 'shield', blurb: 'How we keep the server friendly.' },
  { id: 'help', label: wikiCategoryLabels.help, icon: 'question', blurb: 'Quick answers to common questions.' },
]

export function getWikiPage(slug: string): WikiPage | undefined {
  return wikiPages.find((p) => p.slug === slug)
}

export function wikiByCategory(category: WikiCategory): WikiPage[] {
  return wikiPages.filter((p) => p.category === category).sort((a, b) => a.order - b.order)
}

/** Pages in display order: by category (as listed above), then by `order`. */
export function wikiInOrder(): WikiPage[] {
  return wikiCategories.flatMap((c) => wikiByCategory(c.id))
}

/** Related pages: the page's own list first, then the rest of its category. */
export function relatedPages(page: WikiPage, max = 4): WikiPage[] {
  const picked: WikiPage[] = []
  const add = (p: WikiPage | undefined) => {
    if (p && p.slug !== page.slug && !picked.some((x) => x.slug === p.slug)) picked.push(p)
  }
  for (const slug of page.related ?? []) add(getWikiPage(slug))
  for (const p of wikiByCategory(page.category)) add(p)
  return picked.slice(0, max)
}

/** Previous and next page in reading order. */
export function neighbours(page: WikiPage): { prev?: WikiPage; next?: WikiPage } {
  const all = wikiInOrder()
  const i = all.findIndex((p) => p.slug === page.slug)
  return { prev: i > 0 ? all[i - 1] : undefined, next: i >= 0 && i < all.length - 1 ? all[i + 1] : undefined }
}

/** Small, serialisable search record for the client-side search box on /wiki. */
export interface WikiSearchEntry {
  slug: string
  title: string
  summary: string
  category: WikiCategory
  icon: PixelIconName
  keywords: string[]
  /** h2/h3 headings with their anchor ids, so a search can jump into a section. */
  sections: { id: string; text: string }[]
}

export function wikiSearchIndex(): WikiSearchEntry[] {
  return wikiInOrder().map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    category: p.category,
    icon: p.icon,
    keywords: p.keywords ?? [],
    sections: tocFromBlocks(p.body).map((t) => ({ id: t.id, text: t.text })),
  }))
}
