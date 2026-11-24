import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - Essentials kits.yml starter (delay 86400) + config newbies.kit 'starter'
 * - plugins/DailyRewards/config.yml: daily 24 h (resource key, 8 iron, 2 gold), weekly 168 h (50 points, 2 diamonds,
 *   1 emerald), monthly 720 h (100 points, 16 diamonds, 64 iron, 32 gold), check-for-full-inventory true
 * - plugins/ODailyQuests: quests_per_category.global 3, renew_interval 1d, quests/global.yml (4 kill quests, 2000 XP each,
 *   magma cube required_amount 15), global_reward eco 1500 + diamond_block
 * - DeluxeMenus BASIC/Playtime.yml CLAIM click_commands (actual rewards; `tf give` = TempFly, plugin NOT installed)
 * - Skript commanddixes.sk: /rewards -> dailyrewards, /quests -> dailyquests
 */
export const rewards: WikiPage = {
  slug: 'rewards',
  title: 'Quests and rewards',
  summary: 'Free stuff for playing: the starter kit, daily quests, daily, weekly and monthly rewards, playtime levels, the AFK pool, chat games and tags.',
  icon: 'gift',
  category: 'features',
  order: 1,
  updated: '2026-11-25',
  keywords: [
    '/dquests',
    '/quests',
    '/rewards',
    '/dailyrewards',
    '/playtime',
    '/levels',
    'daily',
    'weekly',
    'monthly',
    'playtime',
    'tokens',
    'points',
    'kit',
    'starter kit',
    'free',
  ],
  related: ['afk-pool', 'chat-games', 'tags', 'economy', 'crates'],
  body: [
    { type: 'p', text: 'KasadyaCraft pays you for showing up. Here is everything you can claim, from the quickest to the longest grind.' },
    { type: 'h2', text: 'Starter kit' },
    {
      type: 'p',
      text: 'On your very first join you get the starter kit: wooden tools with a few enchants, leather armour and 16 bread. You can claim it again once a day with `/kit starter`.',
    },
    { type: 'h2', text: 'Daily, weekly and monthly rewards' },
    { type: 'p', text: 'Type `/rewards` or click the Daily Rewards NPC at spawn.' },
    {
      type: 'table',
      head: ['Reward', 'Every', 'You get'],
      rows: [
        ['Daily', '24 hours', '1 Resource crate key, 8 iron ingots, 2 gold ingots'],
        ['Weekly', '7 days', '50 points, 2 diamonds, 1 emerald'],
        ['Monthly', '30 days', '100 points, 16 diamonds, 64 iron ingots, 32 gold ingots'],
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Make room in your inventory first. The menu will not hand out rewards into a full inventory.',
    },
    { type: 'h2', text: 'Daily quests' },
    {
      type: 'p',
      text: '`/dquests` (or `/quests`) shows your **3 quests** for the day. Right now they are all Nether hunts, picked from this list:',
    },
    {
      type: 'table',
      head: ['Quest', 'Task', 'Reward'],
      rows: [
        ['Danger..', 'Kill 20 zombified piglins', '2,000 XP'],
        ['Pigs can fight', 'Kill 10 piglin brutes', '2,000 XP'],
        ['Hot Rod', 'Kill 20 blazes', '2,000 XP'],
        ['Hot Slime Collector', 'Kill 15 magma cubes', '2,000 XP'],
      ],
    },
    {
      type: 'p',
      text: 'Finish all three in one day and you also get **$1,500 and a diamond block**. New quests come once a day.',
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Piglin brutes only spawn when a bastion is generated and never come back. Got that quest? Hop to a fresh part of the Nether with `/nethertp` and find a bastion nobody has cleared.',
    },
    { type: 'h2', text: 'Playtime levels' },
    {
      type: 'p',
      text: '`/levels` (or the Playtime NPC at spawn) tracks your total time online. Each level unlocks once and you claim it in the menu. XP means experience points, not levels.',
    },
    {
      type: 'table',
      caption: 'Playtime levels',
      head: ['Level', 'Total playtime', 'Reward'],
      rows: [
        ['I', '1 hour', '100 XP'],
        ['II', '3 hours', '$500'],
        ['III', '6 hours', '$1,000'],
        ['IV', '10 hours', '$1,500'],
        ['V', '15 hours', '100 Tokens and 500 points'],
        ['VI', '24 hours', '1,000 XP'],
        ['VII', '30 hours', '$4,500'],
        ['VIII', '38 hours', '$5,500'],
        ['IX', '2 days', '$7,000'],
        ['X', '3 days', '$11,000'],
        ['XI', '4 days', '100 Tokens'],
        ['XII', '5 days', '150 Tokens'],
        ['XIII', '6 days', '5,000 XP'],
        ['XIV', '7 days', '10,000 XP'],
        ['XV', '8 days', '$29,000'],
        ['XVI', '9 days', '$32,000'],
        ['XVII', '10 days', '500 Tokens'],
        ['XVIII', '11 days', '7,500 XP'],
        ['XIX', '12 days', '$43,000'],
        ['XX', '2 weeks', '$50,000'],
        ['XXI', '3 weeks', '$75,000'],
        ['XXII', '4 weeks', '$100,000'],
        ['XXIII', '5 weeks', '$125,000'],
        ['XXIV', '6 weeks', '$150,000'],
        ['XXV', '7 weeks', '$175,000'],
        ['XXVI', '8 weeks', '$200,000'],
        ['XXVII', '9 weeks', '$225,000'],
        ['XXVIII', '10 weeks', '$250,000'],
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'Tokens only come from these levels: 850 in total from levels V, XI, XII and XVII. Spend them in `/purchase`. A few level icons in game also mention temporary flight. That extra is not active right now, so you get the money only.',
    },
    { type: 'h2', text: 'AFK pool' },
    {
      type: 'p',
      text: 'Stand in the pool at `/warp afk` and get **10 points every 20 minutes**. Details on [AFK pool](/wiki/afk-pool).',
    },
    { type: 'h2', text: 'Chat games' },
    {
      type: 'p',
      text: 'Every 5 to 10 minutes a quick game pops up in chat. First right answer wins cash. Details on [Chat games](/wiki/chat-games).',
    },
    { type: 'h2', text: 'Tags and cosmetics' },
    {
      type: 'p',
      text: 'Spend your earnings on looks: chat tags for money in `/tags`, chat colours for points in `/cosmetics`. See [Chat tags](/wiki/tags).',
    },
  ],
}
