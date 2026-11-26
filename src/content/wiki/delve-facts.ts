import type { PixelIconName } from '@/components/ui/pixel-icons'

/**
 * The delves (plugin KasadyaDelves 1.0.0): Gloomhold Keep and Cinderworks. Shared facts for the delves,
 * gloomhold-keep, cinderworks, commands and faq wiki pages, the first-delve guide and the home and
 * /games/minecraft cards, so a retune means one edit here. Not a wiki page itself (index.ts does not list it).
 *
 * Sources (read-only, 2026-11-26, plugin resources in the KasadyaDelves jar):
 * - config.yml: max-players 5, respawn-delay-seconds 10, protection-seconds 5, rejoin-seconds 300,
 *   time-limit-seconds 2700, idle warn 360 / end 480, starts-per-day 10, short-runs limit 3 / cooldown 600,
 *   party-leave seconds 120, start-countdown-seconds 8, slots-per-map 3, bedrock damage-dealt 1.12 / damage-taken 0.92,
 *   max-armor-wear 1, armor-wear-chance 0.5, commands-inside, blocked-items (AltarSMP legendary weapons), dungeon-hub true
 * - balance.json rules: lives base 2 + per_player 3, golden_apple_cooldown_s 30, totems_per_run 1, Strength clamped to I
 * - rewards.yml (= balance.json rewards): points A 30 / B 45, first-of-day 15, paid-clears-per-day 3, rank S 1.2 A 1.1 B 1.0
 *   C 0.9, first-clear, keys, unique (chance, rank-s-bonus 0.02, pity 12, items), trophies, vault, rank (par, score, S 108
 *   A 90 B 70), forced-unpaid-from 3, eligible (contribution 0.25, presence 0.5, afk 0.25, last-join-floor 3, disconnect 120 s)
 * - loot.yml: rolls 2-3, odds F1-F5 / secret / vault, tables, books, chests.per-floor, mimic-share A 0.12 / B 0.15,
 *   per-day 42 (balance.json still says 36; the plugin reads loot.yml, ChestConfig accepts 42), hint radius 7
 * - script-A.json (id gloomhold) / script-B.json (id cinderworks): name, difficulty, recommended_gear, floors, boss, omens
 * - engine code: RewardConfig.points() = round(base x rank) + first-of-day; Rank.java has S, A, B, C only;
 *   daily counters reset at midnight Asia/Manila (DataStore.ZONE)
 * The owner can retune config.yml, rewards.yml and loot.yml: re-read them before every release.
 */

export const DELVES_CHECKED = '2026-11-26'

export type DelveId = 'gloomhold' | 'cinderworks'
export type DelveRank = 'S' | 'A' | 'B' | 'C'

/** config.yml + balance.json rules. Same for both delves. */
export const DELVE_RULES = {
  maxPlayers: 5,
  livesBase: 2,
  livesPerPlayer: 3,
  respawnSeconds: 10,
  protectionSeconds: 5,
  rejoinMinutes: 5,
  timeLimitMinutes: 45,
  idleWarnMinutes: 6,
  idleEndMinutes: 8,
  startsPerDay: 10,
  shortRunLimit: 3,
  shortRunCooldownMinutes: 10,
  leaveVoteMinutes: 2,
  startCountdownSeconds: 8,
  /** slots-per-map: copies of each delve that can run at the same time. */
  copiesPerDelve: 3,
  goldenAppleCooldownSeconds: 30,
  /** KingBoss / RunImpl.telegraphTicks: 30 ticks, 40 with a Bedrock player in the run. */
  floorWarningSeconds: 1.5,
  floorWarningSecondsBedrock: 2,
  /** bedrock.damage-dealt 1.12 / damage-taken 0.92, as percent. */
  bedrockDealtPercent: 12,
  bedrockTakenPercent: 8,
} as const

/** Shared pool of lives: 2 + 3 per player (solo 5, five players 17). */
export const livesFor = (players: number): number => DELVE_RULES.livesBase + DELVE_RULES.livesPerPlayer * players

/** rewards.yml + loot.yml. Same for both delves. */
export const DELVE_REWARDS = {
  paidClearsPerDay: 3,
  firstOfDay: 15,
  rankMultiplier: { S: 1.2, A: 1.1, B: 1.0, C: 0.9 } satisfies Record<DelveRank, number>,
  rankFrom: { S: 108, A: 90, B: 70 },
  perMinuteOverPar: 3,
  timePenaltyMax: 30,
  perDeath: 5,
  perSecret: 5,
  secretsCounted: 3,
  perForcedStep: 8,
  forcedUnpaidFrom: 3,
  vaultMinutes: 3,
  vaultRolls: 3,
  vaultRankSExtraRolls: 1,
  uniqueRankSBonusPercent: 2,
  uniquePity: 12,
  chestsPerDay: 42,
  chestRollsMin: 2,
  chestRollsMax: 3,
  chestHintBlocks: 7,
  eligible: { contributionPercent: 25, presencePercent: 50, idlePercent: 25, lastJoinFloor: 3, disconnectMinutes: 2 },
} as const

/** Points for one paid clear (RewardConfig.points: round(base x rank factor), first-of-day bonus not multiplied). */
export function clearPoints(base: number, rank: DelveRank): number {
  return Math.round(base * DELVE_REWARDS.rankMultiplier[rank] + 1e-9)
}

export interface SpecialItem {
  name: string
  /** What the item is, with its enchantments (rewards.yml unique.items). */
  item: string
  /** Site icon only (no axe, boot or bow art in pixel-icons.ts). */
  icon: PixelIconName
}

export interface DelveInfo {
  id: DelveId
  slug: string
  name: string
  difficulty: 'Medium' | 'Hard'
  meter: 'Gloom' | 'Heat'
  /** ui/Facts.about(): the line on the menu card. */
  about: string
  /** script recommended_gear */
  gear: string
  boss: string
  par: { solo: number; party: number }
  /** rewards.yml points.base */
  points: number
  firstClear: { points: number; keys: string; trophy: string; trophyItem: string }
  /** rewards.yml keys: one roll per paid clear, at most one key. Percent. */
  keyChances: { vote: number; resource: number; trim: number; epic: number }
  /** rewards.yml unique.chance, percent */
  specialChance: number
  special: SpecialItem[]
  vault: { diamonds: number; bottles: string }
  /** loot.yml chests.per-floor, plus 1 secret chest per run */
  chestsPerFloor: number[]
  /** loot.yml mimic-share, percent */
  mimicPercent: number
  /** loot.yml books: the enchanted books a rare roll can give */
  books: string
}

export const DELVES: Record<DelveId, DelveInfo> = {
  gloomhold: {
    id: 'gloomhold',
    slug: 'gloomhold-keep',
    name: 'Gloomhold Keep',
    difficulty: 'Medium',
    meter: 'Gloom',
    about: 'An old keep in the dark. Bring the light back, floor by floor, and face the Regent.',
    gear: 'Diamond armour and sword with level II enchantments, food',
    boss: 'Tiberius, Regent of Gloom',
    par: { solo: 25, party: 23 },
    points: 30,
    firstClear: { points: 50, keys: '1 Trim crate key', trophy: 'The Regent Snuffer', trophyItem: 'a soul lantern' },
    keyChances: { vote: 10, resource: 5, trim: 4, epic: 0.8 },
    specialChance: 8,
    special: [
      { name: 'Lanternwarden Blade', item: 'Diamond sword: Sharpness III, Looting II, Unbreaking II', icon: 'sword' },
      { name: 'Gloamstep Boots', item: 'Diamond boots: Protection III, Feather Falling III, Depth Strider II, Unbreaking II', icon: 'shield' },
      { name: 'Cryptwatch Crossbow', item: 'Crossbow: Quick Charge II, Piercing II, Unbreaking II', icon: 'crosshair' },
    ],
    vault: { diamonds: 1, bottles: '8 to 12' },
    chestsPerFloor: [2, 2, 2, 2, 2],
    mimicPercent: 12,
    books: 'Unbreaking II, Protection II, Sharpness II, Power II, Feather Falling II or Efficiency II',
  },
  cinderworks: {
    id: 'cinderworks',
    slug: 'cinderworks',
    name: 'Cinderworks',
    difficulty: 'Hard',
    meter: 'Heat',
    about: 'A forge that never cooled. Carry heat, use water and steam, and face the Emberwright.',
    gear: 'Solo: diamond III armour and weapon. Party: diamond II.',
    boss: 'The Emberwright',
    par: { solo: 26, party: 23 },
    points: 45,
    firstClear: { points: 75, keys: '1 Trim and 1 Resource crate key', trophy: 'The Last Ember', trophyItem: 'a magma block' },
    keyChances: { vote: 12, resource: 8, trim: 6, epic: 1.5 },
    specialChance: 10,
    special: [
      { name: 'Slagcutter', item: 'Diamond axe: Sharpness III, Efficiency III, Unbreaking II', icon: 'sword' },
      { name: 'Emberwright Apron', item: 'Diamond leggings: Fire Protection IV, Unbreaking III', icon: 'shield' },
      { name: 'Bellows Bow', item: 'Bow: Power III, Flame, Unbreaking II', icon: 'crosshair' },
    ],
    vault: { diamonds: 2, bottles: '12 to 16' },
    chestsPerFloor: [2, 2, 2, 2, 3],
    mimicPercent: 15,
    books: 'Protection III, Sharpness III, Power III, Efficiency III, Fire Protection III or Feather Falling III',
  },
}

export const DELVE_LIST: DelveInfo[] = [DELVES.gloomhold, DELVES.cinderworks]

/** "Vote 10%, Resource 5%, Trim 4%, Epic 0.8%" */
export function keyChanceText(d: DelveInfo): string {
  const k = d.keyChances
  return `Vote ${k.vote}%, Resource ${k.resource}%, Trim ${k.trim}%, Epic ${k.epic}%`
}

/** "1 diamond and 8 to 12 bottles o’ enchanting, plus 3 rolls" */
export function vaultText(d: DelveInfo): string {
  const diamonds = `${d.vault.diamonds} ${d.vault.diamonds === 1 ? 'diamond' : 'diamonds'}`
  return `${diamonds} and ${d.vault.bottles} bottles o’ enchanting, plus ${DELVE_REWARDS.vaultRolls} rolls`
}
