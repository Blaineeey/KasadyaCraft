import type { WikiPage } from '@/lib/content'
import { HEXTECH_TAG, LOCKSMITH } from './locksmith'

/*
 * Sources (read-only, 2026-11-27):
 * - plugins/AlonsoTags/tags.yml: 14 tags. 13 with Permission none, Price 10000 / 30000 / 100000 (Vault money):
 *   blaze, dusk, ocean, dawn, ember 10000; venom, frostbite, shadow, phantom 30000; inferno, galaxy, eclipse, void 100000.
 *   Plus `hextech` (Permission kasadya.tag.hextech, Price 0 = not for sale), unlocked only at the Lab of Horrors
 *   Locksmith (3 Hextech Crystals, or deciphering a Fabled book). See ./locksmith.ts. The tags are picture tags
 *   (resource pack glyphs), shown by TAB in the tab list and above the head, and in chat.
 * - DeluxeMenus CHATCOLOR/Minecraft.yml (/chatcolor): 16 colours, 250 or 500 PlayerPoints each (white too); buying gives
 *   chatcolor.color.<code>, which LPC Pro's /color menu reads, "select" opens /color.
 * - DeluxeMenus COSMETICS/Glow.yml (/glow): 16 colours 500 or 750 points, Flashing 2000, Rainbow 3000.
 * Tag names are written in plain caps here.
 */
const tag = (name: string, price: string, rarity: 'uncommon' | 'rare' | 'legendary') => ({
  label: `[${name}] tag`,
  icon: 'tag' as const,
  rarity,
  lines: [{ text: price, color: 'gold' as const }, 'Chat tag. Cosmetic only.'],
})

/** The one tag money cannot buy. */
const hextechTag = {
  label: `${HEXTECH_TAG} tag`,
  icon: 'tag' as const,
  rarity: 'epic' as const,
  lines: [
    { text: 'Dungeon only', color: 'aqua' as const },
    `${LOCKSMITH.crystalsForTag} Hextech Crystals or a`,
    'Fabled book at the Locksmith.',
    'Chat tag. Cosmetic only.',
  ],
}

export const tags: WikiPage = {
  slug: 'tags',
  title: 'Chat tags and cosmetics',
  summary: `13 picture tags you buy once with in-game money in /tags, 1 dungeon-only ${HEXTECH_TAG} tag, and chat colours and glow for points.`,
  icon: 'tag',
  category: 'features',
  order: 2,
  updated: '2026-11-27',
  keywords: [
    '/tags',
    'tag',
    'tags',
    'cosmetic',
    'cosmetics',
    'prefix',
    'alonsotags',
    'hextech',
    'chat colour',
    'chat color',
    '/chatcolor',
    'glow',
    '/fancyglow',
    '/color',
    '/glowshop',
  ],
  related: ['economy', 'rewards', 'afk-pool', 'dungeon-items'],
  body: [
    {
      type: 'p',
      text: `A tag is a small picture next to your name, in chat, in the tab list and above your head. There are 13 tags for money and 1 dungeon-only ${HEXTECH_TAG} tag. You buy a money tag once with **in-game money**, not Tokens, in \`/tags\`, then choose which one to wear. Tags are cosmetic only: no stats, no perks.`,
    },
    {
      type: 'slots',
      title: 'Tags',
      label: 'All chat tags',
      columns: 5,
      items: [
        tag('BLAZE', '$10,000', 'uncommon'),
        tag('DUSK', '$10,000', 'uncommon'),
        tag('OCEAN', '$10,000', 'uncommon'),
        tag('DAWN', '$10,000', 'uncommon'),
        tag('EMBER', '$10,000', 'uncommon'),
        tag('VENOM', '$30,000', 'rare'),
        tag('FROSTBITE', '$30,000', 'rare'),
        tag('SHADOW', '$30,000', 'rare'),
        tag('PHANTOM', '$30,000', 'rare'),
        tag('INFERNO', '$100,000', 'legendary'),
        tag('GALAXY', '$100,000', 'legendary'),
        tag('ECLIPSE', '$100,000', 'legendary'),
        tag('VOID', '$100,000', 'legendary'),
        hextechTag,
      ],
    },
    {
      type: 'table',
      caption: 'Tag prices',
      head: ['Price', 'Tags'],
      rows: [
        ['$10,000', '[BLAZE], [DUSK], [OCEAN], [DAWN], [EMBER]'],
        ['$30,000', '[VENOM], [FROSTBITE], [SHADOW], [PHANTOM]'],
        ['$100,000', '[INFERNO], [GALAXY], [ECLIPSE], [VOID]'],
        ['Not for sale', `${HEXTECH_TAG}: dungeon only, see below`],
      ],
    },
    {
      type: 'steps',
      items: [
        { title: 'Save up', text: 'Tags cost in-game money. See [Money and the shop](/wiki/economy) for ways to earn.' },
        { title: 'Open the menu', text: 'Type the command, or go through `/cosmetics` and pick Tags.', command: '/tags' },
        { title: 'Buy and wear', text: 'Click a tag to buy it. Once you own it, select it to wear it. Swap any time.' },
      ],
    },
    {
      type: 'p',
      text: 'Tags are a money sink on purpose. Money spent on them leaves the economy, which keeps prices healthy for everyone.',
    },
    { type: 'h2', text: `The ${HEXTECH_TAG} tag` },
    {
      type: 'p',
      text: `This one you earn in the [Lab of Horrors](/wiki/dungeon). Trade ${LOCKSMITH.crystalsForTag} Hextech Crystals at \`/locksmith\`, or decipher a Fabled book there. It shows up in \`/tags\` straight away, ready to wear. Money cannot buy it. Details on [Lab of Horrors items](/wiki/dungeon-items).`,
    },
    { type: 'h2', text: 'Chat colours' },
    {
      type: 'p',
      text: 'Write in red, gold, aqua and more. Type `/chatcolor` (or open `/cosmetics` and pick Chat Color) and buy a colour with points: the darker colours (dark red, dark green, dark aqua, dark blue, purple, white, gray, dark gray, black) cost **✪250 points**, the bright ones (red, gold, yellow, green, aqua, blue, light purple) **✪500 points**. A colour is yours for good. Click a colour you own, or type `/color`, to choose which one you write in.',
    },
    { type: 'h2', text: 'Glow' },
    {
      type: 'p',
      text: 'A coloured glow outline around your character, bought once with points in `/glowshop` (or `/cosmetics`, Glow). Dark colours cost **✪500 points**, bright ones **✪750**, the Flashing glow **✪2,000** and the Rainbow glow **✪3,000**.',
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Need points for chat colours and glow? The [AFK pool](/wiki/afk-pool) gives 10 every 20 minutes, every [chat game](/wiki/chat-games) win gives 5, weekly `/rewards` give 50 and Lab of Horrors clears pay up to 60.',
    },
  ],
}
