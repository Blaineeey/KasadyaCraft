/**
 * Shopping-list sums, one per currency (Tokens, Points and money never mix).
 * Owner: STORE ENGINEER.
 */
import { webPrice, type Price, type StoreItem } from '@/lib/store'

interface Line {
  item: StoreItem
  quantity: number
}

type Summable = 'tokens' | 'points' | 'money'
const order: Summable[] = ['tokens', 'points', 'money']

/** In-game totals, e.g. [⛃1,060, ✪50, $2,500]. Items with a "from" price are skipped (no fixed price). */
export function listTotals(lines: Line[]): Price[] {
  const sums: Record<Summable, number> = { tokens: 0, points: 0, money: 0 }
  for (const { item, quantity } of lines) {
    const p = item.price
    if (!p || item.priceFrom) continue
    if (p.currency === 'tokens' || p.currency === 'points' || p.currency === 'money') sums[p.currency] += p.amount * quantity
  }
  return order.filter((c) => sums[c] > 0).map((c) => ({ currency: c, amount: sums[c] }))
}

/** Real-money total, only when every web-sellable line has a real (non-placeholder) price. */
export function webTotal(lines: Line[]): Price | null {
  let amount = 0
  let code: 'PHP' | 'USD' | null = null
  for (const { item, quantity } of lines) {
    if (!item.web) continue
    const p = webPrice(item.web)
    if (!p || p.currency !== 'real') return null
    amount += p.amount * quantity
    code = p.code
  }
  return code ? { currency: 'real', amount: Math.round(amount * 100) / 100, code } : null
}
