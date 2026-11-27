import type { CSSProperties, ReactNode } from 'react'
import TableFrame from '@/components/content/TableFrame'
import Callout from '@/components/ui/Callout'
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
  type RankLimits,
} from '@/lib/store'
import s from './WikiData.module.css'

/*
 * Rank comparison for /wiki/ranks. Renders ONLY from src/lib/store.ts so perks and
 * prices live in one place (STORE ENGINEER owns the data). RankCommand.review is an
 * owner-only note and is never rendered. Owner: WIKI WRITER.
 * Since 2026-11-28 ranks are sold only on the web store: the price row shows the dollar
 * price (listPrice), with "opening soon" while CHECKOUT_MODE is 'off'.
 */

const MATRIX_CAPTION = 'Each rank keeps everything from the ranks before it.'

const rankStyle = (r: Rank) => ({ '--rank': r.color }) as CSSProperties

function Yes() {
  return (
    <>
      <PixelIcon name="check" size={16} className={s.yes} />
      <span className="kc-sr-only">Included</span>
    </>
  )
}

function No() {
  return (
    <>
      <span className={s.no} aria-hidden="true">
        -
      </span>
      <span className="kc-sr-only">Not included</span>
    </>
  )
}

export default function RankMatrix() {
  const list = [...ranks].sort((a, b) => a.order - b.order)

  if (list.length === 0) {
    return (
      <Callout tone="info" title="Rank details are being updated">
        <p>
          Open <code className="kc-cmd-inline">/ranks</code> in game to see every perk.
        </p>
      </Callout>
    )
  }

  const storeOff = CHECKOUT_MODE === 'off'
  const limitRows: { key: keyof RankLimits; label: string }[] = [
    { key: 'plots', label: 'Plots' },
    { key: 'homes', label: 'Homes' },
    { key: 'stalls', label: 'Shopping Mall stalls' },
  ]
  const commandRows = list.flatMap((r) => r.commands.map((c) => ({ command: c.command, description: c.description, from: r.order })))

  const row = (label: ReactNode, everyone: ReactNode, cell: (r: Rank) => ReactNode, key: string) => (
    <tr key={key}>
      <th scope="row">{label}</th>
      <td>{everyone}</td>
      {list.map((r) => (
        <td key={r.id}>{cell(r)}</td>
      ))}
    </tr>
  )

  return (
    <div className={s.block}>
      <p className={s.lead}>
        Prices are in US dollars on our web store{storeOff ? ', which is opening soon' : ''}. In game,{' '}
        <code className="kc-cmd-inline">/ranks</code> shows the same ranks and prices.
      </p>

      {/* Scrolls sideways on phones with the perk column pinned; TableFrame adds the edge shadow and swipe cue. */}
      <TableFrame label="Rank comparison" caption={MATRIX_CAPTION} sticky className={s.wrap}>
        <table className={`kc-table ${s.matrix}`}>
          <caption className="kc-sr-only">{MATRIX_CAPTION}</caption>
          <thead>
            <tr>
              <th scope="col">Perk</th>
              <th scope="col">Everyone</th>
              {list.map((r) => (
                <th key={r.id} scope="col" className={s.rankHead} style={rankStyle(r)}>
                  {r.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {row(
              storeOff ? 'Price on our web store (opening soon)' : 'Price on our web store',
              'Free',
              (r) => {
                const price = listPrice(r.web)
                return price ? (
                  <span className={s.price}>
                    <span aria-hidden="true">{formatPrice(price)}</span>
                    <span className="kc-sr-only">{priceLabel(price)}</span>
                  </span>
                ) : (
                  <No />
                )
              },
              'price',
            )}
            {row(
              'Chat prefix',
              'None',
              (r) => (
                <span className={s.prefix} style={rankStyle(r)}>
                  {r.prefix}
                </span>
              ),
              'prefix',
            )}
            {limitRows.map((l) =>
              row(
                l.label,
                <span className={s.num}>{defaultLimits[l.key]}</span>,
                (r) => <span className={s.num}>{r.limits[l.key]}</span>,
                l.key,
              ),
            )}
            {row(
              'Kit',
              `${starterKit.name}, every ${starterKit.cooldown}`,
              (r) => (r.kit ? (r.kit.cooldown ? `${r.kit.name}, every ${r.kit.cooldown}` : r.kit.name) : <No />),
              'kit',
            )}
            {commandRows.map((c) =>
              row(
                <span className={s.cmd}>
                  <code className="kc-cmd-inline">{c.command}</code>
                  <span className={s.cmdDesc}>{c.description}</span>
                </span>,
                <No />,
                (r) => (r.order >= c.from ? <Yes /> : <No />),
                `cmd-${c.command}`,
              ),
            )}
          </tbody>
        </table>
      </TableFrame>

      <p className={s.note}>
        Everyone already has{' '}
        {everyoneCommands.map((c, i) => (
          <span key={c.command}>
            <code className="kc-cmd-inline">{c.command}</code>
            {i < everyoneCommands.length - 2 ? ', ' : i === everyoneCommands.length - 2 ? ' and ' : ''}
          </span>
        ))}
        , rank or not.{everyoneExtras.length ? ` ${everyoneExtras.join(' ')}` : null}
      </p>
    </div>
  )
}
