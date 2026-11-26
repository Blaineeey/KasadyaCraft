import type { WikiPage } from '@/lib/content'
import { clearPoints, DELVE_REWARDS, DELVE_RULES, DELVES, DELVES_CHECKED, keyChanceText, livesFor, vaultText } from './delve-facts'

/*
 * Sources (read-only, 2026-11-26): KasadyaDelves 1.0.0, resources/script-B.json (id cinderworks, the live copy):
 * name, difficulty Hard, recommended_gear, floors[].name/subtitle/idea, step text (boss bar) and hints, optional rooms
 * (reward chest; o3-cold and o5-bell are secrets), heat.zones (hot rooms +1.2/s, landings -4/s), boss (phases with
 * thresholds 0.75/0.5/0.25, plate damage_taken 0.25, mercy_walk_s 45, mercy_break_s 75, basin refill_s_per_level 12,
 * feeder_arrives member_heat 15, bell effect), omens (9, in-game text), tips, codex ("Heat", "The plated", ...).
 * - meter/HeatMeter.java: carry 2.5/s, water tubs 20/s, ambient -1/s, burn 6% of max health a second at 100,
 *   action bar "Heat 42" grey, gold from 60, red from 90.
 * - scriptB/CINDERWORKS.md for the story line and the meaning of the block colours.
 * - Rewards and shared rules from ./delve-facts.ts (rewards.yml, loot.yml, config.yml).
 * No exact puzzle solutions here: only what the floor idea, the boss bar and the in-game hints already say.
 */
const D = DELVES.cinderworks

export const cinderworks: WikiPage = {
  slug: D.slug,
  title: D.name,
  summary: `The ${D.difficulty} delve: a burning manor on five floors, the Heat meter, steam vents, a fire that chases you and the Emberwright himself.`,
  icon: 'spawner',
  category: 'dungeon',
  order: 5,
  updated: DELVES_CHECKED,
  keywords: [
    'cinderworks',
    'heat',
    'water tub',
    'quench',
    'steam',
    'vent',
    'valve',
    'core',
    'plated',
    'slagling',
    'foreman',
    'guest of honour',
    'emberwright',
    'flue',
    'bell',
    'slagcutter',
    'emberwright apron',
    'bellows bow',
    'last ember',
    '/dungeon solo cinderworks',
  ],
  related: ['delves', 'gloomhold-keep', 'dungeon', 'commands'],
  body: [
    {
      type: 'p',
      text: 'A lord asked his smith for a fire that never dies. The smith made one, and it was always hungry. On the night of the winter ball the lord said: enough. The Emberwright did not put it out. He carried it upstairs and sealed every stair behind him. You follow him up with the only things he fears: a core of his own fire, and water.',
    },
    {
      type: 'table',
      caption: 'Quick facts',
      head: ['What', 'Details'],
      rows: [
        ['Difficulty', D.difficulty],
        ['Players', `1 to ${DELVE_RULES.maxPlayers}. Lives: ${livesFor(1)} alone, ${livesFor(5)} for five.`],
        ['Recommended gear', `${D.gear} Bring food.`],
        ['Par time', `${D.par.solo} minutes alone, ${D.par.party} together`],
        ['Meter', 'Heat (0 to 100, every player has their own)'],
        ['Boss', D.boss],
        ['Start', '`/dungeon solo cinderworks`, or pick it in `/dungeon`'],
      ],
    },
    {
      type: 'p',
      text: 'How to start, shared lives, chests and the rules inside are the same in both delves: see [Delves](/wiki/delves).',
    },
    { type: 'h2', text: 'Heat' },
    {
      type: 'p',
      text: 'Fire first, water after. Hot rooms and carried cores raise your Heat, water tubs take it away. Your number is on the action bar: grey, orange from 60, red from 90.',
    },
    {
      type: 'table',
      caption: 'What changes your Heat',
      head: ['What', 'Change'],
      rows: [
        ['Carrying a core or ember', 'plus 2.5 a second'],
        ['Hot rooms', 'plus 1.2 a second'],
        ['Hit by steam', 'plus 15'],
        ['Hit by a fire wall', 'plus 25'],
        ['Standing at a water tub', 'minus 20 a second'],
        ['Stair landings', 'minus 4 a second'],
        ['Anywhere else', 'slowly falls'],
      ],
    },
    {
      type: 'list',
      items: [
        'At **100** you burn: 6% of your health a second until you reach a water tub.',
        'From **60** on your hands are hot. Hot hands open cold iron.',
        'Heat is also bait. Plated monsters and the Emberwright walk to the hottest player they see. In a party you choose who stays warm. Alone, you are always the bait.',
        'Every stair landing has a water tub and no monsters.',
        'Learn the colours: a lit lamp is a job, a dark lamp is done. Red floor means steam is next. A water cauldron is safe.',
      ],
    },
    { type: 'h2', text: 'Floor by floor' },
    {
      type: 'p',
      text: 'Each floor teaches one idea, and the boss fight uses all of them. The boss bar shows your goal, the lit floor shows the way. Some rooms change from run to run.',
    },
    { type: 'h3', text: 'Floor 1: The Forge' },
    { type: 'p', text: '**Fire has weight.** Carry heat: a core makes you hot, water makes you safe. A core in water makes the steam that lifts the first hatch.' },
    {
      type: 'list',
      items: [
        'Carry an ember to a water tub, then put out the ash crew.',
        'Bring a molten core from the forge to a water tub. A carrier cannot attack: hold sneak for 1 second to set it down when you must fight.',
        'Hold the pillared hall while the steam builds.',
        'Optional: the Smith’s Song.',
      ],
    },
    { type: 'h3', text: 'Floor 2: The Steam Galleries' },
    { type: 'p', text: '**Listen, then walk.** Steam vents: hiss and red floor first, burst after. Valves shut them, and steam burns monsters too.' },
    {
      type: 'list',
      items: [
        'Pass the hissing vent: let it burst, then walk across.',
        'Shut valves by tapping their lit lamps. A dark lamp is a shut valve.',
        'Shut two valves within 30 seconds of each other, then three in the order they knock.',
        'Optional: break both slag hearts within 10 seconds.',
      ],
    },
    { type: 'h3', text: 'Floor 3: The Cold Cellar' },
    { type: 'p', text: '**He follows the warmest.** Plated monsters walk to the hottest player. Lead them past a water tub and the plate cracks.' },
    {
      type: 'list',
      items: [
        'Lead the plated man past the tub. Wait 3 blocks behind it so he walks past.',
        'Clear the hot hall, then crack the Foreman and defeat him.',
        'Hold the melting pot while the wheel melts. Run to a corner tub when your Heat is high, then come back.',
        'Optional and secret: cold iron, for hot hands.',
      ],
    },
    { type: 'h3', text: 'Floor 4: The Long Flue' },
    { type: 'p', text: '**The house breathes fire.** Some lamps wake a wall of fire that rolls through the corridors. Outrun it or let it pass in a wall niche.' },
    {
      type: 'list',
      items: [
        'Hold the chapel until its fire burns. The first wall of fire does not hurt.',
        'Clear the lamp room in the south. Remember the vents on the way, you will come back faster.',
        'Eat and rest. Tap the big lamp, then **run** north to the stairs. If the fire catches up, press into a wall niche and stay there.',
        'Optional: balance the four scales. Your ash shape holds each plate for 14 seconds.',
      ],
    },
    { type: 'h3', text: 'Floor 5: The Winter Ball' },
    { type: 'p', text: '**Starve the fire.** Small fires feed the big one: stop the slaglings before they reach a stove. Then everything you learned at once.' },
    {
      type: 'list',
      items: [
        'Stop the slaglings and stay in the stove room until the bar is full.',
        'Defeat the Guest of Honour. Wait 3 blocks behind the tub so he walks past it.',
        'Carry the last ember to the ballroom door and time the vents.',
        'Optional and secret: the frozen bell chain and the tower bell.',
      ],
    },
    { type: 'h2', text: 'Monsters' },
    {
      type: 'table',
      caption: 'From the in-game codex and tips',
      head: ['Monster', 'Watch out for'],
      rows: [
        ['Plated monsters', 'Slag plates stop three of every four parts of a blow. A water tub cracks them. They walk to the hottest player.'],
        ['Healer', 'Mends 6 health every 4 seconds. Kill it first.'],
        ['Slaglings', 'Carry coal to stoves. A fed stove throws heat at everybody. They die in two hits.'],
        ['Brute', 'Steam burns monsters too, so let it stand on a vent.'],
        ['The Foreman', 'Floor 3. Blades slide off him until he walks past a water tub.'],
        ['The Guest of Honour', 'Floor 5. Plated, with a healer behind him.'],
      ],
    },
    { type: 'h2', text: `Boss: ${D.boss}` },
    {
      type: 'p',
      text: 'He waits in the ballroom with four water basins, a crucible in the middle and a furnace with bellows. He walks to the hottest player. While he is plated he takes only a quarter of your damage: wait 3 blocks behind a full basin so he walks past it and the water cracks his plate. He is plated again after every part.',
    },
    {
      type: 'table',
      caption: 'The parts of the fight',
      head: ['Part', 'What happens'],
      rows: [
        ['The Plate (100% to 75%)', 'Hammer, cleave and slag slam. The floor glows in a ring around him: stand right next to him or run out of it.'],
        ['Stoking (after each part)', 'He goes back to the crucible and cannot be hurt. Three slaglings walk to the furnace. Work the bellows for 10 seconds (the seconds of all players add up) and kill the slaglings first: each one that arrives drains the basins and adds 15 Heat.'],
        ['Steam (75% to 50%)', 'He also spits. Vents fire in pairs: do not lure him over a vent that is about to burst.'],
        ['Molten Hands (50% to 25%)', 'He charges along a red lane. Every basin is choked by a small core: carry one to the crucible and its basin is full at once.'],
        ['The Last Ember (25% to 0%)', 'The room heats up faster and fire rains on a third of the floor at a time. You share the basins with him: you only drink from one at Heat 60 or more. A charge that ends in a basin with water cracks his plate at once.'],
      ],
    },
    {
      type: 'list',
      items: [
        'Basins refill one level every 12 seconds.',
        'Plated for 45 seconds? He walks to the nearest full basin by himself. After 75 seconds the plate falls off anyway.',
        'The bell at the top of the tower is heard in the ballroom.',
        `Floor warnings last ${DELVE_RULES.floorWarningSeconds} seconds, or ${DELVE_RULES.floorWarningSecondsBedrock} when a Bedrock player is in the run.`,
      ],
    },
    { type: 'h2', text: 'Omens' },
    {
      type: 'table',
      caption: 'One per run. Bad omens come with one more life.',
      head: ['Omen', 'What it does', 'Kind'],
      rows: [
        ['Damp Coal', 'Heat rises a quarter slower today.', 'Good'],
        ['Loud Pipes', 'Steam warns half a second longer.', 'Good'],
        ['Deep Water', 'Water tubs cool you much faster.', 'Good'],
        ['Late Shift', 'The crew is tired and walks slower.', 'Good'],
        ['The Old Ledger', 'One more chest was never collected.', 'Good'],
        ['Dry Season', 'Water tubs cool slower. One more life.', 'Bad'],
        ['Overpressure', 'Vents rest less. One more life.', 'Bad'],
        ['Heavy Core', 'Cores weigh more. One more life.', 'Bad'],
        ['Restless Slag', 'A slagling follows each wave. One more life.', 'Bad'],
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
        ['Chests', `${D.chestsPerFloor.join(', ')} per floor, plus a secret chest. Finished optional rooms on floors 1 and 2 add a chest. Rare rolls can give netherite scrap or an enchanted book: ${D.books}.`],
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
        'Heat 100 burns you until you reach a water tub.',
        'The floor turns red and hisses before every steam burst.',
        'Plated monsters follow the hottest player. Wait 3 blocks behind a tub.',
        'The bar never falls. Cool down first, then go back.',
        'Wall niches save you from a fire wall, just press in.',
        'Slaglings die in two hits. Let none of them reach a stove.',
        'Wrong valve? Watch the lamps, they knock the order again.',
        'The hammer above strikes once for every floor still ahead.',
      ],
    },
  ],
}
