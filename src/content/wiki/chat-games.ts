import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/ChatGames/config.yml: min-players 3, game-duration 120, game-delay 300-600, world-whitelist
 *   [world, world_the_end, world_nether], games reaction-test / unscramble / maths / trivia enabled,
 *   rewards eco 20 (+50% x 25, 5% x 250); hard maths 25 per the economy balancer log
 * - LuckPerms default: chatgames.user.*
 */
export const chatGames: WikiPage = {
  slug: 'chat-games',
  title: 'Chat games',
  summary: 'Quick games that pop up in chat every 5 to 10 minutes. The first correct answer wins cash.',
  icon: 'chat',
  category: 'features',
  order: 4,
  updated: '2026-11-25',
  keywords: ['chat games', 'chatgames', 'trivia', 'unscramble', 'maths', 'math', 'reaction', 'quiz', 'money'],
  related: ['rewards', 'economy', 'rules'],
  body: [
    {
      type: 'p',
      text: 'Every 5 to 10 minutes a game pops up in chat. Be the first to type the right answer and you win money. Each game stays open for 2 minutes.',
    },
    {
      type: 'table',
      head: ['Game', 'What you do'],
      rows: [
        ['Reaction', 'Type the word shown, as fast as you can.'],
        ['Unscramble', 'Put the mixed-up letters back into a word.'],
        ['Maths', 'Solve the sum.'],
        ['Trivia', 'Answer the question.'],
      ],
    },
    { type: 'h2', text: 'Prizes' },
    {
      type: 'list',
      items: [
        '**$20** for every win, **$25** for a hard maths question.',
        'A 50% chance of a **$25** bonus on top.',
        'A 5% chance of a **$250** bonus.',
      ],
    },
    { type: 'h2', text: 'Good to know' },
    {
      type: 'list',
      items: [
        'Games only start when at least **3 players** are online.',
        'Games run in the Wild, the Nether and the End. At spawn, on your plot or in the Mall you will not see them.',
        'Type just the answer, once. Spamming guesses still counts as spam under [rule 1.1](/wiki/rules).',
      ],
    },
  ],
}
