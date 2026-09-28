/**
 * Central site configuration.
 * Edit this file to update links, server addresses, games and team info
 * without touching the page components.
 */

export const site = {
  name: 'KasadyaCraft',
  shortName: 'Kasadya',
  tagline: 'People to play with. People to grow with. In games and in life.',
  description:
    'KasadyaCraft is a community for people who want more than a random lobby. We play together, host our own servers like Minecraft and Roblox, and show up for each other in and out of the game.',
  founded: '2024',
  discord: 'https://discord.gg/8DY3eXHnAg',
  email: 'contact@semo.network',
}

export type ServerStatus = 'online' | 'beta' | 'soon'

export interface GameServer {
  slug: string
  game: string
  name: string
  status: ServerStatus
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
    name: 'Kasadya SMP',
    status: 'online',
    address: 'play.kasadyacraft.online',
    joinUrl: 'minecraft://play.kasadyacraft.online',
    joinLabel: 'Launch Minecraft',
    summary:
      'Survival multiplayer with two core plugins: Slimefun for tech and automation, Epidemic for disease survival.',
    tags: ['Java Edition', 'SMP', 'Slimefun', 'Epidemic'],
    href: '/games/minecraft',
  },
  {
    slug: 'roblox',
    game: 'Roblox',
    name: 'Kasadya on Roblox',
    status: 'soon',
    // Replace with your Roblox group or experience link when it is live.
    joinUrl: 'https://www.roblox.com',
    joinLabel: 'Open Roblox',
    summary:
      'Our Roblox group and private experiences. Group sessions, community games and events hosted by the crew.',
    tags: ['Group', 'Private servers', 'Events'],
    href: '/games/roblox',
  },
]

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

/** Why people join. Shown on the home page. */
export const reasons = [
  {
    title: 'Someone to play with',
    body: 'No more empty friend lists or random lobbies. There is always someone here up for a session.',
  },
  {
    title: 'Someone to grow with',
    body: 'Get better at the games you love, and at the things outside them. Members share what they know freely.',
  },
  {
    title: 'Someone in your corner',
    body: 'A group that notices when you are gone, celebrates your wins and listens on the bad days.',
  },
]

export interface ShowcaseGame {
  name: string
  sub: string
  /** Official logo file under /public/games, shown in its original colours */
  logo: string
  hosted?: boolean
}

/** Popular games the community plays, shown as the stacked card showcase. Edit freely. */
export const popularGames: ShowcaseGame[] = [
  { name: 'Minecraft', sub: 'Kasadya SMP', logo: '/games/minecraft.png', hosted: true },
  { name: 'Roblox', sub: 'Kasadya group', logo: '/games/roblox.png', hosted: true },
  { name: 'Valorant', sub: 'Ranked & customs', logo: '/games/valorant.svg' },
  { name: 'League of Legends', sub: 'Flex queue', logo: '/games/lol.svg' },
  { name: 'Dota 2', sub: 'Ranked & turbo', logo: '/games/dota2.png' },
  { name: 'Counter-Strike 2', sub: 'Premier & casual', logo: '/games/cs2.svg' },
  { name: 'Mobile Legends', sub: 'Squad nights', logo: '/games/mlbb.png' },
  { name: 'Call of Duty', sub: 'Warzone', logo: '/games/cod.svg' },
  { name: 'Fortnite', sub: 'Trios', logo: '/games/fortnite.svg' },
  { name: 'Apex Legends', sub: 'Pubs & ranked', logo: '/games/apex.png' },
  { name: 'Diablo IV', sub: 'Seasons & co-op', logo: '/games/diablo4.png' },
  { name: 'GTA', sub: 'Online sessions', logo: '/games/gta.svg' },
  { name: 'NBA 2K', sub: 'Park & MyTeam', logo: '/games/nba2k.svg' },
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
    focus: 'Player disputes, Slimefun support and keeping the peace.',
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

export const nav = [
  { label: 'Community', href: '/community' },
  { label: 'Games', href: '/games' },
  { label: 'Products', href: '/products' },
]

export interface Product {
  name: string
  tag: string
  body: string
  href: string
}

/**
 * Things made by the community. Leave empty to show the "coming soon" state.
 * Example:
 * { name: 'Kasadya Tee', tag: 'Merch', body: 'Heavyweight black tee with the logo.', href: 'https://...' }
 */
export const products: Product[] = []
