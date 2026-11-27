import type { CSSProperties } from 'react'
import { PixelButton } from '@/components/ui'
import { CHECKOUT_MODE, STORE_CHECKOUT_URL, formatPrice, listPrice, priceLabel, ranks, tokensFirstRewards } from '@/lib/store'
import s from './StoreTeaser.module.css'

/**
 * Store teaser for the home page. Reads everything from src/lib/store.ts (the
 * single source of truth), so ranks, prices and the checkout mode stay in sync
 * with /store. Ranks are sold only on the web store (2026-11-28): their dollar
 * prices show in both modes, with "opening soon" while there is no checkout.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function StoreTeaser() {
  const webOpen = CHECKOUT_MODE !== 'off'
  const webStore = webOpen ? STORE_CHECKOUT_URL : null

  return (
    <div className={s.chest}>
      <p className={s.eyebrow}>Store</p>
      <h2 id="home-store" className={s.title}>
        Ranks, keys and looks
      </h2>

      {ranks.length > 0 ? (
        <ul className={s.ranks} aria-label="Ranks and their web store prices">
          {ranks.map((r) => {
            const price = listPrice(r.web)
            return (
              <li key={r.id} className={s.rank} style={{ '--rank': r.color } as CSSProperties}>
                <span className={s.prefix}>{r.prefix}</span>
                {price ? (
                  <>
                    <span className={s.price} aria-hidden="true">
                      {formatPrice(price)}
                    </span>
                    <span className="kc-sr-only">{priceLabel(price)}</span>
                  </>
                ) : null}
              </li>
            )
          })}
        </ul>
      ) : null}

      <p className={s.text}>
        Ranks are sold on our web store{webOpen ? '' : ', which is opening soon'}. The crate keys in{' '}
        <code className="kc-cmd-inline">/keys</code> cost Tokens, which you earn by playing. Your first{' '}
        <code className="kc-cmd-inline">/rewards</code> claims already give{' '}
        {formatPrice({ currency: 'tokens', amount: tokensFirstRewards })}.
      </p>

      <p className={s.fine}>Cosmetics are looks only. They never win fights.</p>

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
