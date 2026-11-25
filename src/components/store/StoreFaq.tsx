import Link from 'next/link'
import type { ReactNode } from 'react'
import { site } from '@/lib/site'
import { formatPrice, PLAYTIME_MENU, ranks, tokenPace, tokenSources, tokensToReach, type TokenSource } from '@/lib/store'
import s from './StorePage.module.css'

const top = ranks[ranks.length - 1]
const tokens = (amount: number) => formatPrice({ currency: 'tokens', amount })
const earn = (id: TokenSource['id']) => tokens(tokenSources.find((t) => t.id === id)?.tokens ?? 0)

/*
 * OWNER PLACEHOLDERS in this file (search for "PLACEHOLDER"):
 * - web store delivery wording (depends on the Tebex package settings)
 * - refund policy (must be written by the owner before real-money sales open)
 */
const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'Can I pay with real money?',
    a: (
      <>
        Not yet. There is no web store today, so nothing on this page costs real money. You buy everything in game with Tokens,
        Points or money you earn by playing. When the web store opens we will say so in{' '}
        <a href={site.discord} target="_blank" rel="noopener noreferrer">
          Discord
        </a>{' '}
        and you will be able to buy on this page too.
      </>
    ),
  },
  {
    q: 'How do I get Tokens?',
    a: (
      <>
        By playing. <code>/rewards</code> pays {earn('daily')} a day, {earn('weekly')} a week and {earn('monthly')} a month.
        Finish all three daily quests in <code>/dquests</code> for {earn('quests')} more. Playtime levels in{' '}
        <code>{PLAYTIME_MENU}</code> add {earn('playtime')} in total as your hours go up. Play most days and {ranks[0].name}{' '}
        takes about {tokenPace.vipAfter}. Your balance shows at the top of <code>/ranks</code>, and you spend Tokens in{' '}
        <code>/purchase</code>.
      </>
    ),
  },
  {
    q: 'Is this pay-to-win?',
    a: (
      <>
        Today ranks and keys are bought with Tokens you earn by playing, not with real money. Before anything is sold for real
        money, every perk will follow Mojang&rsquo;s{' '}
        <a href="https://www.minecraft.net/en-us/usage-guidelines" target="_blank" rel="noopener noreferrer">
          Minecraft Usage Guidelines
        </a>
        : real money can get you looks and convenience, never an unfair edge over players who do not pay. Cosmetics like tags,
        chat colours and glow are looks only.
      </>
    ),
  },
  {
    q: 'When do I get what I bought?',
    a: (
      <>
        In game it is instant: click it in the menu and it is yours (ranks even get a firework). Your rank shows in the hub and
        in Survival. {/* PLACEHOLDER: confirm once Tebex packages exist */}When the web store opens, purchases will arrive in
        game automatically for the Java username you type at checkout.
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
    a: <>No. A rank you buy in <code>/ranks</code> is yours for good.</>,
  },
  {
    q: 'Can I skip straight to MVP++?',
    a: (
      <>
        No, ranks go in order: VIP, VIP+, MVP, MVP+, then MVP++. The menu only lets you buy the next one. Going all the way from
        no rank to {top.name} costs {formatPrice({ currency: 'tokens', amount: tokensToReach(top.id) })} in total.
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
