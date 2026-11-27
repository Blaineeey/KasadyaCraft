import { DAILY_QUEST_BONUS, DAILY_QUESTS, count } from '@/content/facts'
import type { WikiPage } from '@/lib/content'
import { VOTE_REWARD_TEXT, voteSites } from '@/lib/vote'
import { CHAT_GAME_PRIZE } from './chat-games'
import { DELVE_RULES, DELVES } from './delve-facts'

/*
 * Overview of every feature. Facts checked 2026-11-25 against the live Survival
 * and Hub configs (see the per-page files for the exact sources; shared numbers in src/content/facts.ts).
 * The delves section: KasadyaDelves 1.0.0 data, 2026-11-26 (see ./delve-facts.ts).
 * 2026-11-27: fishing (InfiniteFishing), custom enchants (AdvancedEnchantments), chat (LPC Pro), vote fly time on plots,
 * chat game prize, picture tags and point prices for colours and glow (see ./fishing.ts, ./custom-enchants.ts, ./chat.ts, ./tags.ts).
 */
export const features: WikiPage = {
  slug: 'features',
  title: 'Everything on KasadyaCraft',
  summary: 'A quick tour of the whole Survival server in one page, with a link to the full article for each part.',
  icon: 'star',
  category: 'basics',
  order: 1,
  updated: '2026-11-27',
  keywords: ['overview', 'features', 'what to do', 'survival', 'hub', 'start', 'new player'],
  related: ['world-and-warps', 'plots', 'economy', 'fishing', 'custom-enchants', 'dungeon', 'delves', 'rewards', 'faq'],
  body: [
    {
      type: 'p',
      text: "New here? Think of this page as the map. Every section is short and points to the full article. Tara, let's go!",
    },
    { type: 'h2', text: 'How the network works' },
    {
      type: 'p',
      text: 'Join `play.kasadyacraft.com` on Java Edition 1.21.x, or on Bedrock with port 19132, and you land in the **hub**, our festival plaza. Walk through the portal, click the **Survival Guide** NPC or right-click the compass in the middle hotbar slot (key 5) to enter Survival. `/hub` brings you back any time.',
    },
    {
      type: 'p',
      text: 'Survival needs our resource pack for the custom items, dungeon mobs and menus. Accept it when the game asks. The full join steps are on [How to join](/play).',
    },
    { type: 'h2', text: 'Your base: a free plot' },
    {
      type: 'p',
      text: 'Everyone gets **1 free plot** of 51 by 51 blocks. Type `/plot auto` and it is yours. Only people you add can build there. Fly time from voting works on your own plots and plots you are trusted on. More on [Plots](/wiki/plots).',
    },
    { type: 'h2', text: 'The Wild' },
    {
      type: 'p',
      text: '`/wild` drops you somewhere random in the Wild, a world 10,000 blocks across. PvP is on there and there are no land claims, so mine and explore in the Wild but keep your main base on your plot. See [Worlds and warps](/wiki/world-and-warps).',
    },
    { type: 'h2', text: 'Money and trading' },
    {
      type: 'p',
      text: 'You start with **$250**. The server `/shop` sells blocks, crops, logs, mob drops, ores, redstone and tools, but only buys back raw materials, at 25% of the buy price. The best deals happen between players. Read [Money and the shop](/wiki/economy).',
    },
    {
      type: 'p',
      text: 'Run chest shops on your plot or rent a stall in the Shopping Mall (`/warp mall`). See [Player shops](/wiki/player-shops).',
    },
    { type: 'h2', text: 'Free stuff for playing' },
    {
      type: 'list',
      items: [
        `${DAILY_QUESTS.perDay} daily quests in \`/dquests\`, ${count(DAILY_QUESTS.xpEach)} XP each. Finish all ${DAILY_QUESTS.perDay} for ${DAILY_QUEST_BONUS}.`,
        'Daily, weekly and monthly rewards in `/rewards`, Tokens included.',
        `Voting in \`/vote\`: ${VOTE_REWARD_TEXT} per vote, on ${voteSites.length} sites. Links on the [vote page](/vote).`,
        'Playtime levels in `/levels`: money, XP, points and Tokens as your hours add up.',
        'The AFK pool at `/warp afk`: 10 points every 20 minutes. See [AFK pool](/wiki/afk-pool).',
        `Chat games every few minutes: the first right answer wins $${CHAT_GAME_PRIZE.money}, ${CHAT_GAME_PRIZE.points} points and ${CHAT_GAME_PRIZE.xp} XP. See [Chat games](/wiki/chat-games).`,
      ],
    },
    { type: 'p', text: 'All of it is on [Quests and rewards](/wiki/rewards).' },
    { type: 'h2', text: 'Fishing' },
    {
      type: 'p',
      text: 'Fishing has its own fish, rods, bait and minigames. Every catch has a rarity, a weight and a size, and `/fishmarket` pays for all of it, so fishing earns about as much as mining. Twice a week there is a fishing tournament. See [Fishing](/wiki/fishing).',
    },
    { type: 'h2', text: 'Custom enchants' },
    {
      type: 'p',
      text: 'On top of the normal enchants there are custom ones, from Simple to Fabled. Buy books with XP at `/enchanter` and drop them onto your gear. `/ae` has a guide that shows which enchants go on which item. See [Custom enchants](/wiki/custom-enchants).',
    },
    { type: 'h2', text: 'The Lab of Horrors' },
    {
      type: 'p',
      text: 'Our first dungeon. Bring up to 5 players, clear 7 rooms, beat the Draedon Disciple and then fight **Draedon** himself. Dungeon loot goes into Chamber Keys for the raid chests, enchanted books, crate keys and a dungeon-only chat tag. Start with [Lab of Horrors](/wiki/dungeon).',
    },
    { type: 'h2', text: 'The delves' },
    {
      type: 'p',
      text: `Two more dungeons, each with five floors and a boss: **${DELVES.gloomhold.name}** (${DELVES.gloomhold.difficulty}), where you bring the light back, and **${DELVES.cinderworks.name}** (${DELVES.cinderworks.difficulty}), a burning manor. Go alone or with up to ${DELVE_RULES.maxPlayers - 1} friends. The party shares one pool of lives: ${DELVE_RULES.livesBase}, plus ${DELVE_RULES.livesPerPlayer} per player. A clear pays points, sometimes a crate key or special gear. Type \`/dungeon\` and read [Delves](/wiki/delves).`,
    },
    { type: 'h2', text: 'Crates, spawners and legendary weapons' },
    {
      type: 'list',
      items: [
        'Crates are at `/warp crates`. See [Crates and keys](/wiki/crates) for what is inside.',
        'You can collect spawners with a Silk Touch diamond or netherite pickaxe. Rules on [Spawners](/wiki/spawners).',
        'Legendary weapons are not obtainable yet. When they arrive, their block damage will only work in the Wild. See [Legendary weapons](/wiki/legendary-weapons).',
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
      text: 'Buy a picture tag with in-game money in `/tags`, chat colours with points in `/chatcolor`, and a glow with points in `/glowshop`. See [Chat tags and cosmetics](/wiki/tags).',
    },
    { type: 'h2', text: 'Chat' },
    {
      type: 'p',
      text: 'Click a name in chat to message that player, type `@name` to ping someone and `[item]` to show off what you hold. A filter keeps chat clean on its own. See [Chat and messages](/wiki/chat).',
    },
    { type: 'h2', text: 'Painting' },
    {
      type: 'p',
      text: 'Draw your own pixel art with `/paint`, hang it on your plot as a map, or show it to your friends from My Paintings. See [Painting](/wiki/painting).',
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Stuck in game?',
      text: 'Type `/menu` for the Guide menu, check the [FAQ](/wiki/faq), or ask in our [Discord](https://discord.gg/8DY3eXHnAg). Someone will help.',
    },
  ],
}
