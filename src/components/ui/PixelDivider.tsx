export type PixelDividerVariant = 'blocks' | 'stitch' | 'grass' | 'rail' | 'cloth'

export interface PixelDividerProps {
  /**
   * blocks = sunburst block row with a gem in the middle (dark backgrounds)
   * stitch = dashed thread line (paper, books)
   * grass  = a strip of grass block (between big sections)
   * rail   = wooden ties under two iron rails (step-by-step flows)
   * cloth  = a band of festival weave
   */
  variant?: PixelDividerVariant
  /**
   * Decorative by default (hidden from screen readers). Set false when the
   * divider marks a real change of topic: it then renders a semantic <hr>.
   */
  decorative?: boolean
  className?: string
}

/** Pixel section divider. Owner: PIXEL UI DESIGNER. */
export default function PixelDivider({ variant = 'blocks', decorative = true, className }: PixelDividerProps) {
  const cls = ['kc-divider', `kc-divider--${variant}`, className].filter(Boolean).join(' ')
  if (!decorative) return <hr className={cls} />
  return <div className={cls} aria-hidden="true" />
}
