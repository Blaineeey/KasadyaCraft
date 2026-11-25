/**
 * Store catalogue + rank data. SINGLE SOURCE OF TRUTH for ranks, crate keys
 * and cosmetics: the wiki (/wiki/ranks, /wiki/crates) imports from here too.
 *
 * Owner: STORE ENGINEER. Types are a contract with the WIKI WRITER: add fields
 * freely, do not rename or remove existing ones.
 *
 * HONESTY RULES (non-negotiable):
 * - There is NO web payment provider today. In game, /purchase (aliases /buy,
 *   /beli, /tokenshop) opens a FlareTokens menu: ranks, keys and points are
 *   bought with Tokens. NEVER tell players to type /store: Skript store.sk owns
 *   that label and only answers "Our store is coming soon!".
 * - Tokens come from /rewards (daily 10, weekly 50, monthly 150), all 3 daily
 *   quests (25) and the playtime ladder (/levels, 850 in total). See
 *   tokenSources below (CHANGELOG, ECONOMY FIXER ~04:40-05:00, 2026-11-25).
 * - Never build a fake checkout, never collect payment details, never invent
 *   prices. Every in-game price below comes from a config (cited per item).
 * - Real-money prices (`web.price`) are PLACEHOLDERS for the owner. The site
 *   never shows a price while `placeholder: true`.
 *
 * FACTS CHECKED 2026-11-25 (read-only) on the Survival server:
 * - plugins/DeluxeMenus/gui_menus/PURCHASE/{Menu,Ranks,Keys,Points}.yml
 * - LuckPerms group nodes (export /root/launch/backups/before-qa-lp-ignoreexempt-2026-11-25)
 * - plugins/Essentials/kits.yml, Essentials config sethome-multiple
 * - plugins/AdvancedRegionMarket/config.yml Limits (Shopping Mall stalls)
 * - plugins/AlonsoTags/tags.yml, DeluxeMenus CHATCOLOR/Minecraft.yml, BASIC/Cosmetics.yml
 * - plugins/ExcellentCrates/crates/*.yml, BASIC/Playtime.yml
 * RE-CHECKED after the GAMEPLAY + ECONOMY FIXERS (CHANGELOG 04:30-05:00):
 * - LP export /root/launch/work/gameplay/gameplay-fix-after.json.gz: mvp++ has no
 *   essentials.god; mvp+ fly only in world=plotworld / world=shoppingmall
 * - PURCHASE/Keys.yml Spawner_Key (100 Tokens, single key), spawner_crate.yml placed
 * - DailyRewards config.yml + ODailyQuests global_reward (token sources)
 *
 * ENVIRONMENT (all optional, read at build time):
 *   NEXT_PUBLIC_TEBEX_STORE_URL     e.g. https://kasadyacraft.tebex.io
 *                                   Set it and Buy buttons link to the Tebex store.
 *   NEXT_PUBLIC_TEBEX_PUBLIC_TOKEN  Tebex Headless API public token. With it (and
 *                                   web.tebexPackageId filled in) the shopping list
 *                                   builds a real Tebex basket and sends the player
 *                                   to Tebex's own checkout.
 *   NEXT_PUBLIC_STORE_CURRENCY      'PHP' (default) or 'USD': which web price to show.
 * With none of them set there is no Buy button: the package window shows a disabled
 * "Web store: soon" button with the reason next to it (how to get it in game + Discord).
 */
import type { SpriteRef } from '@/components/store/sprites'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import type { RankId, Rarity } from '@/lib/content'

export type { RankId }

/* ------------------------------------------------------------------------ */
/* Checkout configuration                                                   */
/* ------------------------------------------------------------------------ */

function httpsUrl(value: string | undefined): string | null {
  if (!value) return null
  try {
    const url = new URL(value.trim())
    return url.protocol === 'https:' ? url.toString().replace(/\/$/, '') : null
  } catch {
    return null
  }
}

/** Tebex webstore URL. null = no web store yet (today). */
export const STORE_CHECKOUT_URL: string | null = httpsUrl(process.env.NEXT_PUBLIC_TEBEX_STORE_URL)

/** Tebex Headless public token (safe to expose: it is a public, read/basket-only key). */
export const TEBEX_PUBLIC_TOKEN: string | null = process.env.NEXT_PUBLIC_TEBEX_PUBLIC_TOKEN?.trim() || null

export type WebCurrency = 'PHP' | 'USD'
export const STORE_CURRENCY: WebCurrency = process.env.NEXT_PUBLIC_STORE_CURRENCY === 'USD' ? 'USD' : 'PHP'

/**
 * off      = no web store: a disabled "Web store: soon" button + how to get it in game + Discord.
 * link     = Buy opens the Tebex store (package page when we know its id).
 * headless = the shopping list creates a Tebex basket and redirects to checkout.
 */
export type CheckoutMode = 'off' | 'link' | 'headless'
export const CHECKOUT_MODE: CheckoutMode = TEBEX_PUBLIC_TOKEN ? 'headless' : STORE_CHECKOUT_URL ? 'link' : 'off'

/* ------------------------------------------------------------------------ */
/* Types                                                                    */
/* ------------------------------------------------------------------------ */

export type StoreCategoryId = 'ranks' | 'keys' | 'cosmetics' | 'support'

export interface StoreCategory {
  id: StoreCategoryId
  name: string
  /** Shorter tab label for phones, e.g. 'Keys' for 'Crate keys'. */
  short?: string
  blurb: string
  icon: PixelIconName
  /** Store sprite for the creative-inventory tab. */
  sprite: SpriteRef
}

export type Price =
  | { currency: 'tokens'; amount: number } // FlareTokens, shown as ⛃
  | { currency: 'points'; amount: number } // PlayerPoints, shown as ✪
  | { currency: 'money'; amount: number } // in-game $ (Vault economy)
  | { currency: 'real'; amount: number; code: 'PHP' | 'USD' } // only once a real checkout exists
  | { currency: 'free' }

/**
 * Real-money listing for the future Tebex store.
 * PLACEHOLDER: the owner sets real prices and the Tebex package id, then flips
 * `placeholder` to false. Until then the site never shows these numbers.
 */
export interface WebListing {
  /** Tebex package ident (recommended) or numeric id. null until the package exists. */
  tebexPackageId: string | null
  price: Record<WebCurrency, number>
  placeholder: boolean
}

export interface RankCommand {
  command: string
  description: string
  /**
   * OWNER DECISION, never shown on the site: why this perk may count as
   * pay-to-win if it is ever sold for real money (Minecraft Usage Guidelines).
   */
  review?: string
}

export interface RankLimits {
  plots: number
  homes: number
  /** Rentable Shopping Mall stalls (AdvancedRegionMarket limit). */
  stalls: number
}

export interface KitItem {
  name: string
  count?: number
  /** Enchantments etc., shown as tooltip lore. */
  lore?: string[]
  sprite: SpriteRef
}

export interface Rank {
  id: RankId
  /** Display name: 'VIP', 'VIP+', 'MVP', 'MVP+', 'MVP++'. */
  name: string
  /** Chat prefix as shown in game (the game renders it in small caps), e.g. '[VIP+]'. */
  prefix: string
  /** Brand/rarity colour token for the rank, e.g. 'var(--chat-green)'. */
  color: string
  order: number
  price: Price | null
  /** Perk lines, short and concrete ("2 plots", "/nv night vision"). Built from the fields below. */
  perks: string[]
  /** Rank kit from plugins/Essentials/kits.yml. */
  kit?: { name: string; cooldown?: string; items: string[]; contents: KitItem[] }
  /* ---- added by the STORE ENGINEER ---- */
  /** One friendly line for cards. */
  tagline: string
  rarity: Rarity
  sprite: SpriteRef
  /** The rank you must own before the /ranks menu lets you buy this one. */
  requires?: RankId
  limits: RankLimits
  /** Commands this rank ADDS (it also keeps everything from the ranks below). */
  commands: RankCommand[]
  web?: WebListing
}

export interface StoreItem {
  id: string
  category: StoreCategoryId
  name: string
  summary: string
  icon: PixelIconName
  rarity: Rarity
  price: Price | null
  perks?: string[]
  /** Exactly how a player gets it, e.g. 'In game: /purchase > Keys'. */
  howToGet: string
  status: 'in-game' | 'coming-soon' | 'free'
  /** For ranks: link the Rank record. */
  rankId?: RankId
  /* ---- added by the STORE ENGINEER ---- */
  sprite: SpriteRef
  /** Commands that open the right in-game menu, first one is the main one. */
  commands?: string[]
  /** "What's inside" lines for crates and bundles. */
  contents?: string[]
  /** Crates only: the headline chances in one short line. The full table is on /wiki/crates. */
  odds?: string
  /** Other ways to get it in game (kits, daily rewards...). */
  alsoFrom?: string[]
  /** Price is "from" (several sizes in game). */
  priceFrom?: boolean
  /** Pack sizes the in-game menu sells, e.g. keys come as 1 or 12. */
  packSizes?: number[]
  /** Small chat-style chips, e.g. the tag names in a tag tier. */
  chips?: { label: string; color: ChipColor }[]
  /** Max you can put on the shopping list (ranks: 1). */
  maxQuantity: number
  web?: WebListing
}

/** Minecraft chat colours used by tags. Mapped to CSS tokens in the store components. */
export type ChipColor =
  | 'red'
  | 'gold'
  | 'yellow'
  | 'green'
  | 'dark-green'
  | 'aqua'
  | 'dark-aqua'
  | 'blue'
  | 'pink'
  | 'dark-purple'
  | 'gray'
  | 'dark-gray'

/* ------------------------------------------------------------------------ */
/* Categories                                                               */
/* ------------------------------------------------------------------------ */

export const storeCategories: StoreCategory[] = [
  {
    id: 'ranks',
    name: 'Ranks',
    blurb: 'VIP to MVP++. More plots, homes and stalls, handy commands and a kit.',
    icon: 'crown',
    sprite: { shape: 'banner5' },
  },
  {
    id: 'keys',
    name: 'Crate keys',
    short: 'Keys',
    blurb: 'Keys for the crates at /warp crates.',
    icon: 'key',
    sprite: { shape: 'key', tone: 'epic' },
  },
  {
    id: 'cosmetics',
    name: 'Cosmetics',
    blurb: 'Chat tags, chat colours, glow and Points. Looks only, nothing that wins fights.',
    icon: 'tag',
    sprite: { shape: 'nametag', tone: 'tagLegendary' },
  },
  {
    id: 'support',
    name: 'Support',
    blurb: 'Want to help the server? Here is how, today.',
    icon: 'heart',
    sprite: { shape: 'glow' },
  },
]

/* ------------------------------------------------------------------------ */
/* Ranks                                                                    */
/* ------------------------------------------------------------------------ */

/** What every player gets for free (LuckPerms group "default"). */
export const defaultLimits: RankLimits = { plots: 1, homes: 1, stalls: 1 }

/**
 * Commands every player has without a rank. /sit, /lay and /crawl are NOT here: since
 * the GAMEPLAY FIXER round 2 (CHANGELOG 06:17-06:48) the default group has gsit.sit/lay/
 * layback/bellyflop/spin/crawl set to false, and they are VIP, VIP+ and MVP perks below.
 */
export const everyoneCommands: RankCommand[] = [
  { command: '/trash', description: 'Throw items away' },
  { command: '/kit starter', description: 'Starter kit once a day' },
  { command: '/chatcolor', description: 'Colour codes in chat' },
]

/**
 * Free extras with no command to type, as full sentences (rendered after the
 * "everyone already has" line). GSit.SitClick stays default true: GSit config
 * Sit.SitMaterials (#stairs, #slabs, carpets, snow), empty-hand-only true.
 * `/sit toggle` is free too and turns click-sitting off and on.
 */
export const everyoneExtras: string[] = ['Anyone can sit on stairs, slabs and carpets: right-click one with an empty hand.']

export const starterKit: { name: string; cooldown: string; items: string[] } = {
  name: 'Starter',
  cooldown: '24 hours',
  items: [
    'Wooden sword (Sharpness I, Unbreaking I)',
    'Wooden pickaxe, axe, shovel and hoe (Efficiency II, Unbreaking I)',
    'Leather armour set (Protection I, Unbreaking I)',
    '16 bread',
  ],
}

const sell = 'Cannot be sold to the shop'

interface RankInput extends Omit<Rank, 'perks' | 'kit'> {
  kit: { name: string; cooldown: string; contents: KitItem[] }
}

function kitLine(item: KitItem): string {
  const base = item.count && item.count > 1 ? `${item.count} ${item.name.toLowerCase()}` : item.name
  const enchants = (item.lore ?? []).filter((l) => l !== sell)
  return enchants.length ? `${base} (${enchants.join(', ')})` : base
}

function buildRank(input: RankInput, below?: Rank): Rank {
  const perks: string[] = []
  if (below) perks.push(`Everything in ${below.name}`)
  perks.push(`${input.prefix} chat prefix`)
  const lim = input.limits
  const prev = below?.limits ?? defaultLimits
  if (lim.plots !== prev.plots) perks.push(`${lim.plots} plots`)
  if (lim.homes !== prev.homes) perks.push(`${lim.homes} homes`)
  if (lim.stalls !== prev.stalls) perks.push(`${lim.stalls} Shopping Mall stalls`)
  for (const c of input.commands) perks.push(`${c.command}: ${c.description.charAt(0).toLowerCase()}${c.description.slice(1)}`)
  perks.push(`${input.kit.name} kit every ${input.kit.cooldown}`)
  return {
    ...input,
    perks,
    kit: { ...input.kit, items: input.kit.contents.map(kitLine) },
  }
}

/*
 * Prices: PURCHASE/Ranks.yml (`ft remove <player> N` in each buy item).
 * Limits: plots = LuckPerms plots.plot.N, homes = Essentials sethome-multiple,
 * stalls = AdvancedRegionMarket Limits.<group>.total.
 * Commands: LuckPerms nodes of that group only. Perks the old menu lists but
 * that do not work (no plugin) or that everyone already has are left out on
 * purpose: /invsort, /chestsort, /heads, anvil colours, chest shop limits,
 * "multiple claims", "Minecraft codes", /trash.
 * GSit poses ARE rank perks (GAMEPLAY FIXER round 2, LP export 07:25; Ranks.yml lore):
 * VIP gsit.sit, VIP+ gsit.lay + layback + bellyflop + spin, MVP gsit.crawl.
 *
 * WEB PRICES BELOW ARE PLACEHOLDERS FOR THE OWNER (never shown while placeholder: true).
 */
const vip = buildRank({
  id: 'vip',
  name: 'VIP',
  prefix: '[VIP]',
  color: 'var(--chat-green)',
  order: 1,
  price: { currency: 'tokens', amount: 1000 },
  tagline: 'Your first rank. A second plot, a second home and a crafting table in your pocket.',
  rarity: 'uncommon',
  sprite: { shape: 'banner1' },
  limits: { plots: 2, homes: 2, stalls: 2 },
  commands: [
    { command: '/nv', description: 'Night vision on and off' },
    { command: '/craft', description: 'Crafting table anywhere' },
    { command: '/sit', description: 'Sit down anywhere' },
    { command: '/kittycannon', description: 'Fire a kitten cannon, just for laughs' },
  ],
  kit: {
    name: 'VIP',
    cooldown: '24 hours',
    contents: [
      { name: 'Iron sword', lore: ['Sharpness I', 'Unbreaking I', sell], sprite: { shape: 'sword', tone: 'iron' } },
      { name: 'Iron pickaxe', lore: ['Efficiency II', 'Unbreaking I', sell], sprite: { shape: 'pickaxe', tone: 'iron' } },
      { name: 'Iron axe', lore: ['Efficiency II', 'Unbreaking I', sell], sprite: { shape: 'axe', tone: 'iron' } },
      { name: 'Iron shovel', lore: ['Efficiency II', 'Unbreaking I', sell], sprite: { shape: 'shovel', tone: 'iron' } },
      { name: 'Cooked beef', count: 16, sprite: { shape: 'steak' } },
      { name: 'Torches', count: 32, sprite: { shape: 'torch' } },
      { name: "Bottles o' enchanting", count: 4, sprite: { shape: 'xpbottle' } },
    ],
  },
  web: { tebexPackageId: null, price: { PHP: 149, USD: 2.99 }, placeholder: true },
})

const vipPlus = buildRank(
  {
    id: 'vip-plus',
    name: 'VIP+',
    prefix: '[VIP+]',
    color: 'var(--chat-green)',
    order: 2,
    price: { currency: 'tokens', amount: 2000 },
    tagline: 'Workbenches on demand, /back after a bad fall, and an iron armour kit.',
    rarity: 'uncommon',
    sprite: { shape: 'banner2' },
    requires: 'vip',
    limits: { plots: 3, homes: 4, stalls: 2 },
    commands: [
      { command: '/anvil', description: 'Anvil anywhere' },
      { command: '/grindstone', description: 'Grindstone anywhere' },
      { command: '/carttable', description: 'Cartography table anywhere' },
      { command: '/tpahere', description: 'Ask a friend to teleport to you' },
      {
        command: '/back',
        description: 'Go back to your last spot, even where you died',
        review: 'Returning to your death point is a gameplay edge (recovering gear fast).',
      },
      { command: '/lay', description: 'Lie down anywhere' },
      { command: '/layback', description: 'Lie on your back' },
      { command: '/bellyflop', description: 'Lie flat on your belly' },
      { command: '/spin', description: 'Spin around on the spot' },
    ],
    kit: {
      name: 'VIP+',
      cooldown: '2 days',
      contents: [
        { name: 'Iron helmet', lore: ['Protection I', 'Unbreaking II', sell], sprite: { shape: 'helmet', tone: 'iron' } },
        { name: 'Iron chestplate', lore: ['Protection I', 'Unbreaking II', sell], sprite: { shape: 'chestplate', tone: 'iron' } },
        { name: 'Iron leggings', lore: ['Protection I', 'Unbreaking II', sell], sprite: { shape: 'leggings', tone: 'iron' } },
        { name: 'Iron boots', lore: ['Protection I', 'Feather Falling I', 'Unbreaking II', sell], sprite: { shape: 'boots', tone: 'iron' } },
        { name: 'Bow', lore: ['Power I', 'Unbreaking II', sell], sprite: { shape: 'bow' } },
        { name: 'Arrows', count: 32, sprite: { shape: 'arrow' } },
        { name: 'Golden carrots', count: 16, sprite: { shape: 'carrot', tone: 'gold' } },
        { name: 'Golden apple', sprite: { shape: 'apple', tone: 'gold' } },
        { name: "Bottles o' enchanting", count: 8, sprite: { shape: 'xpbottle' } },
        { name: 'Resource crate key', sprite: { shape: 'key', tone: 'resource' } },
      ],
    },
    web: { tebexPackageId: null, price: { PHP: 299, USD: 5.49 }, placeholder: true },
  },
  vip,
)

const mvp = buildRank(
  {
    id: 'mvp',
    name: 'MVP',
    prefix: '[MVP]',
    color: 'var(--chat-aqua)',
    order: 3,
    price: { currency: 'tokens', amount: 2500 },
    tagline: 'Six homes, four plots, /repair and /condense, and an enchanted iron kit.',
    rarity: 'rare',
    sprite: { shape: 'banner3' },
    requires: 'vip-plus',
    limits: { plots: 4, homes: 6, stalls: 3 },
    commands: [
      { command: '/loom', description: 'Loom anywhere' },
      { command: '/condense', description: 'Turn ingots and gems into blocks' },
      { command: '/feed', description: 'Fill your hunger bar', review: 'Free food on demand helps in fights and the dungeon.' },
      { command: '/seen', description: 'See when a player was last online' },
      { command: '/repair', description: 'Repair the item in your hand', review: 'Free repairs skip the XP and material cost everyone else pays.' },
      { command: '/crawl', description: 'Crawl anywhere, even through 1-block gaps' },
    ],
    kit: {
      name: 'MVP',
      cooldown: '3 days',
      contents: [
        { name: 'Iron sword', lore: ['Sharpness III', 'Looting I', 'Unbreaking III', sell], sprite: { shape: 'sword', tone: 'iron' } },
        { name: 'Iron pickaxe', lore: ['Efficiency III', 'Fortune I', 'Unbreaking III', sell], sprite: { shape: 'pickaxe', tone: 'iron' } },
        { name: 'Iron axe', lore: ['Efficiency III', 'Unbreaking III', sell], sprite: { shape: 'axe', tone: 'iron' } },
        { name: 'Iron helmet', lore: ['Protection II', 'Unbreaking III', sell], sprite: { shape: 'helmet', tone: 'iron' } },
        { name: 'Iron chestplate', lore: ['Protection II', 'Unbreaking III', sell], sprite: { shape: 'chestplate', tone: 'iron' } },
        { name: 'Iron leggings', lore: ['Protection II', 'Unbreaking III', sell], sprite: { shape: 'leggings', tone: 'iron' } },
        { name: 'Iron boots', lore: ['Protection II', 'Feather Falling II', 'Unbreaking III', sell], sprite: { shape: 'boots', tone: 'iron' } },
        { name: 'Golden apples', count: 2, sprite: { shape: 'apple', tone: 'gold' } },
        { name: 'Ender pearls', count: 4, sprite: { shape: 'pearl' } },
        { name: "Bottles o' enchanting", count: 16, sprite: { shape: 'xpbottle' } },
        { name: 'Resource crate key', sprite: { shape: 'key', tone: 'resource' } },
      ],
    },
    web: { tebexPackageId: null, price: { PHP: 449, USD: 7.99 }, placeholder: true },
  },
  vipPlus,
)

const mvpPlus = buildRank(
  {
    id: 'mvp-plus',
    name: 'MVP+',
    prefix: '[MVP+]',
    color: 'var(--chat-aqua)',
    order: 4,
    price: { currency: 'tokens', amount: 3000 },
    tagline: 'Fly on plots and in the Mall, wear anything as a hat, carry your ender chest, and a diamond armour kit.',
    rarity: 'epic',
    sprite: { shape: 'banner4' },
    requires: 'mvp',
    limits: { plots: 5, homes: 8, stalls: 4 },
    commands: [
      { command: '/stonecutter', description: 'Stonecutter anywhere' },
      { command: '/heal', description: 'Restore your health', review: 'Instant healing is a combat advantage (PvP and the dungeon boss).' },
      { command: '/hat', description: 'Wear the item in your hand as a hat' },
      { command: '/echest', description: 'Open your ender chest anywhere' },
      {
        command: '/fly',
        description: 'Fly in the plot world and the Shopping Mall',
        review: 'LuckPerms world contexts (plotworld, shoppingmall) since the gameplay fix; flight switches off when you change world.',
      },
      { command: '/beezooka', description: 'Launch a bee, just for fun' },
    ],
    kit: {
      name: 'MVP+',
      cooldown: '5 days',
      contents: [
        { name: 'Diamond helmet', lore: ['Protection III', 'Unbreaking III', sell], sprite: { shape: 'helmet', tone: 'diamond' } },
        { name: 'Diamond chestplate', lore: ['Protection III', 'Unbreaking III', sell], sprite: { shape: 'chestplate', tone: 'diamond' } },
        { name: 'Diamond leggings', lore: ['Protection III', 'Unbreaking III', sell], sprite: { shape: 'leggings', tone: 'diamond' } },
        {
          name: 'Diamond boots',
          lore: ['Protection III', 'Feather Falling III', 'Unbreaking III', sell],
          sprite: { shape: 'boots', tone: 'diamond' },
        },
        { name: 'Shield', lore: ['Unbreaking III', sell], sprite: { shape: 'shield' } },
        { name: 'Golden apples', count: 6, sprite: { shape: 'apple', tone: 'gold' } },
        { name: "Bottles o' enchanting", count: 32, sprite: { shape: 'xpbottle' } },
        { name: 'Epic crate key', sprite: { shape: 'key', tone: 'epic' } },
      ],
    },
    web: { tebexPackageId: null, price: { PHP: 599, USD: 10.99 }, placeholder: true },
  },
  mvp,
)

const mvpPlusPlus = buildRank(
  {
    id: 'mvp-plus-plus',
    name: 'MVP++',
    prefix: '[MVP++]',
    color: 'var(--chat-gold)',
    order: 5,
    price: { currency: 'tokens', amount: 3500 },
    tagline: 'The top rank. Ten homes, six plots, your own weather and a netherite kit every week.',
    rarity: 'legendary',
    sprite: { shape: 'banner5' },
    requires: 'mvp-plus',
    limits: { plots: 6, homes: 10, stalls: 5 },
    commands: [
      { command: '/clear', description: 'Empty your inventory' },
      { command: '/bigtree', description: 'Grow a big tree where you look' },
      { command: '/smithtable', description: 'Smithing table anywhere' },
      { command: '/pweather', description: 'Pick your own weather (only you see it)' },
      { command: '/smite', description: 'Strike lightning where you look', review: 'Lightning can hurt other players and mobs.' },
    ],
    kit: {
      name: 'MVP++',
      cooldown: '7 days',
      contents: [
        {
          name: 'Netherite blade',
          lore: ['Sharpness IV', 'Looting II', 'Unbreaking III', 'Mending', sell],
          sprite: { shape: 'sword', tone: 'netherite' },
        },
        {
          name: 'Netherite pickaxe',
          lore: ['Efficiency IV', 'Fortune II', 'Unbreaking III', 'Mending', sell],
          sprite: { shape: 'pickaxe', tone: 'netherite' },
        },
        { name: 'Totem of undying', lore: [sell], sprite: { shape: 'totem' } },
        { name: 'Golden apples', count: 8, sprite: { shape: 'apple', tone: 'gold' } },
        { name: "Bottles o' enchanting", count: 64, sprite: { shape: 'xpbottle' } },
        { name: 'Shulker box', sprite: { shape: 'shulker' } },
        { name: 'Epic crate key', sprite: { shape: 'key', tone: 'epic' } },
        { name: 'Trim crate key', sprite: { shape: 'key', tone: 'trim' } },
      ],
    },
    web: { tebexPackageId: null, price: { PHP: 799, USD: 13.99 }, placeholder: true },
  },
  mvpPlus,
)

/** Filled from DeluxeMenus PURCHASE/Ranks.yml + LuckPerms + Essentials kits.yml. Lowest first. */
export const ranks: Rank[] = [vip, vipPlus, mvp, mvpPlus, mvpPlusPlus]

export function getRank(id: RankId): Rank | undefined {
  return ranks.find((r) => r.id === id)
}

/** Tokens needed to go from no rank to `id`, buying every rank on the way (the menu requires that). */
export function tokensToReach(id: RankId): number {
  let total = 0
  for (const r of ranks) {
    if (r.price?.currency === 'tokens') total += r.price.amount
    if (r.id === id) break
  }
  return total
}

/* ------------------------------------------------------------------------ */
/* Tokens + Points facts (shown on /store and usable by the wiki)           */
/* ------------------------------------------------------------------------ */

/**
 * The menu that shows the playtime ladder. DeluxeMenus BASIC/Playtime.yml opens on
 * levels / playtime / playtimes, but EssentialsX keeps its own /playtime (it only
 * prints your time), so /levels is the one that works.
 */
export const PLAYTIME_MENU = '/levels'

/**
 * The playtime ladder: one-off Token payouts as your total time online grows.
 * DeluxeMenus BASIC/Playtime.yml: `ft give` at Level V, XI, XII and XVII.
 * "days" = total time played (player-time.reached.4d etc.), not calendar days.
 */
export const tokenMilestones: { level: string; playtime: string; hours: number; tokens: number }[] = [
  { level: 'Level V', playtime: '15 hours played', hours: 15, tokens: 100 },
  { level: 'Level XI', playtime: '4 days played', hours: 96, tokens: 100 },
  { level: 'Level XII', playtime: '5 days played', hours: 120, tokens: 150 },
  { level: 'Level XVII', playtime: '10 days played', hours: 240, tokens: 500 },
]

export const tokensFromPlaytime = tokenMilestones.reduce((sum, m) => sum + m.tokens, 0)

export interface TokenSource {
  id: 'daily' | 'weekly' | 'monthly' | 'quests' | 'playtime'
  /** Short name, e.g. 'Daily reward'. */
  name: string
  /** The command that opens it in game. */
  command: string
  tokens: number
  /** How often, in plain words: 'Every day', 'Once per level'. */
  every: string
  /** true = you can claim it again and again; false = one-off (the playtime ladder). */
  repeats: boolean
}

/**
 * EVERY way to earn Tokens today (grep of `ft|tokens give` over the plugins, ECONOMY FIXER):
 * - DailyRewards config.yml: daily +10, weekly +50, monthly +150 (normal and premium lists)
 * - ODailyQuests config.yml global_reward (all 3 daily quests done): +25, next to $1,500 + a diamond block
 * - DeluxeMenus BASIC/Playtime.yml: 850 in total (tokenMilestones)
 * Not a source: mob or mining drops (FlareTokens drops.yml is empty), voting (no Votifier yet), the dungeon.
 */
export const tokenSources: TokenSource[] = [
  { id: 'daily', name: 'Daily reward', command: '/rewards', tokens: 10, every: 'Every day', repeats: true },
  { id: 'weekly', name: 'Weekly reward', command: '/rewards', tokens: 50, every: 'Every week', repeats: true },
  { id: 'monthly', name: 'Monthly reward', command: '/rewards', tokens: 150, every: 'Every 30 days', repeats: true },
  { id: 'quests', name: 'All 3 daily quests', command: '/dquests', tokens: 25, every: 'Every day', repeats: true },
  { id: 'playtime', name: 'Playtime levels', command: PLAYTIME_MENU, tokens: tokensFromPlaytime, every: 'Once per level', repeats: false },
]

function sourceTokens(id: TokenSource['id']): number {
  return tokenSources.find((t) => t.id === id)?.tokens ?? 0
}

/** Your very first /rewards claims (daily, weekly and monthly are all open on day one): 210. */
export const tokensFirstRewards = sourceTokens('daily') + sourceTokens('weekly') + sourceTokens('monthly')

/** Day one for someone who also finishes all 3 daily quests: 235. */
export const tokensFirstDay = tokensFirstRewards + sourceTokens('quests')

/**
 * ECONOMY FIXER pace estimate (CHANGELOG ~04:40-05:00): an active daily player earns about 47 Tokens a
 * day and reaches VIP (1,000) around day 15 to 18, playtime levels V and XI included.
 */
export const tokenPace = { perDay: 47, vipAfter: '2 to 2.5 weeks' } as const

/* ------------------------------------------------------------------------ */
/* Store items                                                              */
/* ------------------------------------------------------------------------ */

const rankItems: StoreItem[] = ranks.map((r) => ({
  id: `rank-${r.id}`,
  category: 'ranks',
  name: `${r.name} rank`,
  summary: r.tagline,
  icon: 'crown',
  rarity: r.rarity,
  price: r.price,
  perks: r.perks,
  howToGet: r.requires
    ? `In game: type /ranks (or /purchase, then Ranks) and pay with Tokens. You need ${getRank(r.requires)?.name} first.`
    : 'In game: type /ranks (or /purchase, then Ranks) and pay with Tokens.',
  status: 'in-game',
  rankId: r.id,
  sprite: r.sprite,
  commands: ['/ranks', '/purchase'],
  maxQuantity: 1,
  web: r.web,
}))

const keyHow = 'In game: type /keys (or /purchase, then Keys) and pay with Tokens. Open crates at /warp crates.'

/*
 * Prices: PURCHASE/Keys.yml. Contents: ExcellentCrates crates/*.yml.
 * Odds: same model as /wiki/crates (src/content/wiki/crates.ts): rarity weight (config.yml
 * Rewards.Rarities common 70, uncommon 40, rare 25, legendary 10) / sum of the rarities in that
 * crate, x reward weight / sum of reward weights in that rarity. Re-checked 2026-11-25.
 * Keep `odds` in step with the wiki tables if a crate file changes.
 */
const keyItems: StoreItem[] = [
  {
    id: 'key-vote',
    category: 'keys',
    name: 'Vote crate key',
    summary: 'A grab bag of iron gear, supplies and a small shot at diamonds or a totem.',
    icon: 'key',
    rarity: 'common',
    price: { currency: 'tokens', amount: 20 },
    howToGet: keyHow,
    status: 'in-game',
    sprite: { shape: 'key', tone: 'vote' },
    commands: ['/keys', '/warp crates'],
    contents: [
      'Iron vote armour, sword, tools and a shield',
      '2 diamonds',
      'Totem of undying',
      'Turtle shell',
      'Cobblestone generator',
      'Wind charges and fireworks',
      'Golden apple or enchanted golden apple',
      'A trim or resource crate key',
    ],
    odds: 'Diamonds, totem and enchanted golden apple about 3% each, turtle shell, cobblestone generator, trim key and resource key about 8% each, everything else about 5% each.',
    alsoFrom: ['Playtime level III', 'A resource crate (sometimes)', 'Voting, once voting opens'],
    packSizes: [1, 12],
    maxQuantity: 64,
    web: { tebexPackageId: null, price: { PHP: 15, USD: 0.29 }, placeholder: true },
  },
  {
    id: 'key-resource',
    category: 'keys',
    name: 'Resource crate key',
    summary: 'Ingots, diamonds, netherite, crops and saplings.',
    icon: 'key',
    rarity: 'uncommon',
    price: { currency: 'tokens', amount: 30 },
    howToGet: keyHow,
    status: 'in-game',
    sprite: { shape: 'key', tone: 'resource' },
    commands: ['/keys', '/warp crates'],
    contents: [
      'Iron, copper, gold or netherite ingots',
      'Diamonds, emeralds or netherite scrap',
      'A smithing template',
      'Crops: nether wart, carrots, potatoes, berries',
      'Saplings, including cherry',
      'A vote, trim or epic crate key',
    ],
    odds: 'All 23 rewards have the same chance, about 4% each.',
    alsoFrom: ['Daily reward (/rewards)', 'Playtime level VIII', 'VIP+ and MVP kits', 'A vote crate (sometimes)'],
    packSizes: [1, 12],
    maxQuantity: 64,
    web: { tebexPackageId: null, price: { PHP: 20, USD: 0.39 }, placeholder: true },
  },
  {
    id: 'key-trim',
    category: 'keys',
    name: 'Trim crate key',
    summary: 'Armour trim templates to make your armour look the part.',
    icon: 'key',
    rarity: 'rare',
    price: { currency: 'tokens', amount: 40 },
    howToGet: keyHow,
    status: 'in-game',
    sprite: { shape: 'key', tone: 'trim' },
    commands: ['/keys', '/warp crates'],
    contents: ['One of 18 armour trim smithing templates'],
    odds: 'Flow and Bolt about 14% each, Silence about 7%, every other template about 4%.',
    alsoFrom: ['MVP++ kit', 'Vote and resource crates (sometimes)'],
    packSizes: [1, 12],
    maxQuantity: 64,
    web: { tebexPackageId: null, price: { PHP: 25, USD: 0.49 }, placeholder: true },
  },
  {
    id: 'key-epic',
    category: 'keys',
    name: 'Epic crate key',
    summary: 'Named Epic tools and gear, with a small shot at an elytra or a mace.',
    icon: 'key',
    rarity: 'epic',
    price: { currency: 'tokens', amount: 50 },
    howToGet: keyHow,
    status: 'in-game',
    sprite: { shape: 'key', tone: 'epic' },
    commands: ['/keys', '/warp crates'],
    contents: [
      'Epic sword, battle axe or axe',
      'Epic pickaxe or Silk Touch pickaxe',
      'Epic shovel, hoe, shears or brush',
      'Epic Steel (flint and steel with Mending)',
      'Epic bow, crossbow, shield or fishing rod',
      'Epic elytra or a mace',
      '4 enchanted golden apples',
    ],
    odds: 'Elytra, mace and enchanted golden apples about 2% each, everything else about 6 to 9% each.',
    alsoFrom: ['MVP+ and MVP++ kits', 'A resource crate (sometimes)'],
    packSizes: [1, 12],
    maxQuantity: 64,
    web: { tebexPackageId: null, price: { PHP: 30, USD: 0.59 }, placeholder: true },
  },
  {
    // PURCHASE/Keys.yml Spawner_Key: `ft remove 100` + `crate key give spawner 1` (single keys only, no 12-pack).
    // The Spawner crate stands at /warp crates (spawner_crate.yml Positions -52,71,46,spawn).
    id: 'key-spawner',
    category: 'keys',
    name: 'Spawner crate key',
    summary: 'A real mob spawner for your grinder in the Wild.',
    icon: 'spawner',
    rarity: 'legendary',
    price: { currency: 'tokens', amount: 100 },
    howToGet: 'In game: type /keys (or /purchase, then Keys) and pay with Tokens. One key at a time. Open the Spawner crate at /warp crates.',
    status: 'in-game',
    sprite: { shape: 'key', tone: 'spawner' },
    commands: ['/keys', '/warp crates'],
    contents: ['A pig, chicken, sheep, zombie, skeleton, spider or cow spawner'],
    odds: 'Pig about 22%, chicken and sheep about 18% each, zombie about 15%, skeleton and spider about 10.5% each, cow about 5%.',
    alsoFrom: ['Playtime level XXVII'],
    packSizes: [1],
    maxQuantity: 64,
  },
]

/* Tags: AlonsoTags tags.yml (Price, paid in in-game money). Chat colours: CHATCOLOR/Minecraft.yml. */
const cosmeticItems: StoreItem[] = [
  {
    id: 'tags-2500',
    category: 'cosmetics',
    name: 'Chat tags: $2,500 set',
    summary: 'A tag next to your name in chat. Five to pick from.',
    icon: 'tag',
    rarity: 'common',
    price: { currency: 'money', amount: 2500 },
    howToGet: 'In game: type /tags (or /cosmetics, then Tags). Paid with in-game money, so just play.',
    status: 'in-game',
    sprite: { shape: 'nametag', tone: 'tagCommon' },
    commands: ['/tags', '/cosmetics'],
    chips: [
      { label: '[BLAZE]', color: 'gold' },
      { label: '[DUSK]', color: 'dark-purple' },
      { label: '[OCEAN]', color: 'dark-aqua' },
      { label: '[DAWN]', color: 'yellow' },
      { label: '[EMBER]', color: 'red' },
    ],
    maxQuantity: 1,
  },
  {
    id: 'tags-7500',
    category: 'cosmetics',
    name: 'Chat tags: $7,500 set',
    summary: 'Cooler names for people who saved up a bit.',
    icon: 'tag',
    rarity: 'rare',
    price: { currency: 'money', amount: 7500 },
    howToGet: 'In game: type /tags (or /cosmetics, then Tags). Paid with in-game money.',
    status: 'in-game',
    sprite: { shape: 'nametag', tone: 'tagRare' },
    commands: ['/tags', '/cosmetics'],
    chips: [
      { label: '[POISON]', color: 'dark-green' },
      { label: '[ICE]', color: 'aqua' },
      { label: '[SHADOW]', color: 'dark-gray' },
      { label: '[PHANTOM]', color: 'blue' },
    ],
    maxQuantity: 1,
  },
  {
    id: 'tags-20000',
    category: 'cosmetics',
    name: 'Chat tags: $20,000 set',
    summary: 'The flex tags. Everyone in chat will know you grind.',
    icon: 'tag',
    rarity: 'legendary',
    price: { currency: 'money', amount: 20000 },
    howToGet: 'In game: type /tags (or /cosmetics, then Tags). Paid with in-game money.',
    status: 'in-game',
    sprite: { shape: 'nametag', tone: 'tagLegendary' },
    commands: ['/tags', '/cosmetics'],
    chips: [
      { label: '[FIRE]', color: 'red' },
      { label: '[GALAXY]', color: 'dark-purple' },
      { label: '[ECLIPSE]', color: 'gray' },
      { label: '[VOID]', color: 'pink' },
    ],
    maxQuantity: 1,
  },
  {
    id: 'chat-colours',
    category: 'cosmetics',
    name: 'Chat colours',
    summary: 'Write in red, gold, aqua and 13 more. White is free for everyone.',
    icon: 'chat',
    rarity: 'uncommon',
    price: { currency: 'points', amount: 25 },
    howToGet: 'In game: type /chatcolor (or /cosmetics, then ChatColor). Each colour costs 25 Points.',
    status: 'in-game',
    sprite: { shape: 'chatbubble' },
    commands: ['/chatcolor', '/cosmetics'],
    perks: ['16 colours, 25 Points each', 'Unlock one and switch any time'],
    maxQuantity: 15,
  },
  {
    id: 'glow',
    category: 'cosmetics',
    name: 'Glow outline',
    summary: 'Make yourself glow in any colour. Free for everyone.',
    icon: 'star',
    rarity: 'rare',
    price: { currency: 'free' },
    howToGet: 'In game: type /cosmetics, then Glow. Every colour is free.',
    status: 'free',
    sprite: { shape: 'glow' },
    commands: ['/cosmetics'],
    maxQuantity: 0,
  },
  {
    id: 'points',
    category: 'cosmetics',
    name: 'Points packs',
    summary: 'Turn Tokens into Points for chat colours. Bigger packs give bonus Points.',
    icon: 'gem',
    rarity: 'rare',
    price: { currency: 'tokens', amount: 1 },
    priceFrom: true,
    howToGet: 'In game: type /purchase, then Points. You can also earn Points in the AFK pool, from /rewards and from playtime levels.',
    status: 'in-game',
    sprite: { shape: 'points' },
    commands: ['/purchase', '/warp afk'],
    // PURCHASE/Points.yml: what `points give` actually pays (the menu titles say 100/500/... + bonus)
    contents: [
      '⛃1 gives ✪10',
      '⛃10 gives ✪110',
      '⛃50 gives ✪550',
      '⛃100 gives ✪1,200',
      '⛃200 gives ✪2,500',
      '⛃500 gives ✪6,000',
    ],
    alsoFrom: [
      'AFK pool at /warp afk: ✪10 every 20 minutes',
      'Playtime level V: ✪500',
      'Weekly reward (/rewards): ✪50',
      'Monthly reward (/rewards): ✪100',
    ],
    maxQuantity: 1,
  },
]

/** Every item on /store, by category. Keys use category 'keys' (the wiki crates page reads them). */
export const storeItems: StoreItem[] = [...rankItems, ...keyItems, ...cosmeticItems]

export function itemsIn(category: StoreCategoryId): StoreItem[] {
  return storeItems.filter((i) => i.category === category)
}

export function getStoreItem(id: string): StoreItem | undefined {
  return storeItems.find((i) => i.id === id)
}

/* ------------------------------------------------------------------------ */
/* Prices                                                                   */
/* ------------------------------------------------------------------------ */

export function formatPrice(price: Price | null): string {
  if (!price) return 'Not for sale'
  switch (price.currency) {
    case 'tokens':
      return `⛃${price.amount.toLocaleString('en-US')}`
    case 'points':
      return `✪${price.amount.toLocaleString('en-US')}`
    case 'money':
      return `$${price.amount.toLocaleString('en-US')}`
    case 'real':
      return price.code === 'PHP' ? `₱${price.amount.toLocaleString('en-US')}` : `US$${price.amount.toFixed(2)}`
    case 'free':
      return 'Free'
  }
}

/** Spoken version for screen readers: "1,000 Tokens". */
export function priceLabel(price: Price | null): string {
  if (!price) return 'not for sale'
  switch (price.currency) {
    case 'tokens':
      return `${price.amount.toLocaleString('en-US')} Tokens`
    case 'points':
      return `${price.amount.toLocaleString('en-US')} Points`
    case 'money':
      return `${price.amount.toLocaleString('en-US')} dollars in-game money`
    case 'real':
      return formatPrice(price)
    case 'free':
      return 'free'
  }
}

/** A real-money price we may show: only with a web store AND a non-placeholder price. */
export function webPrice(web: WebListing | undefined): Price | null {
  if (!web || web.placeholder || CHECKOUT_MODE === 'off') return null
  return { currency: 'real', amount: web.price[STORE_CURRENCY], code: STORE_CURRENCY }
}

/** Can this item be bought on the web store right now (or at least linked to)? */
export function sellsOnWeb(item: StoreItem): boolean {
  return CHECKOUT_MODE !== 'off' && !!item.web && item.maxQuantity > 0
}

/** Link for a single package on the Tebex webstore, or the store home. */
export function packageUrl(item: StoreItem): string | null {
  if (!STORE_CHECKOUT_URL) return null
  const id = item.web?.tebexPackageId
  return id ? `${STORE_CHECKOUT_URL}/package/${encodeURIComponent(id)}` : STORE_CHECKOUT_URL
}
