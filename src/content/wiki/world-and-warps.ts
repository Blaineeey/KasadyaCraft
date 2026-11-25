import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - Borders: `worldborder get` in survival logs/latest.log (world 10000, nether 5000, end 5000, spawn 250, PlotWorld none)
 * - Gamerules: level.dat of each world (keepInventory false in world/nether/end/PlotWorld, true in spawn/shoppingmall)
 * - Multiverse-Core worlds.yml (pvp true everywhere), WorldGuard spawn + mall regions deny pvp (QA log)
 * - KasadyaWildGuard: "Block destruction from explosions/abilities is limited to: [world]"
 * - Essentials warps/*.yml, config.yml (teleport-delay 3, tpa-accept-cancellation 120, auto-afk 300, auto-afk-kick -1)
 * - Skript rtp.sk (/wild /rtp /randomtp /wildtp -> world, /nethertp, /endtp, 60 s cooldown), DeluxeMenus WARP/Rtp.yml (/rtpmenu)
 * - Hub: KasadyaLobby + Velocity (/survival /smp /server smp, /hub /lobby, failover to hub) per /root/launch/CHANGELOG.md
 */
export const worldAndWarps: WikiPage = {
  slug: 'world-and-warps',
  title: 'Worlds, warps and getting around',
  summary: 'Where everything is: the hub, spawn, the Wild, the Nether and End, the plot world and the Mall. Plus warps, homes, random teleport and /tpa.',
  icon: 'compass',
  category: 'basics',
  order: 2,
  updated: '2026-11-25',
  keywords: [
    '/warp',
    '/warps',
    '/spawn',
    '/home',
    '/sethome',
    '/tpa',
    '/wild',
    '/rtp',
    '/nethertp',
    '/endtp',
    '/hub',
    '/survival',
    'border',
    'nether',
    'end',
    'keep inventory',
    'explosions',
    'tnt',
  ],
  related: ['plots', 'commands', 'legendary-weapons', 'faq'],
  body: [
    { type: 'h2', text: 'The hub' },
    {
      type: 'p',
      text: 'Everyone joins in the hub, our festival plaza. It is a safe place: no damage, no hunger, no building. To get into Survival, pick any of these:',
    },
    {
      type: 'list',
      items: [
        'Walk through the big portal at the gate.',
        'Click the **Survival Guide** NPC.',
        'Right-click the compass in the middle hotbar slot (key 5) and choose Survival.',
        'Type `/survival` (or `/smp`).',
      ],
    },
    {
      type: 'p',
      text: '`/hub` (or `/lobby`) takes you back from Survival. If Survival restarts or kicks you, you drop safely into the hub and stay connected.',
    },
    { type: 'h2', text: 'Survival worlds' },
    {
      type: 'table',
      caption: 'Survival worlds at a glance',
      head: ['World', 'Get there', 'Size', 'Keep inventory', 'What it is for'],
      rows: [
        ['Spawn', '`/spawn`', '250 blocks across', 'On', 'Shop NPCs, crates, the AFK pool and the dungeon entrance. Fully protected.'],
        ['The Wild', '`/wild`', '10,000 blocks across', 'Off', 'Mining, exploring, farms. No land claims.'],
        ['Nether', '`/nethertp` or a portal', '5,000 blocks across', 'Off', 'Quartz, gold, netherite, blazes and the daily quests.'],
        ['The End', '`/endtp` or a portal', '5,000 blocks across', 'Off', 'Endermen, shulkers and elytra hunting.'],
        ['Plot world', '`/plot home`', 'No border', 'Off', 'Your protected base. See [Plots](/wiki/plots).'],
        ['Shopping Mall', '`/warp mall`', '30 stalls', 'On', 'Player shops. See [Player shops](/wiki/player-shops).'],
        ['Lab of Horrors', '`/warp dungeon`', 'Instanced', 'On during a run', 'The dungeon. See [Lab of Horrors](/wiki/dungeon).'],
      ],
    },
    {
      type: 'p',
      text: 'PvP is on in the Wild, the Nether and the End. Spawn and the Shopping Mall are safe zones.',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'No graves',
      text: 'Keep inventory is **off** in the Wild, Nether, End and plot world, and there are no graves. If you die out there, your items drop on the spot. Run back fast.',
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Explosions only break blocks in the Wild',
      text: 'TNT, creepers, beds, respawn anchors, end crystals and weapon abilities only damage blocks in the overworld Wild. Everywhere else (Nether, End, plots, spawn, the Mall) they do no block damage. So bed or TNT mining for ancient debris in the Nether will not work. Bring a good pickaxe.',
    },
    { type: 'h2', text: 'Warps' },
    { type: 'p', text: '`/warps` opens the warp menu. Or go straight there:' },
    {
      type: 'commands',
      items: [
        { command: '/warp spawn', description: 'The spawn plaza. Same as `/spawn`.' },
        { command: '/warp shop', description: 'The server shop area.' },
        { command: '/warp mall', description: 'The Shopping Mall with player stalls.' },
        { command: '/warp crates', description: 'Open your crate keys here.' },
        { command: '/warp afk', description: 'The AFK pool. Earn points while you are away.' },
        { command: '/warp dungeon', description: 'Entrance to the Lab of Horrors.' },
      ],
    },
    { type: 'h2', text: 'Homes' },
    {
      type: 'p',
      text: 'Set a home with `/sethome <name>` and go back with `/home <name>`. `/delhome <name>` removes one. Everyone gets **1 home**. Ranks give more, see [Ranks](/wiki/ranks).',
    },
    {
      type: 'p',
      text: 'If you die, you respawn at your bed if you slept in one. If not, you go back to spawn.',
    },
    { type: 'h2', text: 'Random teleport' },
    {
      type: 'commands',
      items: [
        { command: '/wild', description: 'Random spot in the Wild. `/rtp` does the same.' },
        { command: '/nethertp', description: 'Random spot in the Nether.' },
        { command: '/endtp', description: 'Random spot in the End.' },
        { command: '/rtpmenu', description: 'A menu with all three.' },
      ],
    },
    { type: 'p', text: 'You can random teleport once every **60 seconds**.' },
    { type: 'h2', text: 'Teleport to friends' },
    {
      type: 'commands',
      items: [
        { command: '/tpa <player>', description: 'Ask to teleport to a player.' },
        { command: '/tpaccept', description: 'Accept a request.' },
        { command: '/tpdeny', description: 'Say no to a request.' },
        { command: '/tpacancel', description: 'Cancel the request you sent.' },
        { command: '/tptoggle', description: 'Stop people from sending you requests.' },
        { command: '/tpahere <player>', description: 'Ask a player to come to you.', rank: 'vip-plus' },
        { command: '/back', description: 'Go back to where you were before your last teleport or death.', rank: 'vip-plus' },
      ],
    },
    {
      type: 'p',
      text: 'Requests run out after 2 minutes. Every teleport has a 3 second warm-up.',
    },
    { type: 'h2', text: 'Good to know' },
    {
      type: 'list',
      items: [
        'The Wild has no land claims. Anything you build there is unprotected, so keep your main base on your plot.',
        'Taking damage puts you in combat for 10 seconds. While in combat you cannot send `/tpa` requests, and logging out kills you.',
        'You are never kicked for being AFK. After 5 minutes you are just marked as AFK.',
        'The Wild is big. Note your coordinates (F3) before you leave a good spot, or set a home there.',
      ],
    },
  ],
}
