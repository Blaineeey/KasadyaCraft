import type { WikiPage } from '@/lib/content'
import { DECIPHER, HEXTECH_TAG, LOCKSMITH, LOCKSMITH_TRADES } from './locksmith'

/*
 * Sources (read-only, 2026-11-25):
 * - plugins/MythicMobs/items/LabOfHorrors/loh_items.yml (16 items, names, lore, tier glyphs, Prevent* options)
 * - plugins/MythicMobs/droptables/LabOfHorrors/loh.yml (loh_diamondchest TotalItems 2, emerald/star TotalItems 3, weights)
 * - plugins/MythicDungeons/loottables/loh_lootchest.yml (supply chests: 1-2 items, weights)
 * - plugins/MythicMobs/mobs/LabOfHorrors/loh.yml (INFECTED_FLESH drop chances)
 * - plugins/DeluxeMenus/gui_menus/DUNGEON/Locksmith.yml ("Keys, Decipher & Trade", 08:58): exact take/give amounts
 *   for the 3 forges (same as the old MythicMobs skills/LabOfHorrors/locksmith.yml), 4 deciphers and 4 trades,
 *   every count checked before anything is taken. Decipher/trade facts live in ./locksmith.ts.
 * - loh_items.yml lore (08:28): Raw Hextech "Trade 8 ... for an Epic Crate Key", Warden Ingot "Trade 4 ... for a
 *   Spawner Crate Key", Hextech Crystal "1 = 2 Spawner Crate Keys, 3 = the [HEXTECH] chat tag", books "Decipher it
 *   at the Locksmith (/locksmith)". Codex.yml LOOT_* lines say the same.
 * Tier glyphs map to site rarity: ꁉ common, ꁊ uncommon, ꁋ rare, ꁌ epic, ꁍ legendary.
 * NOTE: the Codex says Lab Samples are "guaranteed" in raid chests; the droptable gives them weight 1000, not 100%.
 */
const loh = { text: 'Lab of Horrors', color: 'dark-gray' } as const

export const dungeonItems: WikiPage = {
  slug: 'dungeon-items',
  title: 'Lab of Horrors items',
  summary: 'Every Lab of Horrors item, what it is for and exactly where it drops, plus the Locksmith: Chamber Key recipes, book deciphering and loot trades.',
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
    'decipher',
    'enchanted book',
    'hextech tag',
    'trade',
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
      text: 'Lab of Horrors items are custom items from our resource pack. You cannot sell them to `/shop`, craft with them, enchant them or put them in an anvil. Everything you loot goes to the **Locksmith** (`/locksmith`): forge Chamber Keys, decipher books into real enchanted books, or trade materials for crate keys.',
    },
    {
      type: 'slots',
      title: 'Lab of Horrors loot',
      label: 'Lab of Horrors items',
      columns: 8,
      items: [
        { label: 'Infected Flesh', art: 'flesh', rarity: 'uncommon', lines: ['Dropped by lab monsters.', 'Used for every Chamber Key.', loh] },
        { label: 'Key Fragment', art: 'fragment', rarity: 'uncommon', lines: ['Found in supply chests.', 'Used for every Chamber Key.', loh] },
        { label: 'Cobalt Ingot', art: 'ingot-cobalt', rarity: 'common', lines: ['Supply and raid chests.', 'Used for every Chamber Key.', loh] },
        { label: 'Mithril Ingot', art: 'ingot-mithril', rarity: 'uncommon', lines: ['Supply and raid chests.', 'Emerald and Star keys.', loh] },
        { label: 'Lab Sample', art: 'sample', rarity: 'uncommon', lines: ['In almost every raid chest.', 'Emerald and Star keys.', loh] },
        { label: 'Soulsteel Ingot', art: 'ingot-soulsteel', rarity: 'rare', lines: ['Star raid chests.', 'Star key.', loh] },
        {
          label: 'Warden Ingot',
          art: 'ingot-warden',
          rarity: 'epic',
          lines: ['Emerald and Star raid chests.', `Trade ${LOCKSMITH.wardenIngotsPerSpawnerKey} at the Locksmith`, 'for a Spawner crate key.', loh],
        },
        {
          label: 'Raw Hextech',
          art: 'raw-hextech',
          rarity: 'legendary',
          lines: ['All raid chests.', `Trade ${LOCKSMITH.rawHextechPerEpicKey} at the Locksmith`, 'for an Epic crate key.', loh],
        },
        {
          label: 'Hextech Crystal',
          art: 'hextech-crystal',
          rarity: 'epic',
          lines: [
            'A magical artifact capable of',
            'harnessing extremely volatile',
            'hextech energy.',
            `Locksmith: 1 = ${LOCKSMITH.spawnerKeysPerCrystal} Spawner crate keys,`,
            `${LOCKSMITH.crystalsForTag} = the ${HEXTECH_TAG} chat tag.`,
            loh,
          ],
        },
        ...DECIPHER.map((d) => ({
          label: `Undeciphered Book (${d.book})`,
          art: 'undeciphered-book' as const,
          rarity: d.rarity,
          lines: ['An ancient tome sealed with', 'a forgotten enchantment.', 'Decipher it at the Locksmith.', loh],
        })),
        { label: 'Diamond Chamber Key', art: 'key-diamond', rarity: 'rare', lines: ['Opens a Diamond raid chest.', 'Consumed on use!', loh] },
        { label: 'Emerald Chamber Key', art: 'key-emerald', rarity: 'epic', lines: ['Opens an Emerald raid chest.', 'Consumed on use!', loh] },
        { label: 'Star Chamber Key', art: 'key-star', rarity: 'legendary', lines: ['Opens a Star raid chest.', 'Consumed on use!', loh] },
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
        ['Raw Hextech', 'Every raid chest', `Trade ${LOCKSMITH.rawHextechPerEpicKey} for 1 Epic crate key`],
        ['Warden Ingot', 'Emerald and Star raid chests', `Trade ${LOCKSMITH.wardenIngotsPerSpawnerKey} for 1 Spawner crate key`],
        [
          'Hextech Crystal',
          'Emerald and Star raid chests (rare)',
          `Trade 1 for ${LOCKSMITH.spawnerKeysPerCrystal} Spawner crate keys, or ${LOCKSMITH.crystalsForTag} for the ${HEXTECH_TAG} chat tag`,
        ],
        [
          'Undeciphered Books',
          'Common and Rare: supply and raid chests. Legendary: Emerald and Star chests. Fabled: Star chests only',
          `Decipher into an enchanted book. A Fabled book also unlocks the ${HEXTECH_TAG} tag`,
        ],
      ],
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
    { type: 'h2', text: 'Decipher and trade' },
    {
      type: 'p',
      text: 'The Locksmith does more than keys. Under the key recipes you will find a row of books to decipher and a row of trades. Same rule as the forge: it checks first, so nothing is taken unless you get paid. None of it pays money.',
    },
    { type: 'h3', text: 'Decipher a book' },
    {
      type: 'p',
      text: 'Carry an Undeciphered Book and click its rarity. You get a normal enchanted book back, ready for your anvil. One book per click.',
    },
    {
      type: 'table',
      caption: 'What each Undeciphered Book turns into',
      head: ['Book', 'You get one of these'],
      rows: DECIPHER.map((d) => [d.book, d.gives]),
    },
    { type: 'h3', text: 'Trade your loot' },
    {
      type: 'table',
      caption: 'Locksmith trades',
      head: ['You give', 'You get'],
      rows: LOCKSMITH_TRADES,
    },
    {
      type: 'list',
      items: [
        'Open your crate keys at `/warp crates`. See [Crates and keys](/wiki/crates) for what is inside.',
        `Once you own the ${HEXTECH_TAG} tag, its button shows a tick. Trade spare crystals for Spawner keys instead.`,
      ],
    },
    {
      type: 'callout',
      tone: 'lore',
      text: `The **${HEXTECH_TAG}** tag is dungeon-only. Money cannot buy it. Trade ${LOCKSMITH.crystalsForTag} Hextech Crystals or decipher your first Fabled book, then wear it from \`/tags\`.`,
    },
    { type: 'h2', text: 'Drop tables' },
    {
      type: 'p',
      text: 'Each chest picks a fixed number of items from its table. The higher the weight, the more likely that item is. Compare weights inside one table: in the Diamond chest a Lab Sample (1,000) is about 60 times more likely than a Rare book (16).',
    },
    { type: 'h3', text: 'Supply chests (1 or 2 of these, plus 2 or 3 stacks of ores, food or supplies)' },
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
