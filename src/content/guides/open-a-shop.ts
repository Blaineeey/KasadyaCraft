import type { Guide } from '@/lib/content'
import { CHECKED, MALL, QUICKSHOP, RANK_LADDER, money } from './facts'

/*
 * Sources: QuickShop-Hikari config.yml (shop-blocks chest/trapped chest/ender chest/barrel, cost 100,
 * refund false, fee-for-price-change 50, tax 0.05, lock true, auto-sign, allow-shop-without-space-for-sign
 * false, blacklist-world spawn/dungeons/world/world_nether/world_the_end, limits.use false),
 * interaction.yml (left-click sign or chest = trade, right-click sign = control panel),
 * lang en-US messages.yml (chat prompts), AdvancedRegionMarket regions.yml + config.yml (Limits,
 * SignClickActions, RentRegionExpirationWarningTime 2d, autorestore), WorldGuard stall regions.
 * KasadyaMall 1.0.0 (2026-11-27): /ah lists and sells the selling shops in world shoppingmall from anywhere; plot shops are not listed.
 */
const stallLimit = (name: string) => RANK_LADDER.find((r) => r.name === name)!.stalls

export const openAShop: Guide = {
  slug: 'open-a-shop',
  title: 'Open your own shop',
  summary: 'Set up a chest shop step by step, price it right, and rent a stall in the Shopping Mall.',
  icon: 'shop',
  stage: 'next-steps',
  order: 2,
  minutes: 5,
  updated: CHECKED,
  next: 'first-dungeon',
  related: ['player-shops', 'economy', 'plots'],
  body: [
    {
      type: 'p',
      text: 'Player shops are where the real trading happens. A shop is a chest with a sign on it. It sells to (or buys from) other players, even while you are offline.',
    },
    { type: 'h2', text: 'Where shops work' },
    {
      type: 'list',
      items: [
        '**On your own plot.**',
        '**In a Shopping Mall stall you rent.**',
        'Not in the wild, at spawn or in the dungeon. The server blocks shops there.',
      ],
    },
    { type: 'h2', text: 'What it costs' },
    {
      type: 'table',
      caption: 'Chest shop costs',
      head: ['Thing', 'Price'],
      rows: [
        ['Making a shop', `${money(QUICKSHOP.createCost)}. You do not get it back if you remove the shop.`],
        ['Changing the price later', `${money(QUICKSHOP.priceChangeFee)} each time`],
        ['Tax on each sale', `${QUICKSHOP.taxPercent}% of the sale`],
        ['How many shops', 'No limit'],
      ],
    },
    { type: 'h2', text: 'Make a selling shop' },
    {
      type: 'steps',
      items: [
        { title: 'Place a chest', text: 'A chest, trapped chest or barrel works. Keep the front clear: the shop sign goes there.' },
        { title: 'Fill it', text: 'Put the items you want to sell inside.' },
        { title: 'Hold the item and hit the chest', text: 'Hold one of those items and **left-click** the chest.' },
        { title: 'Type your price in chat', text: 'Chat asks how much you want for **one** item. Type a number like `150` and press Enter. The sign appears by itself.' },
      ],
    },
    { type: 'h2', text: 'Make a buying shop' },
    {
      type: 'p',
      text: 'A buying shop pays other players to sell to you. Handy when you need a lot of one thing, like sugar cane or iron.',
    },
    {
      type: 'steps',
      items: [
        { title: 'Make a normal shop first', text: 'Follow the steps above with an empty chest and the item you want to buy.' },
        { title: 'Switch it to buying', text: '**Right-click** the shop sign to open its control panel, then switch the mode to buying.' },
        { title: 'Keep money on you', text: 'The shop pays from your balance. Leave room in the chest for what comes in.' },
      ],
    },
    { type: 'h2', text: 'Using a shop' },
    {
      type: 'p',
      text: 'To buy from someone else, **left-click** their sign or chest. Chat asks how many you want. Type a number, or `all` to take as many as you can.',
    },
    { type: 'p', text: 'Shop chests are locked, so nobody else can open yours and grab the stock.' },
    { type: 'h2', text: 'Pricing tips' },
    {
      type: 'list',
      items: [
        'Check `/shop` first. If the server sells an item for $8, few players will pay you $20.',
        'Crafted things like glass, bricks, torches and chests can only be sold to players. That is your edge.',
        `Every price change costs ${money(QUICKSHOP.priceChangeFee)}, so start with a fair price.`,
        'Keep your shops stocked so buyers come back.',
      ],
    },
    { type: 'h2', text: 'Rent a stall in the Shopping Mall' },
    {
      type: 'p',
      text: `The mall is where everyone goes to shop: \`/warp mall\`. It has ${MALL.stalls} stalls you rent with in-game money.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Mall shops sell while nobody walks by',
      text: 'Everything a mall stall sells shows up in `/ah`, so players can buy from you from anywhere on the server. A chest shop on your plot only sells to players who come and visit. More on [Player shops](/wiki/player-shops).',
    },
    {
      type: 'table',
      caption: 'Mall stalls',
      head: ['Stall', 'Size', 'Rent', 'Pay ahead up to'],
      rows: [
        [`Small (${MALL.small.count})`, MALL.small.size, `${money(MALL.small.price)} per ${MALL.small.days} days`, `${MALL.small.maxDays} days`],
        [`Big (${MALL.big.count})`, MALL.big.size, `${money(MALL.big.price)} per ${MALL.big.days} days`, `${MALL.big.maxDays} days`],
      ],
    },
    {
      type: 'steps',
      items: [
        { title: 'Find a free stall', text: 'Walk the mall and look for a stall sign that is up for rent. **Left-click** a sign to see its price and size.' },
        { title: 'Rent it', text: `**Right-click** the sign to rent the stall for ${MALL.small.days} days. The rent comes off your balance.` },
        { title: 'Extend in time', text: `Right-click your sign again to add more days. You get a warning ${MALL.warningDays} days before the rent runs out.` },
        { title: 'Set up shop', text: 'Build inside your stall and place chest shops, the same way as on your plot.' },
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      text: 'When the rent runs out, the stall resets for the next renter. Extend it in time, or empty your chests before it ends.',
    },
    {
      type: 'p',
      text: `How many stalls you can rent depends on your rank: ${stallLimit('Member')} for members, ${stallLimit('VIP')} for VIP and VIP+, ${stallLimit('MVP')} for MVP, ${stallLimit('MVP+')} for MVP+ and ${stallLimit('MVP++')} for MVP++.`,
    },
  ],
}
