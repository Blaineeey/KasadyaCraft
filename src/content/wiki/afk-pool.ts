import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/ToastedAFK/config.yml: region in world "spawn", default_afk_time 1200 s, commands
 *   `playerpoints:points give {player} 10`, title_screen loading bar, denied_commands [/shop]
 * - Essentials warps/afk.yml (spawn world); config auto-afk 300, auto-afk-kick -1
 * - Points only buy chat colours (economy balancer: nothing converts points to money or items)
 */
export const afkPool: WikiPage = {
  slug: 'afk-pool',
  title: 'AFK pool',
  summary: 'Stand in the AFK pool at /warp afk and earn 10 points every 20 minutes, even while you sleep.',
  icon: 'pool',
  category: 'features',
  order: 3,
  updated: '2026-11-25',
  keywords: ['/warp afk', 'afk', 'away', 'points', 'pool', 'toastedafk', 'idle', 'overnight'],
  related: ['rewards', 'tags', 'economy'],
  body: [
    {
      type: 'p',
      text: 'Off to school, work or bed? Park yourself in the AFK pool and collect points while you are away.',
    },
    {
      type: 'steps',
      items: [
        { title: 'Go to the pool', text: 'It is at spawn.', command: '/warp afk' },
        { title: 'Stay inside the area', text: 'A loading bar on your screen shows how far along you are.' },
        { title: 'Collect', text: 'Every **20 minutes** inside the area you get **10 points**, automatically.' },
      ],
    },
    {
      type: 'table',
      head: ['Time in the pool', 'Points'],
      rows: [
        ['20 minutes', '10'],
        ['1 hour', '30'],
        ['8 hours', '240'],
      ],
    },
    { type: 'h2', text: 'Good to know' },
    {
      type: 'list',
      items: [
        'Points buy chat colours in `/cosmetics` (✪25 each). They cannot be turned into money or items.',
        'You are never kicked for being AFK, so the pool is safe overnight.',
        'Stay inside the area. Walk out and you stop earning until you come back.',
        '`/shop` does not work while you are in the pool.',
        'The pool is at spawn, which is protected with keep inventory on.',
      ],
    },
  ],
}
