import type { ReactNode } from 'react'
import s from './DepthBand.module.css'

export interface DepthBandProps {
  /** Which layer of the world this band is. The home page digs down as you scroll. */
  material: 'dirt' | 'stone' | 'deepslate' | 'bedrock'
  /** Y level shown in the corner, F3-style. */
  y: number
  id?: string
  labelledBy?: string
  children: ReactNode
}

/**
 * Full-width textured band for home sections: dirt, then stone, deepslate and
 * bedrock as you scroll. A tiny "Y: 62" coordinate sits in the corner.
 * Content goes inside .kc-container; text sits on a heavily darkened texture.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function DepthBand({ material, y, id, labelledBy, children }: DepthBandProps) {
  return (
    <section id={id} className={s.band} data-material={material} aria-labelledby={labelledBy}>
      <span className={s.coords} aria-hidden="true">
        Y: {y}
      </span>
      <div className={`kc-container ${s.inner}`}>{children}</div>
    </section>
  )
}
