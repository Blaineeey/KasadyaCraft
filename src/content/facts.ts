/**
 * Shared server facts for the wiki (src/content/wiki), the starter guides (src/content/guides)
 * and the wiki components. One list per fact, so a rebalance means one edit here.
 * Read-only check against the live Survival configs on FACTS_CHECKED
 * (<srv> = the Survival volume, see docs/SITE_PLAN.md section 9).
 *
 * Token amounts are NOT repeated here: they come from tokenSources in src/lib/store.ts (the store's
 * single source of truth), so /store, /wiki and /guides always agree.
 */
import { PLAYTIME_MENU, tokenSources, type TokenSource } from '@/lib/store'

export const FACTS_CHECKED = '2026-11-25'

/** Tokens one source pays (DailyRewards, ODailyQuests global_reward, Playtime.yml), via src/lib/store.ts. */
const tokensFrom = (id: TokenSource['id']): number => tokenSources.find((t) => t.id === id)?.tokens ?? 0

/** Money formatting: 0.4 -> "$0.40", 8 -> "$8", 5000 -> "$5,000". */
export function money(n: number): string {
  const whole = Number.isInteger(n)
  return `$${n.toLocaleString('en-US', { minimumFractionDigits: whole ? 0 : 2, maximumFractionDigits: 2 })}`
}

/** Plain count with thousands separators: 2000 -> "2,000". */
export const count = (n: number) => n.toLocaleString('en-US')

/** "a", "a and b", "a, b and c". */
export function joinAnd(parts: string[]): string {
  if (parts.length <= 2) return parts.join(' and ')
  return `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}`
}

/** 1 -> "I", 28 -> "XXVIII". */
export function roman(n: number): string {
  const table: [number, string][] = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ]
  let out = ''
  let rest = n
  for (const [value, letters] of table) {
    while (rest >= value) {
      out += letters
      rest -= value
    }
  }
  return out
}

/* ------------------------------------------------------------- server shop */

/**
 * <srv>/plugins/EconomyShopGUI/sections/*.yml `enable:` flags (re-read 2026-11-25 09:28).
 * A section with `enable: false` does not load at all: its items cannot be bought OR sold.
 * Z_EverythingElse (505 entries: raw ores, nuggets, netherite scrap, chests, torches, golden apples...)
 * is switched off, so the live /shop has 7 sections and 338 items. When the server team turns it
 * back on, flip `enabled` here and every page that checks `inShop` picks the items up again.
 */
export const SHOP_SECTIONS = [
  { id: 'Blocks', label: 'Blocks', enabled: true },
  { id: 'Farming', label: 'Farming', enabled: true },
  { id: 'Foraging', label: 'Foraging', enabled: true },
  { id: 'Mobdrops', label: 'Mob Drops', enabled: true },
  { id: 'Ores', label: 'Ores', enabled: true },
  { id: 'Redstone', label: 'Redstone', enabled: true },
  { id: 'Tools', label: 'Tools', enabled: true },
  { id: 'Z_EverythingElse', label: 'Everything Else', enabled: false },
] as const

export type ShopSection = (typeof SHOP_SECTIONS)[number]['id']

/** Labels of the sections players can open right now, in the order of this list. */
export const LIVE_SHOP_SECTIONS: string[] = SHOP_SECTIONS.filter((s) => s.enabled).map((s) => s.label)

const sectionIsLive = (id: ShopSection): boolean => SHOP_SECTIONS.find((s) => s.id === id)?.enabled ?? false

interface PriceEntry {
  buy: number
  /** What the shop pays. null = the shop will not buy it (sell -1 in the config). */
  sell: number | null
  /** The shops/<section>.yml file the item is listed in. */
  section: ShopSection
  note?: string
}

/**
 * <srv>/plugins/EconomyShopGUI/shops/*.yml, buy / sell per item (re-read after the round 3 reprice,
 * files dated 2026-11-25 07:22). Raw materials sell for 25% of the buy price.
 * Raw iron, raw gold, netherite scrap, chests and golden apples are only listed in Z_EverythingElse,
 * which is switched off (see SHOP_SECTIONS), so check `inShop` before quoting them to players.
 * Do NOT tell players to sell iron or gold raw while that section is off: the shop will not take them.
 */
const SHOP = {
  Diamond: { buy: 400, sell: 100, section: 'Ores' },
  'Gold Ingot': { buy: 10, sell: 2.5, section: 'Ores' },
  'Raw Gold': { buy: 15.2, sell: 3.8, section: 'Z_EverythingElse' },
  'Iron Ingot': { buy: 6, sell: 1.5, section: 'Ores' },
  'Raw Iron': { buy: 11.2, sell: 2.8, section: 'Z_EverythingElse' },
  Coal: { buy: 8, sell: 2, section: 'Ores' },
  'Lapis Lazuli': { buy: 8, sell: 2, section: 'Ores' },
  'Oak Log': { buy: 4, sell: 1, section: 'Foraging' },
  Cod: { buy: 4, sell: 1, section: 'Mobdrops' },
  'Sugar Cane': { buy: 1, sell: 0.25, section: 'Farming' },
  Bone: { buy: 0.6, sell: 0.15, section: 'Mobdrops' },
  Cobblestone: { buy: 0.4, sell: 0.1, section: 'Blocks' },
  'Netherite Scrap': { buy: 320, sell: 80, section: 'Z_EverythingElse' },
  Emerald: { buy: 24, sell: null, section: 'Ores', note: 'Not on the sell list' },
  'Netherite Ingot': { buy: 1386, sell: null, section: 'Ores' },
  'Totem of Undying': { buy: 3500, sell: 20, section: 'Tools' },
  Glass: { buy: 1.6, sell: null, section: 'Blocks', note: 'Crafted' },
  Chest: { buy: 6.62, sell: null, section: 'Z_EverythingElse', note: 'Crafted' },
  'Golden Apple': { buy: 86.1, sell: null, section: 'Z_EverythingElse', note: 'Crafted' },
} satisfies Record<string, PriceEntry>

export type ShopItem = keyof typeof SHOP

export interface ShopPrice extends PriceEntry {
  item: ShopItem
  /** True when the item's section is switched on, so players can actually buy (and maybe sell) it today. */
  inShop: boolean
}

export function shopPrice(item: ShopItem): ShopPrice {
  const entry: PriceEntry = SHOP[item]
  return { item, ...entry, inShop: sectionIsLive(entry.section) }
}

export const shopPrices = (items: ShopItem[]): ShopPrice[] => items.map(shopPrice)

/* --------------------------------------------------------- playtime ladder */

export type CrateKey = 'Vote' | 'Resource' | 'Spawner'

export interface PlaytimeLevel {
  level: number
  /** Total time played (statistic_hours_played / statistic_days_played), not calendar time. */
  after: string
  money?: number
  key?: CrateKey
  tokens?: number
  points?: number
  xp?: number
}

/**
 * <srv>/plugins/DeluxeMenus/gui_menus/BASIC/Playtime.yml, LEVEL_N_CLAIM click_commands:
 * `eco give`, `crate key give`, `ft give` (Tokens), `points give`, `exp give` (experience points).
 * Money on L15, L16 and L19-L28 was scaled x0.3 by the economy fixer; L3, L8 and L27 swapped the old
 * TempFly reward for crate keys (gameplay fixer). Total: $467,200, 850 Tokens, 500 points.
 */
export const PLAYTIME_LADDER: PlaytimeLevel[] = [
  { level: 1, after: '1 hour', xp: 100 },
  { level: 2, after: '3 hours', money: 500 },
  { level: 3, after: '6 hours', money: 1000, key: 'Vote' },
  { level: 4, after: '10 hours', money: 1500 },
  { level: 5, after: '15 hours', tokens: 100, points: 500 },
  { level: 6, after: '24 hours', xp: 1000 },
  { level: 7, after: '30 hours', money: 4500 },
  { level: 8, after: '38 hours', money: 5500, key: 'Resource' },
  { level: 9, after: '2 days', money: 7000 },
  { level: 10, after: '3 days', money: 11000 },
  { level: 11, after: '4 days', tokens: 100 },
  { level: 12, after: '5 days', tokens: 150 },
  { level: 13, after: '6 days', xp: 5000 },
  { level: 14, after: '7 days', xp: 10000 },
  { level: 15, after: '8 days', money: 8700 },
  { level: 16, after: '9 days', money: 9600 },
  { level: 17, after: '10 days', tokens: 500 },
  { level: 18, after: '11 days', xp: 7500 },
  { level: 19, after: '12 days', money: 12900 },
  { level: 20, after: '2 weeks', money: 15000 },
  { level: 21, after: '3 weeks', money: 22500 },
  { level: 22, after: '4 weeks', money: 30000 },
  { level: 23, after: '5 weeks', money: 37500 },
  { level: 24, after: '6 weeks', money: 45000 },
  { level: 25, after: '7 weeks', money: 52500 },
  { level: 26, after: '8 weeks', money: 60000 },
  { level: 27, after: '9 weeks', money: 67500, key: 'Spawner' },
  { level: 28, after: '10 weeks', money: 75000 },
]

/** "$1,000 and 1 Vote crate key", "100 Tokens and 500 points", "5,000 XP". */
export function playtimeReward(l: PlaytimeLevel): string {
  const parts: string[] = []
  if (l.money) parts.push(money(l.money))
  if (l.key) parts.push(`1 ${l.key} crate key`)
  if (l.tokens) parts.push(`${count(l.tokens)} Tokens`)
  if (l.points) parts.push(`${count(l.points)} points`)
  if (l.xp) parts.push(`${count(l.xp)} XP`)
  return joinAnd(parts)
}

export const PLAYTIME_TOKENS = PLAYTIME_LADDER.reduce((sum, l) => sum + (l.tokens ?? 0), 0)
export const PLAYTIME_KEY_LEVELS = PLAYTIME_LADDER.filter((l) => l.key)
export const PLAYTIME_TOKEN_LEVELS = PLAYTIME_LADDER.filter((l) => l.tokens)

/* ------------------------------------------------------------ daily quests */

/**
 * <srv>/plugins/ODailyQuests: global mode only (quests_per_category.global 3, renew_interval 1d),
 * quests/global.yml (4 KILL quests, reward EXP_POINTS 2000 each; quest 2 is HOGLIN since the
 * economy fixer), config.yml global_reward: eco give 1500, diamond_block 1, tokens give 25.
 */
export const DAILY_QUESTS = {
  perDay: 3,
  xpEach: 2000,
  pool: [
    { name: 'Danger..', task: 'Kill 20 zombified piglins' },
    { name: 'Pigs can fight', task: 'Kill 10 hoglins (crimson forest)' },
    { name: 'Hot Rod', task: 'Kill 20 blazes' },
    { name: 'Hot Slime Collector', task: 'Kill 15 magma cubes' },
  ],
  bonus: { money: 1500, item: 'a diamond block', tokens: tokensFrom('quests') },
} as const

/** "$1,500, a diamond block and 25 Tokens" */
export const DAILY_QUEST_BONUS = joinAnd([
  money(DAILY_QUESTS.bonus.money),
  DAILY_QUESTS.bonus.item,
  `${DAILY_QUESTS.bonus.tokens} Tokens`,
])

/** One line for guides: "3 Nether hunting quests a day, 2,000 XP each; finish all 3 for ..." */
export const DAILY_QUESTS_LINE = `${DAILY_QUESTS.perDay} Nether hunting quests a day, ${count(DAILY_QUESTS.xpEach)} XP each. Finish all ${DAILY_QUESTS.perDay} for ${DAILY_QUEST_BONUS}.`

/* ----------------------------------------------------------- /rewards menu */

/**
 * <srv>/plugins/DailyRewards/config.yml: daily-cooldown 24, weekly-cooldown 168, monthly-cooldown 720,
 * reward commands (crate key, give, playerpoints, `tokens give` 10 / 50 / 150 since the economy fixer).
 */
export const DAILY_REWARDS = [
  { name: 'Daily', every: '24 hours', items: ['1 Resource crate key', '8 iron ingots', '2 gold ingots'], tokens: tokensFrom('daily') },
  { name: 'Weekly', every: '7 days', items: ['50 points', '2 diamonds', '1 emerald'], tokens: tokensFrom('weekly') },
  {
    name: 'Monthly',
    every: '30 days',
    items: ['100 points', '16 diamonds', '64 iron ingots', '32 gold ingots'],
    tokens: tokensFrom('monthly'),
  },
] as const

export const dailyRewardText = (r: (typeof DAILY_REWARDS)[number]) => joinAnd([`${r.tokens} Tokens`, ...r.items])

/* ------------------------------------------------------------------ Tokens */

/**
 * Every Token source (grep '(ft|tokens|flaretokens) give' over the plugins, CHANGELOG economy fixer).
 * Amounts from src/lib/store.ts tokenSources; the playtime total is summed from PLAYTIME_LADDER above.
 */
export const TOKEN_SOURCES = {
  daily: tokensFrom('daily'),
  weekly: tokensFrom('weekly'),
  monthly: tokensFrom('monthly'),
  quests: tokensFrom('quests'),
  playtime: PLAYTIME_TOKENS,
} as const

/**
 * "`/rewards` (10 a day, 50 a week, 150 a month), the daily quest bonus (25 a day) and playtime levels in
 * `/levels` (850 in total)". /levels, not /playtime: EssentialsX keeps its own /playtime.
 */
export const TOKEN_SOURCES_TEXT = `\`/rewards\` (${TOKEN_SOURCES.daily} a day, ${TOKEN_SOURCES.weekly} a week, ${TOKEN_SOURCES.monthly} a month), the daily quest bonus (${TOKEN_SOURCES.quests} a day) and playtime levels in \`${PLAYTIME_MENU}\` (${count(TOKEN_SOURCES.playtime)} in total)`
