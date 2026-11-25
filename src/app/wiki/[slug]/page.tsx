import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/shell/PageHero'
import Badge from '@/components/ui/Badge'
import Panel from '@/components/ui/Panel'
import PixelButton from '@/components/ui/PixelButton'
import WikiArticleBody from '@/components/wiki/WikiArticleBody'
import s from '@/components/wiki/WikiArticle.module.css'
import WikiCard from '@/components/wiki/WikiCard'
import WikiToc from '@/components/wiki/WikiToc'
import { formatWikiDate } from '@/components/wiki/format'
import { getWikiPage, neighbours, relatedPages, wikiCategories, wikiPages } from '@/content/wiki'
import { tocFromBlocks } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

/*
 * /wiki/<slug>. Owner: WIKI WRITER.
 * Layout: hero, then a sticky book-page table of contents (desktop) or a
 * collapsible one (phones), the article on deepslate, and "read next".
 */
export const dynamicParams = false

export function generateStaticParams() {
  return wikiPages.map((p) => ({ slug: p.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const page = getWikiPage(slug)
  if (!page) return {}
  return pageMetadata({
    title: `${page.title} (Wiki)`,
    socialTitle: `${page.title} | KasadyaCraft Wiki`,
    description: page.summary,
    path: `/wiki/${page.slug}`,
    type: 'article',
    modifiedTime: page.updated,
  })
}

export default async function WikiArticlePage({ params }: Props) {
  const { slug } = await params
  const page = getWikiPage(slug)
  if (!page) notFound()

  const category = wikiCategories.find((c) => c.id === page.category)
  const allToc = tocFromBlocks(page.body)
  const toc = allToc.length > 14 ? allToc.filter((t) => t.level === 2) : allToc
  const checked = formatWikiDate(page.updated)
  const related = relatedPages(page)
  const { prev, next } = neighbours(page)

  return (
    <>
      <PageHero
        title={page.title}
        eyebrow={category?.label}
        lead={page.summary}
        icon={page.icon}
        ground="stone"
        crumbs={[
          { label: 'Wiki', href: '/wiki' },
          ...(category ? [{ label: category.label, href: `/wiki?c=${category.id}` }] : []),
          { label: page.title },
        ]}
      >
        <Badge tone="teal">
          <time dateTime={page.updated}>Checked {checked}</time>
        </Badge>
      </PageHero>

      <div className="kc-container kc-section">
        <div className={s.layout}>
          <aside className={s.aside} aria-label="Page tools">
            <WikiToc entries={toc} variant="aside" />
            <div className={s.facts}>
              <span className={s.factsLabel}>Last checked on the server</span>
              <time className={s.factsDate} dateTime={page.updated}>
                {checked}
              </time>
              <a href={site.discord} target="_blank" rel="noopener noreferrer">
                Spot a mistake? Tell us on Discord
                <span className="kc-sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </aside>

          <div className={s.main}>
            <WikiToc entries={toc} variant="inline" />

            <Panel as="article" material="deepslate" padding="lg" aria-label={page.title}>
              <WikiArticleBody page={page} />
            </Panel>

            <div className={s.footer}>
              <p>
                Facts checked against the live server on <time dateTime={page.updated}>{checked}</time>.
              </p>
              <a href={site.discord} target="_blank" rel="noopener noreferrer">
                Report a mistake
                <span className="kc-sr-only"> (opens in a new tab)</span>
              </a>
            </div>

            {prev || next ? (
              <nav className={s.pager} aria-label="More wiki pages">
                {prev ? (
                  <PixelButton href={`/wiki/${prev.slug}`} variant="stone" icon="arrow-left" rel="prev">
                    <span className="kc-sr-only">Previous page: </span>
                    {prev.title}
                  </PixelButton>
                ) : null}
                {next ? (
                  <PixelButton href={`/wiki/${next.slug}`} variant="grass" iconRight="arrow-right" rel="next" className={s.pagerNext}>
                    <span className="kc-sr-only">Next page: </span>
                    {next.title}
                  </PixelButton>
                ) : null}
              </nav>
            ) : null}

            {related.length > 0 ? (
              <Panel as="section" material="darkwood" title="Read next" padding="md">
                <ul className={s.related}>
                  {related.map((r) => (
                    <li key={r.slug}>
                      <WikiCard href={`/wiki/${r.slug}`} icon={r.icon} title={r.title} summary={r.summary} />
                    </li>
                  ))}
                </ul>
              </Panel>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}
