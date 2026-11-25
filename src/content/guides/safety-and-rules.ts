import type { Guide } from '@/lib/content'
import { site } from '@/lib/site'
import { CHECKED, COMBAT_TAG_SECONDS } from './facts'

/*
 * Sources: Survival DeluxeMenus gui_menus/BASIC/Rules.yml (rules 1.0-3.4, opened by /rules),
 * WorldGuard regions (spawn + shoppingmall: pvp deny, build deny outside rented stalls),
 * level.dat gamerules (spawn + shoppingmall keepInventory true; world + PlotWorld false; pvp true),
 * no land-claim plugin installed for the wild, CombatLogX config.yml (10 s tag, killed on quit),
 * Hub KasadyaLobby (all damage cancelled), LuckPerms default group (essentials.helpop, essentials.ignore,
 * essentials.pay), AxTrade (/trade), FreeCoinFlip (coinflip NPC at spawn).
 */
export const safetyAndRules: Guide = {
  slug: 'safety-and-rules',
  title: 'Staying safe and the rules',
  summary: 'Where you can get hurt, what is protected, how combat logging works, and the server rules in plain words.',
  icon: 'shield',
  stage: 'first-day',
  order: 2,
  minutes: 5,
  updated: CHECKED,
  next: 'making-money',
  related: ['rules', 'faq', 'plots'],
  body: [
    {
      type: 'p',
      text: 'KasadyaCraft is a friendly place and we want to keep it that way. This page covers how to protect your stuff and the rules everyone plays by.',
    },
    { type: 'h2', text: 'Safe zones and danger zones' },
    {
      type: 'table',
      caption: 'What happens where',
      head: ['Place', 'Keep items when you die?', 'Who can build'],
      rows: [
        ['Hub', 'Yes (and nothing can hurt you)', 'Nobody'],
        ['Survival spawn and the PvP field', 'Yes', 'Nobody'],
        ['Duel pit', 'No, you drop everything', 'Nobody'],
        ['Shopping Mall', 'Yes', 'Each renter, inside their own stall'],
        ['Your plot', 'No', 'You and the people you add'],
        ['The wild, nether and end', 'No, you drop everything', 'Anyone. Nothing there is protected'],
      ],
    },
    {
      type: 'p',
      text: 'PvP is off at the hub, at spawn and in the mall. In the wild, the nether and the end it is on, so other players can attack you there. Two places at spawn are made for fighting: `/warp pvp`, where you keep your items, and `/warp duel`, a pit with no way out where the loser drops everything.',
    },
    {
      type: 'callout',
      tone: 'warn',
      title: 'The wild is not protected',
      text: 'There are no land claims in the wild. Anything you build or leave there can be broken or taken by other players. Keep your valuables on your plot.',
    },
    { type: 'h2', text: 'Combat logging' },
    {
      type: 'p',
      text: `When you hit another player or get hit by one, you are in combat for ${COMBAT_TAG_SECONDS} seconds. Log out during that time and you die on the spot. Until the timer runs out you also cannot use commands (messages still work), fly, use an elytra or run into a safe zone.`,
    },
    { type: 'h2', text: 'Trading safely' },
    {
      type: 'list',
      items: [
        'Use `/trade` to swap items. Both of you see the full deal before it goes through.',
        'Use `/pay <name> <amount>` to send money. Check the name twice.',
        'Coinflip at spawn is a gamble. Only bet what you are happy to lose.',
        'Staff will never ask for your password or account login. Anyone who does is not staff.',
      ],
    },
    { type: 'h2', text: 'Getting help' },
    {
      type: 'commands',
      items: [
        { command: '/helpop <message>', description: 'Sends your message to the staff who are online.' },
        { command: '/ignore <name>', description: 'Hides chat from someone who is bothering you.' },
        { command: '/rules', description: 'Opens the full rules in game.' },
      ],
    },
    {
      type: 'p',
      text: `You can also report problems in our [Discord](${site.discord}). Found a bug or a glitch? Report it there and keep it to yourself.`,
    },
    { type: 'h2', text: 'The rules' },
    {
      type: 'p',
      text: 'This is the short version. The full list is in game under `/rules`. Breaking a rule gets you punished, up to a ban. Trying to dodge a punishment makes it worse.',
    },
    { type: 'h3', text: 'Chat' },
    {
      type: 'list',
      items: [
        'Do not harass other players or staff. That counts in every chat, including `/msg`.',
        'No spam: no repeated messages, no flooding, no character spam, no all caps.',
        'Keep chat SFW. No adult content.',
        'No offensive topics or hate speech. That includes politics, religion, violence, self-harm, terrorism, war and any kind of slur.',
      ],
    },
    { type: 'h3', text: 'Everywhere' },
    {
      type: 'list',
      items: [
        'No NSFW or offensive builds, signs or books.',
        'No NSFW skins.',
        'Do not pretend to be staff, by skin, name or chat. No mini-modding (acting like a moderator when you are not one).',
        'Do not abuse glitches or bugs. Report them on Discord and do not share them.',
        'No lag machines, and no farms or builds that lag the server.',
        'Do not hunt for loopholes. If something is not in the rules, that does not make it allowed.',
      ],
    },
    { type: 'h3', text: 'The serious ones' },
    {
      type: 'list',
      items: [
        'Dodging a punishment makes it heavier.',
        'Hacked or modified clients that give you an advantage mean a ban.',
        'A chargeback on a store purchase means an instant, permanent ban.',
        'Never share anyone’s personal info (real name, address, socials) without their permission. Doxxing is an instant ban.',
      ],
    },
    {
      type: 'callout',
      tone: 'lore',
      text: 'Play fair, be kind, and everybody has a better time. Salamat!',
    },
  ],
}
