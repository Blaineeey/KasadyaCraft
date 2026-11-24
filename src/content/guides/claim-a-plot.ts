import type { Guide } from '@/lib/content'
import { CHECKED, PLOT, RANK_LADDER } from './facts'

/*
 * Sources: PlotSquared config/worlds.yml (PlotWorld: size 51, road 17 quartz, grass floor at y 120,
 * economy.use false, natural_mob_spawning false, mob_spawner_spawning false), PlotSquared plugin.yml
 * (plots.permpack.basic: claim, auto, home, trust, add, remove, deny, undeny, kick, merge, clear, delete,
 * set home, set biome), LuckPerms plots.plot.1..6 per rank, Citizens NPC at spawn running "plot home".
 */
export const claimAPlot: Guide = {
  slug: 'claim-a-plot',
  title: 'Plots and building',
  summary: 'Claim your free plot, let friends build, keep trolls out, and get more space with ranks.',
  icon: 'plot',
  stage: 'next-steps',
  order: 1,
  minutes: 4,
  updated: CHECKED,
  next: 'open-a-shop',
  related: ['plots', 'ranks', 'player-shops'],
  body: [
    {
      type: 'p',
      text: 'Your plot is the only land on the server that is protected. Build your base, your farms and your shop here.',
    },
    { type: 'h2', text: 'The basics' },
    {
      type: 'list',
      items: [
        'Every player gets **1 free plot**. Claiming costs nothing.',
        `Each plot is **${PLOT.size} x ${PLOT.size} blocks** with a grass floor. Quartz roads, ${PLOT.road} blocks wide, run between the plots.`,
        'Only you and the people you add can build, break or open things on it.',
        'You can dig down to bedrock and build up to the height limit.',
      ],
    },
    { type: 'h2', text: 'Claim it' },
    {
      type: 'steps',
      items: [
        { title: 'Grab the next free plot', text: 'Run it from anywhere in Survival. You get teleported onto your new plot.', command: '/plot auto' },
        { title: 'Or pick one yourself', text: 'Walk the roads, stand on an empty plot you like and claim that one.', command: '/plot claim' },
        { title: 'Go home any time', text: 'Short version: `/plot h`. There is also an NPC at spawn that takes you home.', command: '/plot home' },
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Stand where you want to arrive and type `/plot set home`. From then on `/plot home` drops you right there.',
    },
    { type: 'h2', text: 'Building with friends' },
    {
      type: 'commands',
      title: 'Who can build',
      items: [
        { command: '/plot trust <name>', description: 'They can build any time, even while you are offline.' },
        { command: '/plot add <name>', description: 'They can build only while you are online.' },
        { command: '/plot remove <name>', description: 'Takes their building rights away again.' },
      ],
    },
    {
      type: 'callout',
      tone: 'warn',
      text: 'Only trust people you really know. A trusted player can break everything on your plot.',
    },
    { type: 'h2', text: 'Keeping people out' },
    {
      type: 'commands',
      items: [
        { command: '/plot kick <name>', description: 'Sends someone off your plot.' },
        { command: '/plot deny <name>', description: 'Bans them from your plot. `/plot undeny <name>` lets them back.' },
      ],
    },
    { type: 'h2', text: 'Visiting and showing off' },
    {
      type: 'commands',
      items: [
        { command: '/plot visit <name>', description: 'Go and see another player’s plot.' },
        { command: '/plot like', description: 'Leave a like on the plot you are standing on.' },
        { command: '/plot set biome cherry_grove', description: 'Change the biome of your plot. Any biome name works.' },
      ],
    },
    { type: 'h2', text: 'More plots with ranks' },
    {
      type: 'table',
      caption: 'Plots per rank',
      head: ['Rank', 'Plots you can own'],
      rows: RANK_LADDER.map((r) => [r.name, String(r.plots)]),
    },
    {
      type: 'p',
      text: 'Own two plots side by side? Stand on one, face the other and type `/plot merge` to join them into one big build area. Ranks are explained in [Ranks and kits](/guides/ranks-and-kits).',
    },
    { type: 'h2', text: 'Good to know' },
    {
      type: 'list',
      items: [
        'Mobs do not spawn on their own on plots, and spawners do not work there. Build mob farms in the wild.',
        'Chest shops work on your plot. See [Open your own shop](/guides/open-a-shop).',
        '`/plot clear` wipes everything on your plot and `/plot delete` gives the plot up. There is no undo for either.',
      ],
    },
  ],
}
