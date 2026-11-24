/**
 * Verified server facts for the starter guides, /play and /games/minecraft.
 * Read-only check against the live Survival + Hub configs on CHECKED.
 * Every value names its source so the next person can re-check it quickly
 * (<srv> = the Survival volume, <hub> = the Hub volume, see docs/SITE_PLAN.md section 9).
 *
 * Owner: STARTER-GUIDE WRITER. Change a number here and every guide follows.
 */
import type { GuideArtName } from '@/components/guides/guide-art'
import type { RankId } from '@/lib/content'

export const CHECKED = '2026-11-25'

/** <srv>/plugins/Essentials/config.yml starting-balance */
export const STARTING_BALANCE = 250

/** EconomyShopGUI shops/*.yml: raw materials sell for 25% of their buy price. */
export const SELL_PERCENT = 25

/** Skript scripts/rtp.sk: /rtp, /wild, /nethertp, /endtp all have a 60 s cooldown. */
export const RTP_COOLDOWN_SECONDS = 60

/** World border of the wild (functional tester log + RTP menu lore "10,000 x 10,000"). */
export const WILD_SIZE = '10,000 x 10,000'

/** CombatLogX config.yml timer.default-timer, kill-time QUIT. */
export const COMBAT_TAG_SECONDS = 10

/** PlotSquared config/worlds.yml (PlotWorld): plot.size 51, road.width 17, economy.use false. */
export const PLOT = { size: 51, road: 17 } as const

/** QuickShop-Hikari config.yml: shop.cost, fee-for-price-change, tax 0.05, limits.use false. */
export const QUICKSHOP = { createCost: 100, priceChangeFee: 50, taxPercent: 5 } as const

/** ToastedAFK config.yml: playerpoints give 10 every 1200 s inside the AFK room (/warp afk). */
export const AFK_POOL = { points: 10, minutes: 20 } as const

/**
 * AdvancedRegionMarket regions.yml (shoppingmall) + WorldGuard region sizes.
 * vent-2..20 = 5x5 at $5,000 / 7 days (max 30 days ahead); vent-21..30 = 11x12 at $10,000 / 7 days (max 60).
 * Sign clicks from config.yml SignClickActions; warning from RentRegionExpirationWarningTime '2d'.
 */
export const MALL = {
  stalls: 30,
  small: { count: 20, size: '5 x 5 blocks', price: 5000, days: 7, maxDays: 30 },
  big: { count: 10, size: 'about 11 x 12 blocks', price: 10000, days: 7, maxDays: 60 },
  warningDays: 2,
} as const

/**
 * Rank ladder. Prices: DeluxeMenus gui_menus/PURCHASE/Ranks.yml (FlareTokens, each rank needs the one before).
 * Plots: LuckPerms plots.plot.N. Homes: Essentials sethome-multiple. Mall stalls: ARM Limits.
 * Kit cooldowns: Essentials kits.yml delay.
 */
export interface RankStep {
  id: RankId | 'member'
  name: string
  tokens: number | null
  plots: number
  homes: number
  stalls: number
  kit: string
  kitEvery: string
}

export const RANK_LADDER: RankStep[] = [
  { id: 'member', name: 'Member', tokens: null, plots: 1, homes: 1, stalls: 1, kit: 'starter', kitEvery: '24 hours' },
  { id: 'vip', name: 'VIP', tokens: 1000, plots: 2, homes: 2, stalls: 2, kit: 'vip', kitEvery: '24 hours' },
  { id: 'vip-plus', name: 'VIP+', tokens: 2000, plots: 3, homes: 4, stalls: 2, kit: 'vip+', kitEvery: '2 days' },
  { id: 'mvp', name: 'MVP', tokens: 2500, plots: 4, homes: 6, stalls: 3, kit: 'mvp', kitEvery: '3 days' },
  { id: 'mvp-plus', name: 'MVP+', tokens: 3000, plots: 5, homes: 8, stalls: 4, kit: 'mvp+', kitEvery: '5 days' },
  { id: 'mvp-plus-plus', name: 'MVP++', tokens: 3500, plots: 6, homes: 10, stalls: 5, kit: 'mvp++', kitEvery: '7 days' },
]

/**
 * Commands each rank adds, taken from the LuckPerms group nodes (fresh export 2026-11-25),
 * NOT from the rank menu lore: the menu also lists perks with no plugin behind them
 * (/invsort, /chestsort, /heads, anvil colours, chest-shop limits, "multiple claims").
 */
export const RANK_COMMANDS: { rank: string; commands: string }[] = [
  { rank: 'VIP', commands: '`/nv` night vision, `/sit`, `/craft` (a crafting table anywhere), `/kittycannon`' },
  { rank: 'VIP+', commands: '`/back`, `/tpahere`, `/lay`, `/anvil`, `/grindstone`, `/carttable`' },
  { rank: 'MVP', commands: '`/repair`, `/feed`, `/condense`, `/seen`, `/loom`, `/crawl`' },
  { rank: 'MVP+', commands: '`/fly`, `/heal`, `/hat`, `/echest`, `/stonecutter`, `/beezooka`' },
  { rank: 'MVP++', commands: '`/god`, `/pweather`, `/bigtree`, `/smite`, `/smithtable`, `/clear` (empties your own inventory)' },
]

/** Essentials kits.yml, item by item. Rank kits carry the lore "Cannot be sold to the shop". */
export const KITS: { kit: string; title: string; every: string; items: string[] }[] = [
  {
    kit: 'starter',
    title: 'Starter kit',
    every: 'Every 24 hours',
    items: [
      'Wooden sword (Sharpness I, Unbreaking I)',
      'Wooden pickaxe, axe, shovel, hoe (Efficiency II, Unbreaking I)',
      '16 bread',
      'Full leather armour (Protection I, Unbreaking I)',
    ],
  },
  {
    kit: 'vip',
    title: 'VIP kit',
    every: 'Every 24 hours',
    items: [
      'Iron sword (Sharpness II, Unbreaking II)',
      'Iron pickaxe, axe, shovel (Efficiency II, Unbreaking II)',
      '32 cooked beef, 32 torches',
      '8 bottles o’ enchanting',
    ],
  },
  {
    kit: 'vip+',
    title: 'VIP+ kit',
    every: 'Every 2 days',
    items: [
      'Full iron armour (Protection II, Unbreaking II, boots with Feather Falling II)',
      'Bow (Power II, Unbreaking II) and 64 arrows',
      '32 golden carrots, 2 golden apples',
      '16 bottles o’ enchanting',
      '1 Resource crate key',
    ],
  },
  {
    kit: 'mvp',
    title: 'MVP kit',
    every: 'Every 3 days',
    items: [
      'Diamond sword (Sharpness III, Looting I, Unbreaking III)',
      'Diamond pickaxe (Efficiency III, Fortune I, Unbreaking III)',
      'Diamond axe (Efficiency III, Unbreaking III)',
      '4 golden apples, 8 ender pearls',
      '24 bottles o’ enchanting',
      '1 Resource crate key',
    ],
  },
  {
    kit: 'mvp+',
    title: 'MVP+ kit',
    every: 'Every 5 days',
    items: [
      'Full diamond armour (Protection III, Unbreaking III, boots with Feather Falling III)',
      'Shield (Unbreaking III)',
      '6 golden apples',
      '32 bottles o’ enchanting',
      '1 Epic crate key',
    ],
  },
  {
    kit: 'mvp++',
    title: 'MVP++ kit',
    every: 'Every 7 days',
    items: [
      'Netherite sword (Sharpness IV, Looting II, Unbreaking III, Mending)',
      'Netherite pickaxe (Efficiency IV, Fortune II, Unbreaking III, Mending)',
      'Totem of Undying',
      '8 golden apples, a shulker box',
      '64 bottles o’ enchanting',
      '1 Epic crate key, 1 Trim crate key',
    ],
  },
]

/** EconomyShopGUI shops/*.yml: buy price / what the shop pays (null = the shop will not buy it). */
export const SHOP_PRICES: { item: string; buy: number; sell: number | null; note?: string }[] = [
  { item: 'Cobblestone', buy: 0.4, sell: 0.1 },
  { item: 'Oak Log', buy: 8, sell: 2 },
  { item: 'Sugar Cane', buy: 2, sell: 0.5 },
  { item: 'Iron Ingot', buy: 12, sell: 3 },
  { item: 'Diamond', buy: 400, sell: 100 },
  { item: 'Netherite Scrap', buy: 320, sell: 80 },
  { item: 'Glass', buy: 2, sell: null, note: 'Crafted' },
  { item: 'Chest', buy: 8.33, sell: null, note: 'Crafted' },
  { item: 'Golden Apple', buy: 136.5, sell: null, note: 'Crafted' },
  { item: 'Emerald', buy: 24, sell: null, note: 'Not on the sell list' },
]

/** DeluxeMenus gui_menus/BASIC/Playtime.yml (first levels). */
export const PLAYTIME_LEVELS = [
  { level: 'I', after: '1 hour', reward: '100 XP' },
  { level: 'II', after: '3 hours', reward: '$500' },
  { level: 'III', after: '6 hours', reward: '$1,000' },
  { level: 'IV', after: '10 hours', reward: '$1,500' },
  { level: 'V', after: '15 hours', reward: '100 Tokens and 500 points' },
] as const

/**
 * Lab of Horrors. MythicDungeons groups/LabOfHorrors/{general,stages,lootchests}.yml,
 * MythicMobs mobs/LabOfHorrors/*.yml, skills/LabOfHorrors/locksmith.yml, droptables/LabOfHorrors/loh.yml.
 * Monster counts are the kill objectives of each stage.
 */
export const DUNGEON = {
  minPlayers: 1,
  maxPlayers: 5,
  rooms: 7,
  supplyChests: 12,
  rewardRoomMinutes: 2,
  discipleHealth: 1000,
  bossHealth: 10000,
  roomMonsters: [21, 13, 13, 13, 9, 11, 21],
} as const

export interface Ingredient {
  item: string
  count: number
  art: GuideArtName
}

export const CHAMBER_KEYS: { name: string; art: GuideArtName; opens: string; items: number; recipe: Ingredient[] }[] = [
  {
    name: 'Diamond Chamber Key',
    art: 'key-diamond',
    opens: 'Diamond Raid Chest',
    items: 2,
    recipe: [
      { item: 'Diamond', count: 64, art: 'diamond' },
      { item: 'Key Fragment', count: 16, art: 'fragment' },
      { item: 'Infected Flesh', count: 4, art: 'flesh' },
      { item: 'Cobalt Ingot', count: 3, art: 'ingot-cobalt' },
    ],
  },
  {
    name: 'Emerald Chamber Key',
    art: 'key-emerald',
    opens: 'Emerald Raid Chest',
    items: 3,
    recipe: [
      { item: 'Emerald', count: 64, art: 'emerald' },
      { item: 'Key Fragment', count: 32, art: 'fragment' },
      { item: 'Infected Flesh', count: 16, art: 'flesh' },
      { item: 'Lab Sample', count: 5, art: 'sample' },
      { item: 'Cobalt Ingot', count: 4, art: 'ingot-cobalt' },
      { item: 'Mithril Ingot', count: 2, art: 'ingot-mithril' },
    ],
  },
  {
    name: 'Star Chamber Key',
    art: 'key-star',
    opens: 'Star Raid Chest',
    items: 3,
    recipe: [
      { item: 'Key Fragment', count: 64, art: 'fragment' },
      { item: 'Infected Flesh', count: 32, art: 'flesh' },
      { item: 'Lab Sample', count: 10, art: 'sample' },
      { item: 'Cobalt Ingot', count: 6, art: 'ingot-cobalt' },
      { item: 'Mithril Ingot', count: 4, art: 'ingot-mithril' },
      { item: 'Soulsteel Ingot', count: 3, art: 'ingot-soulsteel' },
    ],
  },
]

/** Money formatting used in guide text: 0.4 -> "$0.40", 8 -> "$8", 5000 -> "$5,000". */
export function money(n: number): string {
  const whole = Number.isInteger(n)
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 })}`
}
