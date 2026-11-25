// Builds public/og.png (1200x630 share card): an original stepped pixel dusk sky, bunting, grass
// and dirt, the official logo (public/logo.png) and text drawn as outlines from the site's own OFL
// fonts. Run from the repo root after a build:
//   node scripts/make-og.js <folder with pixelify.woff2 silkscreen.woff2 silkscreen-bold.woff2 vt323.woff2 atkinson.woff2>
// (copy the latin .p. files from .next/static/media; kc-glyphs-400.woff2 is read from src/app/fonts).
const path = require('path')
const fs = require('fs')
const REPO = path.resolve(__dirname, '..')
const FONT_DIR = process.argv[2]
if (!FONT_DIR) throw new Error('Usage: node scripts/make-og.js <font folder>')
const sharp = require(path.join(REPO, 'node_modules/sharp'))
const fkMod = require(path.join(REPO, 'node_modules/next/dist/compiled/@next/font/dist/fontkit')).default
const fontkit = fkMod.default || fkMod
const F = (n) => fontkit(fs.readFileSync(n.startsWith('kc-') ? path.join(REPO, 'src/app/fonts', n) : path.join(FONT_DIR, n)))
const fonts = {
  pix: F('pixelify.woff2'),
  kc: F('kc-glyphs-400.woff2'),
  silk: F('silkscreen.woff2'),
  silkB: F('silkscreen-bold.woff2'),
  vt: F('vt323.woff2'),
  atk: F('atkinson.woff2'),
}
const KC_CHARS = new Set(['2', '3', '5', 'B', 'C', 'c'])

const W = 1200, H = 630, PX = 6

// deterministic noise
let seed = 20261125
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff)

/** Text as one SVG path. `pick` chooses a font per character (for the KC glyph patch). */
function text(str, size, x, y, fill, { font = fonts.pix, pick, spacing = 0, anchor = 'start' } = {}) {
  const parts = []
  let pen = 0
  for (const ch of [...str]) {
    const f = pick ? pick(ch) : font
    const run = f.layout(ch)
    const s = size / f.unitsPerEm
    run.glyphs.forEach((g, i) => {
      const pos = run.positions[i]
      parts.push({ g, s, at: pen + pos.xOffset * s, dy: pos.yOffset * s })
      pen += pos.xAdvance * s + spacing
    })
  }
  const width = pen - spacing
  const x0 = anchor === 'middle' ? x - width / 2 : anchor === 'end' ? x - width : x
  const d = parts.map(({ g, s, at, dy }) => g.path.transform(s, 0, 0, -s, x0 + at, y - dy).toSVG()).join(' ')
  return { svg: `<path fill="${fill}" d="${d}"/>`, width, d }
}

/** Outlined title like the site's H1: black ring + hard drop shadow, then the fill. */
function outlined(str, size, x, y, fill, opts) {
  const t = text(str, size, x, y, fill, opts)
  const ring = []
  for (const [dx, dy] of [[-3, 0], [3, 0], [0, -3], [0, 3], [-3, -3], [3, 3], [-3, 3], [3, -3]]) ring.push(`<path transform="translate(${dx} ${dy})" fill="#000" d="${t.d}"/>`)
  return `<path transform="translate(6 6)" fill="rgba(0,0,0,0.55)" d="${t.d}"/>${ring.join('')}${t.svg}`
}

function rect(x, y, w, h, fill) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}"/>`
}

const out = []
// ---- sky: stepped dusk bands (festival evening) ----
const SKY = ['#150e24', '#1c1230', '#25163b', '#331a47', '#481d52', '#661f58', '#8b2858', '#b53b53', '#de5a45']
const GROUND_Y = 540
SKY.forEach((c, i) => out.push(rect(0, i * 60, W, 60, c)))
// dithered band edges (checker row) so the steps read as pixels, not a gradient
SKY.forEach((c, i) => {
  if (i === 0) return
  for (let x = 0; x < W; x += PX * 2) out.push(rect(x + ((i % 2) * PX), i * 60 - PX, PX, PX, c))
})
// stars in the upper sky
for (let i = 0; i < 70; i++) {
  const x = Math.floor(rnd() * (W / PX)) * PX, y = Math.floor(rnd() * (200 / PX)) * PX + 66
  const big = rnd() > 0.85
  out.push(rect(x, y, big ? PX * 2 : PX, big ? PX * 2 : PX, rnd() > 0.5 ? '#fff3b0' : '#ffffff'))
}

// ---- bunting: a sagging string with pixel pennants ----
const FLAGS = ['#ffd23f', '#e8203a', '#22e0dd', '#d62e8a', '#ff8a1a']
const sag = (x) => Math.round((22 + 34 * Math.sin((Math.PI * x) / W)) / PX) * PX
for (let x = 0; x < W; x += PX) out.push(rect(x, sag(x), PX, PX, '#2b1d14'))
let fi = 0
for (let x = 18; x < W - 30; x += 60) {
  const top = sag(x + 18) + PX
  const c = FLAGS[fi++ % FLAGS.length]
  for (let r = 0; r < 7; r++) {
    const w = 42 - r * 6
    if (w <= 0) break
    const left = x + (42 - w) / 2
    out.push(rect(left, top + r * PX, w, PX, r === 0 ? '#00000055' : c))
    if (r > 0) out.push(rect(left, top + r * PX, PX, PX, '#ffffff33'))
  }
}

// ---- ground: grass top + dirt, original noise textures on a 6px grid ----
const GRASS = ['#5f9e3a', '#74b347', '#4f8a2f']
const DIRT = ['#7a5536', '#5a3c25', '#8b6440', '#6a4a2e']
out.push(rect(0, GROUND_Y, W, H - GROUND_Y, DIRT[0]))
for (let y = GROUND_Y; y < H; y += PX)
  for (let x = 0; x < W; x += PX) {
    const inGrass = y < GROUND_Y + 24 || (y < GROUND_Y + 36 && rnd() > 0.55)
    const pal = inGrass ? GRASS : DIRT
    const v = rnd()
    if (inGrass || v > 0.55) out.push(rect(x, y, PX, PX, pal[Math.floor(rnd() * pal.length)]))
  }
out.push(rect(0, GROUND_Y - PX, W, PX, '#000'))
// grass tufts poking up
for (let x = 0; x < W; x += PX * 5) if (rnd() > 0.5) out.push(rect(x, GROUND_Y - PX * 2, PX, PX, GRASS[1]))

// ---- the plate (right) ----
const P = { x: 560, y: 112, w: 600, h: 384 }
const notch = 6
out.push(`<path fill="#000" d="M${P.x + notch} ${P.y}h${P.w - 2 * notch}v${notch}h${notch}v${P.h - 2 * notch}h-${notch}v${notch}h-${P.w - 2 * notch}v-${notch}h-${notch}v-${P.h - 2 * notch}h${notch}z"/>`)
out.push(rect(P.x + 6, P.y + 6, P.w - 12, P.h - 12, '#120d1c'))
out.push(rect(P.x + 6, P.y + 6, P.w - 12, 4, '#3a2f4a'))
out.push(rect(P.x + 6, P.y + 6, 4, P.h - 12, '#3a2f4a'))
out.push(rect(P.x + 6, P.y + P.h - 10, P.w - 12, 4, '#07050b'))
out.push(rect(P.x + P.w - 10, P.y + 6, 4, P.h - 12, '#07050b'))

const L = P.x + 40
out.push(text('MINECRAFT JAVA SERVER', 24, L, P.y + 56, '#ffd23f', { font: fonts.silk, spacing: 1 }).svg)
const pickKc = (ch) => (KC_CHARS.has(ch) ? fonts.kc : fonts.pix)
const fit = (str, max, want, opts) => Math.min(want, Math.floor((want * max) / text(str, want, 0, 0, '#000', opts).width))
out.push(outlined('KasadyaCraft', fit('KasadyaCraft', P.w - 80 - 8, 72, { pick: pickKc }), L, P.y + 136, '#ffffff', { pick: pickKc }))
out.push(text('Survival with plots, player shops,', 29, L, P.y + 192, '#efe4cc', { font: fonts.atk }).svg)
out.push(text('daily quests and a dungeon boss.', 29, L, P.y + 230, '#efe4cc', { font: fonts.atk }).svg)

// IP block like the site's copy button: dark slot + gold "PLAY" key
const B = { x: L, y: P.y + 258, w: P.w - 80, h: 66 }
out.push(rect(B.x, B.y, B.w, B.h + 6, '#000'))
out.push(rect(B.x + 4, B.y + 4, B.w - 8, B.h - 8, '#050308'))
out.push(rect(B.x + 4, B.y + 4, B.w - 8, 3, '#2d2438'))
const keyW = 132
out.push(rect(B.x + B.w - keyW, B.y + 4, keyW - 4, B.h - 8, '#ffd23f'))
out.push(rect(B.x + B.w - keyW, B.y + 4, keyW - 4, 4, '#fff3b0'))
out.push(rect(B.x + B.w - keyW, B.y + B.h - 10, keyW - 4, 6, '#c98a12'))
out.push(rect(B.x + B.w - keyW - 4, B.y, 4, B.h, '#000'))
out.push(text('play.kasadyacraft.com', fit('play.kasadyacraft.com', B.w - keyW - 40, 48, { font: fonts.vt }), B.x + 18, B.y + 45, '#ffffff', { font: fonts.vt }).svg)
out.push(text('PLAY', 34, B.x + B.w - keyW / 2 - 2, B.y + 46, '#17121c', { pick: (ch) => (KC_CHARS.has(ch) ? fonts.kc : fonts.pix), anchor: 'middle' }).svg)

out.push(text('DUNGEON | CITY | PLOT | ADVENTURE', 16, L, P.y + P.h - 30, '#22e0dd', { font: fonts.silk, spacing: 1 }).svg)

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" shape-rendering="crispEdges">${out.join('')}</svg>`

;(async () => {
  // text paths need anti-aliasing, the blocks do not: render the scene crisp, text smooth
  const scene = await sharp(Buffer.from(svg)).png().toBuffer()
  const logo = await sharp(path.join(REPO, 'public/logo.png')).resize(470, 470, { kernel: 'lanczos3' }).toBuffer()
  const composed = await sharp(scene)
    .composite([{ input: logo, left: 52, top: 96 }])
    .png()
    .toBuffer()
  const pal = await sharp(composed).png({ compressionLevel: 9, palette: true, quality: 92, colors: 256, dither: 0.6 }).toBuffer()
  fs.writeFileSync(path.join(REPO, 'public/og.png'), pal)
  console.log('public/og.png', pal.length, 'bytes')
})()
