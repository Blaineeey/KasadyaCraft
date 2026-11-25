import type { PixelIconName, Rarity } from '@/components/ui'

/**
 * Server features for the home page "crafting table".
 * Each feature has a pretend recipe (3x3 grid of icons, null = empty slot).
 * Every number and command here was checked against the live configs on
 * 2026-11-25 (see the INTERACTIVITY report): LuckPerms groups (plots.plot.N),
 * Essentials (starting-balance 250, warps), ToastedAFK (10 points / 1200 s),
 * ExcellentCrates (5 crates), DeluxeMenus DUNGEON/*.yml, BetterRTP, ODailyQuests.
 * Owner: INTERACTIVITY ENGINEER.
 */

export interface Feature {
  id: string
  name: string
  /** Result item shown in the output slot. */
  icon: PixelIconName
  rarity: Rarity
  /** 9 cells, row by row. */
  recipe: (PixelIconName | null)[]
  /** One short line under the title, tooltip style. */
  flavour: string
  /** 2-3 plain sentences. */
  body: string
  commands: string[]
  href: string
  linkLabel: string
}

const _ = null

export const features: Feature[] = [
  {
    id: 'plots',
    name: 'Your own plot',
    icon: 'plot',
    rarity: 'uncommon',
    recipe: [_, 'flag', _, _, 'house', _, 'grass', 'grass', 'grass'],
    flavour: 'Build it your way. Nobody can grief it.',
    body: 'Everyone gets 1 free plot in the plot world. Ranks raise the limit, up to 6 plots with MVP++. Build a base, a farm or a shop front.',
    commands: ['/plot auto', '/plot home'],
    href: '/wiki/plots',
    linkLabel: 'Plots in the wiki',
  },
  {
    id: 'shops',
    name: 'Shops and the Mall',
    icon: 'shop',
    rarity: 'rare',
    recipe: ['coin', 'coin', 'coin', _, 'chest', _, 'emerald', _, 'emerald'],
    flavour: 'Sell to real players, not just the server.',
    body: 'You start with $250. The server shop buys back raw materials, but only for a quarter of its price. Players pay better: set up chest shops on your plot or rent a stall in the Shopping Mall.',
    commands: ['/shop', '/warp mall', '/trade'],
    href: '/wiki/player-shops',
    linkLabel: 'Player shops',
  },
  {
    id: 'quests',
    name: 'Daily quests',
    icon: 'quest',
    rarity: 'common',
    recipe: [_, 'book', _, 'star', 'check', 'star', _, 'coin', _],
    flavour: 'Something to do every single day.',
    body: 'New quests show up every day. Finish them for rewards, then grab your daily reward too. Log in, check the list, go.',
    commands: ['/dquests', '/rewards'],
    href: '/wiki/rewards',
    linkLabel: 'Rewards and quests',
  },
  {
    id: 'dungeon',
    name: 'Lab of Horrors',
    icon: 'boss',
    rarity: 'epic',
    recipe: ['sword', _, 'shield', _, 'skull', _, 'potion', 'key', 'potion'],
    flavour: 'Bring friends. Draedon is waiting.',
    body: 'Our dungeon has rooms full of custom mobs and a boss fight with Draedon at the end. Make a party, fight through, then forge Chamber keys at the Locksmith to open the raid chests.',
    commands: ['/warp dungeon', '/dungeon', '/locksmith', '/dungeoninfo'],
    href: '/wiki/dungeon',
    linkLabel: 'Dungeon guide',
  },
  {
    id: 'crates',
    name: 'Crates',
    icon: 'chest',
    rarity: 'rare',
    recipe: [_, 'key', _, 'key', 'chest', 'key', _, 'key', 'spawner'],
    flavour: 'Five crates. One key each. Open it.',
    body: 'The Vote, Resource, Trim, Epic and Spawner crates wait at the crates warp. Each one needs its own key. Get keys from /rewards, rank kits, playtime levels, or with Tokens in /keys.',
    commands: ['/warp crates', '/keys'],
    href: '/wiki/crates',
    linkLabel: 'Crates and keys',
  },
  {
    id: 'spawners',
    name: 'Spawners',
    icon: 'spawner',
    rarity: 'epic',
    recipe: [_, 'book', _, _, 'pickaxe', _, _, 'gem', _],
    flavour: 'Silk Touch it, take it home.',
    body: 'Found a spawner in the wild? Mine it with a Silk Touch diamond or netherite pickaxe and it is yours. Up to 2 spawners per chunk.',
    commands: ['/rtp'],
    href: '/wiki/spawners',
    linkLabel: 'Spawner rules',
  },
  {
    id: 'afk',
    name: 'AFK pool',
    icon: 'pool',
    rarity: 'uncommon',
    recipe: [_, _, _, 'coin', 'clock', 'coin', _, 'pool', _],
    flavour: 'Going to eat? Leave your player here.',
    body: 'Stand in the AFK pool and you earn 10 points every 20 minutes, even while you are away from the keyboard.',
    commands: ['/warp afk'],
    href: '/wiki/rewards',
    linkLabel: 'AFK rewards',
  },
  {
    id: 'tags',
    name: 'Chat tags',
    icon: 'tag',
    rarity: 'legendary',
    recipe: [_, 'coin', _, 'chat', 'tag', 'chat', _, 'coin', _],
    flavour: 'Show off in chat. Pure looks, no power.',
    body: 'Pick a tag that shows next to your name. You buy tags with in-game money you earned, not real money.',
    commands: ['/tags'],
    href: '/wiki/rewards',
    linkLabel: 'Tags and cosmetics',
  },
  {
    id: 'wild',
    name: 'The wild',
    icon: 'map',
    rarity: 'common',
    recipe: ['grass', 'grass', 'grass', _, 'pickaxe', _, _, 'compass', _],
    flavour: 'Fresh land, ten thousand blocks of it.',
    body: 'Random-teleport into the wild for fresh land to explore and mine. Set homes so you can always get back. Members get 1 home, ranks get up to 10.',
    commands: ['/rtp', '/sethome', '/home', '/spawn'],
    href: '/wiki/commands',
    linkLabel: 'All commands',
  },
]
