/**
 * Central site configuration and shared facts.
 *
 * Owner: SITE ARCHITECT / INTEGRATOR. Every team READS this file; nobody else
 * edits it. Need a change (a new fact, a nav item)? Put it in your report and
 * the integrator applies it. Facts here were checked against the live server
 * configs on 2026-11-25 (see docs/SITE_PLAN.md, "Server facts").
 */
import type { PixelIconName } from '@/components/ui/pixel-icons'
import { voteRewards, voteSites } from '@/lib/vote'

export const site = {
  name: 'KasadyaCraft',
  shortName: 'Kasadya',
  url: 'https://kasadyacraft.com',
  /** What players type in Multiplayer > Add Server. */
  address: 'play.kasadyacraft.com',
  /**
   * Player-facing version line. Via 5.12.3 on the backends accepts 1.13 to 26.3 (VERSIONS in
   * src/content/guides/facts.ts); 1.21.10 stays recommended because the resource pack is made for it.
   */
  edition: 'Java Edition',
  /** Bedrock players join through Geyser on the same address (proxy, port 19132 TCP + UDP), since 2026-11-25. */
  bedrockPort: 19132,
  versionLabel: 'Java 1.21.x',
  recommendedVersion: '1.21.10',
  tagline: 'People to play with, people to grow with.',
  /** Second line of the live MOTD (proxy config). Keep the two in step; there is no "City". */
  motdLine: 'Survival | Dungeons | Plots | Shops',
  description:
    'KasadyaCraft is a friendly Minecraft survival server for Java and Bedrock with plots, player shops, daily quests and a dungeon with a real boss fight. Hop in at play.kasadyacraft.com.',
  /** "Kasadya" means joy or festivity. The whole brand is a festival. */
  meaning: 'Kasadya means joy, the feeling of a town fiesta.',
  founded: '2024',
  discord: 'https://discord.gg/8DY3eXHnAg',
  email: 'contact@semo.network',
} as const

/** How the network is put together. Used by the join guide, home and wiki. */
export const network = {
  hub: {
    name: 'Hub',
    blurb: 'Everyone lands in the festival plaza first. Walk through the portal, talk to the Survival Guide, or use the compass in your hotbar.',
    returnCommand: '/hub',
  },
  survival: {
    name: 'Survival',
    blurb: 'Plots, homes, warps, player shops, quests and the Lab of Horrors dungeon.',
  },
  resourcePack: {
    required: true,
    why: 'Custom items, dungeon mobs and the menus all live in our resource pack. Accept it when you enter Survival.',
  },
} as const

export type ServerStatusLabel = 'online' | 'beta' | 'soon'

export interface GameServer {
  slug: string
  game: string
  name: string
  status: ServerStatusLabel
  address?: string
  joinUrl?: string
  joinLabel: string
  summary: string
  tags: string[]
  href: string
}

export const servers: GameServer[] = [
  {
    slug: 'minecraft',
    game: 'Minecraft',
    name: 'KasadyaCraft Survival',
    status: 'online',
    address: site.address,
    joinLabel: 'How to join',
    joinUrl: '/play',
    summary:
      'Survival with plots, player shops in a shopping mall, daily quests, crates and the Lab of Horrors dungeon. You start in the hub, then hop into Survival.',
    tags: ['Java 1.21.x', 'Survival', 'Plots', 'Dungeon', 'Player shops'],
    href: '/games/minecraft',
  },
  {
    slug: 'roblox',
    game: 'Roblox',
    name: 'Kasadya on Roblox',
    status: 'soon',
    // Replace with the Roblox group or experience link when it is live.
    joinUrl: 'https://www.roblox.com',
    joinLabel: 'Open Roblox',
    summary:
      'Our Roblox group and private experiences. Group sessions, community games and events hosted by the crew.',
    tags: ['Group', 'Private servers', 'Events'],
    href: '/games/roblox',
  },
]

/* --------------------------------------------------------------------------
   Navigation
   The main nav is a 9-slot HOTBAR fixed to the bottom of the screen.
   Order matters: number keys 1-9 jump to the matching slot.
   -------------------------------------------------------------------------- */
export interface HotbarItem {
  label: string
  href: string
  icon: PixelIconName
  /** Short line shown above the hotbar when the slot is selected (like an item name). */
  hint: string
  external?: boolean
  /** A stack count in the slot's bottom-right corner. `unit` names it for screen readers ("Vote, 7 sites"). */
  stack?: { count: number; unit: string }
  /** Gold slot: the one page every player should notice. Never two at once, or neither stands out. */
  featured?: boolean
}

export const hotbar: HotbarItem[] = [
  { label: 'Home', href: '/', icon: 'house', hint: 'Back to the plaza' },
  { label: 'Play', href: '/play', icon: 'grass', hint: 'How to join in 3 steps' },
  { label: 'Guides', href: '/guides', icon: 'book', hint: 'Starter guides for new players' },
  { label: 'Wiki', href: '/wiki', icon: 'map', hint: 'Every feature, rank and command' },
  { label: 'Store', href: '/store', icon: 'chest', hint: 'Ranks, keys and cosmetics' },
  {
    label: 'Vote',
    href: '/vote',
    icon: 'star',
    // No site count in here: the name plate is Pixelify, whose 7 reads as a 1. The stack count says it.
    hint: `${voteRewards.keysPerVote} Vote crate key per vote`,
    stack: { count: voteSites.length, unit: 'sites' },
    featured: true,
  },
  { label: 'Community', href: '/community', icon: 'heart', hint: 'Staff, events and support' },
  { label: 'Games', href: '/games', icon: 'controller', hint: 'Everything else we play' },
  { label: 'Discord', href: site.discord, icon: 'chat', hint: 'Chat with us on Discord', external: true },
]

/** Footer link columns. */
export const footerLinks: { heading: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    heading: 'Start here',
    links: [
      { label: 'How to join', href: '/play' },
      { label: 'Starter guides', href: '/guides' },
      { label: 'Rules', href: '/wiki/rules' },
      { label: 'FAQ', href: '/wiki/faq' },
    ],
  },
  {
    heading: 'Server',
    links: [
      { label: 'Wiki', href: '/wiki' },
      { label: 'Store', href: '/store' },
      { label: 'Vote', href: '/vote' },
      { label: 'Lab of Horrors', href: '/wiki/dungeon' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Community', href: '/community' },
      { label: 'Games we play', href: '/games' },
      { label: 'Discord', href: site.discord, external: true },
    ],
  },
]

/* --------------------------------------------------------------------------
   Community content (kept from the old site, used by /community and /games)
   -------------------------------------------------------------------------- */

/** What actually happens in the community. */
export const activities = [
  {
    title: 'Game nights',
    body: 'Sessions on our servers and whatever the group is into that week. Everyone is welcome, no rank or skill required.',
  },
  {
    title: 'Show and tell',
    body: 'Share a build, a clip, a project or anything you are proud of. People here actually look, and actually reply.',
  },
  {
    title: 'Real talk',
    body: 'Stuck on something, in a game or outside it? Ask. Members answer because someone once did the same for them.',
  },
  {
    title: 'Growing together',
    body: 'Wins get celebrated, rough weeks get heard. We keep each other going, in the game and in life.',
  },
]

/*
 * No logo field on purpose: the site never ships publishers' logos (no Mojang art at all,
 * and the repo is public). GameStack draws its own pixel icons, picked by genre.
 */
export interface ShowcaseGame {
  name: string
  sub: string
  hosted?: boolean
}

/** Popular games the community plays (the /games showcase). */
export const popularGames: ShowcaseGame[] = [
  { name: 'Minecraft', sub: 'KasadyaCraft Survival', hosted: true },
  { name: 'Roblox', sub: 'Kasadya group', hosted: true },
  { name: 'Valorant', sub: 'Ranked & customs' },
  { name: 'League of Legends', sub: 'Flex queue' },
  { name: 'Dota 2', sub: 'Ranked & turbo' },
  { name: 'Counter-Strike 2', sub: 'Premier & casual' },
  { name: 'Mobile Legends', sub: 'Squad nights' },
  { name: 'Call of Duty', sub: 'Warzone' },
  { name: 'Fortnite', sub: 'Trios' },
  { name: 'Apex Legends', sub: 'Pubs & ranked' },
  { name: 'Diablo IV', sub: 'Seasons & co-op' },
  { name: 'GTA', sub: 'Online sessions' },
  { name: 'NBA 2K', sub: 'Park & MyTeam' },
]

export interface TeamMember {
  name: string
  role: string
  focus: string
  discord?: string
}

export const team: TeamMember[] = [
  {
    name: 'Rasasakeet',
    role: 'Senior Moderator',
    focus: 'Player disputes, server support and keeping the peace.',
    discord: 'I F R I T Z#0310',
  },
  {
    name: 'Open',
    role: 'Head Administrator',
    focus: 'Staff management, server configuration and escalations.',
  },
  {
    name: 'Open',
    role: 'Moderator',
    focus: 'Reports, rule enforcement and general support.',
  },
  {
    name: 'Open',
    role: 'Helper',
    focus: 'New player onboarding and community questions.',
  },
]
