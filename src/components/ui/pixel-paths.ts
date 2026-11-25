/**
 * Turns pixel-art colour runs into as few SVG nodes as possible.
 * Owner: PIXEL UI DESIGNER (added by the tech fixer for page weight).
 *
 * Drawing every run as its own <rect> put 1,600 to 8,000 SVG nodes on a page, and the same
 * markup again in the RSC payload. Here each colour becomes ONE <path>, and runs with the same
 * x and width on consecutive rows merge into one rectangle. A 16x16 icon goes from ~40-80
 * nodes to one per palette colour (usually 3-8). It looks exactly the same: every pixel is
 * still a whole unit square, drawn with shape-rendering="crispEdges".
 */

/** One horizontal run of a single colour: [x, y, width, colour]. */
export type PixelRun = readonly [x: number, y: number, width: number, colour: string]

export interface PixelPath {
  /** The run's colour (or class key for token-coloured sprites). */
  fill: string
  d: string
}

export function runsToPaths(runs: readonly PixelRun[]): PixelPath[] {
  type Box = { x: number; y: number; w: number; h: number }
  const boxes = new Map<string, Box[]>()
  /** The box that can still grow downwards, per colour + x + width. */
  const open = new Map<string, Box>()

  for (const [x, y, w, fill] of runs) {
    const key = `${fill}|${x}|${w}`
    const prev = open.get(key)
    if (prev && prev.y + prev.h === y) {
      prev.h += 1
      continue
    }
    const box = { x, y, w, h: 1 }
    open.set(key, box)
    const list = boxes.get(fill)
    if (list) list.push(box)
    else boxes.set(fill, [box])
  }

  return [...boxes].map(([fill, list]) => ({
    fill,
    d: list.map((b) => `M${b.x} ${b.y}h${b.w}v${b.h}h-${b.w}z`).join(''),
  }))
}

/** Small memo so the same icon is only converted once per server/client process. */
export function memoPaths<K>(cache: Map<K, PixelPath[]>, key: K, build: () => readonly PixelRun[]): PixelPath[] {
  let hit = cache.get(key)
  if (!hit) {
    hit = runsToPaths(build())
    cache.set(key, hit)
  }
  return hit
}
