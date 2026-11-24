import type { CSSProperties } from 'react'
import TooltipCard, { type Rarity, type TooltipLine } from '@/components/ui/TooltipCard'
import { ranks, starterKit } from '@/lib/store'
import s from './WikiData.module.css'

/*
 * Kit contents for /wiki/ranks, as item tooltips. Data: src/lib/store.ts (from Essentials kits.yml).
 * Owner: WIKI WRITER.
 */
export default function RankKits() {
  const list = [...ranks].sort((a, b) => a.order - b.order)

  const cards: { key: string; title: string; rarity: Rarity; lines: TooltipLine[] }[] = [
    {
      key: 'starter',
      title: `${starterKit.name} kit (everyone)`,
      rarity: 'common',
      lines: [...starterKit.items, { text: `Claim with /kit starter, every ${starterKit.cooldown}`, color: 'gold' }],
    },
    ...list.flatMap((r) => {
      const kit = r.kit
      if (!kit) return []
      const claim = `Claim with /kit ${kit.name.toLowerCase()}${kit.cooldown ? `, every ${kit.cooldown}` : ''}`
      return [{ key: r.id, title: `${kit.name} kit`, rarity: r.rarity, lines: [...kit.items, { text: claim, color: 'gold' as const }] }]
    }),
  ]

  return (
    <div className={s.block}>
      <ul className={`kc-grid ${s.kits}`} style={{ '--grid-min': '240px' } as CSSProperties}>
        {cards.map((c) => (
          <li key={c.key}>
            <TooltipCard title={c.title} rarity={c.rarity} lines={c.lines} className={s.kit} />
          </li>
        ))}
      </ul>
      <p className={s.note}>Kit items are marked &quot;Cannot be sold to the shop&quot;, so keep them or give them to a friend.</p>
    </div>
  )
}
