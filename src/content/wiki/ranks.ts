import type { WikiPage } from '@/lib/content'
import { CHECKOUT_MODE } from '@/lib/store'

/*
 * Perks, limits, prices and kits are NOT written here. They render from src/lib/store.ts (ranks, defaultLimits,
 * starterKit, listPrice for the web store prices) through the 'compare-ranks' and 'rank-kits' inserts
 * (src/components/wiki/inserts.tsx), so they live in exactly one place.
 *
 * Sources for the text below:
 * - Owner decision 2026-11-28: ranks are sold ONLY on the web store (Tebex), in US dollars. Any rank can be bought
 *   directly, each includes everything in the ranks below it, and the Tebex Ranks category is cumulative (after a lower
 *   web rank a higher one costs only the difference). /ranks (also /purchase > Ranks) is only a showcase: perks, dollar
 *   price, and a click sends the web store link. Tokens no longer buy ranks. Ranks already owned stay owned.
 *   The checkout opens once NEXT_PUBLIC_TEBEX_PUBLIC_TOKEN is set (CHECKOUT_MODE), so the text says "opening soon" until then.
 * - Ranks are permanent (owner, 2026-11-28; the old Ranks.yml buy items ran a permanent `lp user <p> parent set <rank>`)
 * - Essentials kits.yml lore "Cannot be sold to the shop", ESGUI allow-lore-items false
 * - LuckPerms prefixes shown in chat (LPC) and tab (TAB)
 */
const storeOff = CHECKOUT_MODE === 'off'

export const ranks: WikiPage = {
  slug: 'ranks',
  title: 'Ranks',
  summary: 'VIP, VIP+, MVP, MVP+ and MVP++: what each rank adds, what it costs on our web store and how to get it.',
  icon: 'crown',
  category: 'ranks',
  order: 1,
  updated: '2026-11-28',
  keywords: ['vip', 'vip+', 'mvp', 'mvp+', 'mvp++', 'rank', 'ranks', 'perks', '/ranks', 'web store', 'tebex', 'price', 'upgrade', 'kit', '/purchase', 'donate', 'buy rank'],
  related: ['economy', 'rewards', 'commands', 'crates'],
  body: [
    {
      type: 'p',
      text: 'Ranks give you more room (plots, homes and Mall stalls), handy commands and a rank kit. Each rank includes everything in the ranks below it, and you can buy any rank directly.',
    },
    { type: 'h2', text: 'How to get a rank' },
    {
      type: 'steps',
      items: [
        {
          title: 'Pick a rank',
          text: 'Compare them below, or type `/ranks` in game (or open `/purchase` and pick Ranks) to see every rank, its perks and its price.',
          command: '/ranks',
        },
        {
          title: 'Buy it on the web store',
          text: storeOff
            ? 'Ranks are sold on our web store, which is opening soon. Click a rank in `/ranks` and you get the web store link.'
            : 'Open the [store page](/store), add the rank to your list and check out. Clicking a rank in `/ranks` gives you the web store link too.',
        },
        {
          title: 'Upgrade any time',
          text: 'You do not need the ranks below first. Bought a lower rank on the web store before? Then a higher one costs only the difference.',
        },
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Tokens no longer buy ranks',
      text: 'Ranks are sold only on the web store now. Tokens still buy every crate key in `/keys`, and any rank you already own stays yours.',
    },
    { type: 'h2', text: 'Compare ranks' },
    { type: 'h2', text: 'Rank kits' },
    { type: 'h2', text: 'Good to know' },
    {
      type: 'list',
      items: [
        'Every rank keeps everything from the ranks below it.',
        'Ranks are permanent. They do not run out.',
        'Rank kit items say "Cannot be sold to the shop" and the shop really will not take them.',
        'Your rank shows in chat and in the tab list.',
      ],
    },
  ],
}
