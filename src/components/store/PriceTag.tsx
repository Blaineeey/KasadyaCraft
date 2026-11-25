import PixelIcon from '@/components/ui/PixelIcon'
import { formatPrice, priceLabel, type Price } from '@/lib/store'
import StoreSprite from './StoreSprite'
import s from './PriceTag.module.css'

export interface PriceTagProps {
  price: Price | null
  /** "from ⛃1" for items sold in several sizes. */
  from?: boolean
  /** sm/md: compact text with the in-game symbol (⛃ ✪ $). lg: currency sprite + amount. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

/** Price in the terminal font. Owner: STORE ENGINEER. */
export default function PriceTag({ price, from, size = 'md', className }: PriceTagProps) {
  const currency = price?.currency ?? 'none'
  const big = size === 'lg'
  const art =
    big && currency === 'tokens' ? (
      <StoreSprite shape="tokens" size={32} />
    ) : big && currency === 'points' ? (
      <StoreSprite shape="points" size={32} />
    ) : big && currency === 'money' ? (
      <PixelIcon name="coin" size={32} />
    ) : null
  const amount = price && 'amount' in price && art ? price.amount.toLocaleString('en-US') : null
  const text = amount ?? (price ? formatPrice(price) : 'Not yet')
  return (
    <span className={[s.tag, s[size], className].filter(Boolean).join(' ')} data-currency={currency}>
      {art}
      <span aria-hidden="true">
        {from ? <span className={s.from}>from </span> : null}
        {text}
      </span>
      <span className="kc-sr-only">
        {from ? 'from ' : ''}
        {price ? priceLabel(price) : 'not available yet'}
      </span>
    </span>
  )
}
