import type { CSSProperties } from 'react'
import { PixelButton } from '@/components/ui'
import { CHECKOUT_MODE, STORE_CHECKOUT_URL, formatPrice, priceLabel, ranks, tokenMilestones } from '@/lib/store'
import s from './StoreTeaser.module.css'

/**
 * Store teaser for the home page. Reads everything from src/lib/store.ts (the
 * single source of truth), so ranks, prices and the checkout mode stay in sync
 * with /store. Honest by default: with no web checkout it says so.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function StoreTeaser() {
  const firstTokens = tokenMilestones[0]
  const webStore = CHECKOUT_MODE !== 'off' && STORE_CHECKOUT_URL

  return (
    <div className={s.chest}>
      <p className={s.eyebrow}>Store</p>
      <h2 id="home-store" className={s.title}>
        Ranks, keys and looks
      </h2>

      {ranks.length > 0 ? (
        <ul className={s.ranks} aria-label="Ranks and their prices">
          {ranks.map((r) => (
            <li key={r.id} className={s.rank} style={{ '--rank': r.color } as CSSProperties}>
              <span className={s.prefix}>{r.prefix}</span>
              <span className={s.price} aria-hidden="true">
                {formatPrice(r.price)}
              </span>
              <span className="kc-sr-only">{priceLabel(r.price)}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {webStore ? (
        <p className={s.text}>Buy ranks and keys on our web store, or with Tokens in game. Same perks either way.</p>
      ) : (
        <p className={s.text}>
          No credit card on this site. Ranks, crate keys and cosmetics are bought in game with Tokens: type{' '}
          <code className="kc-cmd-inline">/store</code>.
          {firstTokens ? (
            <>
              {' '}
              You earn Tokens by playing. The first {firstTokens.tokens} come at {firstTokens.playtime}, see{' '}
              <code className="kc-cmd-inline">/playtime</code>.
            </>
          ) : null}
        </p>
      )}

      <p className={s.fine}>Cosmetics are looks only. Nothing in the store wins fights for you.</p>

      <div className={s.ctas}>
        <PixelButton href="/store" variant="gold" icon="chest">
          See everything in the store
        </PixelButton>
        {webStore ? (
          <PixelButton href={webStore} variant="stone" external>
            Open the web store
          </PixelButton>
        ) : null}
      </div>
    </div>
  )
}
