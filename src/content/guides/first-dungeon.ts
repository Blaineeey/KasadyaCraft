import type { Guide } from '@/lib/content'
import { CHECKED, DUNGEON } from './facts'

/*
 * Sources: MythicDungeons groups/LabOfHorrors/general.yml (1-5 players, no cost, no cooldown, keep inventory
 * and XP, respawn at checkpoint, no block break/place, commands blocked), stages.yml (gate, 7 rooms with kill
 * objectives, portal + button, Draedon, 2 minute reward room), lootchests.yml (12 per-player supply chests),
 * MythicMobs mobs/LabOfHorrors (stats + Infected Flesh drops), droptables/LabOfHorrors/loh.yml (raid chest loot),
 * skills/LabOfHorrors/locksmith.yml + lair_of_horrors_mechanics.yml (key consumed, one chest per player per kill),
 * DeluxeMenus DUNGEON/Codex.yml (/dungeoninfo) + DUNGEON/Locksmith.yml (/locksmith) + DUNGEON/Main.yml (/dungeon:
 * Play Solo, Play with Friends, Quick Match, Join a Party, Accept an Invite, Start, Leave Dungeon), locale en_US.yml,
 * Citizens NPCs in the dungeon hall (Dungeon Master opens /dungeon), warp dungeon.
 */
export const firstDungeon: Guide = {
  slug: 'first-dungeon',
  title: 'Lab of Horrors: your first run',
  summary: 'Form a party, clear seven rooms, beat Draedon, and turn your loot into Chamber Keys for the raid chests.',
  icon: 'skull',
  stage: 'next-steps',
  order: 3,
  minutes: 7,
  updated: CHECKED,
  next: 'ranks-and-kits',
  related: ['dungeon', 'commands', 'features'],
  body: [
    {
      type: 'p',
      text: `The Lab of Horrors is our dungeon: an abandoned lab full of experiments gone wrong. ${DUNGEON.rooms} rooms, a disciple, and the boss **Draedon** at the end. Bring friends.`,
    },
    { type: 'h2', text: 'Before you go' },
    {
      type: 'list',
      items: [
        'Wear your best armour. Bring a sword or bow, food and healing.',
        `Go solo or take a party of up to **${DUNGEON.maxPlayers} players**.`,
        'There is no entry cost and no time limit.',
        'You keep your items and XP if you die. You come back at the last door you reached.',
        'Inside, you cannot place or break blocks, and most commands are blocked.',
      ],
    },
    { type: 'h2', text: 'Start a run' },
    {
      type: 'steps',
      items: [
        { title: 'Go to the dungeon hall', text: 'It is at spawn. Say hi to the Dungeon Guard on the way in.', command: '/warp dungeon' },
        { title: 'Open the dungeon menu', text: 'Talk to the Dungeon Master or type the command. Click **Play Solo** to jump straight in, or **Play with Friends** to make a party.', command: '/dungeon' },
        { title: 'Bring your friends', text: 'Click **Invite a Friend** and type their name. They can also open the same menu and use **Join a Party** or **Accept an Invite**. No friends online? **Quick Match** teams you up with other players.' },
        { title: 'Start and meet at the gate', text: 'Click **Start Dungeon**. Inside, the whole party stands at the lab gate together to open it.' },
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'Curious what is inside first? `/dungeoninfo` opens the Codex with every monster, the boss and all the loot.',
    },
    { type: 'h2', text: 'Room by room' },
    {
      type: 'p',
      text: 'Each room stays locked until every monster in it is dead. Then the next door opens and the action bar tells you so.',
    },
    { type: 'h3', text: 'The monsters' },
    {
      type: 'list',
      items: [
        '**Infected Scientists** throw poison, slowness and weakness potions.',
        '**Uncaged Subjects** are fast and can leave a poison cloud when they die.',
        '**Half-Converted Researchers** hit hard (10 damage) and can leave a strong poison cloud.',
        '**Converted Undead** may burst into **Silver Parasites** when killed.',
        '**Confused Hextechnologists** keep their distance and fire Hex Bolts that slow you down.',
      ],
    },
    {
      type: 'p',
      text: `In room 7 the **Draedon Disciple** (${DUNGEON.discipleHealth.toLocaleString('en-US')} health) guards a portal. Beat it and its helpers, then the whole party gathers at the portal for the trip to the boss chamber. Press the button inside to face Draedon.`,
    },
    { type: 'h2', text: 'Draedon, the boss' },
    {
      type: 'list',
      items: [
        `Draedon has **${DUNGEON.bossHealth.toLocaleString('en-US')} health**. Bring the whole party.`,
        'Up close he sends out a shockwave called Wave of Pain. From range he uses Soul Blast and Sonic Boom.',
        'He calls lab subjects to fight for him.',
        'At 80%, 50%, 25% and 10% health he floats up and rains soul lanterns. Keep moving.',
        'At 50% he turns **immune**. Kill the **Lost Souls** to make him take damage again.',
      ],
    },
    { type: 'h2', text: 'Loot and raid chests' },
    {
      type: 'p',
      text: `There are **${DUNGEON.supplyChests} supply chests** hidden in the lab, and every player gets their own loot from each one. They mostly hold Key Fragments, plus Cobalt and Mithril Ingots and sometimes an Undeciphered Book. Monsters drop Infected Flesh.`,
    },
    {
      type: 'p',
      text: `When Draedon falls, you go back to the rewards room for **${DUNGEON.rewardRoomMinutes} minutes**. Its three **Raid Chests** only open with a Chamber Key. Hold the key and right-click the chest. The key is used up, and each player opens one chest per boss kill.`,
    },
    {
      type: 'table',
      caption: 'Raid chests',
      head: ['Raid chest', 'Items', 'What can be inside'],
      rows: [
        ['Diamond', '2', 'Mostly Lab Samples, plus Cobalt, Mithril, Raw Hextech, common and rare books'],
        ['Emerald', '3', 'Mostly Lab Samples, plus Cobalt, Mithril, Warden Ingots, Raw Hextech, books up to legendary, a rare Hextech Crystal'],
        ['Star', '3', 'Mostly Lab Samples, plus Cobalt, Mithril, Soulsteel and Warden Ingots, Raw Hextech, books up to fabled, Hextech Crystal'],
      ],
    },
    { type: 'h2', text: 'Forging Chamber Keys' },
    {
      type: 'p',
      text: 'Keys are made at the Locksmith: type `/locksmith`, or open it from the Codex. Click a key, and if you carry every ingredient it is forged on the spot.',
    },
    { type: 'h3', text: 'Which key first?' },
    {
      type: 'p',
      text: 'Start with the **Diamond** key. Everything for it comes from the lab plus 64 of your own diamonds. Raid chests give **Lab Samples**, which the Emerald key needs. **Soulsteel Ingots** for the Star key come from Star Raid Chests.',
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Need to leave a run early? Type `/dungeon` and click **Leave Dungeon**. Your party can carry on without you.',
    },
  ],
}
