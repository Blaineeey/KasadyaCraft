import { TOKEN_SOURCES_TEXT } from '@/content/facts'
import type { WikiPage } from '@/lib/content'

/*
 * Token sources come from TOKEN_SOURCES in src/content/facts.ts (DailyRewards, ODailyQuests, Playtime.yml).
 * Perks, limits, prices and kits are NOT written here. They render from src/lib/store.ts (ranks, defaultLimits,
 * starterKit, tokensToReach, tokenMilestones) through the 'compare-ranks' and 'rank-kits' inserts
 * (src/components/wiki/inserts.tsx), so they live in exactly one place.
 *
 * Sources for the text below (read-only, 2026-11-25):
 * - DeluxeMenus PURCHASE/Ranks.yml: buy items require the previous group (view/click requirements), run
 *   `lp user <p> parent set <rank>` (permanent) + firework; Menu.yml open commands purchase/store/buy/beli/tokenshop
 * - Essentials kits.yml lore "Cannot be sold to the shop", ESGUI allow-lore-items false
 * - LuckPerms prefixes shown in chat (LPC) and tab (TAB)
 */
export const ranks: WikiPage = {
  slug: 'ranks',
  title: 'Ranks',
  summary: 'VIP, VIP+, MVP, MVP+ and MVP++: what each rank adds, what it costs in Tokens and how to get it.',
  icon: 'crown',
  category: 'ranks',
  order: 1,
  updated: '2026-11-25',
  keywords: ['vip', 'vip+', 'mvp', 'mvp+', 'mvp++', 'rank', 'ranks', 'perks', '/ranks', 'tokens', 'kit', '/purchase', 'donate', 'buy rank'],
  related: ['economy', 'rewards', 'commands', 'crates'],
  body: [
    {
      type: 'p',
      text: 'Ranks give you more room (plots, homes and Mall stalls), handy commands and a rank kit. You buy them in order: VIP first, then VIP+, and so on up to MVP++.',
    },
    { type: 'h2', text: 'How to get a rank' },
    {
      type: 'steps',
      items: [
        { title: 'Earn Tokens', text: `Tokens come from ${TOKEN_SOURCES_TEXT}. See [Quests and rewards](/wiki/rewards).` },
        { title: 'Open the rank menu', text: 'Type `/ranks`, or open `/purchase` and pick Ranks.', command: '/ranks' },
        { title: 'Buy the next rank', text: 'You need the rank below it first. The Tokens are taken, the rank is yours right away, and you get a little firework.' },
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'No real-money store yet',
      text: 'Right now ranks are only sold for Tokens in game. If a web store opens, the [store page](/store) will say so first.',
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
