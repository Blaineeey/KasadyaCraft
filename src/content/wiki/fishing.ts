import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-27):
 * - plugins/InfiniteFishing (config.yml, fish.yml, rods.yml, baits.yml, augments.yml, enchantments.yml, tournaments.yml):
 *   fish-size-divider and fish-weight-divider 120 (price = base x (weight + size) / 120), Midas rod loot weight 4 and Celestial 1,
 *   Skeletal / Enchanted / Poseidon's rods not obtainable, minigames, unknown fish ~30%, crab + lightning events (5 HP),
 *   tournaments Monday and Thursday 14:00 and 18:00 Asia/Manila, 10 minutes, min 2 players, top 3 win.
 * - DeluxeMenus FISHING/FishingGuide.yml (/fishguide) and FISHING/Fishing.yml (/fish): the in-game guide, written from those
 *   configs (prices, rods, baits, recipes). Income estimate from the 2026-11-26 balance pass: about $1.1k an hour with a starter
 *   rod, about $2.8k with the Celestial rod.
 * - /sell (EconomyShopGUI) pays $1 for a fish; /fishmarket pays the size/weight price.
 */
const fishLine = { text: 'InfiniteFishing', color: 'dark-gray' } as const

export const fishing: WikiPage = {
  slug: 'fishing',
  title: 'Fishing',
  summary: 'Cast a rod, win a short minigame and land one of over 70 fish. Sell them at /fishmarket, upgrade your rod with bait and cauldron augments, and join the twice-weekly tournaments.',
  icon: 'fish',
  category: 'features',
  order: 3,
  updated: '2026-11-27',
  keywords: [
    '/fish',
    '/fishguide',
    '/fishmarket',
    '/ifcatalog',
    '/ifevaluator',
    '/ifleaderboard',
    '/fishtopscore',
    '/ifparty',
    '/fishui',
    'fishing',
    'fish',
    'rod',
    'bait',
    'augment',
    'cauldron',
    'tournament',
    'minigame',
    'legendary fish',
    'money',
  ],
  related: ['economy', 'rewards', 'world-and-warps'],
  body: [
    {
      type: 'p',
      text: 'Cast any fishing rod into water. When a fish bites, a short minigame starts: win it to land the fish, lose it and the fish swims away. Every fish has a rarity, a size and a weight, and bigger, heavier and rarer fish sell for more. `/fish` opens the fishing menu, `/fishguide` the full guide in game.',
    },
    {
      type: 'slots',
      title: 'What you can catch',
      label: 'Fish rarities',
      columns: 5,
      items: [
        { label: 'Common fish', art: 'fish-common', rarity: 'common', lines: [{ text: '$1 to $19', color: 'gold' }, 'Any rod.', fishLine] },
        { label: 'Uncommon fish', art: 'fish-uncommon', rarity: 'uncommon', lines: [{ text: '$1 to $56', color: 'gold' }, 'Any rod.', fishLine] },
        { label: 'Rare (Silver) fish', art: 'fish-rare', rarity: 'rare', lines: [{ text: '$2 to $133', color: 'gold' }, 'Any rod.', fishLine] },
        { label: 'Epic (Gold) fish', art: 'fish-epic', rarity: 'epic', lines: [{ text: '$10 to $166', color: 'gold' }, 'Needs rod luck 2.', fishLine] },
        { label: 'Legendary (Amethyst) fish', art: 'fish-legendary', rarity: 'legendary', lines: [{ text: '$21 to $433', color: 'gold' }, 'Needs rod luck 3 or 4.', fishLine] },
      ],
    },
    {
      type: 'p',
      text: 'A normal fish sells for about $7 to $9, a big rare one for $100 or more. The special Legendary fish are the Rainbow Fish, the Radioactive Fish and the Golden Fish (with its Silver Star and Gold Star versions).',
    },
    { type: 'h2', text: 'The minigames' },
    {
      type: 'table',
      head: ['Game', 'What you do'],
      rows: [
        ['Click', 'Left-click the number of times shown before the time runs out.'],
        ['Pointer Bar', 'Click when the pointer is in the best zone. Yellow and orange miss.'],
        ['Dance', 'Copy the moves, in order.'],
        ['Struggling Fish, Judgement Area, Moving Rod', 'Follow the hints on screen.'],
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Screen hard to read?',
      text: '`/fishui basic` switches to simple text games, `/fishui pack` back to the picture look, and `/fishui` shows which one you use.',
    },
    { type: 'h2', text: 'Selling fish' },
    {
      type: 'p',
      text: 'Sell at `/fishmarket`: **Sell all fish** sells every fish in your inventory at once. The item shop (`/sell`) pays only $1 per fish, so always use the fish market. About **3 in 10** fish come up unknown, with their real kind, size and weight hidden: shift-click them into `/ifevaluator` (free) before you sell, it might be a rarer fish.',
    },
    {
      type: 'p',
      text: 'Fishing pays about as much as mining: roughly $1,100 an hour with a starter rod, up to about $2,800 an hour with the best rod you can fish up. Better rods and bait pay more.',
    },
    { type: 'h2', text: 'Rods' },
    {
      type: 'p',
      text: '**Luck** unlocks rarer fish, **speed** makes fish bite sooner. Better rods are fished up: keep every one you find.',
    },
    {
      type: 'slots',
      label: 'Fishing rods',
      columns: 5,
      items: [
        { label: 'Fishing Rod', art: 'fishing-rod', rarity: 'common', lines: ['Luck 1.', 'Any normal rod.', fishLine] },
        { label: "Apprentice Angler's Rod", art: 'fishing-rod', rarity: 'uncommon', lines: ['Luck 1.', 'Fished up.', fishLine] },
        { label: 'Silverscale Rod', art: 'fishing-rod', rarity: 'rare', lines: ['Luck 2: Gold fish.', 'Fished up.', fishLine] },
        { label: 'Midas Touch Fishing Rod', art: 'fishing-rod', rarity: 'epic', lines: ['Luck 3: Amethyst fish.', 'Fished up (rare).', fishLine] },
        { label: 'Celestial Angler', art: 'fishing-rod', rarity: 'legendary', lines: ['Luck 4: every fish.', 'Fished up (very rare).', fishLine] },
      ],
    },
    {
      type: 'table',
      caption: 'Rod luck you need',
      head: ['Fish', 'Luck'],
      rows: [
        ['Common, Uncommon and Silver fish', 'Any rod'],
        ['Gold fish and Golden Tuna', '2'],
        ['Amethyst, Rainbow and Golden Fish', '3'],
        ['Radioactive and Gold Star fish', '4'],
      ],
    },
    { type: 'h2', text: 'Bait' },
    {
      type: 'p',
      text: 'Open your inventory, pick up a bait and drop it onto your rod. The rod then lists the bait and how many catches it has left. All baits are fished up.',
    },
    {
      type: 'slots',
      label: 'Baits',
      columns: 6,
      items: [
        { label: 'Generic Bait', art: 'bait', rarity: 'common', lines: ['More Common fish.', '10 catches.', fishLine] },
        { label: 'Simple Bait', art: 'bait', rarity: 'uncommon', lines: ['More Uncommon fish.', '10 catches.', fishLine] },
        { label: 'Magnetic Bait', art: 'bait', rarity: 'rare', lines: ['More Rare fish.', '15 catches.', fishLine] },
        { label: 'Nice Bait', art: 'bait', rarity: 'epic', lines: ['More Epic fish.', '12 catches.', fishLine] },
        { label: 'Wild Bait', art: 'bait', rarity: 'epic', lines: ['More Epic fish.', '8 catches.', fishLine] },
        { label: 'Glowing Worm Bait', art: 'bait', rarity: 'legendary', lines: ['More Legendary fish.', '5 catches.', fishLine] },
      ],
    },
    { type: 'h2', text: 'Augments (cauldron enchants)' },
    {
      type: 'steps',
      items: [
        { title: 'Fill a cauldron with water', text: 'On your plot or in the Wild.' },
        { title: 'Drop the ingredients in', text: 'Drop (Q) one of each ingredient into the cauldron.' },
        { title: 'Right-click with your rod', text: 'Right-click the cauldron with the rod you want to upgrade. Level 1 is the usual result; levels 2 and 3 are lucky rolls.' },
      ],
    },
    {
      type: 'table',
      caption: 'Augment recipes',
      head: ['Augment', 'What it does', 'Ingredients'],
      rows: [
        ['Quick Reel', 'Fish faster', 'Sugar, string'],
        ['Swift Cast', 'Fish faster', 'Sugar, diamond, redstone'],
        ['Bountiful Lure', 'Rarer fish', 'Emerald, lapis lazuli'],
        ['Storm Fisher', 'Rarer fish in rain', 'Emerald, ender pearl'],
        ['Powerful Reel', 'Bigger fish', 'Diamond, lapis lazuli'],
        ['Mystic Bite', 'Treasure', 'Ender pearl, lapis lazuli, glowstone dust'],
        ['Treasure Hunter', 'Treasure', 'Gold ingot, diamond, emerald'],
        ['Everlasting Bait', 'Bait lasts longer', 'Gold ingot, iron ingot'],
        ['Auto Bait', 'Bait refills', 'Gold ingot, redstone, sugar'],
        ['Versatile Bait', 'Bait works better', 'Sugar, lapis lazuli, wheat seeds'],
        ['Long Cast', 'Longer reach', 'Gold ingot, redstone'],
        ['Magnetic Lure', 'Longer reach', 'Iron ingot, redstone, string'],
        ['Shared Bounty', 'Bonus for your fishing party', 'Emerald, gold ingot, netherite ingot'],
        ["Fisher's Bond", 'Bonus for your fishing party', 'Emerald, diamond, lapis lazuli'],
        ['Line Mender', 'Repairs the line', 'Gold ingot, iron ingot, string'],
        ['Monster Repellent', 'Keeps monsters away', 'Blaze powder, spider eye, bone'],
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Enchant books and tomes',
      text: 'Got a fishing enchant book (like Quick Reel)? Drop it onto your rod, like bait. The **Enchanted Fishing Tome** you can fish up is only a collectible: it holds no enchant. Normal enchants do not go on the special rods.',
    },
    { type: 'h2', text: 'Sea treasure and surprises' },
    {
      type: 'p',
      text: 'Besides fish you can reel in Prismarine Crystals, Nautilus Shells, Exotic Tropical Fish, Waterlogged Boots, Mystic Name Tags, Fish Finders, Fishing Tomes, a Heart of the Sea, an Ocean’s Diamond, and very rarely a Trident or an Enchanted Golden Apple.',
    },
    {
      type: 'callout',
      tone: 'warn',
      text: 'Now and then a catch goes wrong: a crab jumps out of the water, or lightning strikes you for 2.5 hearts. Keep your health up and wear armour.',
    },
    { type: 'h2', text: 'Tournaments and leaderboards' },
    {
      type: 'list',
      items: [
        '**Tournaments** every Monday and Thursday at 14:00 and 18:00 Philippine time (UTC+8): catch the most fish in 10 minutes. At least 2 players, the top 3 win.',
        '**Weekly fish top**: the best anglers of the week win prizes. `/fishtopscore` shows the standings.',
        '`/ifleaderboard` shows the all-time top anglers, and `/ifcatalog` every fish you caught (over 70 to find) with your biggest catch.',
        'Many fish only bite at certain times of day. Fish by day and by night to fill your catalog.',
      ],
    },
    { type: 'h2', text: 'Commands' },
    {
      type: 'commands',
      items: [
        { command: '/fish', description: 'The fishing menu.' },
        { command: '/fishguide', description: 'The full fishing guide in game.' },
        { command: '/fishmarket', description: 'Sell your fish.' },
        { command: '/ifevaluator', description: 'Reveal unknown fish (free).' },
        { command: '/ifcatalog', description: 'Your fish collection.' },
        { command: '/ifleaderboard', description: 'All-time top anglers.' },
        { command: '/fishtopscore', description: 'This week’s fish top.' },
        { command: '/ifparty', description: 'Fishing parties: create, invite, join, leave, chat. Not the same as dungeon parties.' },
        { command: '/fishui basic', description: 'Simple text minigames (`/fishui pack` for the picture look).' },
      ],
    },
  ],
}
