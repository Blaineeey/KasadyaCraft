import type { ReactNode } from 'react'

export interface BookProps {
  /** The (right-hand) page. When `left` is not given, this is the only page. */
  children: ReactNode
  /** Left page. With it, the book opens as a two-page spread on wide screens and stacks on phones. */
  left?: ReactNode
  /** Heading at the top of the first page. */
  title?: ReactNode
  titleAs?: 'h1' | 'h2' | 'h3'
  /** Small line at the foot of the last page ("Last checked 25 Nov 2026"). */
  footer?: ReactNode
  /** Cloth bookmark ribbon hanging out of the top. Default true. */
  ribbon?: boolean
  as?: 'div' | 'article' | 'section'
  id?: string
  className?: string
  'aria-label'?: string
  'aria-labelledby'?: string
}

/**
 * An open book: leather cover, parchment pages, a stitched spine shadow and a
 * ribbon bookmark. Dark ink on paper, so links and focus rings switch to their
 * on-light colours. Made for guides ("book pages") and long reads.
 * Owner: PIXEL UI DESIGNER.
 */
export default function Book({
  children,
  left,
  title,
  titleAs: Title = 'h2',
  footer,
  ribbon = true,
  as: Tag = 'article',
  id,
  className,
  ...aria
}: BookProps) {
  const heading = title ? <Title className="kc-book__title">{title}</Title> : null
  return (
    <Tag id={id} className={['kc-book', left ? 'is-spread' : 'is-single', className].filter(Boolean).join(' ')} {...aria}>
      {ribbon ? <span className="kc-book__ribbon" aria-hidden="true" /> : null}
      <div className="kc-book__pages">
        {left ? (
          <div className="kc-book__page kc-book__page--left">
            {heading}
            {left}
          </div>
        ) : null}
        <div className="kc-book__page kc-book__page--right">
          {left ? null : heading}
          {children}
          {footer ? <p className="kc-book__footer">{footer}</p> : null}
        </div>
      </div>
    </Tag>
  )
}
