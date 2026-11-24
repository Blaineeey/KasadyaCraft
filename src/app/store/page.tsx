import type { Metadata } from 'next'
import PageHero from '@/components/shell/PageHero'
import CurrencyGuide from '@/components/store/CurrencyGuide'
import PackageDialog from '@/components/store/PackageDialog'
import RankCompare from '@/components/store/RankCompare'
import ShoppingList from '@/components/store/ShoppingList'
import StoreBrowser from '@/components/store/StoreBrowser'
import StoreFaq from '@/components/store/StoreFaq'
import StoreProvider from '@/components/store/StoreProvider'
import StoreSprite from '@/components/store/StoreSprite'
import SupportPanel from '@/components/store/SupportPanel'
import TokenLadder from '@/components/store/TokenLadder'
import s from '@/components/store/StorePage.module.css'
import Panel from '@/components/ui/Panel'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import { site } from '@/lib/site'
import { CHECKOUT_MODE, STORE_CHECKOUT_URL } from '@/lib/store'

/*
 * /store. Owner: STORE ENGINEER. Data: src/lib/store.ts (single source of truth).
 * Contract and content rules: docs/SITE_PLAN.md
 */
export const metadata: Metadata = {
  title: 'Store',
  description:
    'Ranks, crate keys and cosmetics on KasadyaCraft: what each one really gives you and how to get it in game with Tokens, Points or money.',
}

export default function StorePage() {
  const webOpen = CHECKOUT_MODE !== 'off'

  return (
    <>
      <PageHero
        eyebrow="Ranks, keys and cosmetics"
        title="The Store"
        icon="chest"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Store' }]}
        lead={
          webOpen
            ? 'Get ranks, keys and cosmetics in game with Tokens, Points or money, or on our web store. Tap any item to see exactly what it gives you.'
            : 'For now everything here is bought in game, with Tokens, Points or money you earn by playing. No real money yet. Tap any item to see exactly what it gives you and where to get it.'
        }
      >
        <PixelButton href="#browse" variant="gold" icon="chest">
          Browse the store
        </PixelButton>
        <PixelButton href="#compare" variant="wood" icon="crown">
          Compare ranks
        </PixelButton>
      </PageHero>

      <StoreProvider>
        <div className="kc-container">
          <section id="browse" className={s.section} aria-labelledby="browse-title">
            <h2 id="browse-title" className={s.sectionTitle}>
              <StoreSprite shape="shulker" size={32} /> Browse the store
            </h2>

            <Panel material="darkwood" padding="sm" aria-label="How paying works">
              <div className={s.statusLine}>
                <PixelIcon name="lantern" size={24} />
                {webOpen ? (
                  <span>
                    <strong>Web store: open.</strong> You can also buy on{' '}
                    {STORE_CHECKOUT_URL ? (
                      <a href={STORE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                        our Tebex store
                      </a>
                    ) : (
                      'our web store'
                    )}
                    .
                  </span>
                ) : (
                  <span>
                    <strong>Web store: opening soon.</strong> Until then, open <code>/store</code> in game.
                  </span>
                )}
              </div>
            </Panel>

            <CurrencyGuide />

            <StoreBrowser support={<SupportPanel />} />
          </section>
        </div>

        <PackageDialog />
        <ShoppingList />
      </StoreProvider>

      <div className="kc-container">
        <section id="compare" className={s.section} aria-labelledby="compare-title">
          <h2 id="compare-title" className={s.sectionTitle}>
            <StoreSprite shape="banner5" size={32} /> Compare the ranks
          </h2>
          <Panel material="deepslate" padding="sm">
            <RankCompare />
          </Panel>
        </section>

        <section id="tokens" className={s.section} aria-labelledby="tokens-title">
          <h2 id="tokens-title" className={s.sectionTitle}>
            <StoreSprite shape="tokens" size={32} /> Where Tokens come from
          </h2>
          <Panel material="obsidian" padding="md">
            <TokenLadder />
          </Panel>
        </section>

        <section id="faq" className={s.section} aria-labelledby="faq-title">
          <h2 id="faq-title" className={s.sectionTitle}>
            <PixelIcon name="book" size={32} /> Store questions
          </h2>
          <Panel material="deepslate" padding="sm">
            <StoreFaq />
          </Panel>
        </section>

        <section className={s.section} aria-labelledby="store-help-title">
          <Panel material="darkwood" padding="md">
            <div className={s.cta}>
              <div className={s.ctaText}>
                <h2 id="store-help-title" className={s.ctaTitle}>
                  Not sure what to get?
                </h2>
                <p>
                  Ask in Discord. Tell us how you like to play and someone will point you to the right thing, or tell you to save
                  your Tokens.
                </p>
              </div>
              <PixelButton variant="discord" icon="chat" href={site.discord}>
                Ask in Discord
              </PixelButton>
            </div>
          </Panel>
        </section>
      </div>
    </>
  )
}
