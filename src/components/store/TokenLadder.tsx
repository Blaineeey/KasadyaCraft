import {
  formatPrice,
  itemsIn,
  PLAYTIME_MENU,
  tokenMilestones,
  tokensFirstDay,
  tokensFirstRewards,
  tokensFromPlaytime,
  tokenSources,
} from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './StorePage.module.css'

const tokens = (amount: number) => formatPrice({ currency: 'tokens', amount })

/**
 * Where Tokens come from, rendered from tokenSources in src/lib/store.ts:
 * the repeat claims (/rewards and daily quests) as advancement cards, then the
 * one-off playtime ladder on an XP-style track. Owner: STORE ENGINEER.
 * Since 2026-11-28 Tokens no longer buy ranks (web store only): they buy crate keys in /keys.
 */
export default function TokenLadder() {
  // Key prices in Tokens, from the /keys items in src/lib/store.ts (web-only keys have no Token price).
  const keyPrices = itemsIn('keys').flatMap((k) => (k.price?.currency === 'tokens' ? [k.price.amount] : []))
  const repeats = tokenSources.filter((t) => t.repeats)
  let running = 0

  return (
    <div className={s.ladder}>
      <h3 className={s.ladderHead}>Claim again and again</h3>
      <ul className={s.ladderSteps}>
        {repeats.map((t) => (
          <li key={t.id} className={s.ladderStep}>
            <span className={s.ladderIcon}>
              <StoreSprite shape="tokens" size={32} />
            </span>
            <span className={s.ladderLevel}>{t.name}</span>
            <span className={s.ladderTime}>{t.every}</span>
            <span className={s.ladderGain}>+{tokens(t.tokens)}</span>
            <code className={s.ladderCmd}>{t.command}</code>
          </li>
        ))}
      </ul>

      <h3 className={s.ladderHead}>Playtime levels, once each</h3>
      <ol className={s.ladderSteps}>
        {tokenMilestones.map((m) => {
          running += m.tokens
          return (
            <li key={m.level} className={s.ladderStep}>
              <span className={s.ladderIcon}>
                <StoreSprite shape="tokens" size={32} />
              </span>
              <span className={s.ladderLevel}>{m.level}</span>
              <span className={s.ladderTime}>{m.playtime}</span>
              <span className={s.ladderGain}>+{tokens(m.tokens)}</span>
              <span className={s.ladderTotal}>{tokens(running)} so far</span>
            </li>
          )
        })}
      </ol>

      <div className={s.ladderNote}>
        <p>
          Your first day is the big one. The daily, weekly and monthly rewards all open at once, so <code>/rewards</code> gives{' '}
          <strong>{tokens(tokensFirstRewards)}</strong> straight away, or <strong>{tokens(tokensFirstDay)}</strong> if you also
          finish your three daily quests. Playtime levels add <strong>{tokens(tokensFromPlaytime)}</strong> on top as your hours
          go up. Open them with <code>{PLAYTIME_MENU}</code>.
        </p>
        <p>
          Spend your Tokens on crate keys in <code>/keys</code>, which is also inside <code>/purchase</code>.
          {keyPrices.length > 0
            ? ` A key costs ${tokens(Math.min(...keyPrices))} to ${tokens(Math.max(...keyPrices))}.`
            : null}{' '}
          Points turn into Tokens too, in <code>/pointshop</code>.
        </p>
      </div>
    </div>
  )
}
