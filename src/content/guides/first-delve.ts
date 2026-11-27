import type { Guide } from '@/lib/content'
import { DELVE_REWARDS, DELVE_RULES, DELVES, DELVES_CHECKED, livesFor } from '@/content/wiki/delve-facts'

/*
 * Sources: KasadyaDelves 1.0.0 (2026-11-26), numbers in src/content/wiki/delve-facts.ts:
 * config.yml (players, respawn 10 s, protection 5 s, rejoin 300 s, leave vote 120 s, start countdown 8 s),
 * balance.json/rewards.yml (lives 2 + 3 per player, 3 paid clears a day, vault 180 s), script-A.json (Gloomhold Keep:
 * difficulty, recommended_gear, floor 1 steps and hints, lights.gloom, codex "Start here" and "The Regent"),
 * ui/DungeonMenu.java (Play solo, Party, Quick join), ui/GuideMenu.java, core/vote/LeaveVotes.java.
 */
const G = DELVES.gloomhold
const C = DELVES.cinderworks

export const firstDelve: Guide = {
  slug: 'first-delve',
  title: 'Your first delve',
  summary: `Start ${G.name}, follow the glowing floor, keep your Gloom low, share your lives and beat the Regent.`,
  icon: 'lantern',
  stage: 'next-steps',
  order: 4,
  minutes: 4,
  updated: DELVES_CHECKED,
  next: 'ranks-and-kits',
  related: ['delves', 'gloomhold-keep', 'cinderworks', 'commands'],
  body: [
    {
      type: 'p',
      text: `Delves are our newer dungeons: five floors and a boss, alone or with up to ${DELVE_RULES.maxPlayers - 1} friends. Start with **${G.name}** (${G.difficulty}). Leave **${C.name}** (${C.difficulty}) for when you have better gear.`,
    },
    { type: 'h2', text: 'Before you go' },
    {
      type: 'list',
      items: [
        `Gear: ${G.gear.charAt(0).toLowerCase()}${G.gear.slice(1)}. One golden apple helps.`,
        `The party shares one pool of lives: ${livesFor(1)} alone, ${DELVE_RULES.livesPerPlayer} more for each extra player.`,
        'You keep your items and XP when you die.',
        'Store legendary weapons first. They are not allowed inside.',
      ],
    },
    { type: 'h2', text: 'Start' },
    {
      type: 'steps',
      items: [
        { title: 'Open the dungeon menu', text: `Click **${G.name}** to see its gear, lives and rewards.`, command: '/dungeon' },
        {
          title: 'Pick how to play',
          text: '**Play solo** starts at once. **Party** lets you invite friends with `/dungeon invite <player>`. **Quick join** finds other players.',
        },
        {
          title: 'Go',
          text: `Play solo starts by itself. In a party the leader types \`/dungeon start\`. After ${DELVE_RULES.startCountdownSeconds} seconds you stand on the first floor.`,
        },
      ],
    },
    { type: 'h2', text: 'Follow the light' },
    {
      type: 'list',
      items: [
        'The **boss bar** says what to do. The **action bar** has an arrow to your target and your Gloom.',
        'The **glowing floor** leads the way. `/dungeon trail` hides it if you prefer.',
        'Stuck? `/dungeon guide` shows your goal, tips and lives.',
        'Your first real job: light the brazier in the Four-Pit Hall. Stand still beside it for 3 seconds.',
      ],
    },
    { type: 'h2', text: 'Gloom in one minute' },
    {
      type: 'p',
      text: 'Dark rooms raise your Gloom, lit rooms lower it. Every brazier you light makes more of the keep safe. Floor 1 is gentle. From floor 2 on, Gloom 100 calls a Wraith that cannot be killed: get back into the light.',
    },
    { type: 'h2', text: 'When you fall' },
    {
      type: 'p',
      text: `You watch for ${DELVE_RULES.respawnSeconds} seconds, then come back at the last landing with ${DELVE_RULES.protectionSeconds} seconds of protection. The party loses one life. When the pool is empty and nobody is standing, the run is over, but you keep what you looted.`,
    },
    { type: 'h2', text: 'The Regent and the vault' },
    {
      type: 'p',
      text: `The Regent cannot die while his braziers are out. Light them, carry embers to them, cut away their roots. The floor always warns before it burns. He falls twice, and only the second time counts. Then the vault opens for ${DELVE_REWARDS.vaultMinutes} minutes. Your first clear ever gives ${G.firstClear.points} points, ${G.firstClear.keys} and the trophy **${G.firstClear.trophy}**.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      text: `Want out? \`/dungeon leave\`. Alone you go at once. In a party everyone leaves together when all agree, or after ${DELVE_RULES.leaveVoteMinutes} minutes anyway. Lost connection? Come back within ${DELVE_RULES.rejoinMinutes} minutes and you are back in.`,
    },
  ],
}
