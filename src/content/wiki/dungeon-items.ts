import type { WikiPage } from '@/lib/content'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/MythicMobs/items/LabOfHorrors/loh_items.yml (16 items, names, lore, tier glyphs, Prevent* options)
 * - plugins/MythicMobs/droptables/LabOfHorrors/loh.yml (loh_diamondchest TotalItems 2, emerald/star TotalItems 3, weights)
 * - plugins/MythicDungeons/loottables/loh_lootchest.yml (supply chests: 1-2 items, weights)
 * - plugins/MythicMobs/mobs/LabOfHorrors/loh.yml (INFECTED_FLESH drop chances)
 * - plugins/MythicMobs/skills/LabOfHorrors/locksmith.yml (exact take/give amounts, all-or-nothing checks)
 * - grep over plugins/: Raw Hextech, Warden Ingot, Soulsteel (except Star key), Hextech Crystal and the books
 *   are used by no recipe today.
 * Tier glyphs map to site rarity: ꁉ common, ꁊ uncommon, ꁋ rare, ꁌ epic, ꁍ legendary.
 * NOTE: the Codex says Lab Samples are "guaranteed" in raid chests; the droptable gives them weight 1000, not 100%.
 */
const loh = { text: 'Lab of Horrors', color: 'dark-gray' } as const

export const dungeonItems: WikiPage = {
  slug: 'dungeon-items',
  title: 'Lab of Horrors items',
  summary: 'Every Lab of Horrors item, what it is for and exactly where it drops, plus the Locksmith recipes for Chamber Keys.',
  icon: 'gem',
  category: 'dungeon',
  order: 2,
  updated: '2026-11-25',
  keywords: [
    'infected flesh',
    'key fragment',
    'cobalt',
    'mithril',
    'lab sample',
    'raw hextech',
    'warden ingot',
    'soulsteel',
    'hextech crystal',
    'undeciphered book',
    'chamber key',
    'diamond key',
    'emerald key',
    'star key',
    '/locksmith',
    'loot',
    'drops',
    'drop table',
  ],
  related: ['dungeon', 'economy'],
  body: [
    {
      type: 'p',
      text: 'Lab of Horrors items are custom items from our resource pack. You cannot sell them to `/shop`, craft with them, enchant them or put them in an anvil. They are for the Locksmith, and for showing off.',
    },
    {
      type: 'slots',
      title: 'Lab of Horrors loot',
      label: 'Lab of Horrors items',
      columns: 8,
      items: [
        { label: 'Infected Flesh', icon: 'skull', rarity: 'uncommon', lines: ['Dropped by lab monsters.', 'Used for every Chamber Key.', loh] },
        { label: 'Key Fragment', icon: 'key', rarity: 'uncommon', lines: ['Found in supply chests.', 'Used for every Chamber Key.', loh] },
        { label: 'Cobalt Ingot', icon: 'gem', rarity: 'common', lines: ['Supply and raid chests.', 'Used for every Chamber Key.', loh] },
        { label: 'Mithril Ingot', icon: 'gem', rarity: 'uncommon', lines: ['Supply and raid chests.', 'Emerald and Star keys.', loh] },
        { label: 'Lab Sample', icon: 'potion', rarity: 'uncommon', lines: ['In almost every raid chest.', 'Emerald and Star keys.', loh] },
        { label: 'Soulsteel Ingot', icon: 'gem', rarity: 'rare', lines: ['Star raid chests.', 'Star key.', loh] },
        { label: 'Warden Ingot', icon: 'gem', rarity: 'epic', lines: ['Emerald and Star raid chests.', 'No recipe yet.', loh] },
        { label: 'Raw Hextech', icon: 'gem', rarity: 'legendary', lines: ['All raid chests.', 'No recipe yet.', loh] },
        {
          label: 'Hextech Crystal',
          icon: 'gem',
          rarity: 'epic',
          lines: ['A magical artifact capable of', 'harnessing extremely volatile', 'hextech energy.', loh],
        },
        { label: 'Undeciphered Book (Common)', icon: 'book', rarity: 'uncommon', lines: ['An ancient tome sealed with', 'a forgotten enchantment.', loh] },
        { label: 'Undeciphered Book (Rare)', icon: 'book', rarity: 'rare', lines: ['An ancient tome sealed with', 'a forgotten enchantment.', loh] },
        { label: 'Undeciphered Book (Legendary)', icon: 'book', rarity: 'epic', lines: ['An ancient tome sealed with', 'a forgotten enchantment.', loh] },
        { label: 'Undeciphered Book (Fabled)', icon: 'book', rarity: 'legendary', lines: ['An ancient tome sealed with', 'a forgotten enchantment.', loh] },
        { label: 'Diamond Chamber Key', icon: 'key', rarity: 'rare', lines: ['Opens a Diamond raid chest.', 'Consumed on use!', loh] },
        { label: 'Emerald Chamber Key', icon: 'key', rarity: 'epic', lines: ['Opens an Emerald raid chest.', 'Consumed on use!', loh] },
        { label: 'Star Chamber Key', icon: 'key', rarity: 'legendary', lines: ['Opens a Star raid chest.', 'Consumed on use!', loh] },
      ],
    },
    { type: 'h2', text: 'Materials' },
    {
      type: 'table',
      caption: 'Where each item drops and what it is for',
      head: ['Item', 'Where it drops', 'Used for'],
      rows: [
        ['Infected Flesh', 'Lab monsters: 10% each, Confused Hextechnologist 50%, Draedon Disciple always 1 to 3', 'All three Chamber Keys'],
        ['Key Fragment', 'Supply chests, very common, 1 or 2 at a time', 'All three Chamber Keys'],
        ['Cobalt Ingot', 'Supply chests (uncommon) and every raid chest', 'All three Chamber Keys'],
        ['Mithril Ingot', 'Supply chests (uncommon) and every raid chest', 'Emerald and Star keys'],
        ['Lab Sample', 'Every raid chest, top of the drop table', 'Emerald and Star keys'],
        ['Soulsteel Ingot', 'Star raid chests', 'Star key'],
        ['Raw Hextech', 'Every raid chest', 'No recipe yet'],
        ['Warden Ingot', 'Emerald and Star raid chests', 'No recipe yet'],
        ['Hextech Crystal', 'Emerald and Star raid chests (rare)', 'No recipe yet'],
        ['Undeciphered Books', 'Common and Rare: supply and raid chests. Legendary: Emerald and Star chests. Fabled: Star chests only', 'No recipe yet'],
      ],
    },
    {
      type: 'callout',
      tone: 'lore',
      text: 'Raw Hextech, Warden Ingots, Hextech Crystals and the Undeciphered Books have no recipe yet. For now they are collectibles. A Fabled book is a serious flex.',
    },
    { type: 'h2', text: 'Chamber Keys (Locksmith)' },
    {
      type: 'p',
      text: 'Type `/locksmith` or open it from the Codex. Forging is instant. The Locksmith checks everything first, so if one ingredient is missing, nothing is taken.',
    },
    {
      type: 'table',
      caption: 'Locksmith recipes',
      head: ['Key', 'Opens', 'Recipe'],
      rows: [
        ['Diamond Chamber Key', 'Diamond raid chest (2 items)', '64 Diamond, 16 Key Fragment, 4 Infected Flesh, 3 Cobalt Ingot'],
        [
          'Emerald Chamber Key',
          'Emerald raid chest (3 items)',
          '64 Emerald, 32 Key Fragment, 16 Infected Flesh, 5 Lab Sample, 4 Cobalt Ingot, 2 Mithril Ingot',
        ],
        [
          'Star Chamber Key',
          'Star raid chest (3 items)',
          '64 Key Fragment, 32 Infected Flesh, 10 Lab Sample, 6 Cobalt Ingot, 4 Mithril Ingot, 3 Soulsteel Ingot',
        ],
      ],
    },
    {
      type: 'list',
      items: [
        'A key is used up when you open a chest with it.',
        'Emeralds are buy-only in `/shop` at $24 each, so 64 cost $1,536 there. Trading with villagers is much cheaper.',
        'The Star key needs no diamonds or emeralds at all, only dungeon materials. You need Soulsteel from a Star chest though, so a friend with a Star key helps.',
      ],
    },
    { type: 'h2', text: 'Drop tables' },
    {
      type: 'p',
      text: 'Each chest picks a fixed number of items from its table. The higher the weight, the more likely that item is. Compare weights inside one table: in the Diamond chest a Lab Sample (1,000) is about 60 times more likely than a Rare book (16).',
    },
    { type: 'h3', text: 'Supply chests (1 or 2 items)' },
    {
      type: 'table',
      head: ['Item', 'Amount', 'Weight'],
      rows: [
        ['Key Fragment', '1 to 2', '1,000'],
        ['Cobalt Ingot', '1 to 2', '64'],
        ['Mithril Ingot', '1', '32'],
        ['Undeciphered Book (Common)', '1', '10'],
        ['Undeciphered Book (Rare)', '1', '10'],
      ],
    },
    { type: 'h3', text: 'Diamond raid chest (2 items)' },
    {
      type: 'table',
      head: ['Item', 'Amount', 'Weight'],
      rows: [
        ['Lab Sample', '2 to 4', '1,000'],
        ['Cobalt Ingot', '2 to 5', '512'],
        ['Mithril Ingot', '2 to 4', '256'],
        ['Raw Hextech', '1 to 4', '256'],
        ['Undeciphered Book (Common)', '1', '32'],
        ['Undeciphered Book (Rare)', '1', '16'],
      ],
    },
    { type: 'h3', text: 'Emerald raid chest (3 items)' },
    {
      type: 'table',
      head: ['Item', 'Amount', 'Weight'],
      rows: [
        ['Lab Sample', '3 to 5', '1,000'],
        ['Cobalt Ingot', '2 to 5', '512'],
        ['Raw Hextech', '2 to 4', '512'],
        ['Mithril Ingot', '2 to 5', '256'],
        ['Warden Ingot', '2 to 3', '128'],
        ['Undeciphered Book (Common)', '1', '64'],
        ['Undeciphered Book (Rare)', '1', '32'],
        ['Undeciphered Book (Legendary)', '1', '16'],
        ['Hextech Crystal', '1', '16'],
      ],
    },
    { type: 'h3', text: 'Star raid chest (3 items)' },
    {
      type: 'table',
      head: ['Item', 'Amount', 'Weight'],
      rows: [
        ['Lab Sample', '4 to 8', '1,000'],
        ['Raw Hextech', '2 to 5', '512'],
        ['Cobalt Ingot', '3 to 6', '256'],
        ['Mithril Ingot', '3 to 5', '256'],
        ['Soulsteel Ingot', '2 to 4', '256'],
        ['Warden Ingot', '2 to 4', '128'],
        ['Hextech Crystal', '1', '64'],
        ['Undeciphered Book (Common)', '1', '64'],
        ['Undeciphered Book (Rare)', '1', '32'],
        ['Undeciphered Book (Legendary)', '1', '16'],
        ['Undeciphered Book (Fabled)', '1', '4'],
      ],
    },
  ],
}
