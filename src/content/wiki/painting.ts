import type { WikiPage } from '@/lib/content'

/*
 * Sources (2026-11-25):
 * - plugins/Daub.jar + config.yml: canvas 1 to 3 maps wide, 30 save slots, export to map items, 10 s export cooldown
 * - KasadyaPaint 1.0.0 (/paint menu, gallery, previews): config.yml view 30 s, show 60 s, share cooldown 10 s, not in dungeons
 */
export const painting: WikiPage = {
  slug: 'painting',
  title: 'Painting',
  summary: 'Draw your own pixel art with /paint, hang it on your plot as a map, and show it to your friends.',
  icon: 'map',
  category: 'features',
  order: 8,
  updated: '2026-11-25',
  keywords: ['/paint', 'paint', 'painting', 'draw', 'drawing', 'art', 'pixel art', 'map art', 'gallery', 'easel', 'daub', 'show'],
  related: ['plots', 'tags', 'features'],
  body: [
    {
      type: 'p',
      text: 'Type `/paint` to open the paint menu. Everyone can paint. You do not need a mod or any items.',
    },
    { type: 'h2', text: 'Your first painting' },
    {
      type: 'steps',
      items: [
        { title: 'Find some room', text: 'Face an open space, for example on your plot.' },
        { title: 'Pick a size', text: 'Small is one map, medium is 2 by 2 maps and large is 3 by 3 maps.', command: '/paint' },
        { title: 'Draw', text: 'Hold **right-click** to draw. **Scroll** changes the brush size, **Q** is undo and **F** switches tools.' },
        { title: 'Keep it', text: 'Give it a name. You can keep up to 30 paintings.', command: '/paint save <name>' },
        { title: 'Put the easel away', text: 'If you forget to save, your last painting waits for you as `autosave`.', command: '/paint close' },
      ],
    },
    { type: 'h2', text: 'My Paintings' },
    {
      type: 'p',
      text: '`/paint mine` shows every painting you kept. Click one to:',
    },
    {
      type: 'list',
      items: [
        '**View** it. Only you see it, for 30 seconds.',
        '**Show it to everyone nearby.** It floats in front of you for 60 seconds.',
        '**Send it to a friend.** They get a button in chat and can look at it wherever they are.',
        '**Keep painting** on it.',
        '**Get it as a map** you can hang in item frames on your plot.',
        '**Delete** it. You are asked again first.',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Previews leave nothing behind and nobody can take or break them. They do not work inside the dungeon.',
    },
    { type: 'h2', text: 'Commands' },
    {
      type: 'commands',
      items: [
        { command: '/paint', description: 'The paint menu.' },
        { command: '/paint mine', description: 'Your saved paintings.' },
        { command: '/paint view <name>', description: 'Look at a painting. Only you see it.' },
        { command: '/paint show <name>', description: 'Show a painting to everyone nearby.' },
        { command: '/paint send <name> <friend>', description: 'Let a friend look at a painting.' },
        { command: '/paint save <name>', description: 'Keep the painting on your easel.' },
        { command: '/paint load <name>', description: 'Paint on a saved painting again.' },
        { command: '/paint color #ff0000', description: 'Use any colour.' },
        { command: '/paint export <name>', description: 'Get the painting on your easel as maps.' },
        { command: '/paint stop', description: 'Put a preview away early.' },
      ],
    },
  ],
}
