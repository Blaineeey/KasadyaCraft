import type { Guide } from '@/lib/content'
import { AFK_POOL, CHECKED, MALL, PLAYTIME_LEVELS, QUICKSHOP, SELL_PERCENT, STARTING_BALANCE, money } from './facts'

/*
 * Sources: EconomyShopGUI shops/*.yml (sell = 25% of buy on raw materials; crafted items and emeralds
 * have sell -1), EconomyShopGUI config.yml (shift-right-click-sell-all, /sellall, /sellgui enabled),
 * ODailyQuests config.yml (global_reward: $1,500 + 1 diamond block) and quests/*.yml (XP or money),
 * DailyRewards config.yml, DeluxeMenus BASIC/Playtime.yml + BASIC/Guide.yml (currencies),
 * ChatGames config.yml (eco give 20/25, chance of more), ToastedAFK config.yml, AlonsoTags tags.yml
 * ($2,500 / $7,500 / $20,000), QuickShop-Hikari config.yml, AdvancedRegionMarket regions.yml.
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
  updated: CHECKED,
  next: 'claim-a-plot',
  related: ['economy', 'player-shops', 'rewards'],
  body: [
    {
      type: 'p',
      text: `You start with **${money(STARTING_BALANCE)}**. Money buys things in \`/shop\` and in player shops, rents mall stalls and unlocks chat tags. Here is how to earn it.`,
    },
    { type: 'h2', text: 'Selling to the server shop' },
    {
      type: 'p',
      text: `Open \`/shop\` or walk over with \`/warp shop\`. The shop sells almost anything, but it only **buys back raw materials**: logs, ores and most ingots, crops, mob drops and fish. It pays **${SELL_PERCENT}%** of its own price.`,
    },
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
    { type: 'p', text: 'So if you farm, smelt or craft, sell it in a player shop. You set the price.' },
    {
      type: 'list',
      items: [
        `**On your plot:** a chest shop costs ${money(QUICKSHOP.createCost)} to set up. Players come to you.`,
        `**In the Shopping Mall:** rent a stall at \`/warp mall\` from ${money(MALL.small.price)} a week, right where everyone shops.`,
      ],
    },
    { type: 'callout', tone: 'tip', text: 'Step by step, with prices and mall rent: [Open your own shop](/guides/open-a-shop).' },
    { type: 'h2', text: 'Free money most players miss' },
    {
      type: 'table',
      caption: 'Easy earnings',
      head: ['Where', 'What you get', 'How often'],
      rows: [
        ['`/dquests`', 'XP or money for each quest. Finish them all for a bonus of $1,500 and a diamond block.', 'Every day'],
        ['`/rewards`', 'Daily: a Resource crate key, 8 iron and 2 gold. The weekly and monthly rewards are bigger.', 'Daily, weekly, monthly'],
        ['`/playtime`', `${lvl('II').reward} at ${lvl('II').after}, ${lvl('III').reward} at ${lvl('III').after}, ${lvl('IV').reward} at ${lvl('IV').after}, and it keeps growing.`, 'Once per level'],
        ['Chat games', 'Be the first to answer a chat game for $20 or more.', 'Whenever one pops up'],
        ['`/warp afk`', `${AFK_POOL.points} points for every ${AFK_POOL.minutes} minutes you stand in the AFK room.`, 'While you are AFK'],
      ],
    },
    { type: 'h2', text: 'Three currencies, quickly' },
    {
      type: 'list',
      items: [
        '**Money ($):** the shop, player shops, mall stalls and tags. Check it with `/bal`.',
        '**Points:** from the AFK room, weekly and monthly rewards and playtime levels. Spend them in `/cosmetics`.',
        '**Tokens:** from playtime levels and some daily quests. Spend them on ranks and crate keys in `/purchase`.',
      ],
    },
    { type: 'h2', text: 'Spending tips' },
    {
      type: 'list',
      items: [
        `The shop sells things for 4 times what it pays (it pays ${SELL_PERCENT}%). Check player shops before you buy.`,
        'Chat tags in `/tags` cost $2,500, $7,500 or $20,000. Nice to have, not urgent.',
        'Mall stalls are rented by the week. Make sure your shop earns more than the rent.',
        'Before you sell something rare to the server, check the mall. Another player may pay more.',
      ],
    },
  ],
}
