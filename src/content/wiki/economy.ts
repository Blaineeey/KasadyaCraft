import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - Essentials config: starting-balance 250, currency $, /sell disabled
 * - EconomyShopGUI shops/*.yml (8 sections, 843 entries, ~190 sellable materials), sample prices read directly;
 *   economy balancer log in /root/launch/CHANGELOG.md (sell = 25% of buy, loop fixes, totem 3500/20)
 * - ToastedAFK denied_commands: /shop
 * - CustomFishing config: earnings-multiplier 0.25, daily limitation 2500 (balancer log)
 * - AxTrade config: /trade, max distance 10, request expires 60 s, confirm 5 s, abort on move; currencies money, points, exp
 * - FreeCoinFlip: min 1000, tax enabled 5% (balancer log)
 * - QuickShop: cost 100, refund false, fee-for-price-change 50, tax 0.05; ARM stall prices; AlonsoTags prices
 * - LuckPerms default: essentials.pay, no playerpoints.pay, no flaretokens pay
 * - Tokens: DeluxeMenus BASIC/Playtime.yml `ft give` (100 + 100 + 150 + 500)
 */
export const economy: WikiPage = {
  slug: 'economy',
  title: 'Money and the shop',
  summary: 'How money works: $250 to start, a server shop that only buys raw materials at 25%, three currencies, and where your money goes.',
  icon: 'coin',
  category: 'economy',
  order: 1,
  updated: '2026-11-25',
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
    '/sellfish',
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
          'Selling raw materials, player shops, daily quests, playtime levels, chat games, the fish market',
          'Shop items, player shops, chat tags, Mall stalls, coinflip',
        ],
        ['Points (✪)', 'AFK pool, weekly and monthly rewards, playtime level V, or buy them with Tokens', 'Chat colours in `/cosmetics`, ✪25 each'],
        ['Tokens (⛃)', 'Playtime levels only, 850 in total right now', 'Ranks, crate keys and points in `/purchase`'],
      ],
    },
    {
      type: 'p',
      text: 'Send money with `/pay <player> <amount>`. Points can only change hands through `/trade`. Tokens cannot be sent to anyone.',
    },
    { type: 'h2', text: 'The server shop' },
    {
      type: 'p',
      text: '`/shop` has 8 sections: Blocks, Farming, Foraging, Mob Drops, Ores, Redstone, Tools and Everything Else. You can **buy** almost anything there. You can only **sell** raw materials back.',
    },
    {
      type: 'list',
      items: [
        'Selling always pays **25%** of the buy price. Put the other way round: buying costs 4 times what selling gives.',
        'Gear (tools, armour, weapons), rank kit items, crate gear and dungeon loot cannot be sold to the shop.',
        'Some things are buy-only, like emeralds, copper ingots, stone and netherite ingots.',
      ],
    },
    {
      type: 'table',
      caption: 'Some prices right now',
      head: ['Item', 'Buy', 'Sell'],
      rows: [
        ['Diamond', '$400', '$100'],
        ['Gold ingot', '$16', '$4'],
        ['Iron ingot', '$12', '$3'],
        ['Coal', '$8', '$2'],
        ['Lapis lazuli', '$8', '$2'],
        ['Oak log', '$8', '$2'],
        ['Cod', '$12', '$3'],
        ['Sugar cane', '$2', '$0.50'],
        ['Bone', '$1.20', '$0.30'],
        ['Cobblestone', '$0.40', '$0.10'],
        ['Emerald', '$24', 'Buy only'],
        ['Netherite ingot', '$1,411.20', 'Buy only'],
        ['Totem of Undying', '$3,500', '$20'],
      ],
    },
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
    { type: 'h2', text: 'Fish market' },
    {
      type: 'p',
      text: 'Fishing pays too. `/sellfish` (or `/fishshop`) buys the fish you catch, up to **$2,500 a day**. `/fishingbag` gives you a bag for bait, hooks and rods.',
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
        ['Chat tags', '$2,500, $7,500 or $20,000 each'],
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
        'Do all 3 daily quests: you get $1,500 and a diamond block on top of the quest rewards.',
        'Claim `/rewards` every day and check `/levels` as your playtime grows. Level II already pays $500.',
        'Sell to players for more than the shop pays. Set up a [chest shop](/wiki/player-shops) on your plot.',
        'A Mall stall costs at least $5,000 a week. Start with chest shops on your plot and rent a stall once you sell enough to cover it.',
      ],
    },
  ],
}
