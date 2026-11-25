import type { WikiPage } from '@/lib/content'
import { voteRewards } from '@/lib/vote'

/*
 * Key prices, pack sizes and "also from" render from src/lib/store.ts (storeItems, category 'keys')
 * through the 'getting-keys' insert (src/components/wiki/inserts.tsx). This file holds crate CONTENTS only.
 *
 * Sources (read-only, 2026-11-25):
 * - plugins/ExcellentCrates/crates/{vote_crate,esorce_crate,epic_crate,trim_crate,spawner_crate}.yml (rewards, weights, rarity)
 * - plugins/ExcellentCrates/config.yml Rewards.Rarities: common 70, uncommon 40, rare 25, legendary 10, mythic 5
 * - Odds = rarity weight / sum of rarity weights present in that crate x reward weight / sum of reward weights in
 *   that rarity (same model as /root/launch/work/econ-balancer/crate_ev.py and the zSpawner integrator's odds)
 * - Crate positions: spawn world (warp crates); spawner_crate.yml Positions -52,71,46,spawn since the gameplay fixer.
 *   Spawner keys: PURCHASE/Keys.yml Spawner_Key (100 Tokens) + Playtime.yml L27 (CHANGELOG gameplay fixer)
 * - epic_crate.yml epic_crossbow ItemsData (re-read 06:55): id minecraft:crossbow named EPIC CROSSBOW, mending, multishot,
 *   piercing 4, quick_charge 3, unbreaking 3, charged_projectiles = 3 intangible arrows (comes loaded).
 */
export const crates: WikiPage = {
  slug: 'crates',
  title: 'Crates and keys',
  summary: 'What is inside each crate at /warp crates, roughly how likely each reward is, and every way to get keys.',
  icon: 'key',
  category: 'features',
  order: 5,
  updated: '2026-11-25',
  keywords: [
    '/warp crates',
    '/keys',
    '/vote',
    'crate',
    'keys',
    'vote key',
    'epic key',
    'resource key',
    'trim key',
    'spawner key',
    'odds',
    'chance',
    'loot',
    'mace',
    'elytra',
  ],
  related: ['economy', 'rewards', 'spawners', 'ranks'],
  body: [
    {
      type: 'p',
      text: 'The crates are at `/warp crates`, at spawn. Left-click a crate to preview its rewards. Hold the matching key and right-click to open it.',
    },
    { type: 'h2', text: 'Getting keys' },
    { type: 'h2', text: 'Vote crate' },
    { type: 'p', text: 'A starter grab bag: iron gear, handy supplies and extra keys, with a small shot at diamonds, a Totem or an Enchanted Golden Apple.' },
    {
      type: 'p',
      text: `Every vote gives you **${voteRewards.keysPerVote} Vote key**. The links are in \`/vote\` and on the [vote page](/vote).`,
    },
    {
      type: 'table',
      caption: 'Vote crate rewards',
      head: ['Reward', 'Rarity', 'Chance'],
      rows: [
        ['2 Diamonds, a Totem of Undying or an Enchanted Golden Apple', 'Legendary', 'about 3% each'],
        ['Turtle Shell', 'Uncommon', 'about 8%'],
        ['Cobblestone generator kit (iron pickaxe, lava bucket, water bucket)', 'Uncommon', 'about 8%'],
        ['1 Trim key or 1 Resource key', 'Uncommon', 'about 8% each'],
        ['Vote Helmet, Chestplate, Leggings or Boots (iron, Protection I, Unbreaking I)', 'Common', 'about 5% each'],
        ['Vote Sword (iron, Sharpness I, Unbreaking I)', 'Common', 'about 5%'],
        ['Vote Pickaxe, Axe or Shovel (iron, Efficiency II, Unbreaking I)', 'Common', 'about 5% each'],
        ['Vote Shield (Unbreaking I)', 'Common', 'about 5%'],
        ['16 Wind Charges, 16 Firework Rockets or 3 Golden Apples', 'Common', 'about 5% each'],
      ],
    },
    { type: 'h2', text: 'Resource crate' },
    {
      type: 'p',
      text: 'Raw materials for building and gearing up. All 23 rewards have the same chance, about **4%** each.',
    },
    {
      type: 'list',
      items: [
        'Ingots: 64 iron, 64 copper or 64 gold',
        'Gems: 32 diamonds or 32 emeralds',
        'Netherite: 1 netherite ingot, 4 netherite scrap or 5 netherite upgrade templates',
        'Crops: 64 nether wart, carrots, potatoes, sweet berries or glow berries',
        'Saplings: 8 oak, spruce, birch, jungle, acacia or dark oak, or 5 cherry',
        'Keys: 4 Vote keys, 5 Trim keys or 2 Epic keys',
      ],
    },
    { type: 'h2', text: 'Epic crate' },
    {
      type: 'p',
      text: 'Maxed-out named gear. Everyday tools are about **6%** each, the battle axe, silk pickaxe, bow and crossbow about **7%** each, the sword and Fortune pickaxe about **9%** each, and the Elytra, Mace and Enchanted Golden Apples about **2%** each.',
    },
    {
      type: 'table',
      caption: 'Epic crate rewards',
      head: ['Reward', 'Enchantments'],
      rows: [
        ['Epic Sword (diamond)', 'Sharpness V, Fire Aspect II, Sweeping Edge III, Mending, Unbreaking III'],
        ['Epic Battle Axe (diamond)', 'Sharpness V, Mending, Unbreaking III'],
        ['Epic Axe (diamond)', 'Efficiency V, Silk Touch, Mending, Unbreaking III'],
        ['Epic Pickaxe (diamond)', 'Efficiency V, Fortune III, Mending, Unbreaking III'],
        ['Epic Silk Pickaxe (diamond)', 'Efficiency V, Silk Touch, Mending, Unbreaking III'],
        ['Epic Shovel (diamond)', 'Efficiency V, Silk Touch, Mending, Unbreaking III'],
        ['Epic Hoe (diamond)', 'Efficiency V, Mending, Unbreaking III'],
        ['Epic Elytra', 'Mending, Unbreaking III'],
        ['Epic Bow', 'Power V, Punch II, Flame, Infinity, Unbreaking III'],
        ['Epic Crossbow', 'Multishot, Piercing IV, Quick Charge III, Mending, Unbreaking III. Comes loaded and ready to fire.'],
        ['Epic Shield', 'Mending, Unbreaking III'],
        ['Epic Fishing Rod', 'Luck of the Sea III, Lure III, Mending, Unbreaking III'],
        ['Epic Shears, Brush or Flint and Steel', 'Mending, Unbreaking III'],
        ['Mace', 'None'],
        ['4 Enchanted Golden Apples', 'None'],
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'The Epic Silk Pickaxe is the dream pull for spawner hunters: Silk Touch on a diamond pickaxe is exactly what you need. See [Spawners](/wiki/spawners).',
    },
    { type: 'h2', text: 'Trim crate' },
    { type: 'p', text: 'One armour trim smithing template per key.' },
    {
      type: 'table',
      caption: 'Trim crate rewards',
      head: ['Templates', 'Rarity', 'Chance'],
      rows: [
        ['Flow, Bolt', 'Uncommon', 'about 14% each'],
        ['Silence', 'Legendary', 'about 7%'],
        ['Wayfinder, Raiser, Shaper, Host', 'Rare', 'about 4% each'],
        ['Sentry, Vex, Wild, Coast, Dune, Ward, Tide, Snout, Rib, Eye, Spire', 'Common', 'about 4% each'],
      ],
    },
    { type: 'h2', text: 'Spawner crate' },
    {
      type: 'p',
      text: 'Gives a placeable spawner that you can move later with a Silk Touch diamond or netherite pickaxe. It stands with the other crates at `/warp crates`. Buy a Spawner key in `/keys` for 100 Tokens, get one free at playtime level XXVII, or trade Lab of Horrors loot for one at `/locksmith`. These are the odds:',
    },
    {
      type: 'table',
      caption: 'Spawner crate rewards',
      head: ['Spawner', 'Rarity', 'Chance'],
      rows: [
        ['Pig', 'Common', 'about 22%'],
        ['Chicken', 'Common', 'about 18%'],
        ['Sheep', 'Common', 'about 18%'],
        ['Zombie', 'Common', 'about 15%'],
        ['Skeleton', 'Rare', 'about 10.5%'],
        ['Spider', 'Rare', 'about 10.5%'],
        ['Cow', 'Rare', 'about 5%'],
      ],
    },
    { type: 'h2', text: 'How the odds work' },
    {
      type: 'p',
      text: 'Each crate first rolls a rarity (common, uncommon, rare or legendary, weighted 70, 40, 25 and 10 among the rarities that crate has), then picks a reward inside that rarity. The chances above come straight from the crate settings and are rounded.',
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'Crate gear counts as gear, so `/shop` will not buy it. Use it, or sell it to another player.',
    },
  ],
}
