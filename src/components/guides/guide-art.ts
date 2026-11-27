/**
 * Original 16x16 pixel art for guide illustrations (kit items, dungeon materials, Chamber Keys).
 * Hand-drawn for KasadyaCraft, same string format as src/components/ui/pixel-icons.ts.
 * Never traced from Mojang textures. Owner: STARTER-GUIDE WRITER (the designer may adopt these).
 */
import type { PixelIconDef } from '@/components/ui/pixel-icons'

const K = '#17121c'

const WOOD = { h: '#c89a5a', H: '#8e6534' }
const STICK = { s: '#6e4f2c' }
const LEATHER = { l: '#b06a3a', L: '#7f4524' }

/* ---------------------------------------------------------------- shapes */

const sword = [
  '................',
  '............KKK.',
  '...........KhhK.',
  '..........KhhHK.',
  '.........KhhHK..',
  '........KhhHK...',
  '.......KhhHK....',
  '..KK..KhhHK.....',
  '..KgKKhhHK......',
  '...KgghHK.......',
  '....KggK........',
  '...KsKggK.......',
  '..KsK.KKgK......',
  '.KsK....KK......',
  '.KK.............',
  '................',
]

const pickaxe = [
  '................',
  '....KKKKKKK.....',
  '...KhhhhhhhKK...',
  '....KKKKHhhhhK..',
  '........KsHhhhK.',
  '.......KsK.KhhK.',
  '......KsK..KhhK.',
  '.....KsK...KhhK.',
  '....KsK.....KhK.',
  '...KsK......KhK.',
  '..KsK........K..',
  '.KsK............',
  '.KK.............',
  '................',
  '................',
  '................',
]

const axe = [
  '................',
  '.....KKKK.......',
  '....KhhhhKK..KK.',
  '...KhhhhhhhKKsK.',
  '...KhhhhhhhKsK..',
  '...KhHHhhhKsK...',
  '....KHHHHKsK....',
  '.....KKKKsK.....',
  '.......KsK......',
  '......KsK.......',
  '.....KsK........',
  '....KsK.........',
  '...KsK..........',
  '..KsK...........',
  '..KK............',
  '................',
]

const shovel = [
  '................',
  '..........KKK...',
  '.........KhhhK..',
  '........KhhhhhK.',
  '........KhhHhhK.',
  '.........KhHhK..',
  '........KsKKK...',
  '.......KsK......',
  '......KsK.......',
  '.....KsK........',
  '....KsK.........',
  '...KsK..........',
  '..KsK...........',
  '.KKK............',
  '................',
  '................',
]

const hoe = [
  '................',
  '.....KKKKKK.....',
  '....KhhhhhhK....',
  '....KHHKKKsK....',
  '.....KK.KsK.....',
  '.......KsK......',
  '......KsK.......',
  '.....KsK........',
  '....KsK.........',
  '...KsK..........',
  '..KsK...........',
  '.KsK............',
  '.KK.............',
  '................',
  '................',
  '................',
]

const bread = [
  '................',
  '................',
  '................',
  '................',
  '................',
  '....KKKKKKKK....',
  '..KKbbbbbbbbKK..',
  '.KbbBbbBbbBbbbK.',
  '.KbbbBbbBbbBbbK.',
  '.KdbbbbbbbbbbdK.',
  '..KddddddddddK..',
  '...KKKKKKKKKK...',
  '................',
  '................',
  '................',
  '................',
]

const helmet = [
  '................',
  '................',
  '................',
  '....KKKKKKKK....',
  '...KllllllllK...',
  '..KllllllllllK..',
  '..KlLLLLLLLLlK..',
  '..KlLKKKKKKLlK..',
  '..KlK......KlK..',
  '..KKK......KKK..',
  '................',
  '................',
  '................',
  '................',
  '................',
  '................',
]

const chestplate = [
  '................',
  '................',
  '..KKKK....KKKK..',
  '.KllllK..KllllK.',
  '.KllllKKKKllllK.',
  '.KlLllllllllLlK.',
  '.KKKllllllllKKK.',
  '...KllllllllK...',
  '...KlLllllLlK...',
  '...KllllllllK...',
  '...KllllllllK...',
  '...KLLLLLLLLK...',
  '...KKKKKKKKKK...',
  '................',
  '................',
  '................',
]

const leggings = [
  '................',
  '................',
  '...KKKKKKKKKK...',
  '...KLLLLLLLLK...',
  '...KllllllllK...',
  '...KlllKKlllK...',
  '...KlllKKlllK...',
  '...KlLlKKlLlK...',
  '...KlllKKlllK...',
  '...KlllKKlllK...',
  '...KlllKKlllK...',
  '...KKKKKKKKKK...',
  '................',
  '................',
  '................',
  '................',
]

const boots = [
  '................',
  '................',
  '................',
  '................',
  '..KKKK....KKKK..',
  '..KllK....KllK..',
  '..KllK....KllK..',
  '..KllK....KllK..',
  '..KlLK....KLlK..',
  '.KlllK....KlllK.',
  '.KlllK....KlllK.',
  '.KLLLK....KLLLK.',
  '.KKKKK....KKKKK.',
  '................',
  '................',
  '................',
]

const gem = [
  '................',
  '................',
  '................',
  '.....KKKKKK.....',
  '....KwbbbbbK....',
  '...KwbbbbbbbK...',
  '..KbbbbbbbbbbK..',
  '..KBbbbbbbbbBK..',
  '...KBbbbbbbBK...',
  '....KBbbbbBK....',
  '.....KBbbBK.....',
  '......KBBK......',
  '.......KK.......',
  '................',
  '................',
  '................',
]

const emerald = [
  '................',
  '................',
  '.......KK.......',
  '......KwgK......',
  '.....KwggGK.....',
  '....KwgggGGK....',
  '....KggggGGK....',
  '....KggggGGK....',
  '....KggggGGK....',
  '....KgggGGGK....',
  '.....KgGGGK.....',
  '......KGGK......',
  '.......KK.......',
  '................',
  '................',
  '................',
]

const ingot = [
  '................',
  '................',
  '................',
  '................',
  '................',
  '.....KKKKKKKK...',
  '....KwwwwwwwwK..',
  '...KwmmmmmmmmdK.',
  '..KwmmmmmmmmddK.',
  '.KwmmmmmmmmdddK.',
  '.KKKKKKKKKKKKKK.',
  '................',
  '................',
  '................',
  '................',
  '................',
]

const key = [
  '................',
  '................',
  '................',
  '................',
  '................',
  '.KKKK...........',
  'KkkkkK..........',
  'KkKKkKKKKKKKKKK.',
  'KkKKkkkkkkkkkkK.',
  'KkkkkKKKkKKkKKK.',
  '.KKKK..KKKKKK...',
  '................',
  '................',
  '................',
  '................',
  '................',
]

const fragment = [
  '................',
  '................',
  '................',
  '.......KK.......',
  '......KffK......',
  '.....KfffFK.....',
  '....KfwffFFK....',
  '...KffffFFFK....',
  '..KfffffFFK.....',
  '...KffFFFFK.....',
  '....KfFFFK......',
  '.....KFFK.......',
  '......KK........',
  '................',
  '................',
  '................',
]

const flesh = [
  '................',
  '................',
  '................',
  '.....KKKKK......',
  '...KKrrrrrKK....',
  '..KrrRrrgrrrK...',
  '.KrrrrrggrRrrK..',
  '.KrgrrrrrrrrrK..',
  '.KrggrrRrrrgrK..',
  '..KrrrrrrrrrK...',
  '...KKrrrrrKK....',
  '.....KKKKK......',
  '................',
  '................',
  '................',
  '................',
]

const sample = [
  '................',
  '......KKKK......',
  '......KccK......',
  '......KKKK......',
  '......KwwK......',
  '......KwwK......',
  '.....KwwwwK.....',
  '....KwLLLLwK....',
  '...KwLLLLLLwK...',
  '...KLLLlLLLLK...',
  '...KLLllllLLK...',
  '....KLllllLK....',
  '.....KKKKKK.....',
  '................',
  '................',
  '................',
]

/* -------------------------------------------------------------- the set */

/* Added 2026-11-27: fishing, custom enchants, fly time and the Lab items that had no art yet. */
const fish = [
  '................',
  '................',
  '................',
  '......KKKKKK....',
  '....KKwwwbbbKK..',
  '.KK.KwwbbbbbbbK.',
  '.KbKbbbbbbbbbeK.',
  '.KbbbbbbbbbbbbbK',
  '.KBKBbbbbbbbbbK.',
  '.KK.KBBbbbbbbK..',
  '....KKBBBBBBK...',
  '......KKKKKK....',
  '................',
  '................',
  '................',
  '................',
]

const rod = [
  '................',
  '............KK..',
  '...........KhKl.',
  '..........KhK.l.',
  '.........KhK..l.',
  '........KhK...l.',
  '.......KhK....l.',
  '......KhK.....l.',
  '.....KhK......l.',
  '....KsK.......l.',
  '...KsK........l.',
  '..KsK.......K.l.',
  '.KsK........KKK.',
  '.KK.............',
  '................',
  '................',
]

const worm = [
  '................',
  '................',
  '................',
  '................',
  '..........KKK...',
  '.........KpppK..',
  '..KKK...KpPKpK..',
  '.KpppK.KpPK.KK..',
  '.KpPppKpPK......',
  '..KPPppPK.......',
  '...KKPPK........',
  '.....KK.........',
  '................',
  '................',
  '................',
  '................',
]

const bookShape = [
  '................',
  '................',
  '...KKKKKKKKKK...',
  '..KppppppppppK..',
  '..KpgppppppppK..',
  '..KpppgppppppK..',
  '..KppppppgpppK..',
  '..KpppppppgppK..',
  '..KppppppppppK..',
  '..KPPPPPPPPPPK..',
  '..KwwwwwwwwwwK..',
  '..KKKKKKKKKKKK..',
  '................',
  '................',
  '................',
  '................',
]

const dust = [
  '................',
  '................',
  '................',
  '.......w........',
  '......www....w..',
  '.......w....www.',
  '.............w..',
  '.....KKKKKK.....',
  '....KddddddK....',
  '...KdDddddddK...',
  '..KdddDddddddK..',
  '..KDDDDDDDDDDK..',
  '...KKKKKKKKKK...',
  '................',
  '................',
  '................',
]

const scroll = [
  '................',
  '................',
  '..KKKKKKKKKKKK..',
  '.KwwwwwwwwwwwwK.',
  '..KKKKKKKKKKKK..',
  '...KwwwwwwwwK...',
  '...KwllllllwK...',
  '...KwwwwwwwwK...',
  '...KwllllllwK...',
  '...KwwwwwwwwK...',
  '..KKKKKKKKKKKK..',
  '.KwwwwwwwwwwwwK.',
  '..KKKKKKKKKKKK..',
  '................',
  '................',
  '................',
]

const feather = [
  '................',
  '............KK..',
  '...........KwwK.',
  '..........KwwfK.',
  '.........KwwfK..',
  '........KwwfK...',
  '.......KwwfK....',
  '......KwwfK.....',
  '.....KwwfK......',
  '....KwffK.......',
  '...KffK.........',
  '..KqK...........',
  '.KqK............',
  '.KK.............',
  '................',
  '................',
]

export type GuideArtName =
  | 'wooden-sword'
  | 'wooden-pickaxe'
  | 'wooden-axe'
  | 'wooden-shovel'
  | 'wooden-hoe'
  | 'bread'
  | 'leather-helmet'
  | 'leather-chestplate'
  | 'leather-leggings'
  | 'leather-boots'
  | 'diamond'
  | 'emerald'
  | 'fragment'
  | 'flesh'
  | 'sample'
  | 'ingot-cobalt'
  | 'ingot-mithril'
  | 'ingot-soulsteel'
  | 'key-diamond'
  | 'key-emerald'
  | 'key-star'
  | 'fish-common'
  | 'fish-uncommon'
  | 'fish-rare'
  | 'fish-epic'
  | 'fish-legendary'
  | 'fishing-rod'
  | 'bait'
  | 'enchanted-book'
  | 'undeciphered-book'
  | 'magic-dust'
  | 'white-scroll'
  | 'feather'
  | 'hextech-crystal'
  | 'raw-hextech'
  | 'ingot-warden'

export const guideArt: Record<GuideArtName, PixelIconDef> = {
  'wooden-sword': { palette: { K, ...WOOD, g: '#5a3c25', s: '#4a321c' }, rows: sword },
  'wooden-pickaxe': { palette: { K, ...WOOD, ...STICK }, rows: pickaxe },
  'wooden-axe': { palette: { K, ...WOOD, ...STICK }, rows: axe },
  'wooden-shovel': { palette: { K, ...WOOD, ...STICK }, rows: shovel },
  'wooden-hoe': { palette: { K, ...WOOD, ...STICK }, rows: hoe },
  bread: { palette: { K, b: '#d9a24a', B: '#a8701f', d: '#8a5a1c' }, rows: bread },
  'leather-helmet': { palette: { K, ...LEATHER }, rows: helmet },
  'leather-chestplate': { palette: { K, ...LEATHER }, rows: chestplate },
  'leather-leggings': { palette: { K, ...LEATHER }, rows: leggings },
  'leather-boots': { palette: { K, ...LEATHER }, rows: boots },
  diamond: { palette: { K, w: '#e8fffd', b: '#5fe0d8', B: '#1f9e98' }, rows: gem },
  emerald: { palette: { K, w: '#c8ffd6', g: '#36d266', G: '#178a3a' }, rows: emerald },
  fragment: { palette: { K, w: '#ffffff', f: '#d8d0c0', F: '#8e8676' }, rows: fragment },
  flesh: { palette: { K, r: '#c45a5a', R: '#8a2e3a', g: '#8fbf3a' }, rows: flesh },
  sample: { palette: { K, c: '#a07a44', w: '#d6f2ff', L: '#7ae05a', l: '#3e9e2a' }, rows: sample },
  'ingot-cobalt': { palette: { K, w: '#a9c6ff', m: '#4f7be0', d: '#26449a' }, rows: ingot },
  'ingot-mithril': { palette: { K, w: '#eef8fb', m: '#a9cfdc', d: '#5e8a9c' }, rows: ingot },
  'ingot-soulsteel': { palette: { K, w: '#c8bcff', m: '#7a64cc', d: '#3e2f7a' }, rows: ingot },
  'key-diamond': { palette: { K, k: '#74b4b8' }, rows: key },
  'key-emerald': { palette: { K, k: '#80b874' }, rows: key },
  'key-star': { palette: { K, k: '#94a7c6' }, rows: key },
  'fish-common': { palette: { K, b: '#9fb8c9', B: '#5f7a8c', w: '#e3eef5', e: K }, rows: fish },
  'fish-uncommon': { palette: { K, b: '#7bc96f', B: '#3e8a3a', w: '#d8f5d0', e: K }, rows: fish },
  'fish-rare': { palette: { K, b: '#d6dde3', B: '#8c99a3', w: '#ffffff', e: K }, rows: fish },
  'fish-epic': { palette: { K, b: '#f2c94c', B: '#b8892a', w: '#fff3c4', e: K }, rows: fish },
  'fish-legendary': { palette: { K, b: '#b98cf2', B: '#6f45b8', w: '#efe2ff', e: K }, rows: fish },
  'fishing-rod': { palette: { K, h: '#a8743e', s: '#4a321c', l: '#e6e6e6' }, rows: rod },
  'bait': { palette: { K, p: '#e889a3', P: '#b5506e' }, rows: worm },
  'enchanted-book': { palette: { K, p: '#7a4fc9', P: '#4a2c86', g: '#e6d2ff', w: '#efe6d0' }, rows: bookShape },
  'undeciphered-book': { palette: { K, p: '#8a6a4a', P: '#5a4128', g: '#c9b48a', w: '#d9cfb8' }, rows: bookShape },
  'magic-dust': { palette: { K, d: '#f2c94c', D: '#b8892a', w: '#fff7d6' }, rows: dust },
  'white-scroll': { palette: { K, w: '#f4f1e8', l: '#b8b3a6' }, rows: scroll },
  'feather': { palette: { K, w: '#f7f7f7', f: '#cfd8e3', q: '#a08060' }, rows: feather },
  'hextech-crystal': { palette: { K, w: '#ffffff', b: '#7fe3ff', B: '#7a4fc9' }, rows: gem },
  'raw-hextech': { palette: { K, w: '#e6d2ff', f: '#9a6ad9', F: '#5a3a99' }, rows: fragment },
  'ingot-warden': { palette: { K, w: '#9fe8e0', m: '#1f8a85', d: '#0d4a52' }, rows: ingot },
}
