/**
 * Tooltip lore for store items, built from the data in src/lib/store.ts so the
 * hover tooltip, the detail window and the wiki never disagree.
 * Owner: STORE ENGINEER.
 */
import type { TooltipLine } from '@/components/ui/TooltipCard'
import { CHECKOUT_MODE, formatPrice, getRank, listPrice, type StoreItem } from '@/lib/store'

export function itemTooltipLines(item: StoreItem): TooltipLine[] {
  const lines: TooltipLine[] = []
  const rank = item.rankId ? getRank(item.rankId) : undefined

  if (rank) {
    for (const perk of rank.perks) {
      lines.push(perk.startsWith('Everything in') ? { text: perk, color: 'gold' } : { text: perk, color: 'gray' })
    }
  } else if (item.chips?.length) {
    lines.push({ text: item.summary, color: 'gray' })
    lines.push({ text: item.chips.map((c) => c.label).join(' '), color: 'white' })
  } else if (item.contents?.length) {
    lines.push({ text: 'Can contain:', color: 'gray' })
    for (const c of item.contents) lines.push({ text: `• ${c}`, color: 'gray' })
  } else {
    lines.push({ text: item.summary, color: 'gray' })
    for (const p of item.perks ?? []) lines.push({ text: p, color: 'gray' })
  }

  if (item.status === 'coming-soon') lines.push({ text: 'Not available yet', color: 'red' })
  else if (item.status === 'free') lines.push({ text: 'Free for everyone', color: 'green' })
  else if (item.status === 'web') {
    // Web-only items (ranks, the Cardael key) show their decided price even before the checkout opens.
    const lp = listPrice(item.web)
    if (lp) lines.push({ text: `${formatPrice(lp)} on our web store`, color: 'yellow' })
    if (CHECKOUT_MODE === 'off') lines.push({ text: lp ? 'Web store opening soon' : 'Web store only, opening soon', color: 'red' })
    else if (!lp) lines.push({ text: 'Web store only', color: 'yellow' })
  }
  else lines.push({ text: `${item.priceFrom ? 'From ' : ''}${formatPrice(item.price)} in game`, color: 'yellow' })

  return lines
}

/** Short status word for badges. */
export function statusLabel(item: StoreItem): string {
  if (item.status === 'coming-soon') return 'Coming soon'
  if (item.status === 'free') return 'Free'
  if (item.status === 'web') return CHECKOUT_MODE === 'off' ? 'Coming soon' : 'Web store'
  return 'In game now'
}
