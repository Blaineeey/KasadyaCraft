'use client'

import { useId, useState, type CSSProperties } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'
import {
  CHECKOUT_MODE,
  defaultLimits,
  everyoneCommands,
  everyoneExtras,
  formatPrice,
  listPrice,
  priceLabel,
  ranks,
  starterKit,
  type Rank,
  type RankId,
  type RankLimits,
} from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './StorePage.module.css'

const limitRows: { key: keyof RankLimits; label: string }[] = [
  { key: 'plots', label: 'Plots' },
  { key: 'homes', label: 'Homes' },
  { key: 'stalls', label: 'Shopping Mall stalls' },
]

const rankStyle = (r: Rank) => ({ '--rank': r.color }) as CSSProperties
/** Ranks are sold only on the web store (2026-11-28): the decided dollar price, shown even before the store opens. */
const rankPrice = (r: Rank) => listPrice(r.web)
const storeOff = CHECKOUT_MODE === 'off'

function Yes() {
  return (
    <>
      <PixelIcon name="check" size={24} className={s.yes} />
      <span className="kc-sr-only">Yes</span>
    </>
  )
}

function No() {
  return (
    <>
      <span aria-hidden="true" className={s.no} />
      <span className="kc-sr-only">No</span>
    </>
  )
}

/**
 * Every rank compared, built from src/lib/store.ts. Prices are web store prices (ranks are web-only).
 * - Phones (below 720px): a rank picker. Pick VIP to MVP++ and see that rank's perks,
 *   with what is NEW compared to the rank below marked.
 * - Wider screens: the full table. Commands are folded into one group per rank (the group
 *   row already shows where they unlock), and each group opens to show what they do.
 * Owner: STORE ENGINEER.
 */
export default function RankCompare() {
  return (
    <div className={s.compare}>
      <p className={s.compareLead}>
        Each rank keeps everything from the ranks before it. Ranks are sold on our web store
        {storeOff ? ', which is opening soon' : ''}, and you can buy any rank directly.
      </p>
      <RankPicker />
      <RankTable />
      <p className={s.footnote}>
        Everyone already has {everyoneCommands.map((c) => c.command).join(', ')}, plus homes, warps, /tpa, /trade, plots and
        player shops. {everyoneExtras.join(' ')} Kit gear cannot be sold to the shop.
      </p>
    </div>
  )
}

/* ------------------------------------------------------------------ phones */

function RankPicker() {
  const uid = useId()
  const [picked, setPicked] = useState<RankId>(ranks[0]?.id ?? 'vip')
  const index = Math.max(
    0,
    ranks.findIndex((r) => r.id === picked),
  )
  const rank = ranks[index]
  if (!rank) return null
  const below = index > 0 ? ranks[index - 1] : undefined
  const prevLimits = below?.limits ?? defaultLimits
  const kept = ranks.slice(0, index).flatMap((r) => r.commands.map((c) => ({ ...c, from: r.name })))
  const price = rankPrice(rank)

  return (
    <div className={s.picker}>
      <fieldset className={s.pickerSet}>
        <legend className={s.pickerLegend}>Pick a rank</legend>
        <div className={s.segments}>
          {ranks.map((r) => (
            <label key={r.id} className={s.segment} style={rankStyle(r)}>
              <input
                type="radio"
                name={`${uid}-rank`}
                value={r.id}
                checked={r.id === picked}
                onChange={() => setPicked(r.id)}
                className={s.segmentInput}
              />
              <span className={s.segmentFace}>{r.name}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <section className={s.pick} style={rankStyle(rank)} aria-labelledby={`${uid}-title`}>
        <header className={s.pickHead}>
          <span className={s.pickSlot}>
            <StoreSprite shape={rank.sprite.shape} tone={rank.sprite.tone} size={48} />
          </span>
          <div className={s.pickHeadText}>
            <h3 id={`${uid}-title`} className={s.pickName}>
              {rank.name}
            </h3>
            {price ? (
              <p className={s.pickPrice}>
                <span aria-hidden="true">{formatPrice(price)}</span>
                <span className="kc-sr-only">{priceLabel(price)}</span>
              </p>
            ) : null}
            <p className={s.pickNeeds}>{storeOff ? 'On our web store, opening soon' : 'On our web store'}</p>
          </div>
        </header>

        <p className={s.pickTagline}>{rank.tagline}</p>

        <ul className={s.pickStats} aria-label={`${rank.name} limits`}>
          {limitRows.map((row) => {
            const now = rank.limits[row.key]
            const gain = now - prevLimits[row.key]
            return (
              <li key={row.key} className={s.pickStat}>
                <span className={s.pickStatNum}>{now}</span>
                <span className={s.pickStatLabel}>{row.label}</span>
                {gain > 0 ? (
                  <span className={s.newBadge}>
                    +{gain}
                    <span className="kc-sr-only"> more than {below?.name ?? 'without a rank'}</span>
                  </span>
                ) : null}
              </li>
            )
          })}
        </ul>

        <h4 className={s.pickSub}>
          New at {rank.name}
          <span className={s.pickCount}>
            {rank.commands.length + 1} {rank.commands.length + 1 === 1 ? 'perk' : 'perks'}
          </span>
        </h4>
        <ul className={s.pickList}>
          {rank.commands.map((c) => (
            <li key={c.command} className={s.pickItem}>
              <PixelIcon name="check" size={24} className={s.yes} />
              <span className={s.pickItemText}>
                <code className={s.cmd}>{c.command}</code>
                <span className={s.cmdDesc}>{c.description}</span>
              </span>
            </li>
          ))}
          {rank.kit ? (
            <li className={s.pickItem}>
              <PixelIcon name="check" size={24} className={s.yes} />
              <span className={s.pickItemText}>
                <code className={s.cmd}>/kit {rank.kit.name.toLowerCase()}</code>
                <span className={s.cmdDesc}>
                  {rank.kit.name} kit every {rank.kit.cooldown}
                </span>
              </span>
            </li>
          ) : null}
        </ul>

        {kept.length > 0 ? (
          <>
            <h4 className={s.pickSub}>Kept from {index === 1 ? below?.name : `VIP to ${below?.name}`}</h4>
            <ul className={s.keptList}>
              {kept.map((c) => (
                <li key={c.command} className={s.keptChip}>
                  {c.command}
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>
    </div>
  )
}

/* ------------------------------------------------------------ wider screens */

function RankTable() {
  const uid = useId()
  const [open, setOpen] = useState<Record<string, boolean>>({})
  const allOpen = ranks.every((r) => open[r.id])

  return (
    <div className={s.tableBlock}>
      <div className={s.tableTools}>
        <button
          type="button"
          className={s.toolButton}
          onClick={() => setOpen(allOpen ? {} : Object.fromEntries(ranks.map((r) => [r.id, true])))}
        >
          {allOpen ? 'Hide what commands do' : 'Show what every command does'}
        </button>
      </div>
      <div className={s.tableWrap} role="region" aria-labelledby={`${uid}-caption`} tabIndex={0}>
        <table className={s.table}>
          <caption id={`${uid}-caption`} className="kc-sr-only">
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
                <th key={r.id} scope="col" className={s.colHead} style={rankStyle(r)}>
                  <StoreSprite shape={r.sprite.shape} tone={r.sprite.tone} size={32} />
                  <span className={s.colName}>{r.name}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                Price on our web store
                {storeOff ? <span className={s.colSub}>opening soon</span> : null}
              </th>
              <td>Free</td>
              {ranks.map((r) => {
                const price = rankPrice(r)
                return (
                  <td key={r.id} className={s.num}>
                    {price ? (
                      <>
                        <span aria-hidden="true">{formatPrice(price)}</span>
                        <span className="kc-sr-only">{priceLabel(price)}</span>
                      </>
                    ) : (
                      '-'
                    )}
                  </td>
                )
              })}
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
          </tbody>

          {ranks.map((rank, from) => {
            const isOpen = !!open[rank.id]
            const bodyId = `${uid}-cmds-${rank.id}`
            return [
              <tbody key={`${rank.id}-head`}>
                <tr className={s.cmdGroup}>
                  <th scope="row">
                    <button
                      type="button"
                      className={s.cmdToggle}
                      aria-expanded={isOpen}
                      aria-controls={bodyId}
                      onClick={() => setOpen((o) => ({ ...o, [rank.id]: !o[rank.id] }))}
                    >
                      <PixelIcon name="arrow-right" size={16} className={s.chevron} />
                      <span>
                        New at <span style={rankStyle(rank)} className={s.cmdGroupName}>{rank.name}</span>
                      </span>
                      <span className={s.pickCount}>{rank.commands.length}</span>
                    </button>
                    <span className={s.cmdChips}>{rank.commands.map((c) => c.command).join('  ')}</span>
                  </th>
                  <td>
                    <No />
                  </td>
                  {ranks.map((r, i) => (
                    <td key={r.id}>{i >= from ? <Yes /> : <No />}</td>
                  ))}
                </tr>
              </tbody>,
              <tbody key={`${rank.id}-rows`} id={bodyId} hidden={!isOpen} className={s.cmdRows}>
                {rank.commands.map((c) => (
                  <tr key={c.command}>
                    <th scope="row">
                      <code className={s.cmd}>{c.command}</code>
                      <span className={s.cmdDesc}>{c.description}</span>
                    </th>
                    <td>
                      <No />
                    </td>
                    {ranks.map((r, i) => (
                      <td key={r.id}>{i >= from ? <Yes /> : <No />}</td>
                    ))}
                  </tr>
                ))}
              </tbody>,
            ]
          })}
        </table>
      </div>
    </div>
  )
}
