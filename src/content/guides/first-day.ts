import type { Guide } from '@/lib/content'
import { site } from '@/lib/site'
import { CHECKED, PLAYTIME_LEVELS, PLOT, RTP_COOLDOWN_SECONDS, SHOP_PRICES, STARTING_BALANCE, WILD_SIZE, money } from './facts'

/*
 * Sources: Essentials config.yml (newbies.kit starter, kit-auto-equip, sethome-multiple member 1,
 * starting-balance), kits.yml (starter delay 86400), WorldGuard spawn region (pvp deny), spawn world
 * keepInventory true, Citizens NPCs at spawn, DeluxeMenus Guide/Warp/Rtp/Playtime menus, Skript rtp.sk,
 * PlotSquared (free claims, 51x51), DailyRewards config.yml, ODailyQuests quests/*.yml.
 */
const price = (item: string) => money(SHOP_PRICES.find((p) => p.item === item)?.sell ?? 0)
const level = (n: string) => PLAYTIME_LEVELS.find((l) => l.level === n)!

export const firstDay: Guide = {
  slug: 'first-day',
  title: 'Your first 30 minutes',
  summary: 'Starter kit, a free plot, a home, a trip to the wild and your first money. A simple plan for your first half hour.',
  icon: 'clock',
  stage: 'first-day',
  order: 1,
  minutes: 5,
  updated: CHECKED,
  next: 'safety-and-rules',
  related: ['plots', 'commands', 'rewards'],
  body: [
    {
      type: 'p',
      text: 'You just arrived at the Survival spawn. Here is a plan that works for most new players. Go at your own pace, nobody is timing you.',
    },
    { type: 'h2', text: 'Check your starter kit' },
    {
      type: 'p',
      text: '**Minute 0.** You already have it. On your first join you get wooden tools with a few enchantments, leather armour (it goes on by itself) and 16 bread. You can claim it again every 24 hours with `/kit starter`.',
    },
    { type: 'h2', text: 'Look around spawn' },
    {
      type: 'p',
      text: '**Minute 2.** Spawn is safe: no PvP, and you keep your items if you die here. The NPCs open the menus you will use most: the shop, warps, daily quests, daily rewards, playtime levels and the in-game guide.',
    },
    {
      type: 'commands',
      items: [
        { command: '/menu', description: 'The in-game guide. `/guide` and `/help` open it too.' },
        { command: '/warps', description: 'Every warp in one menu: spawn, crates, shop, mall, AFK room, dungeon.' },
        { command: '/spawn', description: 'Back to spawn from anywhere in Survival.' },
      ],
    },
    { type: 'h2', text: 'Claim your free plot' },
    {
      type: 'p',
      text: `**Minute 5.** Everyone gets one plot for free. It is a ${PLOT.size} by ${PLOT.size} block square of grass that only you, and people you add, can build on. Your base belongs here.`,
    },
    {
      type: 'steps',
      items: [
        { title: 'Claim it', text: 'Type this anywhere in Survival. The server finds the next free plot and takes you there.', command: '/plot auto' },
        { title: 'Come back any time', text: 'Teleports you straight to your plot.', command: '/plot home' },
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Friends, extra plots and more: [Plots and building](/guides/claim-a-plot).',
    },
    { type: 'h2', text: 'Set a home' },
    {
      type: 'p',
      text: '**Minute 8.** You get one home point. Stand where you want it and type `/sethome`. Later, `/home` brings you back. Since `/plot home` already covers your plot, many players put their home next to their mine in the wild.',
    },
    { type: 'h2', text: 'Go to the wild' },
    {
      type: 'p',
      text: `**Minute 10.** The wild is a normal survival world, ${WILD_SIZE} blocks. Type \`/rtp\` and pick Wild, Nether or The End. You land somewhere random and safe. After a jump you wait ${RTP_COOLDOWN_SECONDS} seconds before the next one.`,
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'Before you go',
      text: 'The wild has no protection. PvP is on and you drop your items when you die. Read [Staying safe](/guides/safety-and-rules) before you carry diamonds around.',
    },
    { type: 'h2', text: 'Gather and sell' },
    {
      type: 'p',
      text: `**Minute 15.** Chop logs, mine stone, look for iron. Then head back with \`/spawn\` and open \`/shop\`. The shop pays for raw materials: an oak log sells for ${price('Oak Log')}, an iron ingot for ${price('Iron Ingot')} and a diamond for ${price('Diamond')}.`,
    },
    {
      type: 'callout',
      tone: 'info',
      text: `You start with **${money(STARTING_BALANCE)}**. Check your balance any time with \`/bal\`. More ways to earn: [Making money](/guides/making-money).`,
    },
    { type: 'h2', text: 'Claim the freebies' },
    { type: 'p', text: '**Minute 25.** Three menus hand out free stuff:' },
    {
      type: 'list',
      items: [
        '`/dquests`: your daily quests, in easy, medium and hard. Each one pays XP or money.',
        '`/rewards`: a daily reward (a Resource crate key, 8 iron and 2 gold), plus weekly and monthly ones.',
        `\`/playtime\`: playtime levels. Level I unlocks after ${level('I').after} and level II pays ${level('II').reward} after ${level('II').after}.`,
      ],
    },
    { type: 'h2', text: 'Say hi' },
    {
      type: 'p',
      text: `**Minute 30.** Chat is where the server lives. Say hello, ask questions, and join our [Discord](${site.discord}) for events and help. Ingat, and have fun!`,
    },
  ],
}
