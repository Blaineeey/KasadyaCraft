import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/AltarSMP/messages.yml (weapon names + ability text), config.yml (cooldowns, recipes WeaponHandle /
 *   VulcansSkull / IllusionCore enabled, trueDamage true, weapons_that_can_be_obtained_from_rolling list)
 * - plugins/AltarSMP/altars.yml is 0 bytes (no altar placed, so nothing can be forged). No crate, menu, shop or quest
 *   hands out legendaries or rolls (grep over ExcellentCrates, DeluxeMenus, EconomyShopGUI, ODailyQuests), and
 *   /root/launch/CHANGELOG.md has no event schedule. So the page says they are NOT obtainable yet.
 *   OWNER: confirm before the site promises staff events or a forge opening date.
 * - The WeaponHandle / VulcansSkull / IllusionCore recipes are enabled, so players can craft the parts today even
 *   though nothing uses them. The page warns them not to (a Weapon Handle eats a Nether Star).
 * - KasadyaWildGuard-1.0.0 (log: "Block destruction from explosions/abilities is limited to: [world]"):
 *   outside "world" it clears explosion block lists, cancels explosion/fireball/lightning/end-crystal fire and removes
 *   plugin-spawned falling blocks. No bypass.
 * - plugin.yml: /controls has no permission (players can use it)
 */
export const legendaryWeapons: WikiPage = {
  slug: 'legendary-weapons',
  title: 'Legendary weapons',
  summary: 'Rare weapons with two special abilities each. Not obtainable yet, but here is what they do and the wild-only rule they follow.',
  icon: 'sword',
  category: 'features',
  order: 7,
  updated: '2026-11-25',
  keywords: [
    'legendary',
    'legendaries',
    'altarsmp',
    'altar',
    'weapons',
    'abilities',
    'hyperion',
    'bloodlust',
    'striker',
    'echo',
    'knightfall',
    'eclipse',
    '/controls',
    'wild',
    'explosions',
  ],
  related: ['world-and-warps', 'plots', 'rules'],
  body: [
    {
      type: 'callout',
      tone: 'warn',
      title: 'Not obtainable yet',
      text: 'Legendary weapons are not obtainable yet. We will announce on [Discord](https://discord.gg/8DY3eXHnAg) when they are.',
    },
    {
      type: 'p',
      text: 'Each legendary is a one-of-a-kind weapon with two special abilities. This page shows what they do and the rules they follow, so you know what is coming.',
    },
    { type: 'h2', text: 'The wild-only rule' },
    {
      type: 'p',
      text: 'Some abilities break blocks: TNT shots, fireballs, sonic blasts, magma and flying earth. On KasadyaCraft that block damage **only happens in the overworld Wild**.',
    },
    {
      type: 'table',
      head: ['Where', 'Do abilities and explosions break blocks?'],
      rows: [
        ['The Wild (overworld)', 'Yes'],
        ['Nether and End', 'No'],
        ['Plots', 'No'],
        ['Spawn and the Shopping Mall', 'No'],
        ['Lab of Horrors', 'No'],
      ],
    },
    {
      type: 'p',
      text: 'The rule only covers blocks. Abilities still hurt players and mobs anywhere PvP and damage are allowed, and many of them deal true damage that goes straight through armour.',
    },
    {
      type: 'callout',
      tone: 'warn',
      text: 'The Wild has no land claims, so a legendary can wreck a build there. Keep your base on your plot.',
    },
    { type: 'h2', text: 'Using abilities' },
    {
      type: 'list',
      items: [
        'Most abilities use the **swap offhand key** (F by default). The second one is **sneak + swap offhand**.',
        'On bows like the Striker, the offhand key switches ability and shooting fires it.',
        'Type `/controls` in game for the full list.',
        'Bloodlust and Knightfall grow stronger with player kills. Sneak + left-click Bloodlust to see its kill count.',
      ],
    },
    { type: 'h2', text: 'The weapons' },
    {
      type: 'table',
      caption: 'Legendary weapons and their abilities (cooldown in brackets)',
      head: ['Weapon', 'Offhand ability', 'Sneak + offhand ability'],
      rows: [
        ['Bloodlust', 'Bloodhook at 5 kills: a blood chain that pulls targets in (30 s)', 'Blood Trail at 3 kills (1 min). Also bleed, Speed II and Strength I as kills go up'],
        ['Knightfall (mace)', 'Grappling Hook at 4 kills (10 s, 3 uses)', 'Hammer Throw at 10 kills (30 s). Also invisibility on hit, Speed II, extra enchants'],
        ['Hyperion', 'Holy Lance: a beam of light (1 min)', 'Scorching: a blade of flame (30 s). Fire immunity while held'],
        ['Eclipse', 'Day: Solar Inferno (40 s). Night: Moonlit Stars (40 s)', 'Day: Solar Leap (15 to 30 s). Night: 4 s of true invisibility (30 s)'],
        ['Nightpiercer', 'Crimson Bite: drains 2 hearts over 10 s (1 min)', 'Transformation: fly as a swarm of bats (30 s). Regeneration at night'],
        ['Shadow Blade', 'Shadow Daggers: 3 daggers that slow and blind', 'Shadow Leap: teleport across the sky. Speed II while held'],
        ['Pure Blade', 'Shade Soul: a beam that makes enemies glow and slows them (45 s)', 'Cyclone Slash: spin and gain speed (30 s)'],
        ['Cutlass', 'Thousand Cuts: slashes and a lunge (15 s)', 'Parry: block the next 3 hits (30 s)'],
        ['Paladin Axe', 'Earthshatter: a huge shockwave (45 s)', 'Stalwart Absorption: absorb and reflect damage for 5 s (45 s)'],
        ['Windweaver', 'Wind Leap with Speed IV (15 s)', 'Windgust: charge a knockback burst (15 to 30 s)'],
        ['Earth Gauntlet', 'Meteor Strike: a charged hit with huge knockback (30 s)', 'Landslide: throw mud that pulls or slows (18 s)'],
        ['Withered Bone Blade', 'Wither Leap: up to 3 dashes that wither (10 s)', 'Wither Cleansing: wither sludge (30 s)'],
        ['Bone Blade', 'Skeletal Leap (30 s)', 'Bone Cage: trap players for a moment (60 s)'],
        ['Frost Scythe', 'Scythe Throw: 4 hearts of damage (30 s)', 'Command of Ice: rain ice blocks where you look (45 s)'],
        ["Vulcan's Crossbow", "Vulcan's Wrath: a deadly fireball (45 s)", 'Scattershot: every shot fires 3 arrows, the middle one burns'],
        ['Striker (bow)', 'Stab Shot: drives TNT into the ground (60 s)', 'Orbital Shot: calls down a nuke (120 s)'],
        ['Echo', 'Sonic Blast: throws your weapon through blocks (40 s)', 'Echo Shriek: slows and darkens nearby players (60 s)'],
        ['Pale Cannon', 'Shoots resin that spreads Pale Rot (30 s)', 'Pale Roots: roots that follow your aim (45 s)'],
      ],
    },
    { type: 'h2', text: 'Forge parts: do not craft them yet' },
    {
      type: 'callout',
      tone: 'warn',
      text: "Your recipe book may show a **Weapon Handle**, a **Vulcan's Skull** and an **Illusion Core**. Skip them for now. No forge is open, so these parts do nothing yet, and the Weapon Handle costs a Nether Star and two netherite ingots. Hold on to your materials until we announce the forge.",
    },
  ],
}
