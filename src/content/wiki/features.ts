import type { WikiPage } from '@/lib/content'

/*
 * Overview of every feature. Facts checked 2026-11-25 against the live Survival
 * and Hub configs (see the per-page files for the exact sources).
 */
export const features: WikiPage = {
  slug: 'features',
  title: 'Everything on KasadyaCraft',
  summary: 'A quick tour of the whole Survival server in one page, with a link to the full article for each part.',
  icon: 'star',
  category: 'basics',
  order: 1,
  updated: '2026-11-25',
  keywords: ['overview', 'features', 'what to do', 'survival', 'hub', 'start', 'new player'],
  related: ['world-and-warps', 'plots', 'economy', 'dungeon', 'rewards', 'faq'],
  body: [
    {
      type: 'p',
      text: "New here? Think of this page as the map. Every section is short and points to the full article. Tara, let's go!",
    },
    { type: 'h2', text: 'How the network works' },
    {
      type: 'p',
      text: 'Join `play.kasadyacraft.com` on Java Edition 1.21.x and you land in the **hub**, our festival plaza. Walk through the portal, click the **Survival Guide** NPC or right-click the compass in hotbar slot 4 to enter Survival. `/hub` brings you back any time.',
    },
    {
      type: 'p',
      text: 'Survival needs our resource pack for the custom items, dungeon mobs and menus. Accept it when the game asks. The full join steps are on [How to join](/play).',
    },
    { type: 'h2', text: 'Your base: a free plot' },
    {
      type: 'p',
      text: 'Everyone gets **1 free plot** of 51 by 51 blocks. Type `/plot auto` and it is yours. Only people you add can build there. More on [Plots](/wiki/plots).',
    },
    { type: 'h2', text: 'The Wild' },
    {
      type: 'p',
      text: '`/wild` drops you somewhere random in the Wild, a world 10,000 blocks across. PvP is on there and there are no land claims, so mine and explore in the Wild but keep your main base on your plot. See [Worlds and warps](/wiki/world-and-warps).',
    },
    { type: 'h2', text: 'Money and trading' },
    {
      type: 'p',
      text: 'You start with **$250**. The server `/shop` sells almost everything but only buys back raw materials, at 25% of the buy price. The best deals happen between players. Read [Money and the shop](/wiki/economy).',
    },
    {
      type: 'p',
      text: 'Run chest shops on your plot or rent a stall in the Shopping Mall (`/warp mall`). See [Player shops](/wiki/player-shops).',
    },
    { type: 'h2', text: 'Free stuff for playing' },
    {
      type: 'list',
      items: [
        '3 daily quests in `/dquests`. Finish all three for $1,500 and a diamond block.',
        'Daily, weekly and monthly rewards in `/rewards`.',
        'Playtime levels in `/levels`: money, XP, points and Tokens as your hours add up.',
        'The AFK pool at `/warp afk`: 10 points every 20 minutes. See [AFK pool](/wiki/afk-pool).',
        'Chat games every few minutes. See [Chat games](/wiki/chat-games).',
      ],
    },
    { type: 'p', text: 'All of it is on [Quests and rewards](/wiki/rewards).' },
    { type: 'h2', text: 'The Lab of Horrors' },
    {
      type: 'p',
      text: 'Our dungeon. Bring up to 5 players, clear 7 rooms, beat the Draedon Disciple and then fight **Draedon** himself. Dungeon loot goes into Chamber Keys for the raid chests. Start with [Lab of Horrors](/wiki/dungeon).',
    },
    { type: 'h2', text: 'Crates, spawners and legendary weapons' },
    {
      type: 'list',
      items: [
        'Crates are at `/warp crates`. See [Crates and keys](/wiki/crates) for what is inside.',
        'You can collect spawners with a Silk Touch diamond or netherite pickaxe. Rules on [Spawners](/wiki/spawners).',
        'Legendary weapons have wild abilities, and their block damage only works in the Wild. See [Legendary weapons](/wiki/legendary-weapons).',
      ],
    },
    { type: 'h2', text: 'Ranks and Tokens' },
    {
      type: 'p',
      text: 'Ranks (VIP up to MVP++) give extra plots, homes, mall stalls, handy commands and a kit. They are paid with **Tokens** in game. There is no real-money store yet. Details on [Ranks](/wiki/ranks).',
    },
    { type: 'h2', text: 'Looking good' },
    {
      type: 'p',
      text: 'Buy a chat tag with in-game money in `/tags`, unlock chat colours with points in `/cosmetics`, and pick a glow colour for free. See [Chat tags](/wiki/tags).',
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Stuck in game?',
      text: 'Type `/menu` for the Guide menu, check the [FAQ](/wiki/faq), or ask in our [Discord](https://discord.gg/8DY3eXHnAg). Someone will help.',
    },
  ],
}
