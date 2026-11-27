/**
 * Tebex hand-off for the shopping list. Runs in the browser only.
 *
 * We never take payment ourselves and never ask for card details. With a
 * Tebex Headless public token configured we create a Tebex basket, put the
 * packages in it and send the player to Tebex's own checkout page.
 * Docs (checked 2026-11-25): https://docs.tebex.io/developers/headless-api
 *   POST /api/accounts/{token}/baskets         { username, complete_url, cancel_url, complete_auto_redirect }
 *   POST /api/baskets/{basketIdent}/packages   { package_id, quantity }
 *   -> data.links.checkout
 * Minecraft stores need the player's username on the basket.
 * Bedrock players join through Geyser/Floodgate with a "." in front of their name
 * (live usercache.json, 2026-11-28), so the Tebex store must be the "Minecraft: Offline"
 * type and the plugin config needs server.proxy: true (Tebex docs, Geyser support).
 * Every failure returns a message; callers fall back to the store link or Discord.
 *
 * Owner: STORE ENGINEER.
 */
import { STORE_CHECKOUT_URL, TEBEX_PUBLIC_TOKEN, type StoreItem } from '@/lib/store'

const API = 'https://headless.tebex.io/api'

/**
 * Java usernames: 3 to 16 letters, digits or underscores.
 * Bedrock (Floodgate) names: a dot, then the gamertag with spaces as _, 16 characters in all.
 */
export const USERNAME_RE = /^(?:[A-Za-z0-9_]{3,16}|\.[A-Za-z0-9_]{1,15})$/

export interface CheckoutLine {
  item: StoreItem
  quantity: number
}

export type CheckoutResult = { ok: true; url: string } | { ok: false; message: string; fallbackUrl: string | null }

interface BasketResponse {
  data?: { ident?: string; links?: { checkout?: string } }
}

async function postJson(url: string, body: unknown, signal: AbortSignal): Promise<BasketResponse> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  if (!res.ok) throw new Error(`Tebex answered ${res.status}`)
  return (await res.json()) as BasketResponse
}

/** Only lines that Tebex can sell: a filled-in package id and a quantity. */
export function tebexLines(lines: CheckoutLine[]): CheckoutLine[] {
  return lines.filter((l) => l.quantity > 0 && !!l.item.web?.tebexPackageId)
}

export async function startTebexCheckout(lines: CheckoutLine[], username: string): Promise<CheckoutResult> {
  const fallbackUrl = STORE_CHECKOUT_URL
  if (!TEBEX_PUBLIC_TOKEN) return { ok: false, message: 'The web store is not set up yet.', fallbackUrl }
  if (!USERNAME_RE.test(username)) {
    return {
      ok: false,
      message: 'Type your username exactly as it shows in game. On Bedrock it starts with a dot, like .Steve.',
      fallbackUrl,
    }
  }
  const sellable = tebexLines(lines)
  if (sellable.length === 0) {
    return { ok: false, message: 'Nothing on your list is sold on the web store yet. Buy it in game with /purchase.', fallbackUrl }
  }

  const controller = new AbortController()
  const timer = window.setTimeout(() => controller.abort(), 12000)
  try {
    const here = `${window.location.origin}/store`
    const basket = await postJson(
      `${API}/accounts/${encodeURIComponent(TEBEX_PUBLIC_TOKEN)}/baskets`,
      {
        username,
        complete_url: `${here}?checkout=done`,
        cancel_url: `${here}?checkout=cancelled`,
        complete_auto_redirect: true,
      },
      controller.signal,
    )
    const ident = basket.data?.ident
    if (!ident) throw new Error('No basket id')

    let checkout = basket.data?.links?.checkout
    for (const line of sellable) {
      const added = await postJson(
        `${API}/baskets/${encodeURIComponent(ident)}/packages`,
        { package_id: line.item.web!.tebexPackageId, quantity: line.quantity },
        controller.signal,
      )
      checkout = added.data?.links?.checkout ?? checkout
    }
    if (!checkout || !/^https:\/\//.test(checkout)) throw new Error('No checkout link')
    return { ok: true, url: checkout }
  } catch {
    return {
      ok: false,
      message: 'We could not reach the web store just now. Try again in a minute, or ask us in Discord.',
      fallbackUrl,
    }
  } finally {
    window.clearTimeout(timer)
  }
}
