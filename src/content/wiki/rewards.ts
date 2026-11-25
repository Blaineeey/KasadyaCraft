import {
  DAILY_QUEST_BONUS,
  DAILY_QUESTS,
  DAILY_REWARDS,
  FACTS_CHECKED,
  PLAYTIME_KEY_LEVELS,
  PLAYTIME_LADDER,
  PLAYTIME_TOKEN_LEVELS,
  PLAYTIME_TOKENS,
  TOKEN_SOURCES,
  count,
  dailyRewardText,
  joinAnd,
  playtimeReward,
  roman,
} from '@/content/facts'
import type { WikiPage } from '@/lib/content'

/*
 * Every table below renders from src/content/facts.ts (one list per fact, shared with the guides).
 * Sources (read-only, 2026-11-25):
 * - Essentials kits.yml starter (delay 86400) + config newbies.kit 'starter'
 * - plugins/DailyRewards/config.yml: daily 24 h, weekly 168 h, monthly 720 h (items + `tokens give` 10/50/150),
 *   check-for-full-inventory true
 * - plugins/ODailyQuests: global mode, quests_per_category.global 3, renew_interval 1d, quests/global.yml (4 kill quests,
 *   EXP_POINTS 2000 each, quest 2 = HOGLIN), global_reward eco 1500 + diamond_block + tokens give 25
 * - DeluxeMenus BASIC/Playtime.yml LEVEL_N_CLAIM click_commands (money scaled x0.3 on L15, L16, L19-L28; TempFly
 *   swapped for crate keys on L3, L8, L27)
 * - Skript commanddixes.sk: /rewards -> dailyrewards, /quests -> dailyquests
 */
const keyLevels = joinAnd(PLAYTIME_KEY_LEVELS.map((l) => `level ${roman(l.level)} (${l.key})`))
const tokenLevels = joinAnd(PLAYTIME_TOKEN_LEVELS.map((l) => roman(l.level)))
export const rewards: WikiPage = {
  slug: 'rewards',
  title: 'Quests and rewards',
  summary: 'Free stuff for playing: the starter kit, daily quests, daily, weekly and monthly rewards, playtime levels, the AFK pool, chat games and tags.',
  icon: 'gift',
  category: 'features',
  order: 1,
  updated: FACTS_CHECKED,
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
      rows: DAILY_REWARDS.map((r) => [r.name, r.every, dailyRewardText(r)]),
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Make room in your inventory first. The menu will not hand out rewards into a full inventory.',
    },
    { type: 'h2', text: 'Daily quests' },
    {
      type: 'p',
      text: `\`/dquests\` (or \`/quests\`) shows your **${DAILY_QUESTS.perDay} quests** for the day. Everyone gets the same ones, and right now they are all Nether hunts, picked from this list:`,
    },
    {
      type: 'table',
      head: ['Quest', 'Task', 'Reward'],
      rows: DAILY_QUESTS.pool.map((q) => [q.name, q.task, `${count(DAILY_QUESTS.xpEach)} XP`]),
    },
    {
      type: 'p',
      text: `Each quest pays XP only. Finish all ${DAILY_QUESTS.perDay} in one day and you also get **${DAILY_QUEST_BONUS}**. New quests come once a day.`,
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
      rows: PLAYTIME_LADDER.map((l) => [roman(l.level), l.after, playtimeReward(l)]),
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Crate keys on the ladder',
      text: `Three levels add a crate key on top of the money: ${keyLevels}. Open them at \`/warp crates\`. See [Crates and keys](/wiki/crates).`,
    },
    {
      type: 'p',
      text: `Levels ${tokenLevels} pay **${count(PLAYTIME_TOKENS)} Tokens** in total. You also earn them from \`/rewards\` (${TOKEN_SOURCES.daily} a day, ${TOKEN_SOURCES.weekly} a week, ${TOKEN_SOURCES.monthly} a month) and the daily quest bonus (${TOKEN_SOURCES.quests} a day). Spend them on ranks and keys in \`/purchase\`.`,
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
