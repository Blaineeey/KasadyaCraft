import type { WikiPage } from '@/lib/content'
import {
  clearPoints,
  DELVE_LIST,
  DELVE_REWARDS,
  DELVE_RULES,
  DELVES,
  DELVES_CHECKED,
  keyChanceText,
  livesFor,
  vaultText,
} from './delve-facts'

/*
 * Sources (read-only, 2026-11-26): KasadyaDelves 1.0.0 resources and code, numbers in ./delve-facts.ts.
 * - ui/HubMenu.java (/dungeon outside a run: "Dungeons" menu with Lab of Horrors, the delves, Open parties, an invitation,
 *   How it works, Codex, Rewards are waiting), ui/DungeonMenu.java (Recommended gear, Lives, Rewards, Your results,
 *   Play solo, Party "up to 4 friends", Quick join, Codex), ui/GuideMenu.java (goal, progress, tips + omen, lives and
 *   meter, Glowing floor on/off, Codex, Leave, "Lead me there" for optional rooms)
 * - core/Engine.refusal (dead, already in a delve, in combat, in the Lab of Horrors, legendary weapon "Store it first",
 *   10 starts a day, short-run wait, "All copies of this delve are in use")
 * - core/run/RunImpl.died/lost (lives pool, "Lives left", no life lost in the vault, "You keep everything you looted"),
 *   core/listen/SessionListener (keep inventory and XP), core/listen/RulesListener + CombatListener (bans, apples, totem)
 * - core/vote/LeaveVotes.java (alone: out at once; party: all agree or everyone leaves after 2 minutes, loot restarts it)
 * - chest/DelveChests.java ("The chests of this floor are open now", daily cap message "until midnight (Philippine time)"),
 *   chest/BukkitChestFx.java (hint: END_ROD sparkle + chime within loot.yml hint.radius 7), loot.yml mimic twitch
 * - reward/DelveRewards.java (vault empty after the paid clears, "Your items are waiting in the vault"), reward/Eligibility.java,
 *   core/listen/RulesListener ("Your inventory is full: the item is kept for you. Use /dungeon claim.")
 */
const G = DELVES.gloomhold
const C = DELVES.cinderworks
const R = DELVE_REWARDS
const pct = (n: number) => `${n}%`

export const delves: WikiPage = {
  slug: 'delves',
  title: 'Delves',
  summary:
    'Gloomhold Keep and Cinderworks, our two delves for 1 to 5 players: how to start, shared lives, the on-screen guide, chests and mimics, rewards and the rules inside.',
  icon: 'boss',
  category: 'dungeon',
  order: 3,
  updated: DELVES_CHECKED,
  keywords: [
    'delve',
    'delves',
    'gloomhold',
    'gloomhold keep',
    'cinderworks',
    '/dungeon',
    '/dungeon solo',
    '/dungeon guide',
    '/dungeon trail',
    '/dungeon claim',
    'lives',
    'party',
    'quick join',
    'mimic',
    'vault',
    'rank',
    'omen',
    'points',
    'special gear',
    'bedrock',
  ],
  related: ['gloomhold-keep', 'cinderworks', 'dungeon', 'commands'],
  body: [
    {
      type: 'p',
      text: 'Delves are our newer dungeons. Each has five floors and a boss, and every floor teaches you one idea. Go alone or bring up to 4 friends, on Java or Bedrock. The game shows you the way at every step.',
    },
    {
      type: 'callout',
      tone: 'info',
      text: '`/dungeon` opens one menu with all three dungeons: the [Lab of Horrors](/wiki/dungeon), Gloomhold Keep and Cinderworks.',
    },
    {
      type: 'table',
      caption: 'The two delves',
      head: ['What', G.name, C.name],
      rows: [
        ['Difficulty', G.difficulty, C.difficulty],
        ['In short', G.about, C.about],
        ['Meter', `${G.meter}: dark rooms raise it`, `${C.meter}: fire raises it, water cools you`],
        ['Boss', G.boss, C.boss],
        ['Recommended gear', G.gear, C.gear],
        ['Par time', `${G.par.solo} min alone, ${G.par.party} min together`, `${C.par.solo} min alone, ${C.par.party} min together`],
        ['Points per clear', `${G.points} (rank B)`, `${C.points} (rank B)`],
        ['Full guide', `[${G.name}](/wiki/${G.slug})`, `[${C.name}](/wiki/${C.slug})`],
      ],
    },
    {
      type: 'table',
      caption: 'Quick facts (both delves)',
      head: ['What', 'Details'],
      rows: [
        ['Players', `1 to ${DELVE_RULES.maxPlayers}, Java and Bedrock`],
        ['Cost to enter', `Free. Up to ${DELVE_RULES.startsPerDay} starts a day.`],
        ['Time limit', `${DELVE_RULES.timeLimitMinutes} minutes per run`],
        ['Lives', `One pool for the party: ${DELVE_RULES.livesBase}, plus ${DELVE_RULES.livesPerPlayer} for each player (${livesFor(1)} alone, ${livesFor(5)} for five)`],
        [
          'If you die',
          `You watch for ${DELVE_RULES.respawnSeconds} seconds, then come back at the last landing with ${DELVE_RULES.protectionSeconds} seconds of protection. You keep your items and XP.`,
        ],
        ['Inside', 'Adventure mode: no breaking or placing blocks, no PvP, most commands blocked. See [Rules inside](#rules-inside).'],
        ['Lost connection', `Log back in within ${DELVE_RULES.rejoinMinutes} minutes and you are back in your run.`],
      ],
    },
    { type: 'h2', text: 'Start a run' },
    {
      type: 'steps',
      items: [
        {
          title: 'Open the dungeon menu',
          text: 'Type it anywhere in Survival. Click Gloomhold Keep or Cinderworks to see its gear, lives, rewards and your own results.',
          command: '/dungeon',
        },
        {
          title: 'Choose how to play',
          text: '**Play solo** starts at once. **Party** makes a party for you and up to 4 friends. **Quick join** puts you in an open party, or waits for other players.',
        },
        {
          title: 'Invite your friends',
          text: 'They accept from the invitation in their `/dungeon` menu, or with `/dungeon accept`. `/dungeon open` lets anyone join from **Open parties**.',
          command: '/dungeon invite <player>',
        },
        {
          title: 'Start',
          text: `The party leader starts. After an ${DELVE_RULES.startCountdownSeconds} second countdown the whole party is teleported to the first floor. When the run ends, you go back to where you were.`,
          command: '/dungeon start',
        },
      ],
    },
    {
      type: 'list',
      items: [
        'You cannot start while you are in combat or inside the Lab of Horrors.',
        'Legendary weapons are not allowed. The menu tells you which one to store first.',
        `Each delve runs ${DELVE_RULES.copiesPerDelve} groups at the same time. If all copies are in use, try again in a moment.`,
      ],
    },
    { type: 'h2', text: 'Finding your way' },
    {
      type: 'p',
      text: 'The delves show you what to do and where to go at all times. At the start of each step the chat also tells you what to do.',
    },
    {
      type: 'list',
      items: [
        '**Boss bar**: your goal right now, and how far along you are.',
        '**Action bar**: an arrow that points to your next target, and your Gloom or Heat number.',
        '**Glowing floor**: a trail of light blocks that leads to the next target. `/dungeon trail` hides it or shows it again, just for you.',
        '**Guide menu** (`/dungeon guide`, or `/dungeon` inside a run): your goal, the steps of this floor, tips, the omen of the run, your lives, the trail switch, the codex and a Leave button. Optional rooms have a **Lead me there** button.',
        '**Codex** (`/dungeon codex`, or `/codex` inside): the monsters, dangers and boss of each delve. It works outside a run too.',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Every stair landing between floors is a checkpoint. In Cinderworks they also have a water tub and no monsters.',
    },
    { type: 'h2', text: 'Lives and deaths' },
    {
      type: 'p',
      text: `The party shares one pool of lives: ${DELVE_RULES.livesBase}, plus ${DELVE_RULES.livesPerPlayer} for each player. The chat shows how many are left after every death.`,
    },
    {
      type: 'table',
      caption: 'Lives by party size',
      head: ['Players', '1', '2', '3', '4', '5'],
      rows: [['Lives', ...[1, 2, 3, 4, 5].map((n) => String(livesFor(n)))]],
    },
    {
      type: 'list',
      items: [
        `When you fall you watch for ${DELVE_RULES.respawnSeconds} seconds. Then you come back at the last landing (in the boss fight: at the arena door) with ${DELVE_RULES.protectionSeconds} seconds of protection.`,
        'You keep your items and XP.',
        'Falling in the vault after the boss costs no life.',
        'Some omens give the party one more life.',
        'Pool empty? Whoever falls next watches until the run ends. When nobody is left standing, the delve has beaten you. You keep everything you looted.',
      ],
    },
    { type: 'h2', text: 'Omens' },
    {
      type: 'p',
      text: 'Every run draws one omen. A good omen just helps. A bad one comes with a gift, often one more life. The Guide menu shows the omen of your run. The omens of each delve are on its own page.',
    },
    { type: 'h2', text: 'Chests and mimics' },
    {
      type: 'list',
      items: [
        `Each floor has its own chests, in new spots every run (${G.name}: ${G.chestsPerFloor.join(', ')} per floor; ${C.name}: ${C.chestsPerFloor.join(', ')}). Each run also hides one secret chest. ${G.name} adds one dark chest in a far wing, and the optional rooms of ${C.name} can add more.`,
        'Every player gets their own loot from each chest. Nobody can take yours.',
        `A chest opens once the main job of its floor is done (in ${G.name}: once its room is lit). The chat tells you when.`,
        `Unopened chests sparkle and chime softly when you are within ${R.chestHintBlocks} blocks.`,
        `Each chest gives ${R.chestRollsMin} or ${R.chestRollsMax} items. Higher floors have better odds, and the secret chest the best.`,
        `You can loot **${R.chestsPerDay} chests a day**, both delves together. After that, chests are empty for you until midnight (Philippine time). Failed runs count too.`,
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Some chests bite',
      text: `${pct(G.mimicPercent)} of the chests in ${G.name} and ${pct(C.mimicPercent)} in ${C.name} are mimics. Never on the first floor, and the first chest of a run is always real. A mimic's lid creaks now and then while you stand close. Kill it and everyone nearby gets its loot plus one bonus roll.`,
    },
    {
      type: 'table',
      caption: 'What a chest can hold',
      head: ['Tier', 'Items'],
      rows: [
        ['Common', 'Bread, cooked beef, arrows, coal, iron ingots, gold ingots, redstone, lapis lazuli, bones'],
        ['Uncommon', 'Golden carrots, emeralds, quartz, amethyst shards, obsidian, bottles o’ enchanting, spectral arrows, a Potion of Healing'],
        [`Rare (${G.name})`, `A diamond, a golden apple, a name tag or an enchanted book: ${G.books}`],
        [`Rare (${C.name})`, `A diamond, a golden apple, a name tag, netherite scrap or an enchanted book: ${C.books}`],
      ],
    },
    {
      type: 'table',
      caption: 'Chance of each tier for one item',
      head: ['Chest', 'Common', 'Uncommon', 'Rare'],
      rows: [
        ['Floor 1', '78%', '20%', '2%'],
        ['Floor 2', '74%', '22%', '4%'],
        ['Floor 3', '69%', '25%', '6%'],
        ['Floor 4', '63%', '29%', '8%'],
        ['Floor 5', '57%', '33%', '10%'],
        ['Secret chest', '40%', '45%', '15%'],
        ['Vault roll', '45%', '43%', '12%'],
      ],
    },
    { type: 'h2', text: 'Rewards' },
    {
      type: 'p',
      text: `Beat the boss and the vault opens for **${R.vaultMinutes} minutes**. Points, crate keys, special gear and the vault come with a **paid clear**: you get **${R.paidClearsPerDay} paid clears a day**, both delves together. After that a clear still gives you a rank, your best time and chest loot.`,
    },
    {
      type: 'table',
      caption: 'Paid clear rewards (per player)',
      head: ['What', G.name, C.name],
      rows: [
        ['Points (rank B)', String(G.points), String(C.points)],
        ['First clear of the day', `+${R.firstOfDay} points`, `+${R.firstOfDay} points`],
        [
          'First clear ever',
          `${G.firstClear.points} points, ${G.firstClear.keys} and the trophy **${G.firstClear.trophy}**`,
          `${C.firstClear.points} points, ${C.firstClear.keys} and the trophy **${C.firstClear.trophy}**`,
        ],
        ['Vault', vaultText(G), vaultText(C)],
        ['Crate key (one roll, at most one key)', keyChanceText(G), keyChanceText(C)],
        ['Special gear', `${G.specialChance}% chance`, `${C.specialChance}% chance`],
      ],
    },
    {
      type: 'p',
      text: 'The first-clear-of-the-day bonus counts once per delve per day. Days end at midnight Philippine time. Rewards that do not fit in your inventory wait for you: type `/dungeon claim`.',
    },
    { type: 'h3', text: 'Rank' },
    {
      type: 'p',
      text: 'Every clear gets one rank for the whole party: S, A, B or C. The score starts at 100:',
    },
    {
      type: 'list',
      items: [
        `minus ${R.perMinuteOverPar} for every minute over the par time (at most minus ${R.timePenaltyMax})`,
        `minus ${R.perDeath} for every death, divided by the number of players`,
        `plus ${R.perSecret} for every secret you found (up to ${R.secretsCounted})`,
        `minus ${R.perForcedStep} for every step the game had to finish for you`,
      ],
    },
    {
      type: 'p',
      text: `S from ${R.rankFrom.S}, A from ${R.rankFrom.A}, B from ${R.rankFrom.B}, below that C. Rank S also gives ${R.vaultRankSExtraRolls} more vault roll and a better chance at special gear: ${G.specialChance + R.uniqueRankSBonusPercent}% instead of ${G.specialChance}% in ${G.name}, ${C.specialChance + R.uniqueRankSBonusPercent}% instead of ${C.specialChance}% in ${C.name}.`,
    },
    {
      type: 'table',
      caption: 'Points per paid clear by rank (before the first-clear bonuses)',
      head: ['Rank', G.name, C.name],
      rows: (['S', 'A', 'B', 'C'] as const).map((r) => [r, String(clearPoints(G.points, r)), String(clearPoints(C.points, r))]),
    },
    { type: 'h3', text: 'Special gear' },
    {
      type: 'slots',
      title: 'Special gear',
      label: 'Special gear from the delves',
      columns: 8,
      items: [
        ...DELVE_LIST.flatMap((d) =>
          d.special.map((s) => ({
            label: s.name,
            icon: s.icon,
            rarity: 'epic' as const,
            lines: [s.item, { text: 'Cannot be sold to the shop', color: 'dark-gray' as const }, { text: d.name, color: 'dark-gray' as const }],
          })),
        ),
        ...DELVE_LIST.map((d) => ({
          label: d.firstClear.trophy,
          icon: 'trophy' as const,
          rarity: 'legendary' as const,
          lines: [`Trophy: ${d.firstClear.trophyItem}`, `First clear of ${d.name}`, { text: 'Cannot be sold to the shop', color: 'dark-gray' as const }],
        })),
      ],
    },
    {
      type: 'table',
      head: ['Item', 'Delve', 'What it is'],
      rows: DELVE_LIST.flatMap((d) => d.special.map((s) => [`**${s.name}**`, d.name, s.item])),
    },
    {
      type: 'list',
      items: [
        'Pieces you do not own yet come first.',
        `No luck for ${R.uniquePity - 1} paid clears of a delve in a row? The ${R.uniquePity}th gives you a piece for sure.`,
        'Special gear cannot be sold to the shop. Your items wait in the vault: open a chest there.',
      ],
    },
    { type: 'h3', text: 'Who gets paid' },
    {
      type: 'p',
      text: 'Everyone in the party is paid on their own, if all of these are true:',
    },
    {
      type: 'list',
      items: [
        `You were in the run when the boss died. Lost connection? Then at most ${R.eligible.disconnectMinutes} minutes before, and back before the vault closes.`,
        `You did at least ${R.eligible.contributionPercent}% of your fair share of the fighting or of the objective work.`,
        `You were inside for at least ${R.eligible.presencePercent}% of the run, and idle for no more than ${R.eligible.idlePercent}%.`,
        `You joined by floor ${R.eligible.lastJoinFloor} at the latest.`,
      ],
    },
    {
      type: 'p',
      text: `If the game had to finish ${R.forcedUnpaidFrom} or more steps for the party, the clear pays no points, keys, gear or vault. Rank, time and chest loot still count.`,
    },
    { type: 'h2', text: 'Rules inside' },
    {
      type: 'list',
      items: [
        'Adventure mode: no breaking or placing blocks, no buckets and no fishing.',
        'No PvP and no friendly fire.',
        'Only `/dungeon`, `/codex`, `/msg` (and `/r`), `/helpop`, `/ping`, `/discord` and `/rules` work. `/dungeoninfo` and `/locksmith` belong to the Lab of Horrors and are blocked here.',
        'No ender pearls, wind charges, chorus fruit, firework rockets, flint and steel or fire charges. No elytra, flying, boats or minecarts.',
        'Legendary weapons are not allowed.',
        `Golden apples: one every ${DELVE_RULES.goldenAppleCooldownSeconds} seconds. Enchanted golden apples: one per run. Only your first totem of the run works. Strength is capped at Strength I.`,
        'Armour wears slower in the delves: at most 1 point per piece per hit, and only on about half of the hits. Weapons wear as usual.',
        `Bedrock players deal ${DELVE_RULES.bedrockDealtPercent}% more damage and take ${DELVE_RULES.bedrockTakenPercent}% less, to make up for touch controls. Boss floor warnings last ${DELVE_RULES.floorWarningSecondsBedrock} seconds instead of ${DELVE_RULES.floorWarningSeconds} when a Bedrock player is in the run.`,
        `If nobody in the party moves or acts for ${DELVE_RULES.idleWarnMinutes} minutes, you get a warning. At ${DELVE_RULES.idleEndMinutes} minutes the run ends.`,
        `${DELVE_RULES.shortRunLimit} runs in a row that end before floor 3 is done mean a ${DELVE_RULES.shortRunCooldownMinutes} minute wait before your next start.`,
      ],
    },
    { type: 'h2', text: 'Leaving and coming back' },
    {
      type: 'p',
      text: `Alone, \`/dungeon leave\` takes you out at once. In a party you leave together: the others get a message and can agree. When everyone agrees, you all leave. If not, everyone leaves after **${DELVE_RULES.leaveVoteMinutes} minutes** anyway. If the boss falls while you wait, the ${DELVE_RULES.leaveVoteMinutes} minutes start again, so everyone can loot. You keep what you looted.`,
    },
    {
      type: 'commands',
      items: [
        { command: '/dungeon leave', description: 'Ask your party to leave, or agree when someone else asked.' },
        { command: '/dungeon agree', description: 'Agree to leave. `/dungeon yes` works too.' },
        { command: '/dungeon stay', description: 'Say that you are not done yet. `/dungeon no` works too.' },
        { command: '/dungeon cancel', description: 'Take your own request back.' },
        { command: '/dungeon vote', description: 'Open the leave vote menu again.' },
      ],
    },
    {
      type: 'p',
      text: `Lost connection? Log back in within **${DELVE_RULES.rejoinMinutes} minutes** and you are put back in your run. If the server restarts, the run ends and you are told at your next join. Every delve command is on [Commands](/wiki/commands#delves).`,
    },
  ],
}
