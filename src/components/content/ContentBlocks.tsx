import Image from 'next/image'
import { Badge, Callout, Command, Slot, SlotGrid } from '@/components/ui'
import GuideArt from '@/components/guides/GuideArt'
import { slugify, type ContentBlock, type RankId } from '@/lib/content'
import { renderInline } from './RichText'
import TableFrame from './TableFrame'

/**
 * Renders a guide/wiki body (ContentBlock[]). Styling lives in
 * src/styles/content.css (PIXEL UI DESIGNER). Structure owned by
 * SITE ARCHITECT / INTEGRATOR: writers ask for new block types in their report.
 *
 * `tone` adapts colours to the panel underneath: 'dark' (stone/deepslate
 * panels, wiki) or 'light' (paper/GUI panels, guides).
 */
export interface ContentBlocksProps {
  blocks: ContentBlock[]
  tone?: 'dark' | 'light'
  className?: string
}

const rankLabel: Record<RankId, string> = {
  vip: 'VIP',
  'vip-plus': 'VIP+',
  mvp: 'MVP',
  'mvp-plus': 'MVP+',
  'mvp-plus-plus': 'MVP++',
}

type TableBlock = Extract<ContentBlock, { type: 'table' }>

/** Inline markup stripped to plain text, for data-labels and aria-labels. */
function plainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
}

/**
 * Should this table turn into one card per row on phones (< 600px)? Only when it has 3+ columns
 * and its text would not fit a ~300px phone column without being squeezed into one word per line:
 * roughly 7.5px per character, each column capped at 18 characters, plus cell padding.
 * Short-celled tables (prices, counts) stay a compact table instead.
 */
function stacksOnPhones(b: TableBlock): boolean {
  if (b.head.length < 3) return false
  const width = b.head.reduce((sum, h, c) => {
    const longest = Math.max(0, ...b.rows.map((r) => plainText(r[c] ?? '').length))
    return sum + Math.max(Math.min(longest, 18), Math.min(plainText(h).length, 14)) * 7.5 + 24
  }, 0)
  return width > 300
}

/** Cells this short sit on one line next to their label in the phone cards, like a stat line. */
const SHORT_CELL = 18

function Table({ b }: { b: TableBlock }) {
  const stack = stacksOnPhones(b)
  const labels = b.head.map(plainText)
  const label = b.caption ? plainText(b.caption) : `Table: ${labels.join(', ')}`
  /* Explicit table roles keep the semantics when CSS turns the rows into cards (display: block). */
  const role = (r: string) => (stack ? r : undefined)
  return (
    <TableFrame label={label} caption={b.caption ? renderInline(b.caption) : undefined} stack={stack}>
      <table className="kc-table" role={role('table')}>
        {b.caption ? <caption className="kc-sr-only">{renderInline(b.caption)}</caption> : null}
        <thead role={role('rowgroup')}>
          <tr role={role('row')}>
            {b.head.map((h) => (
              <th key={h} scope="col" role={role('columnheader')}>
                {renderInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role={role('rowgroup')}>
          {b.rows.map((row, r) => (
            <tr key={r} role={role('row')}>
              {row.map((cell, c) => {
                if (c === 0) {
                  return (
                    <th key={c} scope="row" role={role('rowheader')}>
                      {renderInline(cell)}
                    </th>
                  )
                }
                if (!stack) return <td key={c}>{renderInline(cell)}</td>
                const text = plainText(cell).trim()
                return (
                  <td key={c} role="cell" data-label={labels[c]} data-short={text && text.length <= SHORT_CELL ? '' : undefined}>
                    {text ? <span className="kc-cell">{renderInline(cell)}</span> : null}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableFrame>
  )
}

export default function ContentBlocks({ blocks, tone = 'dark', className }: ContentBlocksProps) {
  return (
    <div className={['kc-prose', `kc-prose--${tone}`, className].filter(Boolean).join(' ')}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'h2':
            return (
              <h2 key={i} id={b.id ?? slugify(b.text)}>
                {renderInline(b.text)}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} id={b.id ?? slugify(b.text)}>
                {renderInline(b.text)}
              </h3>
            )
          case 'p':
            return <p key={i}>{renderInline(b.text)}</p>
          case 'list': {
            const List = b.ordered ? 'ol' : 'ul'
            return (
              <List key={i} className="kc-prose__list">
                {b.items.map((item, j) => (
                  <li key={j}>{renderInline(item)}</li>
                ))}
              </List>
            )
          }
          case 'steps':
            return (
              <ol key={i} className="kc-steps">
                {b.items.map((s, j) => (
                  <li key={j} className="kc-steps__item">
                    <span className="kc-steps__num t-pixel" aria-hidden="true">
                      {j + 1}
                    </span>
                    <div className="kc-steps__body">
                      <p className="kc-steps__title">{renderInline(s.title)}</p>
                      <p>{renderInline(s.text)}</p>
                      {s.command ? <Command command={s.command} /> : null}
                    </div>
                  </li>
                ))}
              </ol>
            )
          case 'commands':
            return (
              <div key={i} className="kc-cmdlist">
                {b.title ? <p className="kc-cmdlist__title t-label">{b.title}</p> : null}
                <ul>
                  {b.items.map((c) => (
                    <li key={c.command} className="kc-cmdlist__row">
                      <Command command={c.command} description={renderInline(c.description)} />
                      {c.rank && c.rank !== 'everyone' ? (
                        <Badge tone="magenta">
                          <span className="kc-sr-only">Needs rank </span>
                          {rankLabel[c.rank]}
                          <span className="kc-sr-only"> or higher</span>
                        </Badge>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            )
          case 'callout':
            return (
              <Callout key={i} tone={b.tone} title={b.title}>
                <p>{renderInline(b.text)}</p>
              </Callout>
            )
          case 'table':
            return <Table key={i} b={b} />
          case 'slots':
            return (
              <SlotGrid key={i} label={b.label} title={b.title} columns={b.columns}>
                {b.items.map((it, j) => (
                  <Slot
                    key={`${it.label}-${j}`}
                    label={it.label}
                    icon={it.art ? undefined : it.icon}
                    art={it.art ? <GuideArt name={it.art} size={32} /> : undefined}
                    count={it.count}
                    rarity={it.rarity}
                    lines={it.lines}
                  />
                ))}
              </SlotGrid>
            )
          case 'image':
            return (
              <figure key={i} className="kc-figure">
                <Image src={b.src} alt={b.alt} width={b.width} height={b.height} sizes="(max-width: 768px) 100vw, 720px" />
                {b.caption ? <figcaption>{renderInline(b.caption)}</figcaption> : null}
              </figure>
            )
          case 'divider':
            return <hr key={i} className="kc-prose__divider" />
          default:
            return null
        }
      })}
    </div>
  )
}
