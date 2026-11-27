import { DAILY_QUESTS_LINE, DAILY_REWARDS, TOKEN_SOURCES_TEXT, dailyRewardText } from '@/content/facts'
import { CHAT_GAME_PRIZE } from '@/content/wiki/chat-games'
import type { Guide } from '@/lib/content'
import {
  AFK_POOL,
  MALL,
  PLAYTIME_COMMAND,
  PLAYTIME_LEVELS,
  QUICKSHOP,
  RAW_ORES_SELL,
  SELL_PERCENT,
  STARTING_BALANCE,
  money,
} from './facts'

/*
 * Sources: EconomyShopGUI shops/*.yml (sell = 25% of buy on raw materials; crafted items and emeralds
 * have sell -1), EconomyShopGUI config.yml (shift-right-click-sell-all, /sellall, /sellgui enabled),
 * ODailyQuests config.yml (global mode; global_reward $1,500 + 1 diamond block + 25 Tokens) and
 * quests/global.yml (2,000 XP per quest), DailyRewards config.yml (+10/50/150 Tokens), DeluxeMenus BASIC/Playtime.yml + BASIC/Guide.yml (currencies),
 * ChatGames (2026-11-27: $250 + 5 points + 100 XP per win, see wiki/chat-games.ts), ToastedAFK config.yml, AlonsoTags tags.yml
 * ($10,000 / $30,000 / $100,000 since 2026-11-27), QuickShop-Hikari config.yml, AdvancedRegionMarket regions.yml,
 * InfiniteFishing (/fishmarket, ~$1.1k-$2.8k an hour, see wiki/fishing.ts), PURCHASE/Points.yml (/pointshop).
 */

const lvl = (n: string) => PLAYTIME_LEVELS.find((l) => l.level === n)!

export const makingMoney: Guide = {
  slug: 'making-money',
  title: 'Making money',
  summary: 'What the server shop buys, why crafted goods belong in player shops, and the free money most new players miss.',
  icon: 'coin',
  stage: 'first-day',
  order: 3,
  minutes: 5,
  updated: '2026-11-28',
  next: 'claim-a-plot',
  related: ['economy', 'player-shops', 'rewards'],
  body: [
    {
      type: 'p',
      text: `You start with **${money(STARTING_BALANCE)}**. Money buys things in \`/shop\` and in player shops, rents mall stalls and unlocks picture tags. Here is how to earn it.`,
    },
    { type: 'h2', text: 'Selling to the server shop' },
    {
      type: 'p',
      text: `Open \`/shop\` or walk over with \`/warp shop\`. The shop sells building blocks, crops, mob drops, ores, redstone parts and tools. It only **buys back raw materials**: logs, coal, iron and gold ingots, diamonds, crops, mob drops and fish. It pays **${SELL_PERCENT}%** of its own price.`,
    },
    ...(RAW_ORES_SELL
      ? []
      : [
          {
            type: 'callout' as const,
            tone: 'tip' as const,
            text: 'Raw iron and raw gold are not on the shop list. Smelt them into ingots first, then sell.',
          },
        ]),
    { type: 'h3', text: 'Selling tricks' },
    {
      type: 'list',
      items: [
        'In the shop menu, hold Shift and right-click an item to sell every one you carry.',
        '`/sellall hand` sells the stack in your hand.',
        '`/sellgui` opens a box. Drop your loot in and close it to sell.',
      ],
    },
    { type: 'h2', text: 'Why crafted goods go to players' },
    {
      type: 'p',
      text: 'The server shop will not buy crafted items. Glass, chests, stone bricks, torches and golden apples all get a no. That is on purpose: crafted and rare things are worth more to other players than to the server.',
    },
    { type: 'p', text: 'So anything you craft, like glass or chests, belongs in a player shop. You set the price.' },
    {
      type: 'list',
      items: [
        `**On your plot:** a chest shop costs ${money(QUICKSHOP.createCost)} to set up. Players come to you.`,
        `**In the Shopping Mall:** rent a stall at \`/warp mall\` from ${money(MALL.small.price)} a week, right where everyone shops.`,
      ],
    },
    { type: 'callout', tone: 'tip', text: 'Step by step, with prices and mall rent: [Open your own shop](/guides/open-a-shop).' },
    { type: 'h2', text: 'Fishing' },
    {
      type: 'p',
      text: 'Fishing is a steady way to earn: about **$1,100 an hour** with a starter rod and up to about **$2,800** with better rods. Sell your catch at `/fishmarket`, not in `/shop` (the shop pays only $1 a fish). Everything about rods and bait: [Fishing](/wiki/fishing).',
    },
    { type: 'h2', text: 'Free money most players miss' },
    {
      type: 'table',
      caption: 'Easy earnings',
      head: ['Where', 'What you get', 'How often'],
      rows: [
        ['`/dquests`', DAILY_QUESTS_LINE, 'Every day'],
        ['`/rewards`', `Daily: ${dailyRewardText(DAILY_REWARDS[0])}. The weekly and monthly rewards are bigger.`, 'Daily, weekly, monthly'],
        [`\`${PLAYTIME_COMMAND}\``, `${lvl('II').reward} at ${lvl('II').after}, ${lvl('III').reward} at ${lvl('III').after}, ${lvl('IV').reward} at ${lvl('IV').after}, and it keeps growing.`, 'Once per level'],
        ['Chat games', `Be the first to answer a chat game: ${money(CHAT_GAME_PRIZE.money)}, ${CHAT_GAME_PRIZE.points} points and ${CHAT_GAME_PRIZE.xp} XP.`, 'Whenever one pops up'],
        ['`/warp afk`', `${AFK_POOL.points} points for every ${AFK_POOL.minutes} minutes you stand in the AFK room.`, 'While you are AFK'],
      ],
    },
    { type: 'h2', text: 'Three currencies, quickly' },
    {
      type: 'list',
      items: [
        '**Money ($):** the shop, player shops, mall stalls and tags. Check it with `/bal`.',
        '**Points:** from the AFK room, chat games, dungeon clears, weekly and monthly rewards and playtime levels. Spend them on chat colours, glow, or Tokens and keys in `/pointshop`.',
        `**Tokens:** from ${TOKEN_SOURCES_TEXT}. Spend them on crate keys in \`/keys\`, also inside \`/purchase\`.`,
      ],
    },
    { type: 'h2', text: 'Spending tips' },
    {
      type: 'list',
      items: [
        `The shop sells things for 4 times what it pays (it pays ${SELL_PERCENT}%). Check player shops before you buy.`,
        'Picture tags in `/tags` cost $10,000, $30,000 or $100,000. Nice to have, not urgent.',
        'Mall stalls are rented by the week. Make sure your shop earns more than the rent.',
        'Before you sell something rare to the server, check the mall. Another player may pay more.',
      ],
    },
  ],
}
