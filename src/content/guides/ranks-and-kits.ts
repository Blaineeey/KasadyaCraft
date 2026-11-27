import { DAILY_QUESTS, TOKEN_SOURCES, count } from '@/content/facts'
import type { Guide } from '@/lib/content'
import { CHECKOUT_MODE, formatPrice, getRank, listPrice } from '@/lib/store'
import { PLAYTIME_COMMAND, PLAYTIME_LEVELS, RANK_COMMANDS, RANK_LADDER } from './facts'

/*
 * Sources: owner decision 2026-11-28: ranks are sold ONLY on the web store (Tebex), in US dollars, any rank
 * directly, each includes the ranks below, the Tebex Ranks category is cumulative (upgrades cost the difference);
 * /ranks (also /purchase > Ranks) is a showcase with perks, dollar price and the web store link; Tokens no longer
 * buy ranks. Dollar prices from src/lib/store.ts (`web`). LuckPerms groups (inheritance default > vip > ... > mvp++,
 * plots, homes, kits, commands), Essentials kits.yml + config.yml sethome-multiple, ARM Limits, FlareTokens sources
 * (TOKEN_SOURCES in src/content/facts.ts: DailyRewards 10/50/150, ODailyQuests global_reward 25, Playtime.yml levels
 * V, XI, XII, XVII = 850; FlareTokens drops.yml empty), Tokens buy crate keys in /keys,
 * LuckPerms mvp+ essentials.fly only with world contexts plotworld + shoppingmall (Essentials world-change-fly-reset),
 * MythicDungeons LabOfHorrors Requirements.Permission false (no rank needed).
 */
const storeOff = CHECKOUT_MODE === 'off'
const firstTokenLevel = PLAYTIME_LEVELS.find((l) => l.level === 'V')!

export const ranksAndKits: Guide = {
  slug: 'ranks-and-kits',
  title: 'Ranks and kits',
  summary: 'What VIP to MVP++ change, how kits work, and where to buy a rank.',
  icon: 'crown',
  stage: 'next-steps',
  order: 5,
  minutes: 4,
  updated: '2026-11-28',
  related: ['ranks', 'crates', 'commands'],
  body: [
    {
      type: 'p',
      text: 'Ranks are a bonus, not a requirement. Everything in Survival, the dungeon included, works without one. A rank gives you more room and some handy commands.',
    },
    { type: 'h2', text: 'How to get a rank' },
    {
      type: 'p',
      text: storeOff
        ? 'Ranks are sold on our web store, which is opening soon. You will be able to buy any rank directly, and each one includes everything in the ranks below it. The prices, in US dollars, are in the table below and on the [store page](/store).'
        : 'Ranks are sold on our web store, in US dollars: open the [store page](/store), add a rank to your list and check out. You can buy any rank directly, and each one includes everything in the ranks below it. Bought a lower rank on the web store before? Then a higher one costs only the difference.',
    },
    {
      type: 'p',
      text: 'In game, `/ranks` (or `/purchase`, then **Ranks**) shows every rank, its perks and its price. Click a rank there and you get the web store link.',
    },
    {
      type: 'p',
      text: `Tokens no longer buy ranks, but you still earn them by playing. Claim \`/rewards\` for ${TOKEN_SOURCES.daily} a day, ${TOKEN_SOURCES.weekly} a week and ${TOKEN_SOURCES.monthly} a month, finish all ${DAILY_QUESTS.perDay} daily quests for ${TOKEN_SOURCES.quests} more, and playtime levels in \`${PLAYTIME_COMMAND}\` add ${count(TOKEN_SOURCES.playtime)} over time (your first 100 come at ${firstTokenLevel.after}). Spend them on crate keys in \`/keys\`.`,
    },
    {
      type: 'table',
      caption: 'Rank ladder',
      head: ['Rank', 'Web store price', 'Plots', 'Homes', 'Mall stalls', 'Rank kit'],
      rows: RANK_LADDER.map((r) => [
        r.name,
        r.id === 'member' ? 'Free' : formatPrice(listPrice(getRank(r.id)?.web)),
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
