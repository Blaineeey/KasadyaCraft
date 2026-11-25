import type { ReactNode } from 'react'
import Breadcrumbs, { type Crumb } from '@/components/ui/Breadcrumbs'
import Lanterns from '@/components/ui/Lanterns'
import PixelIcon from '@/components/ui/PixelIcon'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import HeroScene, { type HeroPointer, type HeroSceneName } from './HeroScene'

export type { HeroPointer, HeroSceneName }

export interface PageHeroProps {
  title: ReactNode
  eyebrow?: string
  lead?: ReactNode
  crumbs?: Crumb[]
  icon?: PixelIconName
  /** Buttons / CopyIp etc. under the lead. */
  children?: ReactNode
  /** Ground block the hero sits on (plain hero only). */
  ground?: 'grass' | 'stone' | 'planks' | 'none'
  /** Hanging festival lanterns on wide screens. Default true (plain hero only). */
  lanterns?: boolean
  /**
   * Signature scene for a site section, so its first screen is recognisable at a glance:
   * bookshelf (wiki), market (store), plaza (community), ballot (vote), signpost (guides).
   * Leave it out for the plain sky hero.
   */
  scene?: HeroSceneName
  /** ballot scene: the piece standing on the pedestal (e.g. the vote chest). */
  art?: ReactNode
  /** signpost scene: arrow boards (links) nailed to the post. */
  pointers?: HeroPointer[]
  /** signpost scene: accessible name of the arrow-board nav. */
  pointersLabel?: string
}

/**
 * Top section for every inner page (the home page has its own hero).
 * With `scene`, the section's signature scene renders instead (see HeroScene.tsx).
 * Plain hero: the title is outlined pixel type straight on the sky (readable day and
 * night); the lead sits on a dark plate. The icon hangs in a wooden item frame, and the
 * whole hero stands on a strip of blocks with grass tufts and flowers.
 * Renders the page's single <h1>. Owner: PIXEL UI DESIGNER.
 */
export default function PageHero({
  title,
  eyebrow,
  lead,
  crumbs,
  icon,
  children,
  ground = 'grass',
  lanterns = true,
  scene,
  art,
  pointers,
  pointersLabel,
}: PageHeroProps) {
  if (scene) {
    return (
      <HeroScene
        scene={scene}
        title={title}
        eyebrow={eyebrow}
        lead={lead}
        crumbs={crumbs}
        icon={icon}
        art={art}
        pointers={pointers}
        pointersLabel={pointersLabel}
      >
        {children}
      </HeroScene>
    )
  }

  return (
    <section className={`kc-pagehero kc-pagehero--${ground}`}>
      {lanterns ? <Lanterns count={3} className="kc-pagehero__lanterns" /> : null}
      <div className="kc-container kc-pagehero__inner">
        {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} /> : null}
        <div className="kc-pagehero__head">
          {icon ? (
            <span className="kc-pagehero__frame" aria-hidden="true">
              <PixelIcon name={icon} size={64} className="kc-pagehero__icon" />
            </span>
          ) : null}
          <div className="kc-pagehero__text">
            {eyebrow ? <span className="kc-pagehero__eyebrow t-label">{eyebrow}</span> : null}
            <h1 className="kc-pagehero__title">{title}</h1>
          </div>
        </div>
        {lead ? <p className="kc-pagehero__lead">{lead}</p> : null}
        {children ? <div className="kc-pagehero__actions">{children}</div> : null}
      </div>
      {ground !== 'none' ? <div className="kc-pagehero__ground" aria-hidden="true" /> : null}
    </section>
  )
}
