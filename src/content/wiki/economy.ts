import {
  DAILY_QUEST_BONUS,
  FACTS_CHECKED,
  LIVE_SHOP_SECTIONS,
  TOKEN_SOURCES_TEXT,
  joinAnd,
  money,
  shopPrice,
  shopPrices,
  type ShopItem,
} from '@/content/facts'
import type { ContentBlock, WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - Essentials config: starting-balance 250, currency $, /sell disabled
 * - EconomyShopGUI sections/*.yml + shops/*.yml: 8 section files, but Z_EverythingElse has `enable: false`
 *   (re-read 09:28), so the live /shop is 7 sections with 338 items. Raw iron, raw gold, nuggets, netherite
 *   scrap, chests, torches and golden apples only live in that section, so players cannot buy OR sell them.
 *   The price table renders from SHOP in src/content/facts.ts (shared with the guides) and drops rows whose
 *   `inShop` is false; the section list comes from LIVE_SHOP_SECTIONS. Prices re-read after the round 3
 *   reprice (files dated 07:22). Economy balancer log in /root/launch/CHANGELOG.md (sell = 25% of buy,
 *   loop fixes, totem 3500/20)
 * - ToastedAFK denied_commands: /shop
 * - InfiniteFishing (2026-11-26, replaced CustomFishing): /fishmarket, price = base x (weight + size) / 120, no daily cap;
 *   about $1.1k an hour with a starter rod, about $2.8k with the Celestial rod. Details: ./fishing.ts
 * - Points (2026-11-27): PURCHASE/Points.yml (/pointshop) 25 points = 1 Token, Vote key 500, Resource key 750; chat colours
 *   250/500 (CHATCOLOR/Minecraft.yml), glow 500-3000 (COSMETICS/Glow.yml); Tokens no longer buy points
 * - AxTrade config: /trade, max distance 10, request expires 60 s, confirm 5 s, abort on move; currencies money, points, exp
 * - FreeCoinFlip: min 1000, tax enabled 5% (balancer log)
 * - QuickShop: cost 100, refund false, fee-for-price-change 50, tax 0.05; ARM stall prices; AlonsoTags prices
 * - LuckPerms default: essentials.pay, no playerpoints.pay, no flaretokens pay
 * - Tokens: DailyRewards `tokens give` 10/50/150, ODailyQuests global_reward 25, Playtime.yml `ft give` (850),
 *   via TOKEN_SOURCES in src/content/facts.ts
 */
const priceRows = shopPrices([
  'Diamond',
  'Raw Gold',
  'Gold Ingot',
  'Raw Iron',
  'Iron Ingot',
  'Coal',
  'Lapis Lazuli',
  'Oak Log',
  'Cod',
  'Sugar Cane',
  'Bone',
  'Cobblestone',
  'Emerald',
  'Netherite Ingot',
  'Totem of Undying',
])
  // Raw ores sit in the switched-off Everything Else section: no row until it is back on.
  .filter((p) => p.inShop)
  .map((p) => [p.item, money(p.buy), p.sell === null ? 'Buy only' : money(p.sell)])

/** True when the item is in a live section AND the shop buys it back. */
const shopBuys = (item: ShopItem) => {
  const p = shopPrice(item)
  return p.inShop && p.sell !== null
}

/** What the shop pays for one item (0 when it will not buy it, or it is not in the shop at all). */
const sells = (item: ShopItem) => (shopBuys(item) ? (shopPrice(item).sell ?? 0) : 0)

/*
 * Iron and gold advice follows the live shop, not just the price list:
 * - raw ore in the shop and paying more than ingots: tell players to sell it raw;
 * - raw ore not in the shop (Everything Else is off, 2026-11-25): tell them to smelt first,
 *   because /shop only takes the ingots.
 */
const rawOresLive = shopBuys('Raw Iron') && shopBuys('Raw Gold')
const ingotsLive = shopBuys('Iron Ingot') && shopBuys('Gold Ingot')

const ironGoldTip: ContentBlock[] =
  rawOresLive && sells('Raw Iron') > sells('Iron Ingot') && sells('Raw Gold') > sells('Gold Ingot')
    ? [
        {
          type: 'callout',
          tone: 'tip',
          text: `Sell iron and gold raw. Raw iron pays ${money(sells('Raw Iron'))} and raw gold ${money(sells('Raw Gold'))}, but the ingots only get ${money(sells('Iron Ingot'))} and ${money(sells('Gold Ingot'))}. Smelting first loses you money.`,
        },
      ]
    : !rawOresLive && ingotsLive
      ? [
          {
            type: 'callout',
            tone: 'tip',
            text: `Smelt your iron and gold before you sell. \`/shop\` does not take raw ore right now, but it pays ${money(sells('Iron Ingot'))} for an iron ingot and ${money(sells('Gold Ingot'))} for a gold ingot.`,
          },
        ]
      : []

/** "Blocks, Farming, Foraging, Mob Drops, Ores, Redstone and Tools" */
const liveSections = joinAnd(LIVE_SHOP_SECTIONS)
const everythingElseLive = LIVE_SHOP_SECTIONS.includes('Everything Else')

export const economy: WikiPage = {
  slug: 'economy',
  title: 'Money and the shop',
  summary: 'How money works: $250 to start, a server shop that only buys raw materials at 25%, three currencies, and where your money goes.',
  icon: 'coin',
  category: 'economy',
  order: 1,
  updated: FACTS_CHECKED,
  keywords: [
    '/shop',
    '/sell',
    '/sellall',
    '/sellgui',
    '/bal',
    '/pay',
    '/baltop',
    'money',
    'points',
    'tokens',
    'coinflip',
    '/trade',
    'fish',
    '/fishmarket',
    '/pointshop',
    'prices',
    'starting money',
  ],
  related: ['player-shops', 'rewards', 'tags', 'crates'],
  body: [
    { type: 'p', text: 'You start with **$250**. Check it any time with `/bal`.' },
    { type: 'h2', text: 'Three currencies' },
    {
      type: 'table',
      head: ['Currency', 'How you get it', 'What it buys'],
      rows: [
        [
          'Money ($)',
          'Selling raw materials, fishing (`/fishmarket`), player shops, the daily quest bonus, playtime levels, chat games',
          'Shop items, player shops, picture tags, Mall stalls, coinflip',
        ],
        [
          'Points (✪)',
          'AFK pool, chat games (5 a win), Lab of Horrors and delve clears, weekly and monthly rewards, playtime level V',
          'Chat colours (`/chatcolor`, ✪250 or ✪500), glow (`/glowshop`, ✪500 to ✪3,000), and Tokens or crate keys in `/pointshop` (✪25 = ⛃1)',
        ],
        ['Tokens (⛃)', TOKEN_SOURCES_TEXT, 'Ranks and crate keys in `/purchase`. Tokens are worth the most and never turn back into points.'],
      ],
    },
    {
      type: 'p',
      text: 'Send money with `/pay <player> <amount>`. Points can only change hands through `/trade`. Tokens cannot be sent to anyone.',
    },
    { type: 'h2', text: 'The server shop' },
    {
      type: 'p',
      text: `\`/shop\` has ${LIVE_SHOP_SECTIONS.length} sections: ${liveSections}. You can **buy** blocks, crops, logs, mob drops, ores, redstone parts and handy tools there. You can only **sell** raw materials back.`,
    },
    {
      type: 'list',
      items: [
        'Selling always pays **25%** of the buy price. Put the other way round: buying costs 4 times what selling gives.',
        'Gear (tools, armour, weapons), rank kit items, crate gear and dungeon loot cannot be sold to the shop.',
        'Some things are buy-only, like emeralds, copper ingots, stone and netherite ingots.',
        ...(everythingElseLive
          ? []
          : [
              'Some things are not in the shop at all right now: raw iron and gold, nuggets, netherite scrap, chests, torches and golden apples. Craft them, or buy them from other players.',
            ]),
      ],
    },
    {
      type: 'table',
      caption: 'Some prices right now',
      head: ['Item', 'Buy', 'Sell'],
      rows: priceRows,
    },
    ...ironGoldTip,
    {
      type: 'p',
      text: 'We rebalance now and then, so the shop itself always has the latest price.',
    },
    { type: 'h3', text: 'Selling fast' },
    {
      type: 'commands',
      items: [
        { command: '/sellgui', description: 'A window to drop items into and sell.' },
        { command: '/sellall hand', description: 'Sell the stack in your hand.' },
        { command: '/sellall inventory', description: 'Sell everything sellable in your inventory.' },
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      text: '`/sellall inventory` sells **everything** the shop accepts, diamonds included. Put what you want to keep in a chest first.',
    },
    { type: 'callout', tone: 'info', text: '`/shop` does not work while you stand in the AFK pool.' },
    { type: 'h2', text: 'Fishing' },
    {
      type: 'p',
      text: 'Fishing pays about as much as mining: roughly **$1,100 an hour** with a starter rod and up to about **$2,800** with the best rod you can fish up. Sell at `/fishmarket` (the item shop pays only $1 a fish). Rods, bait and the minigames are on [Fishing](/wiki/fishing).',
    },
    { type: 'h2', text: 'Trading with players' },
    {
      type: 'commands',
      items: [
        { command: '/trade <player>', description: 'Opens a safe trade window for items, money, points and XP.' },
        { command: '/pay <player> <amount>', description: 'Send money straight away.' },
        { command: '/coinflip <amount> <heads|tails>', description: 'Bet money against another player.' },
      ],
    },
    {
      type: 'list',
      items: [
        '`/trade` works within 10 blocks. Requests run out after 60 seconds. When both sides accept, a 5 second countdown runs. Moving cancels the trade.',
        'Coinflip bets start at **$1,000**. The winner takes the pot minus a 5% tax. Only bet what you are happy to lose.',
        'For selling to lots of players, a chest shop beats trading one by one. See [Player shops](/wiki/player-shops).',
      ],
    },
    { type: 'h2', text: 'Where money goes' },
    {
      type: 'table',
      head: ['Spending', 'Cost'],
      rows: [
        ['Chest shop', '$100 to create, $50 per price change, 5% tax on every sale'],
        ['Shopping Mall stall', '$5,000 or $10,000 per 7 days'],
        ['Picture tags', '$10,000, $30,000 or $100,000 each'],
        ['Coinflip', '5% of every pot'],
        ['Chamber Keys for the dungeon', '64 diamonds or 64 emeralds, plus dungeon materials'],
      ],
    },
    { type: 'h2', text: 'Why the shop works like this' },
    {
      type: 'p',
      text: 'We want players to trade with each other. The server shop is a safety net, not the main market. Because it only pays 25%, a player who offers a bit more always wins. Because buying costs 4 times as much, farming and crafting it yourself is always worth it.',
    },
    {
      type: 'p',
      text: 'We also hunt for money loops, where you buy something, change it, and sell it back for a profit. When we find one we fix the price. If you find one, tell staff on Discord. Using it is glitch abuse under [rule 2.4](/wiki/rules).',
    },
    { type: 'h2', text: 'Earning tips' },
    {
      type: 'list',
      items: [
        'Mining is the steady earner at the start. Diamonds sell for $100 each.',
        `Do all 3 daily quests: you get ${DAILY_QUEST_BONUS} on top of the XP from each quest.`,
        'Claim `/rewards` every day and check `/levels` as your playtime grows. Level II already pays $500.',
        'Sell to players for more than the shop pays. Set up a [chest shop](/wiki/player-shops) on your plot.',
        'A Mall stall costs at least $5,000 a week. Start with chest shops on your plot and rent a stall once you sell enough to cover it.',
      ],
    },
  ],
}
