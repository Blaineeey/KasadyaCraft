import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import GuideBody from '@/components/guides/GuideBody'
import { formatDate, guideFigures } from '@/components/guides/GuideFigures'
import MarkReadButton from '@/components/guides/MarkReadButton'
import PageHero from '@/components/shell/PageHero'
import Panel from '@/components/ui/Panel'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import { getGuide, guideNumber, guides, guideStageLabels } from '@/content/guides'
import { getWikiPage } from '@/content/wiki'
import { tocFromBlocks } from '@/lib/content'
import s from '../guides.module.css'

/*
 * /guides/<slug>: one starter guide as a "book page". Owner: STARTER-GUIDE WRITER.
 * Content lives in src/content/guides/*, illustrations in src/components/guides/GuideFigures.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}
  return {
    title: `${guide.title} (Starter guide)`,
    description: guide.summary,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: `${guide.title} | KasadyaCraft starter guide`, description: guide.summary, type: 'article' },
  }
}

/** Titles for contracted wiki slugs, used until the wiki page itself exists. */
const wikiFallbackTitles: Record<string, string> = {
  features: 'Everything on the server',
  commands: 'Commands',
  ranks: 'Ranks',
  economy: 'Money and the shop',
  'player-shops': 'Player shops',
  plots: 'Plots',
  dungeon: 'Lab of Horrors',
  spawners: 'Spawners',
  crates: 'Crates and keys',
  rewards: 'Quests and daily rewards',
  rules: 'Rules',
  faq: 'FAQ',
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const n = guideNumber(guide.slug)
  const total = guides.length
  const prev = n > 1 ? guides[n - 2] : undefined
  const next = (guide.next ? getGuide(guide.next) : undefined) ?? (n < total ? guides[n] : undefined)
  const toc = tocFromBlocks(guide.body).filter((t) => t.level === 2)
  const related = (guide.related ?? []).map((r) => ({ slug: r, title: getWikiPage(r)?.title ?? wikiFallbackTitles[r] ?? r }))
  const checked = formatDate(guide.updated)

  const tocList = (
    <ol className={s.tocList}>
      {toc.map((t) => (
        <li key={t.id}>
          <a href={`#${t.id}`}>{t.text}</a>
        </li>
      ))}
    </ol>
  )

  const relatedLinks = related.map((r) => (
    <li key={r.slug}>
      <Link href={`/wiki/${r.slug}`}>
        <PixelIcon name="map" size={16} />
        {r.title}
      </Link>
    </li>
  ))

  return (
    <>
      <PageHero
        title={guide.title}
        eyebrow={`Starter guide ${n} of ${total} · ${guideStageLabels[guide.stage]}`}
        lead={guide.summary}
        icon={guide.icon}
        crumbs={[{ label: 'Guides', href: '/guides' }, { label: guide.title }]}
      >
        <span className={s.meta}>
          <PixelIcon name="clock" size={16} />
          {guide.minutes} min read
        </span>
        <span className={s.meta}>
          <PixelIcon name="check" size={16} />
          Checked {checked}
        </span>
      </PageHero>

      <div className={`kc-container kc-section ${s.layout}`}>
        <Panel as="article" material="paper" padding="lg" className={s.book} aria-label={guide.title}>
          {toc.length > 2 ? (
            <details className={s.tocMobile}>
              <summary>In this guide</summary>
              {tocList}
            </details>
          ) : null}

          <GuideBody blocks={guide.body} figures={guideFigures[guide.slug]} />

          <footer className={s.bookFoot}>
            <MarkReadButton slug={guide.slug} title={guide.title} allSlugs={guides.map((g) => g.slug)} />
            {related.length > 0 ? (
              <div className={s.relatedInline}>
                <p className="t-pixel">More in the wiki</p>
                <ul>{relatedLinks}</ul>
              </div>
            ) : null}
            <p className={`${s.pageNo} t-label`}>
              Page {n} of {total} &middot; Facts checked against the server on {checked}
            </p>
          </footer>
        </Panel>

        <aside className={s.side} aria-label="About this guide">
          {toc.length > 0 ? (
            <Panel material="darkwood" padding="sm">
              <nav aria-label="In this guide">
                <p className={`${s.sideTitle} t-pixel`}>In this guide</p>
                {tocList}
              </nav>
            </Panel>
          ) : null}
          {related.length > 0 ? (
            <Panel material="deepslate" padding="sm">
              <p className={`${s.sideTitle} t-pixel`}>More in the wiki</p>
              <ul className={s.related}>{relatedLinks}</ul>
            </Panel>
          ) : null}
        </aside>
      </div>

      <div className="kc-container">
        <nav className={s.pager} aria-label="Guide navigation">
          {prev ? (
            <PixelButton href={`/guides/${prev.slug}`} variant="stone" size="sm" icon="arrow-left">
              {prev.title}
            </PixelButton>
          ) : (
            <PixelButton href="/guides" variant="stone" size="sm" icon="arrow-left">
              All guides
            </PixelButton>
          )}
          {next ? (
            <PixelButton href={`/guides/${next.slug}`} variant="gold" size="lg" iconRight="arrow-right">
              Next: {next.title}
            </PixelButton>
          ) : (
            <PixelButton href="/wiki" variant="gold" size="lg" iconRight="arrow-right">
              Explore the wiki
            </PixelButton>
          )}
        </nav>
      </div>
    </>
  )
}
