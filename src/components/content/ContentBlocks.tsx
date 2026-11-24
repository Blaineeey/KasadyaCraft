import Image from 'next/image'
import { Badge, Callout, Command, Slot, SlotGrid } from '@/components/ui'
import { slugify, type ContentBlock, type RankId } from '@/lib/content'
import { renderInline } from './RichText'

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
            return (
              <div key={i} className="kc-table-wrap" role="region" aria-label={b.caption ?? 'Table'} tabIndex={0}>
                <table className="kc-table">
                  {b.caption ? <caption>{b.caption}</caption> : null}
                  <thead>
                    <tr>
                      {b.head.map((h) => (
                        <th key={h} scope="col">
                          {renderInline(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (c === 0 ? <th key={c} scope="row">{renderInline(cell)}</th> : <td key={c}>{renderInline(cell)}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'slots':
            return (
              <SlotGrid key={i} label={b.label} title={b.title} columns={b.columns}>
                {b.items.map((it, j) => (
                  <Slot key={`${it.label}-${j}`} label={it.label} icon={it.icon} count={it.count} rarity={it.rarity} lines={it.lines} />
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
