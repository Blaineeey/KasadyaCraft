import type { WikiPage } from '@/lib/content'
import { clearPoints, DELVE_REWARDS, DELVE_RULES, DELVES, DELVES_CHECKED, keyChanceText, livesFor, vaultText } from './delve-facts'

/*
 * Sources (read-only, 2026-11-26): KasadyaDelves 1.0.0, resources/script-A.json (id gloomhold, the live copy):
 * name, difficulty Medium, recommended_gear, floors[].name/subtitle/idea, step text (boss bar) per step and variant,
 * optional rooms (reward: lamp oil gloom_gain 0.88 + one secret), lights.gloom (gain F1 1.25 cap 80 / F2 2.5 / F3 3.5 /
 * F4-F5 4.0, loss 8, light_radius 5, wraith_from_step F2_S2, wraith_at 100, after 3 s, hit 0.3 every 4 s),
 * lights.counter (1061 lamps), boss (name, phases, shield counts solo/party), omens (8, in-game text), tips, codex.
 * - boss/KingBoss.java + KingSpec.title(): the in-game titles of each part ("The Duel", "Shielded", "The Snuffing",
 *   "Dying Light", "He falls / Undying", "Echoes", "Last Ember") and their subtitles; leech_in_light 0.5.
 * - ui/Facts.about() for the menu line; rewards and shared rules from ./delve-facts.ts (rewards.yml, loot.yml, config.yml).
 * No exact puzzle solutions here: only what the floor idea, the boss bar and the in-game hints already say.
 */
const D = DELVES.gloomhold

export const gloomholdKeep: WikiPage = {
  slug: D.slug,
  title: D.name,
  summary: `The ${D.difficulty} delve: five dark floors, the Gloom meter, the Wraith and the boss ${D.boss}. Floor by floor, with gear, omens and rewards.`,
  icon: 'lantern',
  category: 'dungeon',
  order: 4,
  updated: DELVES_CHECKED,
  keywords: [
    'gloomhold',
    'gloomhold keep',
    'gloom',
    'wraith',
    'brazier',
    'ember',
    'wisp',
    'snuffroot',
    'regent',
    'tiberius',
    'regent of gloom',
    'skeleton king',
    'lamp oil',
    'lanternwarden blade',
    'gloamstep boots',
    'cryptwatch crossbow',
    'regent snuffer',
    '/dungeon solo gloomhold',
  ],
  related: ['delves', 'cinderworks', 'dungeon', 'commands'],
  body: [
    {
      type: 'p',
      text: 'For two hundred years the 1061 lamps of Gloomhold Keep never went out. Then the regent Tiberius learned what the dark offers: no one dies in it. He put the lamps out with his own hand, and his guards have kept watch as bones ever since. You bring the light back, floor by floor.',
    },
    {
      type: 'table',
      caption: 'Quick facts',
      head: ['What', 'Details'],
      rows: [
        ['Difficulty', D.difficulty],
        ['Players', `1 to ${DELVE_RULES.maxPlayers}. Lives: ${livesFor(1)} alone, ${livesFor(5)} for five.`],
        ['Recommended gear', `${D.gear}. One golden apple helps.`],
        ['Par time', `${D.par.solo} minutes alone, ${D.par.party} together`],
        ['Meter', 'Gloom (0 to 100, every player has their own)'],
        ['Boss', `${D.boss}. He falls twice.`],
        ['Start', '`/dungeon solo gloomhold`, or pick it in `/dungeon`'],
      ],
    },
    {
      type: 'p',
      text: 'How to start, shared lives, chests and the rules inside are the same in both delves: see [Delves](/wiki/delves).',
    },
    { type: 'h2', text: 'Gloom' },
    {
      type: 'p',
      text: 'Dark rooms raise your Gloom, lit rooms lower it. Your number is on the action bar. Light a brazier and its rooms wake up, so the safe part of the keep grows as you go. Burning braziers, embers (carried or set down) and the wisp count as light for 5 blocks around them.',
    },
    {
      type: 'table',
      caption: 'Gloom per second',
      head: ['Where', 'Change'],
      rows: [
        ['Lit room', 'minus 8'],
        ['Dark room, floor 1', 'plus 1.25, and it stops at 80'],
        ['Dark room, floor 2', 'plus 2.5'],
        ['Dark room, floor 3', 'plus 3.5'],
        ['Dark room, floors 4 and 5', 'plus 4'],
      ],
    },
    {
      type: 'list',
      items: [
        'From the second step of floor 2 on, Gloom 100 calls the **Wraith**. It arrives 3 seconds later and takes 30% of your health every 4 seconds until you stand in light.',
        'The Wraith cannot enter a lit room, and nothing you do kills it. Run to the light.',
        'One kind of Wraith hunts embers and ignores lamps. Hold sneak for 1 second to set your ember down: it flares and drives the Wraith away.',
        'Each optional room you finish gives **lamp oil**: your Gloom rises 12% slower for the rest of the run. It also counts as a secret for your rank.',
        'The chat tells you how many of the 1061 lamps burn again.',
      ],
    },
    { type: 'h2', text: 'Floor by floor' },
    {
      type: 'p',
      text: 'Each floor teaches one idea. The boss bar shows your goal, the glowing floor shows the way. Some steps change from run to run.',
    },
    { type: 'h3', text: 'Floor 1: The Undercroft' },
    { type: 'p', text: '**Give the light back.** Light a brazier and its rooms wake up. Dark rooms fill your Gloom, lit rooms empty it.' },
    {
      type: 'list',
      items: [
        'Light the brazier in the Four-Pit Hall: stand still beside it for 3 seconds.',
        'Touch four stones in the order they light up.',
        'Beat a marksman at the north door, then light the stair and the octagon.',
        'Optional: the Pillared Shrine.',
      ],
    },
    { type: 'h3', text: 'Floor 2: The Overgrown Cloister' },
    { type: 'p', text: '**Guard the light.** Snuffroots drink the lamps. A root is only soft while the brazier beside it burns, and the flame dies soon.' },
    {
      type: 'list',
      items: [
        'Cut the snuffroots. Light the brazier beside one first, then hit it before the flame dies.',
        'Hold the light of the cross hall for 40 seconds. The bar only fills while one of you is inside the ring.',
        'In the west halls the second root must fall within 75 seconds of the first, or the first grows back.',
        'Optional: the nave without lamps.',
      ],
    },
    { type: 'h3', text: 'Floor 3: The Moat Halls' },
    { type: 'p', text: '**Carry the light.** An ember in your hands is a small lit room. Lamps wake where it passes, and the Wraith comes for it.' },
    {
      type: 'list',
      items: [
        'Carry the ember across the moat to the domed hall, then hold the fire under the dome for 60 seconds.',
        'Carry it on while the Wraith hunts you. Set it down to drive the Wraith away.',
        'Light the south hall and clear it.',
        'Optional: the hidden root.',
      ],
    },
    { type: 'h3', text: 'Floor 4: The Long Barracks' },
    { type: 'p', text: '**Follow the light.** A wisp lights your way and only moves with you. When it is gone the dark comes back, and it walks fast.' },
    {
      type: 'list',
      items: [
        'Beat the watch in the north octagon, then find two keys in the dark bunk rooms.',
        'Follow the wisp through the dark hall: stay within six blocks of it.',
        'Beat the Barrack Reaver.',
        'Then run: the lamps of the Long Hall die behind you.',
        'Optional: the stones on the ledges.',
      ],
    },
    { type: 'h3', text: "Floor 5: The Regent's Court" },
    { type: 'p', text: '**Share the light.** A plate remembers you: your echo keeps standing on it for 14 seconds. One light can be in two places.' },
    {
      type: 'list',
      items: [
        'Press all three oath plates at once. Alone, your echoes hold them for you.',
        'Hold a firelit room for 50 seconds.',
        'Carry the court flame to the north room, with the dark behind you and a Wraith ahead.',
        'Beat the Court Bulwark, then press both plates at the King’s door.',
        'Optional: light the spire.',
      ],
    },
    { type: 'h2', text: 'Monsters' },
    {
      type: 'table',
      caption: 'From the in-game codex',
      head: ['Monster', 'Watch out for'],
      rows: [
        ['Axe guard', 'Fast, short reach. Its hit breaks your shield for a second. Keep moving and fight one at a time.'],
        ['Mace guard', 'Slow and heavy, throws you back, and blocks for a second now and then. Step back from the raised mace, then strike.'],
        ['Marksman', 'Weak, but keeps his distance. A blue flame means a heavy bolt: walls stop it. Beat him first.'],
        ['Barrack Reaver', 'A big axe and fast swings. Keep moving and strike after his swing.'],
        ['Court Bulwark', 'A big mace and a wall. Step back from his raised mace and strike when it is down.'],
        ['Snuffroot', 'Hard in the dark, soft in the light. Its brazier burns about 20 seconds.'],
        ['The Wraith', 'Comes at Gloom 100. Cannot enter light, cannot be killed.'],
      ],
    },
    {
      type: 'p',
      text: '**Wick**, the last spark of the last lamplighter, is on your side. She walks ahead of you in the Long Hall.',
    },
    { type: 'h2', text: `Boss: ${D.boss}` },
    {
      type: 'p',
      text: 'The Regent waits in a square court with four braziers. While his braziers are out he cannot die. The floor always warns you before it burns, and one step is often enough. He falls twice: only the second time counts.',
    },
    {
      type: 'table',
      caption: 'The parts of the fight, as the titles on screen name them',
      head: ['Part', 'What happens'],
      rows: [
        ['The Duel', 'Leave the burning floor.'],
        ['Shielded', 'He cannot be hurt. Light 3 braziers (4 in a party).'],
        ['The Snuffing', 'He puts out braziers. Stand beside one to light it again.'],
        ['Shielded', 'Carry 3 embers to the braziers.'],
        ['Dying Light', 'Only one side of the court burns, and it changes.'],
        ['He falls', 'But the gloom holds him. He rises again in his second form.'],
        ['Echoes', 'His echo repeats the strike before. Remember the last pattern.'],
        ['Shielded', 'Cut the roots off 3 braziers (4 in a party).'],
        ['Last Ember', 'Only one brazier burns, and it moves around the court.'],
      ],
    },
    {
      type: 'list',
      items: [
        'Fight beside a burning brazier: the Regent heals half as much there.',
        'His shield stops your blows, not his floor. The warnings go on while you work.',
        `Floor warnings last ${DELVE_RULES.floorWarningSeconds} seconds, or ${DELVE_RULES.floorWarningSecondsBedrock} when a Bedrock player is in the run.`,
      ],
    },
    { type: 'h2', text: 'Omens' },
    {
      type: 'table',
      caption: 'One per run. Bad omens come with a gift.',
      head: ['Omen', 'What it does', 'Kind'],
      rows: [
        ['Full Flasks', 'Braziers catch fire 25% faster.', 'Good'],
        ['Kind Dark', 'Gloom rises 20% slower.', 'Good'],
        ['Steady Hands', 'You walk faster while carrying an ember.', 'Good'],
        ['Spare Candle', 'One more life for the party.', 'Good'],
        ['Hungry Dark', 'Gloom rises 20% faster, but light empties it faster too.', 'Bad'],
        ['Cold Tinder', 'Braziers need 1 second more, but shine wider.', 'Bad'],
        ['Early Hunter', 'The Wraith comes at 85 Gloom, but it is slower.', 'Bad'],
        ['Short Memory', 'Echoes fade after 10 seconds, but plates lock in sooner.', 'Bad'],
      ],
    },
    { type: 'h2', text: 'Rewards' },
    {
      type: 'table',
      caption: 'Per player, for a paid clear',
      head: ['Reward', 'Details'],
      rows: [
        ['Points', `${D.points} at rank B (S ${clearPoints(D.points, 'S')}, A ${clearPoints(D.points, 'A')}, C ${clearPoints(D.points, 'C')}), plus ${DELVE_REWARDS.firstOfDay} for your first clear of the day`],
        ['First clear ever', `${D.firstClear.points} points, ${D.firstClear.keys} and **${D.firstClear.trophy}** (${D.firstClear.trophyItem})`],
        ['Vault', vaultText(D)],
        ['Crate key', `${keyChanceText(D)}. At most one key per clear.`],
        ['Special gear', `${D.specialChance}% chance: ${D.special.map((s) => `**${s.name}** (${s.item})`).join('; ')}`],
        ['Chests', `${D.chestsPerFloor.join(', ')} per floor, plus a secret chest and a dark chest. Rare rolls can give an enchanted book: ${D.books}.`],
      ],
    },
    {
      type: 'p',
      text: `You get ${DELVE_REWARDS.paidClearsPerDay} paid clears a day, both delves together. Ranks, the vault and who gets paid are explained on [Delves](/wiki/delves#rewards).`,
    },
    { type: 'h2', text: 'Tips' },
    {
      type: 'list',
      items: [
        'Lit room, falling Gloom. Dark room, rising Gloom. That is the whole keep.',
        'Stand still beside a brazier to light it. Moving only pauses it.',
        'A marksman aims for more than a second. Break his view with a corner or a pit.',
        'Axes break shields for a second. Do not hide behind one, move.',
        'A chest is frozen until its room is lit. Look around before you climb.',
        'Some chests bite. Never open one with two hearts left.',
        'One chest of every run stands in a dark wing far from the route. It is never frozen.',
        'Echoes fade after 14 seconds. Plan the last plate first.',
      ],
    },
  ],
}
