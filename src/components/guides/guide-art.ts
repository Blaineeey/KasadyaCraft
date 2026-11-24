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
}

export function isGuideArt(name: string): name is GuideArtName {
  return Object.prototype.hasOwnProperty.call(guideArt, name)
}
