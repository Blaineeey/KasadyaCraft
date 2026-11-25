import { runsToPaths, type PixelPath, type PixelRun } from '@/components/ui/pixel-paths'

/** Two shades per part: [face, shadow]. Any CSS colour. */
type Pair = readonly [string, string]

export interface PlayerLook {
  skin: Pair
  hair: Pair
  shirt: Pair
  pants: Pair
  boots: string
  /** Hair down to the jaw instead of a short cut. */
  long?: boolean
}

export interface PlayerSpriteProps {
  look: PlayerLook
  /** Rendered width in CSS px (multiples of 16 keep pixels crisp). Height is twice the width. */
  size?: number
  className?: string
}

/*
 * An original 16x32 front-facing blocky player (head 8, body 12, legs 12), drawn from
 * strings like PixelSprite but with free colours per look, so the plaza crowd can mix
 * skin tones, hair and shirts. Keys: h/H hair, s/S skin, w eye white, e eye, m mouth,
 * t/T shirt, p/P trousers, b boots.
 */
const HEAD_SHORT = [
  '....hhhhhhhh....',
  '....hhhhhhhh....',
  '....hhsssshh....',
  '....hssssssh....',
  '....swessews....',
  '....ssssssss....',
  '....sssmmsss....',
  '....SssssssS....',
]

const HEAD_LONG = [
  '....hhhhhhhh....',
  '....hhhhhhhh....',
  '....hhsssshh....',
  '....hssssssh....',
  '....hwessewh....',
  '....hssssssh....',
  '....hssmmssh....',
  '....HSssssSH....',
]

const BODY = [
  'TTTTttttttttTTTT',
  'TTTTttttttttTTTT',
  'TTTTttttttttTTTT',
  'ssssttttttttssss',
  'ssssttttttttssss',
  'ssssttttttttssss',
  'ssssttttttttssss',
  'ssssttttttttssss',
  'ssssttttttttssss',
  'ssssttttttttssss',
  'SSSSttttttttSSSS',
  'SSSSTTTTTTTTSSSS',
]

const LEGS = [
  ...Array.from({ length: 9 }, () => '....pppPPppp....'),
  '....bbbbbbbb....',
  '....bbbbbbbb....',
  '....bbbbbbbb....',
]

const cache = new Map<string, PixelPath[]>()

function playerPaths(look: PlayerLook): PixelPath[] {
  const key = JSON.stringify(look)
  const hit = cache.get(key)
  if (hit) return hit

  const palette: Record<string, string> = {
    h: look.hair[0],
    H: look.hair[1],
    s: look.skin[0],
    S: look.skin[1],
    w: '#ffffff',
    e: '#24305e',
    m: '#7a3b2e',
    t: look.shirt[0],
    T: look.shirt[1],
    p: look.pants[0],
    P: look.pants[1],
    b: look.boots,
  }
  const rows = [...(look.long ? HEAD_LONG : HEAD_SHORT), ...BODY, ...LEGS]
  const runs: PixelRun[] = []
  rows.forEach((row, y) => {
    let x = 0
    while (x < row.length) {
      const c = row[x]
      let len = 1
      while (row[x + len] === c) len++
      if (c !== '.') runs.push([x, y, len, palette[c] ?? '#ff00ff'])
      x += len
    }
  })
  const paths = runsToPaths(runs)
  cache.set(key, paths)
  return paths
}

/**
 * Decorative blocky player for hero scenes (always aria-hidden: the name tag next
 * to it carries any meaning). Server-safe. Owner: PIXEL UI DESIGNER.
 */
export default function PlayerSprite({ look, size = 48, className }: PlayerSpriteProps) {
  const paths = playerPaths(look)
  return (
    <svg
      viewBox="0 0 16 32"
      width={size}
      height={size * 2}
      shapeRendering="crispEdges"
      focusable="false"
      aria-hidden="true"
      className={['kc-icon', className].filter(Boolean).join(' ')}
    >
      {paths.map((p) => (
        <path key={p.fill} fill={p.fill} d={p.d} />
      ))}
    </svg>
  )
}
