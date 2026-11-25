import type { WikiPage } from '@/lib/content'
import { HEXTECH_TAG } from './locksmith'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/MythicDungeons/groups/LabOfHorrors/general.yml: MinPlayer 1, MaxPlayer 5, DeathLimit none, AutoRespawn,
 *   TeleportTo CHECKPOINT, KeepInventory/KeepExperience true, BlockBreak/BlockPlace false, BlockPvP true,
 *   BlockCommands true, GameMode ADVENTURE, no cooldown/money/items/stamina requirement, AutoStartTimer 30
 * - plugins/MythicMobs/mobs/LabOfHorrors/{loh,draedon}.yml: health/damage, drops (INFECTED_FLESH 0.1 / 0.5 / 1-3)
 * - plugins/MythicDungeons/loottables/loh_lootchest.yml (supply chests), MythicMobs droptables/LabOfHorrors/loh.yml (raid chests)
 * - DeluxeMenus DUNGEON/Codex.yml (/dungeoninfo, /codex): 7 rooms, 12 supply chests, boss phases, 2 minute rewards room
 * - Citizens NPCs at spawn: Dungeon Guard, Dungeon Master (/dungeon), Dungeon Codex (/dungeoninfo)
 * - DeluxeMenus DUNGEON/Main.yml (/dungeon, /dungeons): one menu for solo, party, quick match, join, invites, leave
 * - LuckPerms default: mythicdungeons.commands.rooms.*, dungeons.leave/chat/info
 * - Economy balancer: no money reward, fee or cooldown; loot cannot be sold
 * - DeluxeMenus DUNGEON/Locksmith.yml (08:58, GAMEPLAY FIXER round 3): forge keys, decipher books into vanilla
 *   enchanted books, trade loot for Epic/Spawner crate keys and the dungeon-only [HEXTECH] tag (see ./locksmith.ts)
 */
export const dungeon: WikiPage = {
  slug: 'dungeon',
  title: 'Lab of Horrors',
  summary: 'Our dungeon for 1 to 5 players: 7 rooms, the Draedon Disciple and the boss Draedon. How to start, what you will fight and how raid chests work.',
  icon: 'skull',
  category: 'dungeon',
  order: 1,
  updated: '2026-11-25',
  keywords: [
    'dungeon',
    'lab of horrors',
    'draedon',
    'boss',
    '/dungeon',
    'play solo',
    'quick match',
    '/mr',
    'party',
    'raid chest',
    'chamber key',
    '/locksmith',
    'decipher',
    'hextech',
    '/dungeoninfo',
    '/codex',
    'mythicdungeons',
    'disciple',
  ],
  related: ['dungeon-items', 'commands', 'economy'],
  body: [
    {
      type: 'p',
      text: 'When science goes wrong... The Lab of Horrors is a ruined lab full of failed experiments. Clear 7 rooms, beat the Draedon Disciple, then face **Draedon** himself.',
    },
    {
      type: 'table',
      caption: 'Quick facts',
      head: ['What', 'Details'],
      rows: [
        ['Players', '1 to 5 per run'],
        ['Cost to enter', 'Free. No cooldown, no entry fee.'],
        ['Time limit', 'None'],
        ['If you die', 'You respawn at the last door you reached and keep your items and XP.'],
        ['Inside', 'Adventure mode: no breaking or placing blocks, no PvP, most commands blocked.'],
        ['Money', `No money, but the loot turns into Chamber Keys, enchanted books, crate keys and the ${HEXTECH_TAG} tag.`],
      ],
    },
    { type: 'h2', text: 'Start a run' },
    {
      type: 'steps',
      items: [
        { title: 'Go to the entrance', text: 'The Dungeon Guard and Dungeon Master NPCs wait there.', command: '/warp dungeon' },
        { title: 'Open the dungeon menu', text: 'Talk to the Dungeon Master or type the command. Play Solo starts a run right away. Play with Friends makes a party.', command: '/dungeon' },
        { title: 'Fill your party', text: 'Invite a Friend, or let friends use Join a Party or Accept an Invite from the same menu. Quick Match groups you with other players. A run holds up to 5 players.' },
        { title: 'Start', text: 'Click Start Dungeon and the whole party is teleported in. Each door opens when its room is cleared.' },
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Read the Codex first',
      text: '`/dungeoninfo` (or the Dungeon Codex NPC) shows every mob, the boss and the loot, right in game.',
    },
    { type: 'h2', text: 'The monsters' },
    {
      type: 'table',
      caption: 'Health and damage are in hit points (2 points is 1 heart)',
      head: ['Mob', 'Health', 'Damage', 'Watch out for', 'Drops'],
      rows: [
        ['Infected Scientist', '40', '4', 'Throws poison, slowness and weakness potions', 'Infected Flesh (10%)'],
        ['Uncaged Subject', '35', '5', 'Fast. Can leave a poison cloud when it dies', 'Infected Flesh (10%)'],
        ['Half-Converted Researcher', '65', '10', 'Leaves a strong poison cloud when it dies', 'Infected Flesh (10%)'],
        ['Converted Undead', '25', '10', 'Can burst into Silver Parasites when killed', 'Infected Flesh (10%)'],
        ['Silver Parasite', '10', '3', 'Small, armoured and annoying', 'Infected Flesh (10%)'],
        ['Confused Hextechnologist', '100', 'None in melee', 'Keeps its distance and fires slowing Hex Bolts', 'Infected Flesh (50%)'],
        ['Draedon Disciple (room 7)', '1,000', '8', 'Hex Bolt and Hex Wave. Guards the portal to the boss', '1 to 3 Infected Flesh'],
      ],
    },
    { type: 'h2', text: 'Boss: Draedon' },
    { type: 'p', text: 'Draedon has **10,000 health**. Here is what he throws at you:' },
    {
      type: 'list',
      items: [
        '**Wave of Pain**: a close-range shockwave.',
        '**Soul Blast** and **Sonic Boom**: ranged hits. Keep moving.',
        'He summons lab subjects to fight for him.',
        'At 80%, 50%, 25% and 10% health he floats up and rains soul lanterns from the sky.',
        'At 50% he becomes immune. Kill the **Lost Souls** to make him take damage again.',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Bring a party and give one player Lost Soul duty at 50%. The fight goes much faster.',
    },
    { type: 'h2', text: 'Supply chests' },
    {
      type: 'p',
      text: '12 supply chests are hidden around the lab. Every player gets their own loot from each one, so nobody can steal yours. Each gives 1 or 2 items: mostly Key Fragments, sometimes Cobalt or Mithril Ingots, and once in a while an Undeciphered Book.',
    },
    { type: 'h2', text: 'Raid chests' },
    {
      type: 'p',
      text: 'Beat Draedon and you go back to the rewards room for **2 minutes**. Hold a Chamber Key and right-click the matching chest. You can open **one chest per player** each time the boss falls.',
    },
    {
      type: 'table',
      caption: 'Raid chests',
      head: ['Chest', 'Needs', 'Items', 'Best loot'],
      rows: [
        ['Diamond', 'Diamond Chamber Key', '2', 'Lab Samples, Cobalt, Mithril, Raw Hextech, Common and Rare books'],
        ['Emerald', 'Emerald Chamber Key', '3', 'Adds Warden Ingots, Legendary books and a chance at a Hextech Crystal'],
        ['Star', 'Star Chamber Key', '3', 'Adds Soulsteel Ingots, the Fabled book and the best Hextech Crystal odds'],
      ],
    },
    {
      type: 'p',
      text: 'Keys are forged at the **Locksmith** with `/locksmith`. The Locksmith also deciphers your books into enchanted books and trades Raw Hextech, Warden Ingots and Hextech Crystals for crate keys. Every recipe, trade and drop table is on [Lab of Horrors items](/wiki/dungeon-items).',
    },
    { type: 'h2', text: 'Tips' },
    {
      type: 'list',
      items: [
        'Your first runs are for materials. Save Key Fragments and Infected Flesh for your first Diamond Chamber Key.',
        'The Diamond key also costs 64 diamonds. Start saving early.',
        'Your inventory is safe inside, but bring food, potions and good armour. Poison adds up.',
        '`/md leave` takes you out of a run. Talk to just your party with `/dchat <message>`.',
      ],
    },
  ],
}
