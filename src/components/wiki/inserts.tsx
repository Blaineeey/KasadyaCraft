import type { ReactNode } from 'react'
import CrateKeyPrices from './CrateKeyPrices'
import RankKits from './RankKits'
import RankMatrix from './RankMatrix'

/**
 * Live blocks that are dropped into a wiki article right after a given h2.
 * Key = page slug, then the h2's anchor id (slugify of the heading text).
 * They render from src/lib/store.ts, so ranks and key prices are never copied
 * into wiki text. Owner: WIKI WRITER.
 */
export const wikiInserts: Record<string, Record<string, () => ReactNode>> = {
  ranks: {
    'compare-ranks': () => <RankMatrix />,
    'rank-kits': () => <RankKits />,
  },
  crates: {
    'getting-keys': () => <CrateKeyPrices />,
  },
}
