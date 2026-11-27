/**
 * Original 16x16 pixel sprites for the store: rank banners, crate keys, kit
 * gear, cosmetics. Drawn by hand for KasadyaCraft. NEVER paste Mojang or
 * Minecraft textures here (copyright). Same string format as
 * src/components/ui/pixel-icons.ts so the two sets look like one family.
 *
 * Shapes use "material" letters a (main), b (shade), c (highlight) that a
 * TONE fills in, so one sword drawing covers iron, diamond and netherite.
 * Fixed letters: K outline, h/H wooden handle, plus per-shape extras.
 *
 * Owner: STORE ENGINEER.
 */

const K = '#17121c'

export type SpriteTone =
  | 'wood'
  | 'iron'
  | 'gold'
  | 'diamond'
  | 'netherite'
  | 'leather'
  | 'vote'
  | 'resource'
  | 'trim'
  | 'epic'
  | 'spawner'
  | 'cardael'
  | 'vip'
  | 'mvp'
  | 'mvpgold'
  | 'tagCommon'
  | 'tagRare'
  | 'tagLegendary'

type Abc = { a: string; b: string; c: string }

export const spriteTones: Record<SpriteTone, Abc> = {
  wood: { a: '#a47b48', b: '#6e4f2c', c: '#c29a62' },
  iron: { a: '#d4d4d8', b: '#8f8f96', c: '#ffffff' },
  gold: { a: '#ffd23f', b: '#c98a12', c: '#fff2a8' },
  diamond: { a: '#4fe3d8', b: '#1f9e98', c: '#c8fff9' },
  netherite: { a: '#5a4f60', b: '#2e2733', c: '#8c7e93' },
  leather: { a: '#9a5b32', b: '#6b3b1d', c: '#c07a48' },
  // crate keys follow the candle colours used for each key in game
  vote: { a: '#b8b8be', b: '#6e6e76', c: '#ececf0' },
  resource: { a: '#b07a40', b: '#6b4220', c: '#e0aa70' },
  trim: { a: '#ff9a1f', b: '#b8630a', c: '#ffd08a' },
  epic: { a: '#e8203a', b: '#8a1426', c: '#ff8a9a' },
  spawner: { a: '#9b4a8f', b: '#5e2457', c: '#d79ad0' },
  cardael: { a: '#5ad1ff', b: '#1f7fb8', c: '#d2f3ff' },
  // rank banners use the in-game prefix colours (&a green, &b aqua, &6 gold)
  vip: { a: '#55ff55', b: '#24a83a', c: '#c4ffc4' },
  mvp: { a: '#55ffff', b: '#1fa2b0', c: '#d0ffff' },
  mvpgold: { a: '#ffaa00', b: '#b86e00', c: '#ffd98a' },
  // name tags by price tier
  tagCommon: { a: '#d9c59c', b: '#9c8458', c: '#f6ecd2' },
  tagRare: { a: '#9fd0ff', b: '#4f86c4', c: '#e2f1ff' },
  tagLegendary: { a: '#ffcf5a', b: '#c48a16', c: '#fff0b8' },
}

export type SpriteShape =
  | 'sword'
  | 'pickaxe'
  | 'axe'
  | 'shovel'
  | 'hoe'
  | 'helmet'
  | 'chestplate'
  | 'leggings'
  | 'boots'
  | 'bow'
  | 'arrow'
  | 'shield'
  | 'steak'
  | 'apple'
  | 'carrot'
  | 'torch'
  | 'xpbottle'
  | 'pearl'
  | 'totem'
  | 'shulker'
  | 'key'
  | 'tokens'
  | 'points'
  | 'nametag'
  | 'chatbubble'
  | 'glow'
  | 'banner1'
  | 'banner2'
  | 'banner3'
  | 'banner4'
  | 'banner5'

/** What a store item or kit item looks like. */
export interface SpriteRef {
  shape: SpriteShape
  tone?: SpriteTone
}

interface ShapeDef {
  rows: string[]
  /** Fixed colours for this shape (outline and handle are added for all shapes). */
  palette?: Record<string, string>
  /** Tone used when the caller gives none. */
  tone?: SpriteTone
}

const HANDLE = { h: '#8a5a32', H: '#5a3a1e' }

/** Rank banner on a festival pole. `pips` = tier dots (1 for VIP ... 5 for MVP++). */
function banner(pips: number): ShapeDef {
  const spots: Record<number, number[]> = { 1: [7], 2: [6, 8], 3: [5, 7, 9], 4: [4, 6, 8, 10], 5: [3, 5, 7, 9, 11] }
  const pipRow = (base: string) => {
    const chars = base.split('')
    for (const x of spots[pips] ?? []) chars[x] = 'p'
    return chars.join('')
  }
  const body = '..KaaaaaaaaabK..'
  return {
    palette: { w: '#c29a62', W: '#6e4f2c', p: '#fffbe8' },
    rows: [
      '................',
      '.KKKKKKKKKKKKKK.',
      '.KwwwwwwwwwwwWK.',
      '.KKKKKKKKKKKKKK.',
      '..KccccccccccK..',
      body,
      body,
      pipRow(body),
      pipRow(body),
      body,
      body,
      '..KaaaaKKaaabK..',
      '..KaaaK..KaabK..',
      '..KaaK....KabK..',
      '..KKK......KKK..',
      '................',
    ],
  }
}

const shapes: Record<SpriteShape, ShapeDef> = {
  sword: {
    tone: 'iron',
    palette: { g: '#6e4f2c' },
    rows: [
      '................',
      '............KKK.',
      '...........KcaK.',
      '..........KcabK.',
      '.........KcabK..',
      '........KcabK...',
      '...KK..KcabK....',
      '...KgKKcabK.....',
      '....KgcabK......',
      '.....KgbK.......',
      '....KhKgK.......',
      '...KhK.KgK......',
      '..KhK...KK......',
      '.KHK............',
      '.KK.............',
      '................',
    ],
  },
  pickaxe: {
    tone: 'iron',
    rows: [
      '................',
      '.....KKKKK......',
      '....KcaaaaKK....',
      '...KaKKKKbaaK...',
      '...KK...KhKbaK..',
      '.......KhK.KbaK.',
      '......KhK...KbK.',
      '.....KhK....KaK.',
      '....KhK......K..',
      '...KhK..........',
      '..KhK...........',
      '.KHK............',
      '.KK.............',
      '................',
      '................',
      '................',
    ],
  },
  axe: {
    tone: 'iron',
    rows: [
      '................',
      '.........KKK....',
      '........KcaaKK..',
      '.......KcaaaabK.',
      '.......KaaKaabK.',
      '........KKhKbbK.',
      '........KhK.KK..',
      '.......KhK......',
      '......KhK.......',
      '.....KhK........',
      '....KhK.........',
      '...KhK..........',
      '..KHK...........',
      '.KHK............',
      '.KK.............',
      '................',
    ],
  },
  shovel: {
    tone: 'iron',
    rows: [
      '................',
      '...........KKK..',
      '..........KcaaK.',
      '.........KcaaaK.',
      '.........KaaabK.',
      '..........KbbK..',
      '.........KhKK...',
      '........KhK.....',
      '.......KhK......',
      '......KhK.......',
      '.....KhK........',
      '....KhK.........',
      '...KHK..........',
      '..KHK...........',
      '..KK............',
      '................',
    ],
  },
  hoe: {
    tone: 'iron',
    rows: [
      '................',
      '......KKKKK.....',
      '.....KcaaabK....',
      '.....KaKKKhK....',
      '.....KK.KhK.....',
      '.......KhK......',
      '......KhK.......',
      '.....KhK........',
      '....KhK.........',
      '...KhK..........',
      '..KHK...........',
      '.KHK............',
      '.KK.............',
      '................',
      '................',
      '................',
    ],
  },
  helmet: {
    tone: 'iron',
    rows: [
      '................',
      '................',
      '................',
      '................',
      '....KKKKKKKK....',
      '...KcaaaaaaabK..',
      '..KcaaaaaaaaabK.',
      '..KaabKKKKKaabK.',
      '..KaaK.....KabK.',
      '..KabK.....KbbK.',
      '..KKKK.....KKKK.',
      '................',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  chestplate: {
    tone: 'iron',
    rows: [
      '................',
      '................',
      '..KKKK....KKKK..',
      '.KcaaaK..KaaabK.',
      '.KcaaaaKKaaaabK.',
      '.KaaaaaaaaaaabK.',
      '.KKKcaaaaaabKKK.',
      '...KcaaaaaabK...',
      '...KaaaaaaabK...',
      '...KaaaaaaabK...',
      '...KabaaaabbK...',
      '...KKKKKKKKKK...',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  leggings: {
    tone: 'iron',
    rows: [
      '................',
      '................',
      '................',
      '...KKKKKKKKKK...',
      '...KcaaaaaabK...',
      '...KaaaaaaabK...',
      '...KaaaKKaabK...',
      '...KaaK..KabK...',
      '...KaaK..KabK...',
      '...KaaK..KabK...',
      '...KabK..KbbK...',
      '...KKKK..KKKK...',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  boots: {
    tone: 'iron',
    rows: [
      '................',
      '................',
      '................',
      '................',
      '................',
      '................',
      '...KKKK..KKKK...',
      '...KcaK..KcaK...',
      '...KaaK..KabK...',
      '..KcaaK..KaabK..',
      '..KaabK..KabbK..',
      '..KKKKK..KKKKK..',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  bow: {
    palette: { s: '#e6e6e6' },
    rows: [
      '................',
      '.........hhhh...',
      '.......hh....h..',
      '.....hh.....s...',
      '....H......s....',
      '...H......s.....',
      '...h.....s......',
      '..h.....s.......',
      '..h....s........',
      '.h....s.........',
      '.h...s..........',
      '.h..s...........',
      '.h.s............',
      '..h.............',
      '................',
      '................',
    ],
  },
  arrow: {
    tone: 'iron',
    palette: { f: '#f1e4c6' },
    rows: [
      '................',
      '............ccc.',
      '.............ac.',
      '............h.c.',
      '...........h....',
      '..........h.....',
      '.........h......',
      '........h.......',
      '.......h........',
      '......h.........',
      '.....h..........',
      '..f.h...........',
      '.f.h............',
      '..h.f...........',
      '...f............',
      '................',
    ],
  },
  shield: {
    palette: { i: '#c8c8cc', w: '#a47b48', W: '#6e4f2c' },
    rows: [
      '................',
      '................',
      '..KKKKKKKKKKKK..',
      '..KiiiiiiiiiiK..',
      '..KiwwwwwwwwiK..',
      '..KiwwwWWwwwiK..',
      '..KiwwwWWwwwiK..',
      '..KiwwwwwwwwiK..',
      '..KiwwwwwwwWiK..',
      '...KiwwwwwWiK...',
      '....KiwwwWiK....',
      '.....KiwwiK.....',
      '......KiiK......',
      '.......KK.......',
      '................',
      '................',
    ],
  },
  steak: {
    palette: { a: '#8a4a2a', b: '#5a2e18', c: '#d99a64' },
    rows: [
      '................',
      '................',
      '................',
      '................',
      '.....KKKKK......',
      '....KbaaaaKK....',
      '...KbaacaaaaK...',
      '..KbaaaaacaaaK..',
      '..KbaacaaaaaaK..',
      '..KbbaaaaaaabK..',
      '...KbbbaaabbK...',
      '....KKKbbbKK....',
      '.......KKK......',
      '................',
      '................',
      '................',
    ],
  },
  apple: {
    tone: 'gold',
    palette: { l: '#4cb04a' },
    rows: [
      '................',
      '................',
      '.......KhK......',
      '....KKKKhKlK....',
      '...KcaaKaaaaK...',
      '..KcaaaaaaaabK..',
      '..KcaaaaaaaabK..',
      '..KaaaaaaaaabK..',
      '..KaaaaaaaaabK..',
      '..KaaaaaaaabbK..',
      '...KaaaaaabbK...',
      '....KbbKKbbK....',
      '.....KK..KK.....',
      '................',
      '................',
      '................',
    ],
  },
  carrot: {
    tone: 'gold',
    palette: { l: '#4cb04a' },
    rows: [
      '................',
      '...........ll.l.',
      '...........Kll..',
      '.........KKaKl..',
      '........KcaaaK..',
      '.......KcaaabK..',
      '......KcaaabK...',
      '.....KcaaabK....',
      '....KcaabbK.....',
      '...KcaabK.......',
      '...KaabK........',
      '..KabK..........',
      '..KKK...........',
      '................',
      '................',
      '................',
    ],
  },
  torch: {
    palette: { f: '#fff2a8', F: '#ff8a1a' },
    rows: [
      '................',
      '................',
      '......KKKK......',
      '......KffK......',
      '......KfFK......',
      '......KFFK......',
      '......KhhK......',
      '......KhHK......',
      '......KhHK......',
      '......KhHK......',
      '......KhHK......',
      '......KhHK......',
      '......KHHK......',
      '......KKKK......',
      '................',
      '................',
    ],
  },
  xpbottle: {
    palette: { d: '#8a5a32', g: '#bfefff', w: '#ffffff', x: '#7ad83c', X: '#e4ff7a' },
    rows: [
      '................',
      '................',
      '......KKKK......',
      '......KddK......',
      '.....KKggKK.....',
      '....KgwgggK.....',
      '...KgwxxxxgK....',
      '...KgxxXxxgK....',
      '...KgxxxxXgK....',
      '...KgxXxxxgK....',
      '....KgxxxgK.....',
      '.....KKKKK......',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  pearl: {
    palette: { a: '#1f8f7a', b: '#0f4f45', c: '#7fe8d2', e: '#0c3b33', E: '#22e0dd' },
    rows: [
      '................',
      '................',
      '................',
      '......KKKK......',
      '....KKcaaaKK....',
      '...KcaaaaaaaK...',
      '...KcaeeaaaaK...',
      '...KaaeEeaabK...',
      '...KaaaeaaabK...',
      '...KaaaaaabbK...',
      '....KKabbbKK....',
      '......KKKK......',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  totem: {
    tone: 'gold',
    palette: { e: '#2f9e44', g: '#22a050' },
    rows: [
      '................',
      '......KKKK......',
      '.....KaaaaK.....',
      '.....KaeaeK.....',
      '.....KaaaaK.....',
      '..KKKKbaabKKKK..',
      '..KcaaaaaaaabK..',
      '..KKKKaaaaKKKK..',
      '.....KgaagK.....',
      '.....KaaaaK.....',
      '.....KabbaK.....',
      '......KbbK......',
      '......KKKK......',
      '................',
      '................',
      '................',
    ],
  },
  shulker: {
    palette: { a: '#8f5fb5', b: '#5e3a80', c: '#c79ae8' },
    rows: [
      '................',
      '................',
      '................',
      '..KKKKKKKKKKKK..',
      '..KcccccccccaK..',
      '..KcaaaaaaaabK..',
      '..KaaaaaaaaabK..',
      '..KKKKKKKKKKKK..',
      '..KaaaaKKaaabK..',
      '..KaaaaKKaaabK..',
      '..KaaaaaaaaabK..',
      '..KabbbbbbbbbK..',
      '..KKKKKKKKKKKK..',
      '................',
      '................',
      '................',
    ],
  },
  key: {
    tone: 'vote',
    rows: [
      '................',
      '..KKKKK.........',
      '.KcaaabK........',
      '.KaKKKaK........',
      '.KaK.KaK........',
      '.KaKKKbK........',
      '.KabbbbKK.......',
      '..KKKKKabK......',
      '.......KabK.....',
      '........KabK....',
      '.........KabK...',
      '........KKKabK..',
      '........KaK.KbK.',
      '........KKK..K..',
      '................',
      '................',
    ],
  },
  tokens: {
    tone: 'gold',
    rows: [
      '................',
      '................',
      '................',
      '....KKKKKKKK....',
      '...KcaaaaaabK...',
      '...KbbbbbbbbK...',
      '...KKKKKKKKKK...',
      '...KcaaaaaabK...',
      '...KbbbbbbbbK...',
      '...KKKKKKKKKK...',
      '...KcaaaaaabK...',
      '...KbbbbbbbbK...',
      '...KKKKKKKKKK...',
      '................',
      '................',
      '................',
    ],
  },
  points: {
    palette: { a: '#22e0dd', b: '#128a88', c: '#c8fff9' },
    rows: [
      '................',
      '................',
      '.......KK.......',
      '......KcaK......',
      '.....KcaabK.....',
      '....KcaaaabK....',
      '...KcaaaaaabK...',
      '...KaaaaaaabK...',
      '...KaaaaaabbK...',
      '....KaaaabbK....',
      '.....KaabbK.....',
      '......KbbK......',
      '.......KK.......',
      '................',
      '................',
      '................',
    ],
  },
  nametag: {
    tone: 'tagCommon',
    palette: { s: '#c8c8cc' },
    rows: [
      '................',
      '................',
      '................',
      '.ss.............',
      '...sKKKKKKKKKKK.',
      '...KcaaaaaaaaaK.',
      '..KaaKaaaaaaabK.',
      '..KaaaaaaaaaabK.',
      '...KaaaaaaaabbK.',
      '....KKKKKKKKKKK.',
      '................',
      '................',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  chatbubble: {
    palette: { r: '#e8203a', o: '#ff8a1a', y: '#ffd23f', g: '#4cb04a', t: '#22e0dd', m: '#d62e8a' },
    rows: [
      '................',
      '................',
      '..KKKKKKKKKKKK..',
      '.KrrrrrrrrrrrrK.',
      '.KooooooooooooK.',
      '.KyyyyyyyyyyyyK.',
      '.KggggggggggggK.',
      '.KttttttttttttK.',
      '.KmmmmmmmmmmmmK.',
      '..KKKKKKKKKKKK..',
      '...KmK..........',
      '...KK...........',
      '................',
      '................',
      '................',
      '................',
    ],
  },
  glow: {
    palette: { w: '#22e0dd', y: '#ffffff' },
    rows: [
      '................',
      '................',
      '.......K........',
      '......KwK.......',
      '......KwK.......',
      '.....KwywK......',
      '..KKKwyyywKKK...',
      '.KwwwyyyyywwwK..',
      '..KKKwyyywKKK...',
      '.....KwywK......',
      '......KwK.......',
      '......KwK.......',
      '.......K........',
      '................',
      '................',
      '................',
    ],
  },
  banner1: { ...banner(1), tone: 'vip' },
  banner2: { ...banner(2), tone: 'vip' },
  banner3: { ...banner(3), tone: 'mvp' },
  banner4: { ...banner(4), tone: 'mvp' },
  banner5: { ...banner(5), tone: 'mvpgold' },
}

/** Horizontal colour runs [x, y, width, fill] for one sprite, ready to draw as SVG rects. */
export function spriteRuns(ref: SpriteRef): [number, number, number, string][] {
  const def = shapes[ref.shape]
  const tone = spriteTones[ref.tone ?? def.tone ?? 'iron']
  const palette: Record<string, string> = { K, ...HANDLE, ...tone, ...(def.palette ?? {}) }
  const runs: [number, number, number, string][] = []
  def.rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const ch = row[x]
      let w = 1
      while (x + w < row.length && row[x + w] === ch) w++
      const fill = ch === '.' ? undefined : palette[ch]
      if (fill) runs.push([x, y, w, fill])
      x += w
    }
  })
  return runs
}
