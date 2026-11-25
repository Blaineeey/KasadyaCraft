import type { Metadata } from 'next'
import Link from 'next/link'
import GuideProgress from '@/components/guides/GuideProgress'
import ReadMark from '@/components/guides/ReadMark'
import PageHero from '@/components/shell/PageHero'
import Callout from '@/components/ui/Callout'
import Panel from '@/components/ui/Panel'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import { guideNumber, guides, guidesByStage, guideStageBlurbs, guideStageLabels, guideStageOrder } from '@/content/guides'
import { site } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import s from './guides.module.css'

/*
 * /guides: the starter guide index, grouped by stage in reading order,
 * with an XP-bar of how many this visitor has read. Owner: STARTER-GUIDE WRITER.
 */
export const metadata: Metadata = pageMetadata({
  title: 'Starter guides',
  description: 'New to KasadyaCraft? Eight short guides that take you from your first join to your first dungeon run.',
  path: '/guides',
})

const totalMinutes = guides.reduce((sum, g) => sum + g.minutes, 0)

export default function GuidesIndexPage() {
  const items = guides.map((g) => ({ slug: g.slug, title: g.title }))

  return (
    <>
      <PageHero
        title="Starter guides"
        eyebrow={`${guides.length} guides · about ${Math.round(totalMinutes / 5) * 5} minutes`}
        lead="Short guides in the order most players need them. Start at the top, or jump straight to what you need."
        icon="book"
      >
        <GuideProgress items={items} />
      </PageHero>

      <div className={`kc-container kc-section ${s.stages}`}>
        {guideStageOrder.map((stage, i) => (
          <Panel key={stage} as="section" material="deepslate" padding="lg" aria-labelledby={`stage-${stage}`}>
            <div className={s.stageBody}>
              <SectionHeading
                id={`stage-${stage}`}
                eyebrow={`Stage ${i + 1}`}
                title={guideStageLabels[stage]}
                lead={guideStageBlurbs[stage]}
              />
              <ol className={s.cards}>
                {guidesByStage(stage).map((g) => (
                  <li key={g.slug} className={s.card}>
                    <span className={s.cardBadge}>
                      <span className={s.cardNum} aria-hidden="true">
                        {guideNumber(g.slug)}
                      </span>
                      <PixelIcon name={g.icon} size={48} />
                    </span>
                    <div className={s.cardText}>
                      <h3 className={s.cardTitle}>
                        <Link href={`/guides/${g.slug}`} className={s.cardLink}>
                          <span className="kc-sr-only">Guide {guideNumber(g.slug)}: </span>
                          {g.title}
                        </Link>
                      </h3>
                      <p className={s.cardSummary}>{g.summary}</p>
                      <p className={s.cardMeta}>
                        <span>{g.minutes} min read</span>
                        <ReadMark slug={g.slug} />
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Panel>
        ))}

        <Panel material="darkwood" padding="lg">
          <Callout tone="info" title="Not joined yet?">
            <p>
              The <Link href="/play">How to join</Link> page walks you through the launcher, the address and the resource pack, with
              fixes for the usual errors.
            </p>
          </Callout>
          <div className={s.help}>
            <PixelButton href="/play" variant="grass" icon="grass">
              How to join
            </PixelButton>
            <PixelButton href="/wiki" variant="stone" icon="map">
              Open the wiki
            </PixelButton>
            <PixelButton href={site.discord} variant="discord" icon="chat">
              Ask in Discord
            </PixelButton>
          </div>
        </Panel>
      </div>
    </>
  )
}
