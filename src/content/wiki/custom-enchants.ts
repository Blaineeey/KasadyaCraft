import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-27):
 * - plugins/AdvancedEnchantments/menus/enchanter.yml: book prices exp:400 / 800 / 2500 / 5000 / 25000 / 40000 (XP points)
 * - plugins/AdvancedEnchantments/config.yml: slots max 9, max-increase-of-slots 13, grindstones-remove-custom-enchants true,
 *   open-enchanter-by-right-clicking-enchantment-table false; the enchanting table gives no custom enchants (turned off on request)
 * - DeluxeMenus ENCHANTS/CustomEnchants.yml (/ae, /enchants): player buttons Enchanter, Tinkerer, Alchemist, Enchant Guide,
 *   Build Ideas, /apply, /withdrawsouls, /ae about; /ae list and /ae info are "not open for players yet"; GKits are preview only
 *   (Build Ideas). ENCHANTS/guide/*.yml: enchants per item type.
 */
const ae = { text: 'Custom Enchants', color: 'dark-gray' } as const

export const ENCHANTER_PRICES = [
  { rarity: 'Simple', xp: 400, tier: 'common' },
  { rarity: 'Unique', xp: 800, tier: 'uncommon' },
  { rarity: 'Elite', xp: 2500, tier: 'rare' },
  { rarity: 'Ultimate', xp: 5000, tier: 'epic' },
  { rarity: 'Legendary', xp: 25000, tier: 'legendary' },
  { rarity: 'Fabled', xp: 40000, tier: 'legendary' },
] as const

export const customEnchants: WikiPage = {
  slug: 'custom-enchants',
  title: 'Custom enchants',
  summary: 'Extra enchants for your gear, from Simple up to Fabled. Buy books with XP at /enchanter, drop them onto your items, and use the Enchant Guide in /ae to see what goes on each item.',
  icon: 'enchant',
  category: 'features',
  order: 5,
  updated: '2026-11-27',
  keywords: [
    '/ae',
    '/enchants',
    '/enchanter',
    '/e',
    '/ce',
    '/tinkerer',
    '/alchemist',
    '/apply',
    '/withdrawsouls',
    'custom enchants',
    'advancedenchantments',
    'enchant book',
    'magic dust',
    'white scroll',
    'black scroll',
    'slot increaser',
    'fabled',
    'legendary',
  ],
  related: ['dungeon-items', 'economy', 'commands'],
  body: [
    {
      type: 'p',
      text: 'Custom enchants add new powers on top of the normal ones. `/ae` (or `/enchants`) opens a menu with everything: the Enchanter, the Tinkerer, the Alchemist, the **Enchant Guide** (pick an item and see every enchant that works on it, what it does, its rarity and max level) and **Build Ideas** (gear sets with custom enchants to copy).',
    },
    {
      type: 'callout',
      tone: 'info',
      text: 'The enchanting table and anvil only give normal enchants. Custom enchants come from books.',
    },
    { type: 'h2', text: 'Rarities and the Enchanter' },
    {
      type: 'p',
      text: '`/enchanter` (or `/e`, `/ce`) sells a book with a random enchant of the rarity you pick. You pay with **XP points** (experience points, not levels). Right-click the book to open it and see what you got.',
    },
    {
      type: 'slots',
      label: 'Enchanter books',
      columns: 6,
      items: ENCHANTER_PRICES.map((p) => ({
        label: `${p.rarity} book`,
        art: 'enchanted-book' as const,
        rarity: p.tier,
        lines: [{ text: `${p.xp.toLocaleString('en-US')} XP points`, color: 'aqua' as const }, 'A random enchant of this rarity.', ae],
      })),
    },
    {
      type: 'table',
      caption: 'Enchanter prices',
      head: ['Rarity', 'Price'],
      rows: ENCHANTER_PRICES.map((p) => [p.rarity, `${p.xp.toLocaleString('en-US')} XP points`]),
    },
    { type: 'h2', text: 'Putting an enchant on' },
    {
      type: 'steps',
      items: [
        { title: 'Open the book', text: 'Right-click it. It shows the enchant, its **success** chance and its **destroy** chance.' },
        { title: 'Drop it onto your item', text: 'In your inventory, pick up the book and drop it onto the item. Books do not work in an anvil.' },
        { title: 'Success or not', text: 'On success the enchant goes on. On a fail the destroy chance decides whether your item breaks. A White Scroll on the item stops that.' },
      ],
    },
    {
      type: 'p',
      text: 'An item holds up to **9 custom enchants**, or **13** with Slot Increasers and Orbs. A grindstone takes custom enchants off again and gives back a little XP.',
    },
    { type: 'h2', text: 'Scrolls and dust' },
    {
      type: 'slots',
      label: 'Scrolls and dust',
      columns: 4,
      items: [
        { label: 'Magic Dust', art: 'magic-dust', rarity: 'uncommon', lines: ['Drop onto a book:', 'more success chance.', ae] },
        { label: 'White Scroll', art: 'white-scroll', rarity: 'rare', lines: ['Drop onto an item:', 'it cannot break on a failed book.', ae] },
        { label: 'Black Scroll', art: 'white-scroll', rarity: 'rare', lines: ['Drop onto an item:', 'takes an enchant off.', ae] },
        { label: 'Slot Increaser', art: 'enchanted-book', rarity: 'epic', lines: ['More enchant slots', 'on an item (up to 13).', ae] },
      ],
    },
    {
      type: 'table',
      head: ['Item', 'What it does'],
      rows: [
        ['Magic Dust', 'More success chance on a book.'],
        ['White Scroll', 'The item cannot break if a book fails.'],
        ['Holy White Scroll', 'You keep the item when you die.'],
        ['Black Scroll', 'Takes an enchant off an item.'],
        ['Randomization Scroll', 'Rolls new success and destroy chances for a book.'],
        ['Slot Increaser, Orbs', 'More enchant slots on an item.'],
        ['Transmog Scroll', 'Sorts the enchants on an item.'],
        ['Item NameTag', 'Renames an enchanted item.'],
      ],
    },
    { type: 'p', text: 'Drop scrolls and dust onto the book or the item, the same way as a book.' },
    { type: 'h2', text: 'Tinkerer and Alchemist' },
    {
      type: 'list',
      items: [
        '`/tinkerer`: trade enchant books you do not need for Magic Dust and XP.',
        '`/alchemist`: two books of the same enchant and level make one book a level higher. Two Magic Dusts of the same rarity make one with a better bonus.',
      ],
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Where else books come from',
      text: 'Undeciphered Books from the [Lab of Horrors](/wiki/dungeon-items) turn into enchanted books at `/locksmith`.',
    },
    { type: 'h2', text: 'Commands' },
    {
      type: 'commands',
      items: [
        { command: '/ae', description: 'The custom enchants menu (also `/enchants`).' },
        { command: '/enchanter', description: 'Buy enchant books with XP (also `/e`, `/ce`).' },
        { command: '/tinkerer', description: 'Trade books for Magic Dust and XP.' },
        { command: '/alchemist', description: 'Combine books and dust.' },
        { command: '/apply', description: 'Puts the effects of your armour set back on.' },
        { command: '/withdrawsouls', description: 'Takes souls off the weapon in your hand (Soul Tracker).' },
      ],
    },
  ],
}
