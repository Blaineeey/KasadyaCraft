import { CopyIp } from '@/components/interactive'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import { site } from '@/lib/site'
import s from './StorePage.module.css'

const ways: { icon: PixelIconName; title: string; text: string }[] = [
  { icon: 'heart', title: 'Bring a friend', text: 'A server is only as fun as the people on it. Send them the address below.' },
  { icon: 'chat', title: 'Tell us what is broken', text: 'Found a bug or have an idea? Post it in Discord. We read everything.' },
  { icon: 'star', title: 'Vote, once voting opens', text: 'Votes help new players find us. We will switch it on soon.' },
  { icon: 'house', title: 'Build something great', text: 'Nice builds in the plot world make everyone want to stay.' },
]

/** The "Support" tab: no donate button, just honest ways to help. Owner: STORE ENGINEER. */
export default function SupportPanel() {
  return (
    <div className={s.support}>
      <p className={s.supportLead}>
        There is no donate button, and that is okay. Salamat sa pagsuporta! This is what really helps right now:
      </p>
      <ul className={s.supportList}>
        {ways.map((w) => (
          <li key={w.title} className={s.supportItem}>
            <span className={s.supportIcon}>
              <PixelIcon name={w.icon} size={32} />
            </span>
            <div>
              <h4 className={s.supportTitle}>{w.title}</h4>
              <p>{w.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={s.supportActions}>
        <CopyIp size="md" />
        <PixelButton variant="discord" icon="chat" href={site.discord}>
          Join the Discord
        </PixelButton>
        <PixelButton variant="stone" icon="star" href="/vote">
          Voting
        </PixelButton>
      </div>
    </div>
  )
}
