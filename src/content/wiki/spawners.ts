import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/zSpawner/config.yml: silkSpawner.enable true, whitelistMaterial [DIAMOND_PICKAXE, NETHERITE_PICKAXE],
 *   needSilkTouchEnchant true, silkNaturalSpawner true, naturelSpawnerInto CLASSIC, chunkLimit global 2,
 *   stackableSpawner false, dropSpawnerOnExplose false; item lore "Mobs from spawners have no AI."
 * - config/paper-world-defaults.yml disable-mob-spawner-spawn-egg-transformation true (zSpawner integrator log)
 * - spigot.yml nerf-spawner-mobs true (zSpawner integrator log)
 * - PlotSquared worlds.yml mob_spawner_spawning false; WorldGuard shoppingmall mob-spawning DENY; spawn region denies build
 * - EconomyShopGUI: spawners not sold; spawner-provider DISABLED; sell prices (bone/string 0.30, rotten flesh 0.10)
 * - ExcellentCrates spawner_crate.yml (placed at /warp crates; keys from PURCHASE/Keys.yml for 100 Tokens and playtime L27)
 */
export const spawners: WikiPage = {
  slug: 'spawners',
  title: 'Spawners',
  summary: 'Pick up spawners with a Silk Touch diamond or netherite pickaxe, place up to 2 per chunk, and build your grinder in the Wild.',
  icon: 'spawner',
  category: 'features',
  order: 6,
  updated: '2026-11-25',
  keywords: ['spawner', 'silk touch', 'zspawner', 'mob spawner', 'grinder', 'mob farm', 'chunk limit', 'xp farm'],
  related: ['crates', 'plots', 'world-and-warps', 'economy'],
  body: [
    { type: 'p', text: 'Yes, you can collect spawners on KasadyaCraft. Here is the whole system on one page.' },
    { type: 'h2', text: 'Getting a spawner' },
    {
      type: 'steps',
      items: [
        {
          title: 'Find one',
          text: 'Natural spawners sit in dungeons, mineshafts and strongholds in the Wild, and in fortresses and bastions in the Nether.',
        },
        {
          title: 'Use the right pickaxe',
          text: 'Mine it with a **diamond or netherite pickaxe with Silk Touch**. You get the spawner as an item, mob type included.',
        },
        { title: 'Bring it home', text: 'Place it somewhere it can actually spawn mobs (see below).' },
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Check your pickaxe first',
      text: 'An iron or gold Silk Touch pickaxe gets you **nothing**. Any other tool **destroys** the spawner for good.',
    },
    {
      type: 'p',
      text: 'The Spawner crate at `/warp crates` gives spawners too. Its keys cost 100 Tokens in `/keys`, and playtime level XXVII hands you one. See [Crates and keys](/wiki/crates).',
    },
    { type: 'h2', text: 'Placing and moving' },
    {
      type: 'list',
      items: [
        'Place it like any block. It keeps its mob type.',
        'You can have at most **2 spawners in one chunk**. The third is blocked.',
        'To move it, mine it again with a Silk Touch diamond or netherite pickaxe.',
        'Spawners do not stack. One block is one spawner.',
        'Spawn eggs cannot change the mob in a spawner.',
        'Explosions never drop a spawner, so TNT is not a free Silk Touch.',
      ],
    },
    { type: 'h2', text: 'Where spawners work' },
    {
      type: 'table',
      head: ['Place', 'Spawns mobs?'],
      rows: [
        ['The Wild, Nether and End', 'Yes'],
        ['Your plot', 'No. The plot world blocks mobs from spawners.'],
        ['Shopping Mall', 'No. Mob spawning is off there.'],
        ['Spawn', 'No. You cannot build at spawn.'],
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'The Wild has no claims',
      text: 'Anyone with a Silk Touch diamond pickaxe can take a spawner you placed in the Wild. Hide your grinder well, or build it with friends you trust.',
    },
    { type: 'h2', text: 'How spawner mobs behave' },
    {
      type: 'list',
      items: [
        'Mobs from spawners have **no AI**. They do not walk or fight back. Water still pushes them, so a water stream to a kill spot works.',
        'Spawners work like vanilla: a few mobs every 10 to 40 seconds while a player is within 16 blocks.',
      ],
    },
    { type: 'h2', text: 'Are spawners worth it?' },
    {
      type: 'p',
      text: 'Honest answer: they are not a money printer. Mob drops sell for little in `/shop` (bones and string $0.30, rotten flesh $0.10). Spawners shine for XP and for supplies like bones, string and arrows.',
    },
  ],
}
