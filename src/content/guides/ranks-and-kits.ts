import type { Guide } from '@/lib/content'
import { CHECKED, PLAYTIME_LEVELS, RANK_COMMANDS, RANK_LADDER } from './facts'

/*
 * Sources: DeluxeMenus PURCHASE/Menu.yml (/purchase) + PURCHASE/Ranks.yml (/ranks, token prices, each rank
 * requires the previous one), LuckPerms groups (inheritance default > vip > ... > mvp++, plots, homes, kits,
 * commands), Essentials kits.yml + config.yml sethome-multiple, ARM Limits, FlareTokens sources (Playtime.yml
 * levels V, XI, XII, XV and one medium daily quest; FlareTokens drops.yml empty, no web store),
 * MythicDungeons LabOfHorrors Requirements.Permission false (no rank needed).
 */
const tokens = (n: number | null) => (n === null ? 'Free' : `${n.toLocaleString('en-US')} Tokens`)
const firstTokenLevel = PLAYTIME_LEVELS.find((l) => l.level === 'V')!

export const ranksAndKits: Guide = {
  slug: 'ranks-and-kits',
  title: 'Ranks and kits',
  summary: 'What VIP to MVP++ change, how kits work, and how you earn the Tokens to buy a rank.',
  icon: 'crown',
  stage: 'next-steps',
  order: 4,
  minutes: 4,
  updated: CHECKED,
  related: ['ranks', 'crates', 'commands'],
  body: [
    {
      type: 'p',
      text: 'Ranks are a bonus, not a requirement. Everything in Survival, the dungeon included, works without one. A rank gives you more room and some handy commands.',
    },
    { type: 'h2', text: 'How to get a rank' },
    {
      type: 'p',
      text: 'Ranks are bought in game with **Tokens**. Open `/purchase` and pick **Ranks**, or go straight there with `/ranks`. You buy them in order: VIP first, then VIP+, and so on up.',
    },
    {
      type: 'p',
      text: `You earn Tokens by playing. Playtime levels in \`/playtime\` pay them (your first 100 come at ${firstTokenLevel.after}), and some daily quests pay them too. There is no web store yet.`,
    },
    {
      type: 'table',
      caption: 'Rank ladder',
      head: ['Rank', 'Price', 'Plots', 'Homes', 'Mall stalls', 'Rank kit'],
      rows: RANK_LADDER.map((r) => [
        r.name,
        tokens(r.tokens),
        String(r.plots),
        String(r.homes),
        String(r.stalls),
        `\`/kit ${r.kit}\` every ${r.kitEvery}`,
      ]),
    },
    { type: 'h2', text: 'New commands by rank' },
    { type: 'p', text: 'Each rank keeps everything from the ranks below it and adds:' },
    {
      type: 'table',
      caption: 'Commands each rank adds',
      head: ['Rank', 'Adds'],
      rows: RANK_COMMANDS.map((r) => [r.rank, r.commands]),
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'The full perk list lives on the [store page](/store) and in the [ranks wiki](/wiki/ranks).',
    },
    { type: 'h2', text: 'Kits' },
    {
      type: 'p',
      text: 'Kits are free bundles of items you claim with `/kit <name>`. Everyone has the starter kit. Each rank adds its own kit, and you keep the kits of every rank below yours.',
    },
    { type: 'h3', text: 'Good to know' },
    {
      type: 'list',
      items: [
        '`/kits` lists the kits you can claim right now.',
        'Each kit has its own timer, so an MVP can claim the starter, VIP, VIP+ and MVP kits.',
        'Rank kit items are marked **Cannot be sold to the shop**. Use them, do not flip them.',
        'Your rank shows as a prefix in chat and in the tab list.',
      ],
    },
  ],
}
