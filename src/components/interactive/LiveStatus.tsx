'use client'

import Image from 'next/image'
import { motdTagline, playersLabel } from '@/lib/server-status'
import { site } from '@/lib/site'
import { useServerStatus } from './useServerStatus'

export interface LiveStatusProps {
  /**
   * chip = small header pill.
   * card = a "server list" entry (icon, name, MOTD, player count, signal bars) for the home hero and /play.
   * inline = plain text for a sentence ("3 players online right now").
   */
  variant?: 'chip' | 'card' | 'inline'
  /**
   * Card only: draw it as the selected server. A thick white frame (the hotbar's selection frame)
   * and a bigger icon, name and player count when there is room. Static on purpose.
   */
  highlight?: boolean
  className?: string
}

type State = 'checking' | 'online' | 'offline' | 'unknown'

/**
 * Live player count with a status light. Honest states only: checking, online,
 * offline, unknown. Never a fake number. All instances share one poller.
 * Owner: INTERACTIVITY ENGINEER.
 */
export default function LiveStatus({ variant = 'chip', highlight = false, className }: LiveStatusProps) {
  const { status, loading } = useServerStatus()

  let state: State = 'checking'
  if (status && status.source !== 'stub') state = status.online ? 'online' : 'offline'
  else if (!loading) state = 'unknown'

  const online = status?.players.online ?? 0
  const max = status?.players.max ?? 0
  const framed = variant === 'card' && highlight
  const cls = ['kc-status', `kc-status--${variant}`, framed ? undefined : className].filter(Boolean).join(' ')

  if (variant === 'card') {
    const tagline = motdTagline(status?.motd) ?? site.motdLine
    const sample = state === 'online' ? status?.players.sample : undefined
    const iconPx = framed ? 96 : 64
    const card = (
      <div className={cls} data-state={state}>
        <Image src="/logo.png" alt="" width={iconPx} height={iconPx} className="kc-status__icon" />
        <div className="kc-status__main">
          <p className="kc-status__name">{site.name}</p>
          <p className="kc-status__motd">{tagline}</p>
          <p className="kc-status__meta">
            <span className="kc-status__addr">{site.address}</span>
            <span className="kc-status__ver">{site.versionLabel}</span>
          </p>
        </div>
        <div className="kc-status__side">
          <SignalBars state={state} />
          <p className="kc-status__count">
            {state === 'online' ? (
              <>
                <span aria-hidden="true">
                  {online}
                  <span className="kc-status__max">/{max}</span>
                </span>
                <span className="kc-sr-only">
                  {playersLabel(online)} online out of {max}
                </span>
              </>
            ) : (
              cardLabel(state)
            )}
          </p>
        </div>
        {sample && sample.length > 0 ? (
          <p className="kc-status__sample">
            <span className="kc-status__sample-label">Online now:</span> {sample.join(', ')}
          </p>
        ) : null}
        {state === 'offline' ? (
          <p className="kc-status__note">
            The server did not answer just now. It may be restarting, so try again in a minute or check{' '}
            <a href={site.discord} target="_blank" rel="noopener noreferrer">
              Discord
            </a>
            .
          </p>
        ) : null}
        {state === 'unknown' ? (
          <p className="kc-status__note">We could not check the server from here. It may still be up, so just try joining.</p>
        ) : null}
      </div>
    )
    return framed ? <div className={['kc-status-pick', className].filter(Boolean).join(' ')}>{card}</div> : card
  }

  let text = 'Checking server...'
  if (state === 'online') text = variant === 'inline' ? `${playersLabel(online)} online right now` : `${online} online`
  else if (state === 'offline') text = variant === 'inline' ? 'The server is offline right now' : 'Offline'
  else if (state === 'unknown') text = variant === 'inline' ? 'Live status is unavailable' : 'Status unknown'

  return (
    <span className={cls} data-state={state}>
      <span className="kc-status__light" aria-hidden="true" />
      <span className="kc-status__text">
        {text}
        {variant === 'chip' && state === 'online' ? <span className="kc-sr-only"> on {site.name}</span> : null}
      </span>
    </span>
  )
}

function cardLabel(state: State): string {
  if (state === 'offline') return 'Offline'
  if (state === 'unknown') return 'No signal'
  return 'Pinging...'
}

/** Five pixel signal bars, like the multiplayer list. Cycles while pinging. */
function SignalBars({ state }: { state: State }) {
  return (
    <span className="kc-status__bars" data-state={state} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className="kc-status__bar" />
      ))}
    </span>
  )
}
