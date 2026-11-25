import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/shell/PageHero'
import { Callout, Panel, Slot, SlotGrid } from '@/components/ui'
import s from '@/components/wiki/WikiArticle.module.css'
import WikiSearch from '@/components/wiki/WikiSearch'
import { formatWikiDate, latestDate } from '@/components/wiki/format'
import { getWikiPage, wikiCategories, wikiPages, wikiSearchIndex } from '@/content/wiki'
import type { WikiPage } from '@/lib/content'
import { pageMetadata } from '@/lib/seo'

/*
 * /wiki index. Owner: WIKI WRITER.
 * Search + category tabs (client, no dependency), quick slots to the most-used pages.
 */
export const metadata: Metadata = pageMetadata({
  title: 'Wiki',
  description:
    'Every KasadyaCraft feature in one place: commands, ranks, money and shops, crates, spawners, the Lab of Horrors dungeon, rules and FAQ. Checked against the live server.',
  path: '/wiki',
})

/** The hotbar of the wiki: the pages people open most. */
const QUICK_SLOTS = ['commands', 'rules', 'faq', 'economy', 'plots', 'ranks', 'dungeon', 'crates', 'rewards']

export default function WikiIndexPage() {
  const entries = wikiSearchIndex()
  const checked = formatWikiDate(latestDate(wikiPages.map((p) => p.updated)))
  const quick = QUICK_SLOTS.map((slug) => getWikiPage(slug)).filter((p): p is WikiPage => p !== undefined)

  return (
    <>
      <PageHero
        scene="bookshelf"
        title="Wiki"
        eyebrow="KasadyaCraft Survival"
        lead={`Every feature, command and rule on the server, in ${wikiPages.length} pages. Written by us, checked against the live server.`}
        icon="map"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Wiki' }]}
      />

      <div className="kc-container kc-section">
        <div className={s.index}>
          <Panel material="deepslate" padding="lg" aria-label="Search and browse the wiki">
            <WikiSearch entries={entries} categories={wikiCategories} />
          </Panel>

          <aside className={s.indexAside} aria-label="Quick links">
            <SlotGrid label="Most used wiki pages" title="Quick slots" columns={3} size="lg">
              {quick.map((p) => (
                <Slot key={p.slug} label={p.title} icon={p.icon} href={`/wiki/${p.slug}`} size="lg" lines={[p.summary]} />
              ))}
            </SlotGrid>

            <Callout tone="tip" title="New to KasadyaCraft?">
              <p>
                The <Link href="/guides">starter guides</Link> walk you from your first join to your first dungeon run. The wiki is
                for looking things up.
              </p>
            </Callout>

            <Callout tone="info" title="Checked against the server">
              <p>
                Prices, commands and numbers here come straight from the live server settings. Last full check: {checked}. If something in
                game looks different, the game wins. Tell us and we will fix the page.
              </p>
            </Callout>
          </aside>
        </div>
      </div>
    </>
  )
}
