import type { ReactNode } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'
import { PLAYTIME_MENU } from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './StorePage.module.css'

interface Currency {
  symbol: string
  name: string
  art: ReactNode
  earn: ReactNode
  spend: ReactNode
}

/* Sources: FlareTokens (tokenSources in src/lib/store.ts: /rewards, daily quests, playtime levels),
   PlayerPoints (AFK pool 10 per 20 min, Playtime L5 500, weekly reward 50, monthly 100), Vault money
   ($250 start). CHANGELOG economy audit + ECONOMY FIXER 2026-11-25. */
const currencies: Currency[] = [
  {
    symbol: '⛃',
    name: 'Tokens',
    art: <StoreSprite shape="tokens" size={48} />,
    earn: (
      <>
        <code>/rewards</code> every day, week and month, all three daily quests in <code>/dquests</code>, and playtime levels
        in <code>{PLAYTIME_MENU}</code>.
      </>
    ),
    spend: (
      <>
        Ranks, crate keys and Points in <code>/purchase</code>.
      </>
    ),
  },
  {
    symbol: '✪',
    name: 'Points',
    art: <StoreSprite shape="points" size={48} />,
    earn: (
      <>
        The AFK pool at <code>/warp afk</code> (10 every 20 minutes), playtime and weekly rewards.
      </>
    ),
    spend: (
      <>
        Chat colours in <code>/chatcolor</code>.
      </>
    ),
  },
  {
    symbol: '$',
    name: 'Money',
    art: <PixelIcon name="coin" size={48} />,
    earn: (
      <>
        Selling raw materials to <code>/shop</code>, player shops, quests and chat games. You start with $250.
      </>
    ),
    spend: (
      <>
        Chat tags in <code>/tags</code>, plus everything else in the game.
      </>
    ),
  },
]

/** "Three ways to pay": Tokens, Points, money. Owner: STORE ENGINEER. */
export default function CurrencyGuide() {
  return (
    <ul className={s.currencies}>
      {currencies.map((c) => (
        <li key={c.name} className={s.currency}>
          <span className={s.currencyArt}>{c.art}</span>
          <div className={s.currencyText}>
            <h3 className={s.currencyName}>
              <span aria-hidden="true" className={s.currencySymbol}>
                {c.symbol}
              </span>{' '}
              {c.name}
            </h3>
            <p>
              <span className={s.currencyKey}>Earn:</span> {c.earn}
            </p>
            <p>
              <span className={s.currencyKey}>Spend:</span> {c.spend}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
