import { formatPrice, ranks, tokenMilestones, tokensFromPlaytime } from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './StorePage.module.css'

/**
 * Where Tokens come from today: the playtime ladder. Shown as advancement
 * steps along an XP-style track. Honest about the total (850).
 * Owner: STORE ENGINEER.
 */
export default function TokenLadder() {
  const cheapest = ranks[0]
  let running = 0
  return (
    <div className={s.ladder}>
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
              <span className={s.ladderGain}>+{formatPrice({ currency: 'tokens', amount: m.tokens })}</span>
              <span className={s.ladderTotal}>
                {formatPrice({ currency: 'tokens', amount: running })} so far
              </span>
            </li>
          )
        })}
      </ol>
      <p className={s.ladderNote}>
        That is <strong>{formatPrice({ currency: 'tokens', amount: tokensFromPlaytime })}</strong> in total, enough for a pile of
        crate keys or Points. {cheapest.name} costs {formatPrice(cheapest.price)}, so ranks are out of reach with playtime
        Tokens alone for now. We know, and we will post in Discord when there are more ways to get Tokens. Claim your rewards with{' '}
        <code>/playtime</code>.
      </p>
    </div>
  )
}
