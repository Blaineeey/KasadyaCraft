import type { CSSProperties } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'
import { defaultLimits, everyoneCommands, formatPrice, ranks, starterKit, tokensToReach, type RankLimits } from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './StorePage.module.css'

const limitRows: { key: keyof RankLimits; label: string }[] = [
  { key: 'plots', label: 'Plots' },
  { key: 'homes', label: 'Homes' },
  { key: 'stalls', label: 'Shopping Mall stalls' },
]

function Yes() {
  return (
    <>
      <PixelIcon name="check" size={16} />
      <span className="kc-sr-only">Yes</span>
    </>
  )
}

function No() {
  return (
    <>
      <span aria-hidden="true" className={s.no}>
        ·
      </span>
      <span className="kc-sr-only">No</span>
    </>
  )
}

/**
 * Every rank side by side, built from src/lib/store.ts. On phones the table
 * scrolls sideways inside its frame with the perk column pinned.
 * Owner: STORE ENGINEER.
 */
export default function RankCompare() {
  const commandRows = ranks.flatMap((rank, from) => rank.commands.map((c) => ({ ...c, from })))

  return (
    <div className={s.compare}>
      <div className={s.tableWrap} role="region" aria-labelledby="rank-compare-caption" tabIndex={0}>
        <table className={s.table}>
          <caption id="rank-compare-caption" className={s.caption}>
            Ranks compared. Each rank keeps everything from the ranks before it.
          </caption>
          <thead>
            <tr>
              <th scope="col" className={s.corner}>
                <span className="kc-sr-only">Perk</span>
              </th>
              <th scope="col" className={s.colHead}>
                <span className={s.colName}>Everyone</span>
                <span className={s.colSub}>free</span>
              </th>
              {ranks.map((r) => (
                <th key={r.id} scope="col" className={s.colHead} style={{ '--rank': r.color } as CSSProperties}>
                  <StoreSprite shape={r.sprite.shape} tone={r.sprite.tone} size={32} />
                  <span className={s.colName}>{r.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Price in game</th>
              <td>Free</td>
              {ranks.map((r) => (
                <td key={r.id} className={s.num}>
                  {formatPrice(r.price)}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row">Total from no rank</th>
              <td>
                <No />
              </td>
              {ranks.map((r) => (
                <td key={r.id} className={s.num}>
                  {formatPrice({ currency: 'tokens', amount: tokensToReach(r.id) })}
                </td>
              ))}
            </tr>
            {limitRows.map((row) => (
              <tr key={row.key}>
                <th scope="row">{row.label}</th>
                <td className={s.num}>{defaultLimits[row.key]}</td>
                {ranks.map((r) => (
                  <td key={r.id} className={s.num}>
                    {r.limits[row.key]}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <th scope="row">Kit</th>
              <td>
                {starterKit.name}, every {starterKit.cooldown}
              </td>
              {ranks.map((r) => (
                <td key={r.id}>
                  {r.kit?.name}, every {r.kit?.cooldown}
                </td>
              ))}
            </tr>
            <tr className={s.groupRow}>
              <th scope="colgroup" colSpan={ranks.length + 2}>
                Commands
              </th>
            </tr>
            {commandRows.map((c) => (
              <tr key={c.command}>
                <th scope="row">
                  <code className={s.cmd}>{c.command}</code>
                  <span className={s.cmdDesc}>{c.description}</span>
                </th>
                <td>
                  <No />
                </td>
                {ranks.map((r, i) => (
                  <td key={r.id}>{i >= c.from ? <Yes /> : <No />}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className={s.footnote}>
        Everyone already has {everyoneCommands.map((c) => c.command).join(', ')}, plus homes, warps, /tpa, /trade, plots and
        player shops. Kit gear cannot be sold to the shop.
      </p>
    </div>
  )
}
