'use client'

import { PixelButton, PixelIcon, XpBar } from '@/components/ui'
import { cooldownLabel, voteSites } from '@/lib/vote'
import { useVoteOpens, waitLabel } from './useVoteOpens'
import s from './VoteList.module.css'

/**
 * The vote sites as a multiplayer server list, with an XP bar for how many links were opened in
 * this browser (see useVoteOpens). The Vote button always works: an opened entry only says when
 * it should be ready again.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function VoteList() {
  const { waitLeft, markOpened } = useVoteOpens()
  const entries = voteSites.map((v) => {
    const left = waitLeft(v.id, v.cooldownHours)
    return { ...v, opened: left !== null && left > 0, before: left === 0, left: left ?? 0 }
  })
  const waiting = entries.filter((e) => e.opened)
  const total = entries.length
  const done = waiting.length

  let next = ''
  if (done > 0) next = ` ${total - done} left.`
  if (done === total) next = ` Next ready in ${waitLabel(Math.min(...waiting.map((e) => e.left)))}.`

  return (
    <>
      <div className={s.progress}>
        <p className={s.count} aria-live="polite">
          <strong>
            {done} of {total} opened
          </strong>{' '}
          in this browser.{next}
        </p>
        <XpBar value={done} max={total} segments={total} label="Vote links opened in this browser" />
        <p className={s.honest}>This only marks links you opened. A vote counts once you finish it on the site.</p>
      </div>

      <ol className={s.list} role="list">
        {entries.map((e, i) => (
          <li key={e.id} className={s.entry} data-opened={e.opened || undefined}>
            <span className={s.slot} aria-hidden="true">
              {e.opened ? <PixelIcon name="check" size={32} /> : null}
              <span className={s.num}>{i + 1}</span>
            </span>
            <div className={s.main}>
              <h3 className={s.name}>{e.name}</h3>
              <p className={s.host}>{e.host}</p>
            </div>
            <div className={s.side}>
              <ReadyBars share={1 - e.left / (e.cooldownHours * 3_600_000)} />
              <p className={s.state}>
                {e.opened ? (
                  <>
                    <span className={s.opened}>Opened.</span> <span>Ready again in {waitLabel(e.left)}</span>
                  </>
                ) : (
                  <>
                    <span>{cooldownLabel(e.cooldownHours)}</span> {e.before ? <span className={s.opened}>Ready again</span> : null}
                  </>
                )}
              </p>
            </div>
            <PixelButton
              href={e.url}
              variant={e.opened ? 'wood' : 'gold'}
              className={s.vote}
              onClick={() => markOpened(e.id)}
              onAuxClick={(ev) => {
                if (ev.button === 1) markOpened(e.id) // a middle click opens the tab too
              }}
            >
              Vote<span className="kc-sr-only"> on {e.name}</span>
            </PixelButton>
          </li>
        ))}
      </ol>
    </>
  )
}

/** Signal-bar shape from the server list, used as a recharge meter: full gold = ready to vote. */
function ReadyBars({ share }: { share: number }) {
  const lit = share >= 1 ? 5 : Math.floor(share * 5)
  return (
    <span className={s.bars} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={s.bar} data-lit={n <= lit || undefined} />
      ))}
    </span>
  )
}
