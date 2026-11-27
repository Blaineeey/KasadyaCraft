import Link from 'next/link'
import type { ReactNode } from 'react'
import { site } from '@/lib/site'
import { CHECKOUT_MODE, formatPrice, PLAYTIME_MENU, tokenSources, type TokenSource } from '@/lib/store'
import s from './StorePage.module.css'

const webOpen = CHECKOUT_MODE !== 'off'
const tokens = (amount: number) => formatPrice({ currency: 'tokens', amount })
const earn = (id: TokenSource['id']) => tokens(tokenSources.find((t) => t.id === id)?.tokens ?? 0)

/*
 * OWNER PLACEHOLDERS in this file (search for "PLACEHOLDER"):
 * - web store delivery wording (depends on the Tebex package settings)
 * - refund policy (must be written by the owner before real-money sales open)
 * Ranks are sold only on the web store since 2026-11-28 (src/lib/store.ts header). Every answer must read
 * right with the checkout open and with it off (store waiting for Tebex approval: "opening soon").
 */
const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I pay with real money?',
    a: webOpen ? (
      <>
        Yes. Ranks and the Cardael crate key are sold on our web store, in US dollars. Add them to your list, type your
        username and press <strong>Checkout on Tebex</strong>. Tebex is our payment partner: you pay on their page and we
        never see your card details. Everything else is bought in game with Tokens, Points or money you earn by playing.
      </>
    ) : (
      <>
        Soon. Ranks and the Cardael crate key are sold on our web store, which is opening soon. Prices are in US dollars.
        Everything else is bought in game with Tokens, Points or money you earn by playing. When the web store opens we will
        say so in{' '}
        <a href={site.discord} target="_blank" rel="noopener noreferrer">
          Discord
        </a>{' '}
        and you will be able to buy on this page.
      </>
    ),
  },
  {
    q: 'How do I get Tokens?',
    a: (
      <>
        By playing. <code>/rewards</code> pays {earn('daily')} a day, {earn('weekly')} a week and {earn('monthly')} a month.
        Finish all three daily quests in <code>/dquests</code> for {earn('quests')} more. Playtime levels in{' '}
        <code>{PLAYTIME_MENU}</code> add {earn('playtime')} in total as your hours go up. You can also turn Points into Tokens in{' '}
        <code>/pointshop</code>. Spend Tokens on crate keys in <code>/keys</code>, which is also inside <code>/purchase</code>.
      </>
    ),
  },
  {
    q: 'Is this pay-to-win?',
    a: (
      <>
        Ranks are bought with real money on our web store{webOpen ? '' : ', which is opening soon'}. Tokens no longer buy
        them. A rank gives real perks: more plots, homes and stalls, extra commands and a rank kit. Every perk is listed on
        this page, so you can see exactly what you get before you buy. Crate keys can still be earned: the Tokens you get
        from playing buy every key in <code>/keys</code>. The Cardael crate key is the exception: it is sold only on the web
        store. Cosmetics like tags, chat colours and glow are looks only.
      </>
    ),
  },
  {
    q: 'When do I get what I bought?',
    a: (
      <>
        In game it is instant: click it in the menu and it is yours. {/* PLACEHOLDER: confirm once Tebex packages exist */}
        {webOpen ? 'Web store purchases, ranks included, arrive' : 'When the web store opens, purchases (ranks included) will arrive'}{' '}
        in Survival automatically for the username you type at checkout. Bedrock players type their name with the dot in
        front, like <code>.Steve</code>. Your rank shows in the hub and in Survival.
      </>
    ),
  },
  {
    q: 'Can I get a refund?',
    a: (
      <>
        Token purchases in game go through the moment you click, so check before you buy. Clicked the wrong thing, or a key never
        arrived? Tell staff in our Discord and they will look at it. {/* PLACEHOLDER: owner writes the real refund policy */}
        We will post the refund policy for the web store here before it opens.
      </>
    ),
  },
  {
    q: 'Do ranks expire?',
    a: (
      <>
        No. Ranks are permanent. A rank you already own stays yours, even one you bought with Tokens before ranks moved to the
        web store.
      </>
    ),
  },
  {
    q: 'Can I skip straight to MVP++?',
    a: (
      <>
        Yes. On our web store{webOpen ? '' : ', which is opening soon,'} you can buy any rank directly, no need to buy the ones
        below it first. Every rank includes everything in the ranks below it. Bought a lower rank on the web store before? Then
        a higher one costs only the difference.
      </>
    ),
  },
  {
    q: 'What are the odds in the crates?',
    a: (
      <>
        The odds for every reward in every crate are on the wiki: <Link href="/wiki/crates">Crates and keys</Link>. Tap a key in
        the store to see its main chances. Keys also come from your daily reward (<code>/rewards</code>), a few playtime levels
        and rank kits.
      </>
    ),
  },
  {
    q: 'Something went wrong with a purchase.',
    a: (
      <>
        Do not worry. Take a screenshot if you can and message us in{' '}
        <a href={site.discord} target="_blank" rel="noopener noreferrer">
          Discord
        </a>
        . Tell us your username and what you bought.
      </>
    ),
  },
]

/** Store questions as signposts you can open. Native <details>, works without JS. Owner: STORE ENGINEER. */
export default function StoreFaq() {
  return (
    <div className={s.faq}>
      {faqs.map((f) => (
        <details key={f.q} className={s.faqItem}>
          <summary className={s.faqQ}>{f.q}</summary>
          <div className={s.faqA}>{f.a}</div>
        </details>
      ))}
    </div>
  )
}
