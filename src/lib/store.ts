/**
 * Store catalogue + rank data. SINGLE SOURCE OF TRUTH for ranks, crate keys
 * and cosmetics: the wiki (/wiki/ranks, /wiki/crates) imports from here too.
 *
 * Owner: STORE ENGINEER. Types are a contract with the WIKI WRITER: add fields
 * freely, do not rename or remove existing ones.
 *
 * HONESTY RULES (non-negotiable):
 * - RANKS ARE WEB-ONLY since 2026-11-28 (owner decision): VIP to MVP++ are sold ONLY on the web
 *   store (Tebex), in US dollars. Tokens no longer buy ranks, so ranks have no in-game `price`.
 *   In game, /ranks (also /purchase > Ranks) is only a showcase: each rank's perks and dollar
 *   price, and clicking a rank sends the web store link. On the web store any rank can be bought
 *   directly; every rank includes the ranks below it; the Tebex Ranks category is cumulative, so
 *   after a lower web rank a higher one costs only the difference. Ranks already owned stay owned
 *   (ranks are permanent). /store in game now links to the web store.
 * - /purchase (aliases /buy, /beli, /tokenshop) no longer sells ranks for Tokens: Tokens buy every
 *   crate key in /keys (also inside /purchase). Points buy Tokens and keys in /pointshop.
 * - Tokens come from /rewards (daily 10, weekly 50, monthly 150), all 3 daily
 *   quests (25) and the playtime ladder (/levels, 850 in total). See
 *   tokenSources below (CHANGELOG, ECONOMY FIXER ~04:40-05:00, 2026-11-25).
 * - Never build a fake checkout, never collect payment details, never invent
 *   prices. Every in-game price below comes from a config (cited per item).
 * - Real-money prices (`web.price`): the site never shows a price while `placeholder: true`.
 *   2026-11-28 the owner chose Tebex and asked for "very affordable" prices on ranks VIP to MVP++
 *   and the Cardael crate key (the first key sold for real money). Then: US dollars, VIP $2.99, Cardael
 *   key $0.99 each (owner); VIP+ $4.99, MVP $6.99, MVP+ $9.99, MVP++ $12.99 (Claude, same line).
 *   Tebex packages created 2026-11-28 with these prices (ids below, checked through the Headless API).
 *   The checkout only works once NEXT_PUBLIC_TEBEX_PUBLIC_TOKEN is set (docs/TEBEX_SETUP.md); until
 *   then CHECKOUT_MODE is 'off' and every text must say the web store is opening soon.
 *   listPrice() shows a decided price (ranks, Cardael key) with "on our web store" wording in both
 *   modes; webPrice() only returns it while the checkout is open (buy buttons, totals).
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
 *   NEXT_PUBLIC_STORE_CURRENCY      'USD' (default, the owner's choice 2026-11-28) or 'PHP'.
 * With none of them set there is no Buy button: the package window shows a disabled
 * "Web store: soon" button with the reason next to it (how to get it in game + Discord).
 */
import type { SpriteRef } from '@/components/store/sprites'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import type { RankId, Rarity } from '@/lib/content'
import { voteRewards } from '@/lib/vote'

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
export const STORE_CURRENCY: WebCurrency = process.env.NEXT_PUBLIC_STORE_CURRENCY === 'PHP' ? 'PHP' : 'USD'

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
  /** In-game price. null for every rank since 2026-11-28: ranks are sold only on the web store (`web`). */
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
  /**
   * UNUSED since 2026-11-28: the Tokens menu made you buy ranks in order. On the web store any
   * rank can be bought directly, so no rank sets this. Kept only for the type contract.
   */
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
  /** 'web': sold only on the web store (Tebex), nothing to buy in game: every rank and the Cardael crate key. */
  status: 'in-game' | 'coming-soon' | 'free' | 'web'
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
    blurb:
      CHECKOUT_MODE === 'off'
        ? 'VIP to MVP++, sold on our web store, which is opening soon. More plots, homes and stalls, handy commands and a kit.'
        : 'VIP to MVP++, sold on our web store. More plots, homes and stalls, handy commands and a kit.',
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
    blurb: 'Picture tags, chat colours, glow and the point shop. Looks only, nothing that wins fights.',
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
 * Prices: real money only since 2026-11-28 (`web` on each rank, Tebex package ids). `price` is null:
 * PURCHASE/Ranks.yml is a showcase now and no longer takes Tokens. No `requires`: any order on the web store.
 * Limits: plots = LuckPerms plots.plot.N, homes = Essentials sethome-multiple,
 * stalls = AdvancedRegionMarket Limits.<group>.total.
 * Commands: LuckPerms nodes of that group only. Perks the old menu lists but
 * that do not work (no plugin) or that everyone already has are left out on
 * purpose: /invsort, /chestsort, /heads, anvil colours, chest shop limits,
 * "multiple claims", "Minecraft codes", /trash.
 * GSit poses ARE rank perks (GAMEPLAY FIXER round 2, LP export 07:25; Ranks.yml lore):
 * VIP gsit.sit, VIP+ gsit.lay + layback + bellyflop + spin, MVP gsit.crawl.
 *
 * WEB PRICES BELOW ARE THE OWNER'S (2026-11-28, placeholder: false), see the header.
 */
const vip = buildRank({
  id: 'vip',
  name: 'VIP',
  prefix: '[VIP]',
  color: 'var(--chat-green)',
  order: 1,
  price: null,
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
      { name: 'Diamond sword', lore: ['Sharpness II', 'Unbreaking II', sell], sprite: { shape: 'sword', tone: 'diamond' } },
      { name: 'Diamond pickaxe', lore: ['Efficiency II', 'Unbreaking II', sell], sprite: { shape: 'pickaxe', tone: 'diamond' } },
      { name: 'Diamond axe', lore: ['Efficiency II', 'Unbreaking II', sell], sprite: { shape: 'axe', tone: 'diamond' } },
      { name: 'Diamond shovel', lore: ['Efficiency II', 'Unbreaking II', sell], sprite: { shape: 'shovel', tone: 'diamond' } },
      { name: 'Cooked beef', count: 16, sprite: { shape: 'steak' } },
      { name: 'Torches', count: 32, sprite: { shape: 'torch' } },
      { name: "Bottles o' enchanting", count: 4, sprite: { shape: 'xpbottle' } },
    ],
  },
  web: { tebexPackageId: '7839629', price: { PHP: 169, USD: 2.99 }, placeholder: false },
})

const vipPlus = buildRank(
  {
    id: 'vip-plus',
    name: 'VIP+',
    prefix: '[VIP+]',
    color: 'var(--chat-green)',
    order: 2,
    price: null,
    tagline: 'Workbenches on demand, /back after a bad fall, and a diamond armour kit.',
    rarity: 'uncommon',
    sprite: { shape: 'banner2' },
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
        { name: 'Diamond helmet', lore: ['Protection II', 'Unbreaking II', sell], sprite: { shape: 'helmet', tone: 'diamond' } },
        { name: 'Diamond chestplate', lore: ['Protection II', 'Unbreaking II', sell], sprite: { shape: 'chestplate', tone: 'diamond' } },
        { name: 'Diamond leggings', lore: ['Protection II', 'Unbreaking II', sell], sprite: { shape: 'leggings', tone: 'diamond' } },
        { name: 'Diamond boots', lore: ['Protection II', 'Feather Falling II', 'Unbreaking II', sell], sprite: { shape: 'boots', tone: 'diamond' } },
        { name: 'Bow', lore: ['Power II', 'Unbreaking II', sell], sprite: { shape: 'bow' } },
        { name: 'Arrows', count: 32, sprite: { shape: 'arrow' } },
        { name: 'Golden carrots', count: 16, sprite: { shape: 'carrot', tone: 'gold' } },
        { name: 'Golden apple', sprite: { shape: 'apple', tone: 'gold' } },
        { name: "Bottles o' enchanting", count: 8, sprite: { shape: 'xpbottle' } },
        { name: 'Resource crate key', sprite: { shape: 'key', tone: 'resource' } },
      ],
    },
    web: { tebexPackageId: '7839637', price: { PHP: 289, USD: 4.99 }, placeholder: false },
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
    price: null,
    tagline: 'Six homes, four plots, /repair and /condense, and an enchanted diamond kit.',
    rarity: 'rare',
    sprite: { shape: 'banner3' },
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
        { name: 'Diamond sword', lore: ['Sharpness III', 'Looting I', 'Unbreaking III', sell], sprite: { shape: 'sword', tone: 'diamond' } },
        { name: 'Diamond pickaxe', lore: ['Efficiency III', 'Fortune I', 'Unbreaking III', sell], sprite: { shape: 'pickaxe', tone: 'diamond' } },
        { name: 'Diamond axe', lore: ['Efficiency III', 'Unbreaking III', sell], sprite: { shape: 'axe', tone: 'diamond' } },
        { name: 'Diamond helmet', lore: ['Protection III', 'Unbreaking III', sell], sprite: { shape: 'helmet', tone: 'diamond' } },
        { name: 'Diamond chestplate', lore: ['Protection III', 'Unbreaking III', sell], sprite: { shape: 'chestplate', tone: 'diamond' } },
        { name: 'Diamond leggings', lore: ['Protection III', 'Unbreaking III', sell], sprite: { shape: 'leggings', tone: 'diamond' } },
        { name: 'Diamond boots', lore: ['Protection III', 'Feather Falling III', 'Unbreaking III', sell], sprite: { shape: 'boots', tone: 'diamond' } },
        { name: 'Golden apples', count: 2, sprite: { shape: 'apple', tone: 'gold' } },
        { name: 'Ender pearls', count: 4, sprite: { shape: 'pearl' } },
        { name: "Bottles o' enchanting", count: 16, sprite: { shape: 'xpbottle' } },
        { name: 'Resource crate key', sprite: { shape: 'key', tone: 'resource' } },
      ],
    },
    web: { tebexPackageId: '7839641', price: { PHP: 399, USD: 6.99 }, placeholder: false },
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
    price: null,
    tagline: 'Fly on plots and in the Mall, wear anything as a hat, carry your ender chest, and a Protection IV diamond kit.',
    rarity: 'epic',
    sprite: { shape: 'banner4' },
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
        { name: 'Diamond helmet', lore: ['Protection IV', 'Unbreaking III', sell], sprite: { shape: 'helmet', tone: 'diamond' } },
        { name: 'Diamond chestplate', lore: ['Protection IV', 'Unbreaking III', sell], sprite: { shape: 'chestplate', tone: 'diamond' } },
        { name: 'Diamond leggings', lore: ['Protection IV', 'Unbreaking III', sell], sprite: { shape: 'leggings', tone: 'diamond' } },
        {
          name: 'Diamond boots',
          lore: ['Protection IV', 'Feather Falling IV', 'Unbreaking III', sell],
          sprite: { shape: 'boots', tone: 'diamond' },
        },
        { name: 'Shield', lore: ['Unbreaking III', sell], sprite: { shape: 'shield' } },
        { name: 'Golden apples', count: 6, sprite: { shape: 'apple', tone: 'gold' } },
        { name: "Bottles o' enchanting", count: 32, sprite: { shape: 'xpbottle' } },
        { name: 'Epic crate key', sprite: { shape: 'key', tone: 'epic' } },
      ],
    },
    web: { tebexPackageId: '7839645', price: { PHP: 579, USD: 9.99 }, placeholder: false },
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
    price: null,
    tagline: 'The top rank. Ten homes, six plots, your own weather and a netherite kit every week.',
    rarity: 'legendary',
    sprite: { shape: 'banner5' },
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
    web: { tebexPackageId: '7839647', price: { PHP: 749, USD: 12.99 }, placeholder: false },
  },
  mvpPlus,
)

/** Filled from DeluxeMenus PURCHASE/Ranks.yml + LuckPerms + Essentials kits.yml. Lowest first. */
export const ranks: Rank[] = [vip, vipPlus, mvp, mvpPlus, mvpPlusPlus]

export function getRank(id: RankId): Rank | undefined {
  return ranks.find((r) => r.id === id)
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
 * Not a source: mob or mining drops (FlareTokens drops.yml is empty), voting (it gives Vote crate keys, see src/lib/vote.ts), the dungeon.
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
 * day, playtime levels V and XI included. (The old "VIP after 2 to 2.5 weeks" went away on 2026-11-28:
 * Tokens no longer buy ranks.)
 */
export const tokenPace = { perDay: 47 } as const

/* ------------------------------------------------------------------------ */
/* Store items                                                              */
/* ------------------------------------------------------------------------ */

/*
 * Ranks are web-only (2026-11-28): no in-game price, nothing to buy in game. /ranks in game only shows
 * the ranks, their perks and their dollar price, and a click sends the web store link.
 */
const rankHow =
  CHECKOUT_MODE === 'off'
    ? 'On our web store, which is opening soon. You will be able to buy any rank directly, and each one includes everything in the ranks below it. In game, /ranks shows every rank, its perks and its price.'
    : 'On our web store, right here on this page. You can buy any rank directly, and each one includes everything in the ranks below it. Bought a lower rank on the web store before? Then you only pay the difference. In game, /ranks shows every rank, its perks and its price.'

const rankItems: StoreItem[] = ranks.map((r) => ({
  id: `rank-${r.id}`,
  category: 'ranks',
  name: `${r.name} rank`,
  summary: r.tagline,
  icon: 'crown',
  rarity: r.rarity,
  price: null,
  perks: r.perks,
  howToGet: rankHow,
  status: 'web',
  rankId: r.id,
  sprite: r.sprite,
  commands: ['/ranks'],
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
    summary: 'A grab bag of diamond gear, supplies and a small shot at diamonds or a totem.',
    icon: 'key',
    rarity: 'common',
    price: { currency: 'tokens', amount: 20 },
    howToGet: keyHow,
    status: 'in-game',
    sprite: { shape: 'key', tone: 'vote' },
    commands: ['/keys', '/warp crates'],
    contents: [
      'Diamond vote armour, sword, tools and a shield',
      '2 diamonds',
      'Totem of undying',
      'Turtle shell',
      'Cobblestone generator',
      'Wind charges and fireworks',
      'Golden apple or enchanted golden apple',
      'A trim or resource crate key',
    ],
    odds: 'Diamonds, totem and enchanted golden apple about 3% each, turtle shell, cobblestone generator, trim key and resource key about 8% each, everything else about 5% each.',
    alsoFrom: [
      `Voting (/vote): ${voteRewards.keysPerVote} per vote`,
      `Vote party: ${voteRewards.partyKeys} for everyone online on Survival, every ${voteRewards.partyVotes} votes`,
      'Playtime level III',
      'A resource crate (sometimes)',
    ],
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
  {
    // Cardael crate (2026-11-28): ExcellentCrates crates/cardael_crate.yml + keys/cardael.yml, 20 COMMAND rewards
    // `nexo give %player_name% plny_cardael_set_<item> 1`, weight 10 each. Rarities: 5 common, 5 uncommon, 5 rare,
    // 5 legendary. The crate is a barrier at spawn -47,69,43 inside a vanilla item_display (tag kc_cardael_crate) with the chest model. Web store only (Tebex command `crate key give {username} cardael 1`); not in /keys.
    // Stats from Nexo items/cardael/plny_cardael_set.yml: armour ARMOR 2/6/5/2 (iron values), weapons and tools
    // keep their netherite base. No pack textures on the site: the sprite is our own key in a Cardael blue.
    id: 'key-cardael',
    category: 'keys',
    name: 'Cardael crate key',
    summary: 'Animated Cardael weapons, tools and armour. Every reward is a Cardael item.',
    icon: 'key',
    rarity: 'epic',
    price: null,
    howToGet: 'On the web store. Open the Cardael crate at /warp crates.',
    status: 'web',
    sprite: { shape: 'key', tone: 'cardael' },
    commands: ['/warp crates'],
    contents: [
      'Cardael pickaxe, axe, shovel, hoe or fishing rod (tools as strong as netherite)',
      'Cardael helmet, chestplate, leggings, boots or shield (armour as strong as iron)',
      'Cardael bow, crossbow, sword, staff or spear',
      'Cardael hammer, scythe, mace, trident or wings',
    ],
    odds: 'Each tool about 9.7%, each armour piece or the shield about 5.5%, each bow, crossbow, sword, staff or spear about 3.4%, each hammer, scythe, mace, trident or wings about 1.4%.',
    packSizes: [1],
    maxQuantity: 64,
    web: { tebexPackageId: '7839657', price: { PHP: 55, USD: 0.99 }, placeholder: false },
  },
]

/*
 * Tags: AlonsoTags tags.yml (Price, paid in in-game money; re-read 2026-11-27: 10000 / 30000 / 100000, three renamed).
 * Chat colours: DeluxeMenus CHATCOLOR/Minecraft.yml (250 or 500 points, white too). Glow: COSMETICS/Glow.yml (/glowshop,
 * 500 / 750 / 2000 / 3000 points). Point shop: PURCHASE/Points.yml (/pointshop): points -> Tokens 25:1, Vote key 500,
 * Resource key 750. Tokens no longer buy points. Item ids are unchanged so saved shopping lists still work.
 */
const cosmeticItems: StoreItem[] = [
  {
    id: 'tags-2500',
    category: 'cosmetics',
    name: 'Picture tags: $10,000 set',
    summary: 'A small picture next to your name, in chat, the tab list and above your head. Five to pick from.',
    icon: 'tag',
    rarity: 'common',
    price: { currency: 'money', amount: 10000 },
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
    name: 'Picture tags: $30,000 set',
    summary: 'Cooler tags for people who saved up a bit.',
    icon: 'tag',
    rarity: 'rare',
    price: { currency: 'money', amount: 30000 },
    howToGet: 'In game: type /tags (or /cosmetics, then Tags). Paid with in-game money.',
    status: 'in-game',
    sprite: { shape: 'nametag', tone: 'tagRare' },
    commands: ['/tags', '/cosmetics'],
    chips: [
      { label: '[VENOM]', color: 'dark-green' },
      { label: '[FROSTBITE]', color: 'aqua' },
      { label: '[SHADOW]', color: 'dark-gray' },
      { label: '[PHANTOM]', color: 'blue' },
    ],
    maxQuantity: 1,
  },
  {
    id: 'tags-20000',
    category: 'cosmetics',
    name: 'Picture tags: $100,000 set',
    summary: 'The flex tags. Everyone will know you grind.',
    icon: 'tag',
    rarity: 'legendary',
    price: { currency: 'money', amount: 100000 },
    howToGet: 'In game: type /tags (or /cosmetics, then Tags). Paid with in-game money.',
    status: 'in-game',
    sprite: { shape: 'nametag', tone: 'tagLegendary' },
    commands: ['/tags', '/cosmetics'],
    chips: [
      { label: '[INFERNO]', color: 'red' },
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
    summary: 'Write in red, gold, aqua and 13 more colours. 250 or 500 Points each, yours for good.',
    icon: 'chat',
    rarity: 'uncommon',
    price: { currency: 'points', amount: 250 },
    priceFrom: true,
    howToGet: 'In game: type /chatcolor (or /cosmetics, then Chat Color) and pay with Points. Pick the colour you write in with /color.',
    status: 'in-game',
    sprite: { shape: 'chatbubble' },
    commands: ['/chatcolor', '/color', '/cosmetics'],
    perks: ['9 darker colours at 250 Points (white, grey, black too)', '7 bright colours at 500 Points', 'Switch between the ones you own with /color'],
    maxQuantity: 16,
  },
  {
    id: 'glow',
    category: 'cosmetics',
    name: 'Glow outline',
    summary: 'A coloured glow around your character. 500 to 3,000 Points.',
    icon: 'star',
    rarity: 'rare',
    price: { currency: 'points', amount: 500 },
    priceFrom: true,
    howToGet: 'In game: type /glowshop (or /cosmetics, then Glow) and pay with Points.',
    status: 'in-game',
    sprite: { shape: 'glow' },
    commands: ['/glowshop', '/cosmetics'],
    perks: ['Dark colours: 500 Points', 'Bright colours: 750 Points', 'Flashing glow: 2,000 Points', 'Rainbow glow: 3,000 Points'],
    maxQuantity: 18,
  },
  {
    id: 'points',
    category: 'cosmetics',
    name: 'Point shop: Tokens and keys',
    summary: 'Turn Points into Tokens (25 Points each) or crate keys. Tokens are worth the most; they never turn back into Points.',
    icon: 'gem',
    rarity: 'rare',
    price: { currency: 'points', amount: 25 },
    priceFrom: true,
    howToGet: 'In game: type /pointshop (or /purchase, then Points) and pay with Points.',
    status: 'in-game',
    sprite: { shape: 'points' },
    commands: ['/pointshop', '/purchase', '/warp afk'],
    // PURCHASE/Points.yml: points take / tokens give and crate key give
    contents: [
      '✪25 gives ⛃1',
      '✪125 gives ⛃5',
      '✪250 gives ⛃10',
      '✪1,250 gives ⛃50',
      '✪2,500 gives ⛃100',
      '✪500 gives 1 Vote crate key',
      '✪750 gives 1 Resource crate key',
    ],
    alsoFrom: [
      'AFK pool at /warp afk: ✪10 every 20 minutes',
      'Chat games: ✪5 for every win',
      'Lab of Horrors: ✪40 per paid clear, ✪60 for the first of the day',
      'Delves: points for every paid clear',
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

/**
 * The decided real-money price of a web listing, whatever CHECKOUT_MODE is (null only while the
 * listing is a placeholder). For web-only items (ranks, the Cardael key) shown with "on our web
 * store" wording, plus "opening soon" while CHECKOUT_MODE is 'off'. Use webPrice() for anything that
 * needs the checkout to be open (buy buttons, totals).
 */
export function listPrice(web?: WebListing): Price | null {
  if (!web || web.placeholder) return null
  return { currency: 'real', amount: web.price[STORE_CURRENCY], code: STORE_CURRENCY }
}

/** A real-money price you can pay right now: only with a web store AND a non-placeholder price. */
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
