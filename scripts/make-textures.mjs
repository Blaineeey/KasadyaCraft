// Generates ORIGINAL 16x16 pixel textures as crisp SVGs (procedural, seeded).
// Nothing here is traced or copied from Mojang/Minecraft art: every tile is
// built from noise + simple rules, in KasadyaCraft's own palette.
//
// Usage (from the repo root):  node scripts/make-textures.mjs public/textures
// Owner: PIXEL UI DESIGNER. Re-run after editing; commit the SVGs.
import { writeFileSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'

const out = process.argv[2] ?? 'public/textures'
mkdirSync(out, { recursive: true })

function rng(seed) {
  let s = seed >>> 0
  return () => {
    s = (s + 0x6d2b79f5) >>> 0
    let t = s
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const N = 16
function grid(fill) {
  return Array.from({ length: N }, (_, y) => Array.from({ length: N }, (_, x) => fill(x, y)))
}
function pick(r, weighted) {
  const total = weighted.reduce((a, [, w]) => a + w, 0)
  let v = r() * total
  for (const [c, w] of weighted) {
    if ((v -= w) <= 0) return c
  }
  return weighted[0][0]
}
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16)
  const ch = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const t = amt < 0 ? 0 : 255
    return Math.round(v + (t - v) * Math.abs(amt))
  })
  return `#${ch.map((v) => v.toString(16).padStart(2, '0')).join('')}`
}
function toSvg(g, title) {
  let rects = ''
  for (let y = 0; y < N; y++) {
    let x = 0
    while (x < N) {
      const c = g[y][x]
      let w = 1
      while (x + w < N && g[y][x + w] === c) w++
      rects += `<rect x="${x}" y="${y}" width="${w}" height="1" fill="${c}"/>`
      x += w
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" shape-rendering="crispEdges"><title>${title}</title>${rects}</svg>\n`
}

const DIRT = [['#7a5536', 6], ['#6a482d', 4], ['#8c6542', 3], ['#5a3c25', 1.2], ['#9a7a5a', 0.5]]

const textures = {
  // Warm dirt with a few pale pebbles and dark clods
  dirt: () => {
    const r = rng(11)
    const g = grid(() => pick(r, DIRT))
    for (let i = 0; i < 4; i++) {
      const x = Math.floor(r() * N)
      const y = Math.floor(r() * N)
      g[y][x] = '#a88a66'
      g[y][(x + 1) % N] = '#5a3c25'
    }
    return g
  },
  // Grass block side: green cap with uneven drips over dirt
  grass: () => {
    const r = rng(23)
    const drip = Array.from({ length: N }, (_, x) => ((x * 7 + 3) % 5 === 0 ? 5 : 2 + Math.floor(r() * 3)))
    return grid((x, y) => {
      if (y < drip[x]) return pick(r, [['#5f9e3a', 5], ['#4f8a2f', 3], ['#74b347', 2]])
      if (y === drip[x]) return '#3f7226'
      return pick(r, DIRT)
    })
  },
  // Grass top (ground strips, footer lip)
  'grass-top': () => {
    const r = rng(31)
    return grid(() => pick(r, [['#5f9e3a', 6], ['#4f8a2f', 4], ['#74b347', 2.5], ['#43782a', 1]]))
  },
  // Smooth-ish stone: grey noise with darker clusters
  stone: () => {
    const r = rng(47)
    const g = grid(() => pick(r, [['#808080', 6], ['#747474', 4], ['#8e8e8e', 3], ['#686868', 1]]))
    for (let i = 0; i < 7; i++) {
      const cx = Math.floor(r() * N)
      const cy = Math.floor(r() * N)
      g[cy][cx] = '#5c5c5c'
      g[cy][(cx + 1) % N] = '#5c5c5c'
      if (r() > 0.5) g[(cy + 1) % N][cx] = '#666666'
    }
    return g
  },
  // Cobble: irregular stones in dark mortar. Hand-placed layout, tiles seamlessly.
  cobble: () => {
    const r = rng(53)
    const map = [
      'aaaa.bbbbb.cccc.',
      'aaaa.bbbbb.cccc.',
      'aaa.dbbbb.ccccc.',
      '...ddd....cccc..',
      'eee.ddddd.....ff',
      'eeee.dddd.gggg.f',
      'eeee.....ggggg.f',
      '.eee.hhh.gggg...',
      'i...hhhhh....jjj',
      'ii.hhhhhhh.jjjjj',
      'iii.hhhhh.jjjjj.',
      'iii......jjjj...',
      '...kkkk.....llll',
      'aa.kkkkk.mm.llll',
      'aaa.kkk.mmmm.ll.',
      'aaaa...mmmmm....',
    ]
    const tones = {}
    for (const ch of 'abcdefghijklm') tones[ch] = pick(r, [['#8a8a8a', 3], ['#7a7a7a', 3], ['#969696', 2], ['#6e6e6e', 1.5]])
    return grid((x, y) => {
      const ch = map[y][x]
      if (ch === '.') return r() > 0.7 ? '#3d3d3d' : '#4a4a4a'
      const above = map[(y + N - 1) % N][x]
      const below = map[(y + 1) % N][x]
      if (above !== ch) return '#a6a6a6' // lit top edge
      if (below !== ch) return '#5e5e5e' // shaded bottom edge
      return r() > 0.85 ? '#848484' : tones[ch]
    })
  },
  // Deepslate: dark, horizontal grain
  deepslate: () => {
    const r = rng(59)
    return grid((x, y) => {
      const band = y % 4 === 0 ? 1 : 0
      return band && r() > 0.3
        ? pick(r, [['#2b2b31', 3], ['#323238', 2]])
        : pick(r, [['#3c3c44', 5], ['#45454e', 3], ['#35353c', 3], ['#50505a', 0.6]])
    })
  },
  // Oak-ish planks: 4 boards with seams
  planks: () => {
    const r = rng(71)
    const offsets = [3, 11, 6, 13]
    return grid((x, y) => {
      const row = Math.floor(y / 4)
      if (y % 4 === 3) return '#6e4f2c'
      if (x === offsets[row]) return '#7c5a33'
      return pick(r, [['#a47b48', 6], ['#9a7142', 3], ['#b08752', 2.5], ['#8c6639', 0.8]])
    })
  },
  // Dark oak planks for the header, signs and wood panels
  'planks-dark': () => {
    const r = rng(83)
    const offsets = [9, 2, 12, 5]
    return grid((x, y) => {
      const row = Math.floor(y / 4)
      if (y % 4 === 3) return '#2e1f12'
      if (x === offsets[row]) return '#3a2716'
      return pick(r, [['#4a3220', 6], ['#432d1c', 3], ['#553a25', 2.5], ['#3b2818', 0.8]])
    })
  },
  // Obsidian-like night slab with faint violet flecks
  obsidian: () => {
    const r = rng(97)
    return grid(() => pick(r, [['#15101f', 7], ['#1c1529', 4], ['#100c18', 3], ['#2c1f45', 0.8], ['#3d2a63', 0.25]]))
  },
  // Parchment for guide "book" pages
  paper: () => {
    const r = rng(101)
    return grid(() => pick(r, [['#f1e4c6', 9], ['#ecdcb9', 4], ['#f6ebd2', 3], ['#e2cfa6', 0.7]]))
  },
  // Festival brick (warm terracotta) for accents
  terracotta: () => {
    const r = rng(113)
    return grid((x, y) => {
      if (y % 8 === 7) return '#7d3420'
      const off = Math.floor(y / 8) % 2 === 0 ? 0 : 4
      if ((x + off) % 8 === 7) return '#7d3420'
      return pick(r, [['#b4553a', 6], ['#a54b31', 3], ['#c26446', 2]])
    })
  },
  // Festival cloth: a banig-style over/under weave in the logo colours.
  // Warp threads run vertically, weft threads horizontally, 2px wide.
  cloth: () => {
    const r = rng(127)
    const warp = ['#e8203a', '#ffd23f', '#d62e8a', '#22e0dd']
    const weft = ['#ff8a1a', '#2a1630', '#ffd23f', '#2a1630']
    return grid((x, y) => {
      const over = (Math.floor(x / 2) + Math.floor(y / 2)) % 2 === 0
      const c = over ? warp[Math.floor(x / 4) % 4] : weft[Math.floor(y / 4) % 4]
      if (over && x % 2 === 1) return shade(c, -0.2)
      if (!over && y % 2 === 1) return shade(c, -0.2)
      return r() > 0.92 ? shade(c, 0.14) : c
    })
  },
  // Wool: soft cream felt (cushions, flags, sign backs)
  wool: () => {
    const r = rng(131)
    return grid((x, y) => {
      if ((x * 3 + y * 5) % 7 === 0) return '#d9cfbb'
      return pick(r, [['#efe7d6', 6], ['#e6dcc6', 4], ['#f7f1e4', 2], ['#d3c8b1', 0.6]])
    })
  },
  // Leaves: dense green with dark gaps (hedges, footer edge)
  leaves: () => {
    const r = rng(139)
    return grid(() => pick(r, [['#3f7a25', 5], ['#4f8a2f', 4], ['#2d5c1a', 2.4], ['#6aa83e', 1.6], ['#1d3a12', 1.2]]))
  },
  // Bookshelf: two shelves of coloured spines between plank boards
  bookshelf: () => {
    const r = rng(149)
    const spines = ['#a8162a', '#2b5cb8', '#3f7a25', '#c98a12', '#5b2a6a', '#128f8d', '#7a5536', '#d62e8a']
    const plank = () => pick(r, [['#a47b48', 5], ['#9a7142', 3], ['#b08752', 2]])
    const shelves = [0, 1].map(() => {
      const cols = []
      let x = 0
      while (x < N) {
        const w = r() > 0.6 ? 2 : 1
        const color = spines[Math.floor(r() * spines.length)]
        const top = Math.floor(r() * 2)
        for (let i = 0; i < w && x < N; i++) cols.push({ color, top, edge: i === 0 })
        x += w
      }
      return cols
    })
    return grid((x, y) => {
      if (y === 7 || y === 15) return '#6e4f2c'
      if (y === 0 || y === 8) return plank()
      const s = y < 8 ? 0 : 1
      const local = y < 8 ? y - 1 : y - 9
      const col = shelves[s][x]
      if (local < col.top) return '#2e1f12'
      if (col.edge) return shade(col.color, -0.25)
      if (local === 2) return shade(col.color, 0.25)
      return col.color
    })
  },
}

for (const [name, make] of Object.entries(textures)) {
  writeFileSync(join(out, `${name}.svg`), toSvg(make(), `${name} texture (original, KasadyaCraft)`))
  console.log('wrote', name)
}
