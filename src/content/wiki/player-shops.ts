import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - QuickShop-Hikari config.yml: shop.blacklist-world [spawn, dungeons, world, world_nether, world_the_end],
 *   shop.cost 100, refund false, price-change-requires-fee true / fee 50, tax 0.05 (seller pays), tax-account "" (sink)
 * - QuickShop interaction.yml: left-click shop block or sign = trade, right-click sign = control panel
 * - LuckPerms default: quickshop.create.sell/buy/changeprice, quickshop.find (plugin default)
 * - AdvancedRegionMarket regions.yml (shoppingmall): 30 rent regions: 20 x $5,000 per 7 days (max 30 days ahead;
 *   vent-1 is misconfigured), 10 x $10,000 per 7 days (max 60 days ahead), payback 0, autorestore true;
 *   config.yml Limits default 1; DeluxeMenus BASIC/Guide.yml (5x5 fixed / 10x10 editable tents)
 * - shoppingmall gamerule keepInventory true; WorldGuard mall region denies pvp + mob-spawning (QA / zSpawner logs)
 * - 2026-11-27 KasadyaMall 1.0.0 (/ah): lists QuickShop SELLING shops in world shoppingmall with stock (not buying, frozen
 *   or sold-out shops), buys through QuickShop's own actionSelling (same price, 5% tax, owner message); amounts 1/8/16/32/64/max;
 *   'Visit the stall' runs /warp mall. Plot shops are never listed. Sandbox test t/ahtest.js 31/31.
 */
export const playerShops: WikiPage = {
  slug: 'player-shops',
  title: 'Player shops and the Shopping Mall',
  summary: 'Sell to other players with chest shops on your plot, or rent a tent stall in the Shopping Mall, where everyone can buy from you with /ah.',
  icon: 'shop',
  category: 'economy',
  order: 2,
  updated: '2026-11-27',
  keywords: ['quickshop', '/qs', 'chest shop', 'mall', 'stall', 'tent', 'rent', '/warp mall', '/arm', 'tax', 'sell to players', '/ah', 'auction', 'auction house', 'buy from anywhere'],
  related: ['economy', 'plots', 'ranks'],
  body: [
    {
      type: 'p',
      text: 'Player shops are where the real prices are set. You can run chest shops in two places only: **on your plot** and **in the Shopping Mall**. Shops cannot be made at spawn, in the Wild, the Nether, the End or the dungeon.',
    },
    { type: 'h2', text: 'Make a chest shop' },
    {
      type: 'steps',
      items: [
        { title: 'Place a chest', text: 'On your plot, or inside a Mall stall you rent.' },
        { title: 'Hold the item', text: 'Hold one of the items you want to sell.' },
        { title: 'Punch the chest', text: 'Left-click the chest while holding the item.' },
        { title: 'Type the price', text: 'Type the price for one item in chat. Making a shop costs $100.' },
        { title: 'Stock it', text: 'Open the chest and put your items in. Done!' },
      ],
    },
    { type: 'h2', text: 'Buying from a shop' },
    {
      type: 'p',
      text: 'Left-click a shop chest or its sign, then type how many you want in chat. The money goes straight to the owner. Shops in the Shopping Mall can also be bought from anywhere with `/ah`, see below.',
    },
    { type: 'h2', text: 'Running your shop' },
    {
      type: 'list',
      items: [
        'Right-click your shop sign for the control panel.',
        'Look at your shop and type `/qs price <amount>` to change the price. Each change costs $50.',
        '`/qs buy` turns the shop into a buying shop, so players sell to you. `/qs sell` switches it back.',
        '`/qs find <item>` finds the nearest shop that sells something.',
      ],
    },
    {
      type: 'table',
      caption: 'Chest shop fees',
      head: ['Fee', 'Amount'],
      rows: [
        ['Make a shop', '$100. You do not get it back if you remove the shop.'],
        ['Change the price', '$50'],
        ['Tax on each sale', '5%, taken from the seller'],
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Think about the 5% tax and the $50 price fee when you set your price. Pick a price you will not need to change every hour.',
    },
    { type: 'h2', text: 'The Shopping Mall' },
    {
      type: 'p',
      text: '`/warp mall` takes you to the Mall. It has 30 tent stalls you rent with in-game money. It is a safe zone with keep inventory on, so it is also the best place to meet up and trade.',
    },
    {
      type: 'table',
      caption: 'Mall stalls',
      head: ['Stall', 'How many', 'Rent', 'Pay ahead up to', 'Building'],
      rows: [
        ['Small tent (5 x 5)', '20', '$5,000 per 7 days', '30 days', 'Walls and floor are fixed'],
        ['Large tent (10 x 10)', '10', '$10,000 per 7 days', '60 days', 'Fully editable'],
      ],
    },
    {
      type: 'steps',
      items: [
        { title: 'Pick a free stall', text: 'Walk around the Mall and find a stall that is for rent.' },
        { title: 'Rent it', text: 'Use the sign at the stall to rent it for 7 days.' },
        { title: 'Set up shop', text: 'Place your chest shops inside the stall.' },
        { title: 'Keep it', text: 'Use the sign again to pay ahead before the time runs out.' },
      ],
    },
    {
      type: 'p',
      text: 'Everyone can rent **1 stall**. Ranks raise the limit, see [Ranks](/wiki/ranks). `/arm` opens a menu with the stalls you rent.',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Do not let your rent run out',
      text: 'When rent runs out, the stall resets to how it was before you rented it, and what you left inside is gone. Pay ahead in time.',
    },
    { type: 'h2', text: 'Buy from the Mall anywhere: /ah' },
    {
      type: 'p',
      text: '`/ah` lists everything the shops in the Shopping Mall are selling right now, and you can buy it from anywhere on Survival. It is not an auction: you pay the shop\u2019s own price.',
    },
    {
      type: 'steps',
      items: [
        { title: 'Open the list', text: 'Every item for sale in a mall stall, with its price, stock and seller. Sort by newest, price or name. Search with `/ah <name>`, for example `/ah diamond`.', command: '/ah' },
        { title: 'Pick an item', text: 'Choose how many: 1, 8, 16, 32, 64 or the most you can afford and carry. The total is shown before you buy.' },
        { title: 'Confirm', text: 'You pay the same price as at the chest and the items go into your inventory. The owner gets the money (minus the 5% tax) and a message.' },
      ],
    },
    {
      type: 'list',
      items: [
        'Only shops in the Mall are listed. Chest shops on plots are not: to buy from those, visit the plot.',
        'Shops that buy items from players, frozen shops and sold-out shops do not show up.',
        '**Visit the stall** in the buy menu takes you to `/warp mall` and tells you where that stall is.',
        'If the owner changes the price while you look, the purchase stops and the menu shows the new price.',
      ],
    },
    { type: 'h2', text: 'Other ways to trade' },
    {
      type: 'p',
      text: 'For one-off deals use `/trade <player>` or `/pay <player> <amount>`. See [Money and the shop](/wiki/economy).',
    },
  ],
}
