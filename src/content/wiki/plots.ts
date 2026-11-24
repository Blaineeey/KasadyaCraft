import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/PlotSquared/config/worlds.yml: PlotWorld, plot size 51, road width 17, height 120, min -63 / max 320,
 *   biome forest, economy.use false, natural_mob_spawning false, mob_spawner_spawning false,
 *   event.spawn.egg false / breeding false / custom true
 * - plugins/PlotSquared/config/settings.yml: plot-expiry false
 * - LuckPerms default: plots.plot.1, plots.auto/claim/home/trust/untrust/kick/visit.other, plots.set.home/biome,
 *   plots.permpack.basic (add, remove, deny, delete, clear, merge, info, list...)
 * - QuickShop config: shops allowed in PlotWorld (not blacklisted)
 */
export const plots: WikiPage = {
  slug: 'plots',
  title: 'Plots',
  summary: 'Your protected base. Everyone gets one free 51 by 51 plot with /plot auto.',
  icon: 'plot',
  category: 'basics',
  order: 3,
  updated: '2026-11-25',
  keywords: ['/plot auto', '/plot home', '/plot add', '/plot trust', '/plot visit', 'plotsquared', 'claim', 'base', 'land', 'protect', 'build'],
  related: ['player-shops', 'world-and-warps', 'spawners', 'ranks'],
  body: [
    {
      type: 'p',
      text: 'A plot is your safe base. Nobody can build on it, open your chests or break your stuff unless you add them. Plots are free.',
    },
    {
      type: 'steps',
      items: [
        { title: 'Claim it', text: 'You get the nearest free plot and teleport straight to it.', command: '/plot auto' },
        { title: 'Set your arrival spot', text: 'Stand where you want to arrive and set it as the plot home.', command: '/plot set home' },
        { title: 'Come back any time', text: 'This takes you to your plot from anywhere on Survival.', command: '/plot home' },
      ],
    },
    { type: 'h2', text: 'Plot facts' },
    {
      type: 'table',
      head: ['What', 'Details'],
      rows: [
        ['Size', '51 x 51 blocks. Roads between plots are 17 blocks wide.'],
        ['Height', 'The ground is at Y 120. You can build up to Y 320 and dig down to Y -63.'],
        ['Price', 'Free.'],
        ['How many', '1 for everyone. Ranks add more, see [Ranks](/wiki/ranks).'],
        ['Expiry', 'Plots do not expire right now.'],
        ['Biome', 'Forest. Change it with `/plot set biome <biome>`.'],
      ],
    },
    { type: 'h2', text: 'Friends and helpers' },
    {
      type: 'commands',
      items: [
        { command: '/plot trust <player>', description: 'They can build any time, even while you are offline.' },
        { command: '/plot add <player>', description: 'They can build only while you are online.' },
        { command: '/plot remove <player>', description: 'Take away trust or member access.' },
        { command: '/plot deny <player>', description: 'Ban a player from entering your plot.' },
        { command: '/plot kick <player>', description: 'Kick someone off your plot right now.' },
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Only trust people you really know. A trusted player can break and take anything on your plot, and staff cannot always undo it.',
    },
    { type: 'h2', text: 'More plot commands' },
    {
      type: 'commands',
      items: [
        { command: '/plot visit <player>', description: "Visit someone's plot." },
        { command: '/plot info', description: 'Who owns the plot you are standing on, and who is added.' },
        { command: '/plot list mine', description: 'List your plots.' },
        { command: '/plot merge', description: 'Join your plot with a neighbouring plot you also own.' },
        { command: '/plot set biome <biome>', description: 'Change the biome of your plot.' },
      ],
    },
    { type: 'h2', text: 'What works on a plot' },
    {
      type: 'table',
      head: ['Thing', 'On your plot?'],
      rows: [
        ['Building, crops, redstone', 'Yes'],
        ['Chest shops', 'Yes. See [Player shops](/wiki/player-shops).'],
        ['Iron golems and snow golems you build', 'Yes'],
        ['Natural mob spawning', 'No'],
        ['Animal and villager breeding', 'No'],
        ['Spawn eggs', 'No'],
        ['Mobs from spawners', 'No. Spawners only spawn mobs in the Wild, Nether and End.'],
        ['Keep inventory', 'Off'],
      ],
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Mob farms go in the Wild',
      text: 'The plot world blocks mob spawning, breeding and spawner mobs. Plots are for builds, crops and shops. Put mob farms, breeders and spawner grinders in the Wild.',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Careful with these two',
      text: '`/plot clear` and `/plot delete` wipe everything on your plot. There is no undo.',
    },
  ],
}
