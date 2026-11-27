import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-27):
 * - plugins/ChatGames/config.yml: min-players 3, game-duration 120, game-delay 300-600, use-whitelist false (all worlds),
 *   games reaction-test (40 words) / unscramble (50 words) / maths (easy 1-30, hard 2-12) / trivia (48 questions), every win:
 *   eco give 250, points give 5, xp add 100 points (no chance bonuses since 2026-11-27)
 * - win and start sounds on (game-sound ENTITY_EXPERIENCE_ORB_PICKUP, win-sound ENTITY_PLAYER_LEVELUP)
 * - LuckPerms default: chatgames.user.*
 */
export const CHAT_GAME_PRIZE = { money: 250, points: 5, xp: 100 } as const

export const chatGames: WikiPage = {
  slug: 'chat-games',
  title: 'Chat games',
  summary: `Quick games that pop up in chat every 5 to 10 minutes. The first correct answer wins $${CHAT_GAME_PRIZE.money}, ${CHAT_GAME_PRIZE.points} points and ${CHAT_GAME_PRIZE.xp} XP.`,
  icon: 'chat',
  category: 'features',
  order: 4,
  updated: '2026-11-27',
  keywords: ['chat games', 'chatgames', 'trivia', 'unscramble', 'maths', 'math', 'reaction', 'quiz', 'money', 'points', 'xp'],
  related: ['chat', 'rewards', 'economy', 'rules'],
  body: [
    {
      type: 'p',
      text: 'Every 5 to 10 minutes a game pops up in chat with a sound. Be the first to type the right answer and you win. Each game stays open for 2 minutes.',
    },
    { type: 'h2', text: 'Prize' },
    {
      type: 'p',
      text: `Every win pays the same: **$${CHAT_GAME_PRIZE.money}**, **${CHAT_GAME_PRIZE.points} points** and **${CHAT_GAME_PRIZE.xp} XP**. The win message shows exactly that, and there is no random bonus.`,
    },
    { type: 'h2', text: 'The games' },
    {
      type: 'table',
      head: ['Game', 'What you do'],
      rows: [
        ['Reaction', 'Type the word shown as fast as you can. Words like creeper, elytra, sniffer, gloomhold or draedon.'],
        ['Unscramble', 'Put the mixed-up letters back into a Minecraft word (crossbow, deepslate, grindstone...).'],
        ['Maths', 'Solve the sum. Easy ones use numbers up to 30, hard ones multiply numbers up to 12.'],
        ['Trivia', '48 questions: Minecraft facts, KasadyaCraft questions (dungeons, commands, the vote party), riddles and general knowledge.'],
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Trivia answers',
      text: 'Type just the answer in lower case, like `creeper` or `12`. Common spellings count too (for example "dragon" for the Ender Dragon).',
    },
    { type: 'h2', text: 'Good to know' },
    {
      type: 'list',
      items: [
        'Games only start when at least **3 players** are online.',
        'They run in every world: spawn, plots, the Wild, the Nether and the End.',
        'Type the answer once. Spamming guesses still counts as spam under [rule 1.1](/wiki/rules), and the chat filter blocks repeated messages anyway.',
      ],
    },
  ],
}
