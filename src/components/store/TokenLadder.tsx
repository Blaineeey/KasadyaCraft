import {
  formatPrice,
  PLAYTIME_MENU,
  ranks,
  tokenMilestones,
  tokenPace,
  tokensFirstDay,
  tokensFirstRewards,
  tokensFromPlaytime,
  tokensToReach,
  tokenSources,
} from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './StorePage.module.css'

const tokens = (amount: number) => formatPrice({ currency: 'tokens', amount })

/**
 * Where Tokens come from, rendered from tokenSources in src/lib/store.ts:
 * the repeat claims (/rewards and daily quests) as advancement cards, then the
 * one-off playtime ladder on an XP-style track. Owner: STORE ENGINEER.
 */
export default function TokenLadder() {
  const cheapest = ranks[0]
  const top = ranks[ranks.length - 1]
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
          Play most days and {cheapest.name} ({formatPrice(cheapest.price)}) is yours in about {tokenPace.vipAfter}. Going all
          the way to {top.name} costs {tokens(tokensToReach(top.id))} in total, so the top ranks are a long grind. Take your
          time.
        </p>
      </div>
    </div>
  )
}
