/**
 * Voting: the single source for the vote page, the home page and the hotbar count.
 *
 * Every line mirrors plugins/KasadyaVote/config.yml on Survival (checked 2026-11-25: the plugin
 * loaded 7 vote sites, NuVotifier receives the votes). Keep the order, names and links in step with
 * that file: players see the same list when they type /vote in game.
 */

export interface VoteSite {
  /** Same id as in KasadyaVote config.yml. Also the key for the "opened" marks in this browser. */
  id: string
  name: string
  /** The site's domain, shown to players so they know where the link goes. */
  host: string
  url: string
  /** Hours until the same player can vote there again (cooldown-hours in config.yml). */
  cooldownHours: number
}

export const voteSites: readonly VoteSite[] = [
  {
    id: 'minecraft-mp',
    name: 'Minecraft-MP',
    host: 'minecraft-mp.com',
    url: 'https://minecraft-mp.com/server/367385/vote/',
    cooldownHours: 24,
  },
  {
    id: 'minecraft-server-list',
    name: 'Minecraft-Server-List',
    host: 'minecraft-server-list.com',
    url: 'https://minecraft-server-list.com/server/525254/vote/',
    cooldownHours: 24,
  },
  {
    id: 'minecraft-menu',
    name: 'Minecraft.Menu',
    host: 'minecraft.menu',
    url: 'https://minecraft.menu/server-kasadya-craft.7120/vote',
    cooldownHours: 24,
  },
  {
    id: 'topminecraftservers',
    name: 'TopMinecraftServers',
    host: 'topminecraftservers.org',
    url: 'https://topminecraftservers.org/vote/45101',
    cooldownHours: 24,
  },
  {
    id: 'mc-servers',
    name: 'MC-Servers',
    host: 'mc-servers.com',
    url: 'https://mc-servers.com/vote/7487',
    cooldownHours: 24,
  },
  {
    id: 'topg',
    name: 'TopG',
    host: 'topg.org',
    url: 'https://topg.org/minecraft-servers/server-689128',
    cooldownHours: 6,
  },
  {
    id: 'minecraft-serverlist',
    name: 'Minecraft-ServerList',
    host: 'minecraft-serverlist.com',
    url: 'https://minecraft-serverlist.com/server/7265/vote',
    cooldownHours: 24,
  },
]

/** What a vote gives, from KasadyaVote config.yml (re-checked 2026-11-27). */
export const voteRewards = {
  /** crate key give %player% vote 1 */
  keysPerVote: 1,
  /** tempfly give %player% 5: minutes of fly time (Skript tempfly.sk, /fly on your own or trusted plots) */
  flyMinutes: 5,
  /** exp give %player% 200: experience points */
  xpPerVote: 200,
  /** Every this many votes, everyone online on Survival gets partyKeys and the piñata spawns. */
  partyVotes: 25,
  partyKeys: 1,
  /** kpinata party (Skript pinata.sk): the piñata stands at /warp crates for this many minutes */
  pinataMinutes: 5,
  /** Votes for a player who is offline wait this long, up to this many. */
  pendingDays: 30,
  pendingMax: 30,
} as const

/** "1 Vote crate key, 5 minutes of fly time and 200 XP" */
export const VOTE_REWARD_TEXT = `${voteRewards.keysPerVote} Vote crate key, ${voteRewards.flyMinutes} minutes of fly time and ${voteRewards.xpPerVote} XP`

/** "everyone online on Survival gets 1 Vote key and a piñata appears at /warp crates for 5 minutes" */
export const VOTE_PARTY_TEXT = `everyone online on Survival gets ${voteRewards.partyKeys} Vote key and a piñata appears at \`/warp crates\` for ${voteRewards.pinataMinutes} minutes`

/** "Once a day" / "Every 6 hours". */
export function cooldownLabel(hours: number): string {
  return hours === 24 ? 'Once a day' : `Every ${hours} hours`
}
