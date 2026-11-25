'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { ComponentProps } from 'react'

type IntentLinkProps = Omit<ComponentProps<typeof Link>, 'prefetch' | 'href'> & { href: string }

/**
 * A next/link that prefetches on intent (hover, keyboard focus, touch) instead of as soon as
 * it scrolls into view. For links that are on every page (hotbar, footer): viewport prefetch
 * made each page view download 12-16 other routes (230-320 KB gzipped) the player never asked for.
 * Navigation stays instant, because the prefetch starts a few hundred ms before the click.
 * Owner: PIXEL UI DESIGNER (added by the tech fixer).
 */
export default function IntentLink({ href, onMouseEnter, onFocus, onTouchStart, ...rest }: IntentLinkProps) {
  const router = useRouter()
  const warm = () => router.prefetch(href)
  return (
    <Link
      href={href}
      prefetch={false}
      onMouseEnter={(e) => {
        onMouseEnter?.(e)
        warm()
      }}
      onFocus={(e) => {
        onFocus?.(e)
        warm()
      }}
      onTouchStart={(e) => {
        onTouchStart?.(e)
        warm()
      }}
      {...rest}
    />
  )
}
