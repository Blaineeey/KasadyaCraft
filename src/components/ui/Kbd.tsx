import type { ReactNode } from 'react'

/**
 * A chunky keyboard keycap: "Press <Kbd>T</Kbd> to open chat".
 * Owner: PIXEL UI DESIGNER.
 */
export default function Kbd({ children, className }: { children: ReactNode; className?: string }) {
  return <kbd className={['kc-kbd', className].filter(Boolean).join(' ')}>{children}</kbd>
}
