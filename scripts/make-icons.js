// Builds the site icons from ONE original 16x16 pixel tile (a chunky white K on gold -> orange
// -> red festival bands), scaled by whole pixels so it stays crisp:
//   src/app/favicon.ico (16/32/48), src/app/apple-icon.png (180), public/icon-192.png, public/icon-512.png
// Run from the repo root: node scripts/make-icons.js   (uses sharp, which ships with next)
const path = require('path')
const fs = require('fs')
const REPO = path.resolve(__dirname, '..')
const sharp = require(path.join(REPO, 'node_modules/sharp'))
const OUT = REPO

const PAL = {
  '.': [0, 0, 0, 0],
  K: [0x17, 0x12, 0x1c, 255], // outline / letter shadow
  W: [255, 255, 255, 255], // letter
  H: [0xff, 0xf3, 0xb0, 255], // highlight
  y: [0xff, 0xd2, 0x3f, 255], // gold
  a: [0xff, 0xae, 0x2b, 255], // amber
  o: [0xff, 0x8a, 0x1a, 255], // orange
  r: [0xe8, 0x20, 0x3a, 255], // red
  R: [0xa8, 0x16, 0x2a, 255], // dark red
  P: [0x12, 0x0e, 0x1a, 255], // page background (apple icon frame)
}

// Background bands per interior row (1..14).
const band = (y) => (y <= 3 ? 'y' : y <= 6 ? 'a' : y <= 9 ? 'o' : y <= 12 ? 'r' : 'R')

const K_GLYPH = [
  'WWW....WWW',
  'WWW...WWW.',
  'WWW..WWW..',
  'WWW.WWW...',
  'WWWWWW....',
  'WWWWWW....',
  'WWW.WWW...',
  'WWW..WWW..',
  'WWW...WWW.',
  'WWW....WWW',
]

function tile() {
  const g = Array.from({ length: 16 }, () => Array(16).fill('.'))
  for (let y = 0; y < 16; y++)
    for (let x = 0; x < 16; x++) {
      const edge = x === 0 || y === 0 || x === 15 || y === 15
      const corner = (x === 0 || x === 15) && (y === 0 || y === 15)
      if (corner) continue
      if (edge) { g[y][x] = 'K'; continue }
      let c = band(y)
      if (y === 1 || x === 1) c = y <= 3 ? 'H' : c === 'a' ? 'y' : c === 'o' ? 'a' : c === 'r' ? 'o' : 'r' // top-left bevel
      if (y === 14 || x === 14) c = y >= 13 ? 'K' : 'R' // bottom-right bevel
      g[y][x] = c
    }
  // bottom-right bevel uses the dark red, not the outline, except the last row
  for (let x = 1; x < 15; x++) g[14][x] = 'R'
  for (let y = 1; y < 15; y++) g[y][14] = g[y][14] === 'H' ? 'y' : 'R'
  const ox = 3, oy = 3
  K_GLYPH.forEach((row, j) => [...row].forEach((ch, i) => { if (ch !== 'W') return; for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1],[1,1]]) g[oy + j + dy][ox + i + dx] = 'K' }))
  K_GLYPH.forEach((row, j) => [...row].forEach((ch, i) => { if (ch === 'W') g[oy + j][ox + i] = 'W' }))
  return g
}

function raw(grid) {
  const h = grid.length, w = grid[0].length
  const buf = Buffer.alloc(w * h * 4)
  grid.forEach((row, y) => row.forEach((ch, x) => PAL[ch].forEach((v, k) => (buf[(y * w + x) * 4 + k] = v))))
  return { buf, w, h }
}

async function png(grid, scale) {
  const { buf, w, h } = raw(grid)
  return sharp(buf, { raw: { width: w, height: h, channels: 4 } })
    .resize(w * scale, h * scale, { kernel: 'nearest' })
    .png({ compressionLevel: 9, palette: true, colors: 16 })
    .toBuffer()
}

function ico(pngs) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngs.length, 4)
  const dir = Buffer.alloc(16 * pngs.length)
  let offset = 6 + dir.length
  pngs.forEach(({ size, data }, i) => {
    const o = i * 16
    dir[o] = size >= 256 ? 0 : size
    dir[o + 1] = size >= 256 ? 0 : size
    dir[o + 2] = 0
    dir[o + 3] = 0
    dir.writeUInt16LE(1, o + 4)
    dir.writeUInt16LE(32, o + 6)
    dir.writeUInt32LE(data.length, o + 8)
    dir.writeUInt32LE(offset, o + 12)
    offset += data.length
  })
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)])
}

;(async () => {
  const t = tile()
  const sizes = [16, 32, 48]
  const pngs = await Promise.all(sizes.map(async (s) => ({ size: s, data: await png(t, s / 16) })))
  fs.writeFileSync(path.join(OUT, 'src/app/favicon.ico'), ico(pngs))
  // Apple: 18x18 grid (tile + 1px page-colour frame) x10 = 180, so iOS's rounded corners never cut the art.
  const framed = Array.from({ length: 18 }, (_, y) => Array.from({ length: 18 }, (_, x) => (x === 0 || y === 0 || x === 17 || y === 17 ? 'P' : t[y - 1][x - 1] === '.' ? 'P' : t[y - 1][x - 1])))
  fs.writeFileSync(path.join(OUT, 'src/app/apple-icon.png'), await png(framed, 10))
  const solid = t.map((row) => row.map((c) => (c === '.' ? 'P' : c)))
  fs.writeFileSync(path.join(OUT, 'public/icon-192.png'), await png(solid, 12))
  fs.writeFileSync(path.join(OUT, 'public/icon-512.png'), await png(solid, 32))
  console.log('icons written')
})()
