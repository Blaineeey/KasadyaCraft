import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'

export type PixelButtonVariant = 'grass' | 'gold' | 'stone' | 'redstone' | 'wood' | 'discord'
export type PixelButtonSize = 'sm' | 'md' | 'lg'

interface CommonProps {
  variant?: PixelButtonVariant
  size?: PixelButtonSize
  icon?: PixelIconName
  iconRight?: PixelIconName
  /** Stretch to the full width of the parent. */
  block?: boolean
  className?: string
  children: ReactNode
}

export type PixelButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    href?: undefined
    /** Toggle button: renders sunk in and sets aria-pressed (tabs, filters, day/night). */
    pressed?: boolean
  }

export type PixelButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'children' | 'className'> & {
    href: string
    /** Force new-tab behaviour. Auto-on for http(s) links. */
    external?: boolean
  }

export type PixelButtonProps = PixelButtonAsButton | PixelButtonAsLink

/**
 * Chunky bevelled block button with a real pressed state: on press it sinks
 * into its base (translate + bevel flips), exactly the depth of the base.
 * Renders <Link> for internal hrefs, <a target=_blank> for external ones, <button> otherwise.
 * External links get a visually hidden "(opens in a new tab)".
 * Owner: PIXEL UI DESIGNER.
 */
export default function PixelButton(props: PixelButtonProps) {
  const { variant = 'grass', size = 'md', icon, iconRight, block, className, children } = props
  const pressed = props.href === undefined ? props.pressed : undefined
  const cls = [
    'kc-btn',
    `kc-btn--${variant}`,
    `kc-btn--${size}`,
    block ? 'kc-btn--block' : '',
    pressed ? 'is-pressed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')
  const iconSize = size === 'lg' ? 32 : 16
  const inner = (
    <>
      {icon ? <PixelIcon name={icon} size={iconSize} className="kc-btn__icon" /> : null}
      <span className="kc-btn__label">{children}</span>
      {iconRight ? <PixelIcon name={iconRight} size={iconSize} className="kc-btn__icon kc-btn__icon--right" /> : null}
    </>
  )

  if (props.href !== undefined) {
    const { href, external, ...rest } = stripCommon(props) as Omit<PixelButtonAsLink, keyof CommonProps>
    const isExternal = external ?? /^https?:\/\//.test(href)
    if (isExternal) {
      return (
        <a className={cls} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
          {inner}
          <span className="kc-sr-only"> (opens in a new tab)</span>
        </a>
      )
    }
    return (
      <Link className={cls} href={href} {...rest}>
        {inner}
      </Link>
    )
  }

  const { type, ...rest } = stripCommon(props) as Omit<PixelButtonAsButton, keyof CommonProps | 'href' | 'pressed'>
  return (
    <button className={cls} type={type ?? 'button'} aria-pressed={pressed} {...rest}>
      {inner}
    </button>
  )
}

/** Removes the visual props so the rest can be spread onto the DOM element. */
function stripCommon(props: PixelButtonProps): Record<string, unknown> {
  const rest: Record<string, unknown> = { ...props }
  for (const key of ['variant', 'size', 'icon', 'iconRight', 'block', 'className', 'children', 'pressed']) delete rest[key]
  if (props.href === undefined) delete rest.href
  return rest
}
