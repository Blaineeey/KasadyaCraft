import type { WikiPage } from '@/lib/content'
import { HEXTECH_TAG, LOCKSMITH } from './locksmith'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/AlonsoTags/tags.yml (08:28): 14 tags. 13 with Permission none, Price 2500 / 7500 / 20000 (Vault money),
 *   plus `hextech` (Permission kasadya.tag.hextech, Price 0 = not for sale), unlocked only at the Lab of Horrors
 *   Locksmith (3 Hextech Crystals, or deciphering a Fabled book). See ./locksmith.ts.
 * - LuckPerms default: alonsotags.tags-menu, chatcolor.change.self, fancyglow.all_colors + fancyglow.command.gui
 * - DeluxeMenus CHATCOLOR/Minecraft.yml: each colour costs 25 PlayerPoints; BASIC/Cosmetics.yml (/cosmetics)
 * Tag names are shown in small caps in game ([ʙʟᴀᴢᴇ]); written in plain caps here.
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
  summary: `13 chat tags you buy once with in-game money in /tags, 1 dungeon-only ${HEXTECH_TAG} tag, chat colours for points and free glow colours.`,
  icon: 'tag',
  category: 'features',
  order: 2,
  updated: '2026-11-25',
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
  ],
  related: ['economy', 'rewards', 'afk-pool', 'dungeon-items'],
  body: [
    {
      type: 'p',
      text: `A tag shows next to your name in chat. There are 13 tags for money and 1 dungeon-only ${HEXTECH_TAG} tag. You buy a money tag once with **in-game money**, not Tokens, in \`/tags\`, then choose which one to wear. Tags are cosmetic only: no stats, no perks.`,
    },
    {
      type: 'slots',
      title: 'Tags',
      label: 'All chat tags',
      columns: 5,
      items: [
        tag('BLAZE', '$2,500', 'uncommon'),
        tag('DUSK', '$2,500', 'uncommon'),
        tag('OCEAN', '$2,500', 'uncommon'),
        tag('DAWN', '$2,500', 'uncommon'),
        tag('EMBER', '$2,500', 'uncommon'),
        tag('POISON', '$7,500', 'rare'),
        tag('ICE', '$7,500', 'rare'),
        tag('SHADOW', '$7,500', 'rare'),
        tag('PHANTOM', '$7,500', 'rare'),
        tag('FIRE', '$20,000', 'legendary'),
        tag('GALAXY', '$20,000', 'legendary'),
        tag('ECLIPSE', '$20,000', 'legendary'),
        tag('VOID', '$20,000', 'legendary'),
        hextechTag,
      ],
    },
    {
      type: 'table',
      caption: 'Tag prices',
      head: ['Price', 'Tags'],
      rows: [
        ['$2,500', '[BLAZE], [DUSK], [OCEAN], [DAWN], [EMBER]'],
        ['$7,500', '[POISON], [ICE], [SHADOW], [PHANTOM]'],
        ['$20,000', '[FIRE], [GALAXY], [ECLIPSE], [VOID]'],
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
      text: 'Write in red, gold, aqua and more. Open `/cosmetics` and pick Chat Color. Each colour costs **✪25 points**. White is free. Switch between the colours you own with `/chatcolor`.',
    },
    { type: 'h2', text: 'Glow' },
    {
      type: 'p',
      text: 'A coloured glow outline around your character. Every colour is **free** for everyone. Open `/cosmetics` and pick Glow.',
    },
    {
      type: 'callout',
      tone: 'tip',
      text: 'Need points for chat colours? The [AFK pool](/wiki/afk-pool) gives 10 every 20 minutes, and weekly `/rewards` give 50.',
    },
  ],
}
