import type { CSSProperties, ReactNode } from 'react'
import Callout from '@/components/ui/Callout'
import PixelIcon from '@/components/ui/PixelIcon'
import { site } from '@/lib/site'
import {
  defaultLimits,
  everyoneCommands,
  formatPrice,
  priceLabel,
  ranks,
  starterKit,
  tokensFromPlaytime,
  tokensToReach,
  type Rank,
  type RankLimits,
} from '@/lib/store'
import s from './WikiData.module.css'

/*
 * Rank comparison for /wiki/ranks. Renders ONLY from src/lib/store.ts so perks and
 * prices live in one place (STORE ENGINEER owns the data). RankCommand.review is an
 * owner-only note and is never rendered. Owner: WIKI WRITER.
 */

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

function tokens(n: number): string {
  return `⛃${n.toLocaleString('en-US')}`
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

  const first = list[0]
  const firstCost = first.price?.currency === 'tokens' ? first.price.amount : null
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
      {firstCost !== null && tokensFromPlaytime < firstCost ? (
        <Callout tone="warn" title="Honest Token check">
          <p>
            Right now Tokens only come from playtime levels, and they add up to {tokens(tokensFromPlaytime)} in total. {first.name}{' '}
            costs {tokens(firstCost)}, so playtime alone is not quite enough yet. News about other ways to earn Tokens goes up on{' '}
            <a href={site.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            .
          </p>
        </Callout>
      ) : null}

      <div className={`kc-table-wrap ${s.wrap}`} role="region" aria-label="Rank comparison" tabIndex={0}>
        <table className={`kc-table ${s.matrix}`}>
          <caption>Each rank keeps everything from the ranks before it.</caption>
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
              'Price',
              'Free',
              (r) => (
                <span className={s.price}>
                  <span aria-hidden="true">{formatPrice(r.price)}</span>
                  <span className="kc-sr-only">{priceLabel(r.price)}</span>
                </span>
              ),
              'price',
            )}
            {row(
              'Total from no rank',
              '-',
              (r) => (
                <span className={s.price}>
                  <span aria-hidden="true">{tokens(tokensToReach(r.id))}</span>
                  <span className="kc-sr-only">{tokensToReach(r.id).toLocaleString('en-US')} Tokens</span>
                </span>
              ),
              'total',
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
      </div>

      <p className={s.note}>
        Everyone already has{' '}
        {everyoneCommands.map((c, i) => (
          <span key={c.command}>
            <code className="kc-cmd-inline">{c.command}</code>
            {i < everyoneCommands.length - 2 ? ', ' : i === everyoneCommands.length - 2 ? ' and ' : ''}
          </span>
        ))}
        , rank or not.
      </p>
    </div>
  )
}
