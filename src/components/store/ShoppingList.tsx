'use client'

import { useEffect, useId, useRef, useState, type FormEvent } from 'react'
import { useToast } from '@/components/interactive'
import Command from '@/components/ui/Command'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import { site } from '@/lib/site'
import { CHECKOUT_MODE, STORE_CHECKOUT_URL, formatPrice, getRank, priceLabel, sellsOnWeb } from '@/lib/store'
import { startTebexCheckout, tebexLines, USERNAME_RE } from './checkout'
import PriceTag from './PriceTag'
import StoreSprite from './StoreSprite'
import { useStore, type ListLine } from './StoreProvider'
import { listTotals, webTotal } from './totals'
import s from './StoreDialog.module.css'

/**
 * The mini cart, called "your list" because today it is a planner: it adds up
 * what you want in Tokens, Points and money and tells you where to buy it.
 * When a Tebex store is configured it hands the list to Tebex's checkout.
 * Owner: STORE ENGINEER.
 */
export default function ShoppingList() {
  const { lines, listOpen, setListOpen, setQuantity, remove, clear } = useStore()
  const ref = useRef<HTMLDialogElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (listOpen && !dialog.open) {
      opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
      dialog.showModal()
    }
    if (!listOpen && dialog.open) dialog.close()
  }, [listOpen])

  function onClose() {
    setListOpen(false)
    const el = opener.current
    opener.current = null
    if (el?.isConnected) window.requestAnimationFrame(() => el.focus())
  }

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const onClick = (e: MouseEvent) => {
      if (e.target === dialog) dialog.close()
    }
    dialog.addEventListener('click', onClick)
    return () => dialog.removeEventListener('click', onClick)
  }, [])

  // Coming back from Tebex: ?checkout=done or ?checkout=cancelled
  useEffect(() => {
    if (CHECKOUT_MODE === 'off') return
    const params = new URLSearchParams(window.location.search)
    const result = params.get('checkout')
    if (!result) return
    if (result === 'done') {
      clear()
      toast({ heading: 'Thank you!', title: 'Your order is on its way in game', icon: 'gift', frame: 'goal', duration: 6000 })
    } else if (result === 'cancelled') {
      toast({ heading: 'Checkout cancelled', title: 'Your list is still here', icon: 'chest', duration: 4000 })
    }
    params.delete('checkout')
    const query = params.toString()
    try {
      window.history.replaceState(null, '', `${window.location.pathname}${query ? `?${query}` : ''}${window.location.hash}`)
    } catch {
      // ignore
    }
  }, [clear, toast])

  const totals = listTotals(lines)
  const realTotal = webTotal(lines)
  const missingRanks = rankWarnings(lines)

  return (
    <dialog ref={ref} className={[s.dialog, s.drawer].join(' ')} aria-labelledby="store-list-title" onClose={onClose}>
      <div className={s.frame}>
        <header className={s.head}>
          <h2 id="store-list-title" className={s.title}>
            <StoreSprite shape="shulker" size={32} /> Your list
          </h2>
          <button type="button" className={s.close} onClick={() => ref.current?.close()} aria-label="Close your list">
            <PixelIcon name="cross" size={24} />
          </button>
        </header>

        <div className={s.body}>
          {lines.length === 0 ? (
            <div className={s.empty}>
              <p>Nothing here yet.</p>
              <p className={s.small}>Press &ldquo;+ List&rdquo; on anything in the store to plan what to save up for.</p>
            </div>
          ) : (
            <>
              <ul className={s.lines} aria-label="Items on your list">
                {lines.map((line) => (
                  <ListRow key={line.item.id} line={line} onQuantity={setQuantity} onRemove={remove} />
                ))}
              </ul>

              {missingRanks.length > 0 ? (
                <p className={s.needs}>
                  <PixelIcon name="warning" size={16} />
                  <span>
                    Ranks are bought in order. {missingRanks.join(' ')} Already own it? Then you are fine.
                  </span>
                </p>
              ) : null}

              <dl className={s.totals}>
                <div>
                  <dt>Total in game</dt>
                  <dd>
                    {totals.length === 0 ? (
                      'Nothing with a fixed price'
                    ) : (
                      totals.map((t, i) => (
                        <span key={t.currency} className={s.totalPart}>
                          {i > 0 ? <span aria-hidden="true"> + </span> : null}
                          <PriceTag price={t} size="md" />
                        </span>
                      ))
                    )}
                  </dd>
                </div>
                {realTotal ? (
                  <div>
                    <dt>On the web store</dt>
                    <dd>{formatPrice(realTotal)}</dd>
                  </div>
                ) : null}
              </dl>

              <CheckoutPanel lines={lines} />

              <button type="button" className={s.textButton} onClick={clear}>
                Clear the list
              </button>
            </>
          )}
        </div>
      </div>
    </dialog>
  )
}

function ListRow({
  line,
  onQuantity,
  onRemove,
}: {
  line: ListLine
  onQuantity: (id: string, q: number) => void
  onRemove: (id: string) => void
}) {
  const { item, quantity } = line
  const stack = item.maxQuantity > 1
  return (
    <li className={s.line}>
      <span className={s.lineSlot}>
        <StoreSprite shape={item.sprite.shape} tone={item.sprite.tone} size={32} />
      </span>
      <div className={s.lineText}>
        <span className={s.lineName}>{item.name}</span>
        <span className={s.lineMeta}>
          {item.price ? formatPrice(item.price) : ''}
          {stack ? ' each' : ''}
          {!sellsOnWeb(item) && CHECKOUT_MODE !== 'off' ? ' · in game only' : ''}
        </span>
      </div>
      {stack ? (
        <div className={s.stepper} role="group" aria-label={`Quantity of ${item.name}`}>
          <button type="button" onClick={() => onQuantity(item.id, quantity - 1)} aria-label={`One less ${item.name}`}>
            −
          </button>
          <output aria-live="polite">{quantity}</output>
          <button
            type="button"
            onClick={() => onQuantity(item.id, quantity + 1)}
            disabled={quantity >= item.maxQuantity}
            aria-label={`One more ${item.name}`}
          >
            +
          </button>
        </div>
      ) : null}
      <button type="button" className={s.remove} onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name} from your list`}>
        <PixelIcon name="cross" size={16} />
      </button>
      {item.price && stack && quantity > 1 && item.price.currency !== 'free' && item.price.currency !== 'real' ? (
        <span className="kc-sr-only">Line total {priceLabel({ ...item.price, amount: item.price.amount * quantity })}</span>
      ) : null}
    </li>
  )
}

/** "MVP needs MVP+ ..." hints for ranks whose previous rank is not on the list. */
function rankWarnings(lines: ListLine[]): string[] {
  const onList = new Set(lines.map((l) => l.item.rankId).filter(Boolean))
  const out: string[] = []
  for (const l of lines) {
    const rank = l.item.rankId ? getRank(l.item.rankId) : undefined
    if (rank?.requires && !onList.has(rank.requires)) out.push(`${rank.name} needs ${getRank(rank.requires)?.name} first.`)
  }
  return out
}

function CheckoutPanel({ lines }: { lines: ListLine[] }) {
  const commands = Array.from(new Set(lines.map((l) => l.item.commands?.[0]).filter((c): c is string => !!c)))

  if (CHECKOUT_MODE === 'link' && STORE_CHECKOUT_URL) {
    return (
      <div className={s.checkout}>
        <PixelButton variant="gold" icon="coin" href={STORE_CHECKOUT_URL} external block>
          Continue on the web store
        </PixelButton>
        <p className={s.small}>Pick the same items there. Anything marked &ldquo;in game only&rdquo; is bought with /purchase.</p>
      </div>
    )
  }

  if (CHECKOUT_MODE === 'headless') return <HeadlessCheckout lines={lines} />

  return (
    <div className={s.soon}>
      <p className={s.soonTitle}>
        <PixelIcon name="lantern" size={24} /> The web store is opening soon
      </p>
      <p>Good news: you can buy everything on this list in game today.</p>
      <ol className={s.steps}>
        <li>
          Join <strong>{site.address}</strong> and hop into Survival.
        </li>
        <li>Open the right menu:</li>
      </ol>
      <div className={s.commands}>
        {commands.map((c) => (
          <Command key={c} command={c} />
        ))}
      </div>
      <p className={s.small}>Want to hear the day the web store opens? We announce it in Discord first.</p>
      <PixelButton variant="discord" icon="chat" href={site.discord}>
        Join the Discord
      </PixelButton>
    </div>
  )
}

function HeadlessCheckout({ lines }: { lines: ListLine[] }) {
  const [username, setUsername] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<{ message: string; fallbackUrl: string | null } | null>(null)
  const inputId = useId()
  const hintId = useId()
  const sellable = tebexLines(lines)
  const gameOnly = lines.filter((l) => !sellable.includes(l))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError(null)
    setBusy(true)
    const result = await startTebexCheckout(lines, username.trim())
    if (result.ok) {
      window.location.assign(result.url)
      return
    }
    setBusy(false)
    setError({ message: result.message, fallbackUrl: result.fallbackUrl })
  }

  return (
    <form className={s.checkout} onSubmit={onSubmit} noValidate>
      {gameOnly.length > 0 ? (
        <p className={s.small}>In game only (not on the web store): {gameOnly.map((l) => l.item.name).join(', ')}.</p>
      ) : null}
      <label htmlFor={inputId} className={s.label}>
        Your Minecraft username
      </label>
      <input
        id={inputId}
        className={s.input}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="off"
        spellCheck={false}
        maxLength={16}
        aria-describedby={hintId}
        aria-invalid={username.length > 0 && !USERNAME_RE.test(username.trim())}
      />
      <p id={hintId} className={s.small}>
        Exactly as it shows in game. On Bedrock, start with the dot (like .Steve). Your items go to this player.
      </p>
      <PixelButton type="submit" variant="gold" icon="coin" block disabled={busy || sellable.length === 0}>
        {busy ? 'Opening checkout...' : 'Checkout on Tebex'}
      </PixelButton>
      <p className={s.small}>Payment happens on Tebex, our payment partner. We never see your card details.</p>
      <div role="alert" className={s.alert}>
        {error ? (
          <>
            <p>{error.message}</p>
            {error.fallbackUrl ? (
              <a href={error.fallbackUrl} target="_blank" rel="noopener noreferrer">
                Open the web store instead
              </a>
            ) : (
              <a href={site.discord} target="_blank" rel="noopener noreferrer">
                Ask us in Discord
              </a>
            )}
          </>
        ) : null}
      </div>
    </form>
  )
}
