'use client'

import { useState } from 'react'
import { useToast } from '@/components/interactive'
import { PixelButton, XpBar, type AdvancementFrame } from '@/components/ui'
import styles from './styleguide.module.css'

/** Toggle buttons (pressed state) like store category tabs. */
export function ToggleDemo() {
  const tabs = ['Ranks', 'Crate keys', 'Cosmetics']
  const [active, setActive] = useState(0)
  return (
    <div className={styles.row} role="group" aria-label="Example tabs">
      {tabs.map((t, i) => (
        <PixelButton key={t} variant="stone" size="sm" pressed={active === i} onClick={() => setActive(i)}>
          {t}
        </PixelButton>
      ))}
    </div>
  )
}

/** Fires real advancement toasts through the site's ToastProvider. */
export function ToastDemo() {
  const { toast } = useToast()
  const fire = (frame: AdvancementFrame) => {
    const map = {
      task: { title: 'Copied the server address', icon: 'grass' as const },
      goal: { title: 'Read every starter guide', icon: 'book' as const },
      challenge: { title: 'Beat Draedon in the Lab of Horrors', icon: 'boss' as const },
    }
    toast({ ...map[frame], frame })
  }
  return (
    <div className={styles.row}>
      <PixelButton size="sm" variant="grass" onClick={() => fire('task')}>
        Fire a task toast
      </PixelButton>
      <PixelButton size="sm" variant="gold" onClick={() => fire('goal')}>
        Fire a goal toast
      </PixelButton>
      <PixelButton size="sm" variant="redstone" onClick={() => fire('challenge')}>
        Fire a challenge toast
      </PixelButton>
    </div>
  )
}

/** XP bar that fills in pixel steps. */
export function XpDemo() {
  const [value, setValue] = useState(3)
  return (
    <div className={styles.stack}>
      <XpBar value={value} max={6} label="Guides read" showValue segments={6} />
      <div className={styles.row}>
        <PixelButton size="sm" variant="stone" onClick={() => setValue((v) => Math.max(0, v - 1))}>
          Less
        </PixelButton>
        <PixelButton size="sm" variant="grass" onClick={() => setValue((v) => Math.min(6, v + 1))}>
          More
        </PixelButton>
      </div>
    </div>
  )
}
