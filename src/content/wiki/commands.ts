import type { WikiPage } from '@/lib/content'

/*
 * Player commands only. Sources (read-only, 2026-11-25):
 * - LuckPerms group nodes (default ... mvp++) from the functional tester's export, re-checked against
 *   /root/launch/backups/before-qa-audit2-2026-11-25/qa-audit2-before.json.gz: mvp+ essentials.fly only in
 *   world=plotworld / world=shoppingmall (Essentials world-change-fly-reset true); nobody has essentials.god
 * - plugin.yml commands/aliases/defaults: Essentials, PlotSquared, MythicDungeons, ODailyQuests, DailyReward, GSit,
 *   AxTrade (trade, default true), FreeCoinFlip, CustomFishing commands.yml,
 *   EconomyShopGUI (shop/sellall/sellgui default true), CombatLogX
 * - DeluxeMenus open_command lists, Skript scripts (commanddixes.sk, rtp.sk, nightvision.sk, discord.sk, website.sk)
 * - KasadyaVote (/vote)
 * - Hub: KasadyaLobby (/survival /smp), Velocity KasadyaHub (/hub /lobby)
 * - GSit poses are rank perks since the GAMEPLAY FIXER round 2 (CHANGELOG 06:17-06:48, LP export 07:25): default has
 *   gsit.sit/lay/layback/bellyflop/spin/crawl = false; VIP gsit.sit, VIP+ gsit.lay/layback/bellyflop/spin, MVP gsit.crawl
 *   (matches the Ranks.yml lore). Still free: click-sitting on stairs/slabs/carpets (GSit.SitClick) and /sit toggle.
 * /store is NOT used here: Skript store.sk owns that label ("store coming soon"). /purchase opens the Tokens menu.
 */
export const commands: WikiPage = {
  slug: 'commands',
  title: 'Commands',
  summary: 'Every player command on KasadyaCraft, grouped by what you want to do. Rank-only commands are marked.',
  icon: 'scroll',
  category: 'basics',
  order: 4,
  updated: '2026-11-25',
  keywords: ['commands', 'help', '/menu', '/help', 'list', 'cmd', 'how do i'],
  related: ['world-and-warps', 'ranks', 'economy', 'faq'],
  body: [
    {
      type: 'p',
      text: 'Lost? Most things are one menu away. When in doubt, type `/menu`.',
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'A rank badge next to a command means you need that rank or higher. Everything without a badge works for everyone. Words in <angle brackets> are things you fill in, like a player name.',
    },
    { type: 'h2', text: 'Hub' },
    {
      type: 'commands',
      items: [
        { command: '/survival', description: 'From the hub, go to Survival. `/smp` and `/server smp` work too.' },
        { command: '/hub', description: 'Back to the hub from anywhere. Also `/lobby`.' },
      ],
    },
    { type: 'h2', text: 'Menus and help' },
    {
      type: 'commands',
      items: [
        { command: '/menu', description: 'The Guide menu with every feature. `/help`, `/guide` and `/wiki` open it too.' },
        { command: '/rules', description: 'The server rules.' },
        { command: '/warps', description: 'The warp menu.' },
        { command: '/links', description: 'Discord and website links.' },
        { command: '/discord', description: 'Get the Discord invite in chat.' },
        { command: '/vote', description: 'The vote menu. Click a site to get its link in chat.' },
      ],
    },
    { type: 'h2', text: 'Getting around' },
    {
      type: 'commands',
      items: [
        { command: '/spawn', description: 'Go to the Survival spawn.' },
        { command: '/warp <name>', description: 'Warps: spawn, shop, mall, crates, afk, dungeon, pvp, duel.' },
        { command: '/sethome <name>', description: 'Save a home where you stand.' },
        { command: '/home <name>', description: 'Go to a home. With just one home, `/home` is enough.' },
        { command: '/delhome <name>', description: 'Delete a home.' },
        { command: '/wild', description: 'Random teleport into the Wild. `/rtp` works too. 60 second cooldown.' },
        { command: '/nethertp', description: 'Random teleport into the Nether.' },
        { command: '/endtp', description: 'Random teleport into the End.' },
        { command: '/rtpmenu', description: 'Menu with all random teleports.' },
        { command: '/tpa <player>', description: 'Ask to teleport to someone.' },
        { command: '/tpaccept', description: 'Accept a teleport request. `/tpdeny` says no.' },
        { command: '/tpacancel', description: 'Cancel a request you sent.' },
        { command: '/tptoggle', description: 'Block or allow teleport requests.' },
        { command: '/tpahere <player>', description: 'Ask someone to teleport to you.', rank: 'vip-plus' },
        { command: '/back', description: 'Back to your last spot, including where you died.', rank: 'vip-plus' },
      ],
    },
    { type: 'h2', text: 'Money and trading' },
    {
      type: 'commands',
      items: [
        { command: '/bal', description: 'Your balance. `/money` works too.' },
        { command: '/baltop', description: 'The richest players.' },
        { command: '/pay <player> <amount>', description: 'Send money to a player.' },
        { command: '/paytoggle', description: 'Stop or allow incoming payments.' },
        { command: '/shop', description: 'The server shop.' },
        { command: '/sellgui', description: 'A window to drop items in and sell them.' },
        { command: '/sellall inventory', description: 'Sell everything sellable in your inventory. Careful!' },
        { command: '/sellall hand', description: 'Sell the stack in your hand.' },
        { command: '/sellfish', description: 'The fish market. `/fishshop` works too.' },
        { command: '/fishingbag', description: 'Your bag for bait, hooks and rods.' },
        { command: '/trade <player>', description: 'Safe trade window. Stand within 10 blocks.' },
        { command: '/coinflip <amount> <heads|tails>', description: 'Bet money against another player. Minimum $1,000. `/cf` for short.' },
        { command: '/points', description: 'Your points.' },
        { command: '/tokens', description: 'Your Tokens.' },
        { command: '/purchase', description: 'The Tokens menu: ranks, keys and points.' },
        { command: '/ranks', description: 'The rank menu.' },
        { command: '/keys', description: 'Buy crate keys with Tokens.' },
      ],
    },
    { type: 'h2', text: 'Plots' },
    {
      type: 'commands',
      items: [
        { command: '/plot auto', description: 'Claim your free plot.' },
        { command: '/plot home', description: 'Go to your plot.' },
        { command: '/plot visit <player>', description: "Visit someone's plot." },
        { command: '/plot trust <player>', description: 'Let a friend build, even while you are offline.' },
        { command: '/plot add <player>', description: 'Let a friend build while you are online.' },
        { command: '/plot deny <player>', description: 'Ban someone from your plot.' },
      ],
    },
    { type: 'p', text: 'All plot commands are on [Plots](/wiki/plots).' },
    { type: 'h2', text: 'Player shops' },
    {
      type: 'commands',
      items: [
        { command: '/qs find <item>', description: 'Find the nearest shop that sells an item.' },
        { command: '/qs price <amount>', description: 'Change the price of the shop you are looking at. Costs $50.' },
        { command: '/qs buy', description: 'Turn the shop you are looking at into a buying shop.' },
        { command: '/qs sell', description: 'Turn it back into a selling shop.' },
        { command: '/arm', description: 'Menu for the Mall stalls you rent.' },
      ],
    },
    { type: 'h2', text: 'Rewards and cosmetics' },
    {
      type: 'commands',
      items: [
        { command: '/dquests', description: 'Your daily quests. `/quests` works too.' },
        { command: '/rewards', description: 'Daily, weekly and monthly rewards.' },
        { command: '/levels', description: 'Playtime levels and their rewards.' },
        { command: '/kit starter', description: 'The starter kit, once a day.' },
        { command: '/tags', description: 'Buy and wear chat tags.' },
        { command: '/cosmetics', description: 'Chat colours, glow and tags.' },
        { command: '/chatcolor', description: 'Pick a chat colour you unlocked.' },
        { command: '/paint', description: 'Draw pixel art, look at your paintings and show them to friends. See [Painting](/wiki/painting).' },
      ],
    },
    { type: 'h2', text: 'Lab of Horrors' },
    {
      type: 'commands',
      items: [
        { command: '/warp dungeon', description: 'Go to the dungeon entrance.' },
        { command: '/dungeon', description: 'The dungeon menu: play solo, make a party, quick match, join or accept an invite, start, or leave a run.' },
        { command: '/mr invite <player>', description: 'Invite a friend to your party (the menu does this for you too).' },
        { command: '/room accept <player>', description: 'Accept a party invite.' },
        { command: '/dungeoninfo', description: 'The Dungeon Codex: mobs, boss and loot. `/codex` works too.' },
        { command: '/locksmith', description: 'Forge Chamber Keys, decipher dungeon books and trade loot for crate keys.' },
        { command: '/dchat <message>', description: 'Talk only to your dungeon party.' },
      ],
    },
    { type: 'h2', text: 'Chat and friends' },
    {
      type: 'commands',
      items: [
        { command: '/msg <player> <message>', description: 'Private message. `/w` and `/tell` work too.' },
        { command: '/r <message>', description: 'Reply to your last private message.' },
        { command: '/ignore <player>', description: 'Hide messages from a player. Run it again to undo.' },
        { command: '/mail send <player> <message>', description: 'Leave a message for someone who is offline.' },
        { command: '/mail read', description: 'Read your mail.' },
        { command: '/msgtoggle', description: 'Turn private messages off or on.' },
        { command: '/helpop <message>', description: 'Message the staff who are online.' },
        { command: '/afk', description: 'Mark yourself as away.' },
        { command: '/list', description: 'Who is online.' },
      ],
    },
    { type: 'h2', text: 'Just for fun' },
    {
      type: 'commands',
      items: [
        { command: '/trash', description: 'Open a bin to throw items away.' },
        { command: '/controls', description: 'How to use legendary weapon abilities.' },
        { command: '/sit toggle', description: 'Turn sitting by right-click off or on.' },
        { command: '/sit', description: 'Sit down where you stand.', rank: 'vip' },
        { command: '/lay', description: 'Lie down.', rank: 'vip-plus' },
        { command: '/layback', description: 'Lie on your back.', rank: 'vip-plus' },
        { command: '/bellyflop', description: 'Lie flat on your belly.', rank: 'vip-plus' },
        { command: '/spin', description: 'Spin around on the spot.', rank: 'vip-plus' },
        { command: '/crawl', description: 'Crawl through 1 block gaps.', rank: 'mvp' },
      ],
    },
    {
      type: 'p',
      text: 'No rank? You can still sit on stairs, slabs and carpets: right-click one with an empty hand.',
    },
    { type: 'h2', text: 'Rank commands' },
    {
      type: 'commands',
      items: [
        { command: '/nv on', description: 'Night vision. `/nv off` turns it off.', rank: 'vip' },
        { command: '/craft', description: 'A crafting table anywhere.', rank: 'vip' },
        { command: '/kittycannon', description: 'Fire an exploding kitten. Purely for laughs.', rank: 'vip' },
        { command: '/kit vip', description: 'Your rank kit. Every rank has one: `/kit vip+`, `/kit mvp` and so on.', rank: 'vip' },
        { command: '/anvil', description: 'An anvil anywhere.', rank: 'vip-plus' },
        { command: '/grindstone', description: 'A grindstone anywhere.', rank: 'vip-plus' },
        { command: '/carttable', description: 'A cartography table anywhere.', rank: 'vip-plus' },
        { command: '/loom', description: 'A loom anywhere.', rank: 'mvp' },
        { command: '/condense', description: 'Turn ingots and gems into blocks.', rank: 'mvp' },
        { command: '/feed', description: 'Fill your hunger bar.', rank: 'mvp' },
        { command: '/repair', description: 'Repair the item in your hand.', rank: 'mvp' },
        { command: '/seen <player>', description: 'When a player was last online.', rank: 'mvp' },
        { command: '/stonecutter', description: 'A stonecutter anywhere.', rank: 'mvp-plus' },
        { command: '/heal', description: 'Restore your health. 60 second cooldown.', rank: 'mvp-plus' },
        { command: '/hat', description: 'Wear the item in your hand as a hat.', rank: 'mvp-plus' },
        { command: '/echest', description: 'Open your ender chest anywhere.', rank: 'mvp-plus' },
        { command: '/fly', description: 'Fly in the plot world and the Shopping Mall. It switches off when you leave.', rank: 'mvp-plus' },
        { command: '/beezooka', description: 'Launch a bee.', rank: 'mvp-plus' },
        { command: '/smithtable', description: 'A smithing table anywhere.', rank: 'mvp-plus-plus' },
        { command: '/bigtree', description: 'Grow a big tree where you look.', rank: 'mvp-plus-plus' },
        { command: '/pweather <type>', description: 'Your own weather. Only you see it.', rank: 'mvp-plus-plus' },
        { command: '/smite', description: 'Strike lightning where you look.', rank: 'mvp-plus-plus' },
        { command: '/clear', description: 'Empty your whole inventory.', rank: 'mvp-plus-plus' },
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      text: '`/clear` deletes everything in your inventory at once, and `/sellall inventory` sells everything the shop accepts. Neither can be undone.',
    },
  ],
}
