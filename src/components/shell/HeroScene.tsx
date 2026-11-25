import type { CSSProperties, ReactNode } from 'react'
import Link from 'next/link'
import Breadcrumbs, { type Crumb } from '@/components/ui/Breadcrumbs'
import Bunting from '@/components/ui/Bunting'
import Lanterns from '@/components/ui/Lanterns'
import NameTag from '@/components/ui/NameTag'
import PixelIcon from '@/components/ui/PixelIcon'
import type { ChatColor } from '@/components/ui/TooltipCard'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import PlayerSprite, { type PlayerLook } from './PlayerSprite'
import s from './HeroScene.module.css'

/** One signature scene per site section, so the first screen tells you where you are. */
export type HeroSceneName = 'bookshelf' | 'market' | 'plaza' | 'ballot' | 'signpost'

/** One arrow board on the signpost scene. A real link. */
export interface HeroPointer {
  label: string
  href: string
  /** Small line under the label ("Stage 1 · 3 guides"). */
  hint?: string
  /** Which way the board points. Default right. */
  dir?: 'left' | 'right'
}

export interface HeroSceneProps {
  scene: HeroSceneName
  title: ReactNode
  eyebrow?: string
  lead?: ReactNode
  crumbs?: Crumb[]
  icon?: PixelIconName
  children?: ReactNode
  /** ballot: the piece on the pedestal (the vote chest). */
  art?: ReactNode
  /** signpost: arrow boards nailed to the post. */
  pointers?: HeroPointer[]
  /** signpost: accessible name of the arrow-board nav. */
  pointersLabel?: string
}

/* ---------------------------------------------------------------------------------------- */
/* Wiki: a bookshelf wall, the title on a hanging sign, the lead on a pinned paper note.     */
/* ---------------------------------------------------------------------------------------- */
function Bookshelf({ title, eyebrow, lead, crumbs, icon, children }: HeroSceneProps) {
  return (
    <section className={`${s.scene} ${s.bookshelf}`}>
      <div className={s.wall} aria-hidden="true" />
      <Lanterns count={2} kind="lantern" className={s.sceneLanterns} />
      <div className={`kc-container ${s.inner} ${s.shelfInner}`}>
        {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} className={s.crumbs} /> : null}
        <div className={s.hsign}>
          <span className={s.bracket} aria-hidden="true" />
          <span className={`${s.chain} ${s.chainL}`} aria-hidden="true" />
          <span className={`${s.chain} ${s.chainR}`} aria-hidden="true" />
          <div className={s.hsignBoard}>
            {icon ? <PixelIcon name={icon} size={48} className={s.hsignIcon} /> : null}
            <div className={s.hsignText}>
              {eyebrow ? <span className={s.hsignEyebrow}>{eyebrow}</span> : null}
              <h1 className={s.hsignTitle}>{title}</h1>
            </div>
          </div>
        </div>
        {lead ? <p className={s.note}>{lead}</p> : null}
        {children ? <div className={`${s.actions} ${s.shelfActions}`}>{children}</div> : null}
      </div>
      <div className={s.floor} aria-hidden="true" />
    </section>
  )
}

/* ---------------------------------------------------------------------------------------- */
/* Store: a market stall with a striped wool awning, a painted shop sign and goods on the    */
/* counter. The lead hangs on a price tag.                                                   */
/* ---------------------------------------------------------------------------------------- */
const GOODS: PixelIconName[] = ['crown', 'key', 'chest', 'tag', 'gem', 'firework']

function Market({ title, eyebrow, lead, crumbs, icon, children }: HeroSceneProps) {
  return (
    <section className={`${s.scene} ${s.market}`}>
      <div className={`kc-container ${s.inner} ${s.marketInner}`}>
        {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} className={s.crumbs} /> : null}
        <div className={s.stall}>
          <div className={s.awning} aria-hidden="true">
            <span className={s.valance} />
          </div>
          <div className={s.stallBack}>
            <div className={s.shopSign}>
              {icon ? <PixelIcon name={icon} size={48} className={s.shopIcon} /> : null}
              <div>
                {eyebrow ? <span className={s.shopEyebrow}>{eyebrow}</span> : null}
                <h1 className={s.shopTitle}>{title}</h1>
              </div>
            </div>
            {lead ? (
              <div className={s.tagWrap}>
                <p className={s.tag}>{lead}</p>
              </div>
            ) : null}
            {children ? <div className={`${s.actions} ${s.stallActions}`}>{children}</div> : null}
            <div className={s.goods} aria-hidden="true">
              {GOODS.map((g) => (
                <span key={g} className={s.good}>
                  <PixelIcon name={g} size={48} />
                </span>
              ))}
            </div>
          </div>
          <div className={s.counter} aria-hidden="true" />
        </div>
      </div>
      <div className={`${s.ground} ${s.groundCobble}`} aria-hidden="true" />
    </section>
  )
}

/* ---------------------------------------------------------------------------------------- */
/* Community: the festival plaza, a few name-tagged players hanging out under lamp posts.    */
/* The tags say what people do here; they are not real player names.                        */
/* ---------------------------------------------------------------------------------------- */
const CROWD: { name: string; prefix?: string; tone?: ChatColor; look: PlayerLook; emote?: PixelIconName }[] = [
  {
    name: 'You',
    prefix: 'New',
    tone: 'green',
    emote: 'heart',
    look: { skin: ['#c98b5e', '#ad7148'], hair: ['#2b1d14', '#1b120a'], shirt: ['#1fb5b2', '#14807e'], pants: ['#2d4d8a', '#1e3462'], boots: '#3a2716' },
  },
  {
    name: 'Builder',
    look: { skin: ['#f0c39a', '#d9a47a'], hair: ['#7a4a22', '#5a3416'], shirt: ['#f2b51f', '#b78310'], pants: ['#5a3c25', '#3e2918'], boots: '#2a2a2a', long: true },
  },
  {
    name: 'Trader',
    look: { skin: ['#8d5a36', '#734628'], hair: ['#151515', '#000000'], shirt: ['#4cb04a', '#2f7a2e'], pants: ['#3c3c44', '#26262c'], boots: '#2a2a2a' },
  },
  {
    name: 'Raider',
    look: { skin: ['#e0a878', '#c48a5c'], hair: ['#1a1a1a', '#000000'], shirt: ['#d62e8a', '#9e1f65'], pants: ['#26262c', '#16161a'], boots: '#3a2716', long: true },
  },
]

function Plaza({ title, eyebrow, lead, crumbs, children }: HeroSceneProps) {
  return (
    <section className={`${s.scene} ${s.plaza}`}>
      <div className={`kc-container ${s.inner} ${s.plazaInner}`}>
        <div className={s.plazaText}>
          {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} /> : null}
          {eyebrow ? <span className={s.floatTag}>{eyebrow}</span> : null}
          <h1 className={s.skyTitle}>{title}</h1>
          {lead ? (
            <p className={s.chatLead}>
              <span className={s.chatTag} aria-hidden="true">
                [Kasadya]{' '}
              </span>
              {lead}
            </p>
          ) : null}
          {children ? <div className={s.actions}>{children}</div> : null}
        </div>
        <div className={s.crowd} aria-hidden="true">
          <Bunting flags={9} sag={10} lights className={s.crowdBunting} />
          <span className={s.lamp}>
            <PixelIcon name="lantern" size={32} />
          </span>
          {CROWD.map((p, i) => (
            <span
              key={p.name}
              className={[s.player, i > 2 && s.playerExtra, p.emote && s.playerEmote].filter(Boolean).join(' ')}
              style={{ '--bob': `${i * -0.6}s` } as CSSProperties}
            >
              {p.emote ? (
                <span className={s.emote}>
                  <PixelIcon name={p.emote} size={16} />
                </span>
              ) : null}
              <NameTag prefix={p.prefix} tone={p.tone} className={s.playerTag}>
                {p.name}
              </NameTag>
              <PlayerSprite look={p.look} size={48} />
            </span>
          ))}
          <span className={s.lamp}>
            <PixelIcon name="lantern" size={32} />
          </span>
        </div>
      </div>
      <div className={s.plazaFloor} aria-hidden="true" />
    </section>
  )
}

/* ---------------------------------------------------------------------------------------- */
/* Vote: the locked ballot chest on a stone pedestal; the lead reads like an item tooltip.   */
/* ---------------------------------------------------------------------------------------- */
function Ballot({ title, eyebrow, lead, crumbs, icon, children, art }: HeroSceneProps) {
  return (
    <section className={`${s.scene} ${s.ballot}`}>
      <div className={`kc-container ${s.inner} ${s.ballotInner}`}>
        {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} className={s.crumbs} /> : null}
        <div className={s.altar}>
          <span className={s.halo} aria-hidden="true" />
          <div className={s.altarArt}>{art ?? <PixelIcon name={icon ?? 'chest'} size={128} />}</div>
          <span className={s.pedestal} aria-hidden="true" />
        </div>
        <div className={s.ballotText}>
          <h1 className={s.skyTitle}>{title}</h1>
          {lead || eyebrow ? (
            <div className={s.lore}>
              {eyebrow ? <span className={s.loreTitle}>{eyebrow}</span> : null}
              {lead ? <p className={s.loreText}>{lead}</p> : null}
            </div>
          ) : null}
          {children ? <div className={s.actions}>{children}</div> : null}
        </div>
      </div>
      <div className={`${s.ground} ${s.groundStone}`} aria-hidden="true" />
    </section>
  )
}

/* ---------------------------------------------------------------------------------------- */
/* Guides: a signpost on a dirt path. The title is on the big board; the arrow boards are    */
/* links to where you go next.                                                               */
/* ---------------------------------------------------------------------------------------- */
function Signpost({ title, eyebrow, lead, crumbs, icon, children, pointers, pointersLabel }: HeroSceneProps) {
  return (
    <section className={`${s.scene} ${s.trail}`}>
      <span className={s.fence} aria-hidden="true" />
      <div className={`kc-container ${s.inner} ${s.trailInner}`}>
        {crumbs && crumbs.length > 0 ? <Breadcrumbs items={crumbs} className={s.crumbs} /> : null}
        <div className={s.signpost}>
          <span className={s.post} aria-hidden="true" />
          <div className={s.postBoard}>
            {eyebrow ? <span className={s.postEyebrow}>{eyebrow}</span> : null}
            <div className={s.postHead}>
              {icon ? <PixelIcon name={icon} size={48} className={s.postIcon} /> : null}
              <h1 className={s.postTitle}>{title}</h1>
            </div>
            {lead ? <p className={s.postLead}>{lead}</p> : null}
          </div>
          {pointers && pointers.length > 0 ? (
            <nav className={s.arrows} aria-label={pointersLabel ?? 'Where to next'}>
              <ul className={s.arrowList}>
                {pointers.map((p) => {
                  const body = (
                    <>
                      <span className={s.arrowLabel}>{p.label}</span>
                      {p.hint ? <span className={s.arrowHint}>{p.hint}</span> : null}
                    </>
                  )
                  return (
                    <li key={`${p.href}-${p.label}`} className={s.arrowItem} data-dir={p.dir ?? 'right'}>
                      {p.href.startsWith('#') ? (
                        <a href={p.href} className={s.arrow}>
                          {body}
                        </a>
                      ) : (
                        <Link href={p.href} className={s.arrow}>
                          {body}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
          ) : null}
        </div>
        {children ? <div className={`${s.actions} ${s.trailSide}`}>{children}</div> : null}
      </div>
      <div className={s.trailGround} aria-hidden="true">
        <span className={s.path} />
      </div>
    </section>
  )
}

/**
 * Signature hero scenes for the site sections (wiki, store, community, vote, guides).
 * Rendered by <PageHero scene="...">; every scene renders the page's single <h1>.
 * Original art only: CSS shapes plus the 16x16 textures in /public/textures.
 * Owner: PIXEL UI DESIGNER.
 */
export default function HeroScene(props: HeroSceneProps) {
  switch (props.scene) {
    case 'bookshelf':
      return <Bookshelf {...props} />
    case 'market':
      return <Market {...props} />
    case 'plaza':
      return <Plaza {...props} />
    case 'ballot':
      return <Ballot {...props} />
    case 'signpost':
      return <Signpost {...props} />
  }
}
