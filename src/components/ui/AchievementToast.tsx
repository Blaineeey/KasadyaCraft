import PixelIcon from './PixelIcon'
import type { PixelIconName } from './pixel-icons'

export type AdvancementFrame = 'task' | 'goal' | 'challenge'

export interface AchievementToastProps {
  title: string
  /** Defaults by frame: "Advancement Made!", "Goal Reached!", "Challenge Complete!" */
  heading?: string
  icon?: PixelIconName
  frame?: AdvancementFrame
  /** Play the exit animation (the toast queue sets this just before removing it). */
  leaving?: boolean
  className?: string
}

export const frameHeading: Record<AdvancementFrame, string> = {
  task: 'Advancement Made!',
  goal: 'Goal Reached!',
  challenge: 'Challenge Complete!',
}

/**
 * The visual of an advancement toast: dark slab with notched corners, the icon
 * in a framed slot (frame shape changes with the type), yellow heading, white
 * title. Slides in from the right in pixel steps.
 * Presentational only: the queue and timing live in components/interactive/ToastProvider.
 * Owner: PIXEL UI DESIGNER.
 */
export default function AchievementToast({ title, heading, icon = 'star', frame = 'task', leaving = false, className }: AchievementToastProps) {
  return (
    <div className={['kc-toast', `kc-toast--${frame}`, leaving ? 'is-leaving' : '', className].filter(Boolean).join(' ')}>
      <span className="kc-toast__icon">
        <PixelIcon name={icon} size={32} />
      </span>
      <span className="kc-toast__text">
        <span className="kc-toast__heading">{heading ?? frameHeading[frame]}</span>
        <span className="kc-toast__title">{title}</span>
      </span>
    </div>
  )
}
