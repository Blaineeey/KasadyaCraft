import Image from 'next/image'
import Link from 'next/link'
import { CopyIp, LiveStatus, TimeOfDayToggle } from '@/components/interactive'
import Bunting from '@/components/ui/Bunting'
import { site } from '@/lib/site'

/**
 * Top bar: a dark-oak eave with the logo, wordmark and the server's MOTD line,
 * live player count, copy-IP and the day/night toggle. Festival bunting with
 * little bulbs hangs under it; the bulbs light up at night.
 * Main navigation is NOT here: it is the bottom <Hotbar>.
 * Phones keep only logo, wordmark and the toggle; the home hero and /play show
 * status and the address there.
 * Owner: PIXEL UI DESIGNER (layout/visuals). Interactive pieces come from
 * components/interactive (INTERACTIVITY ENGINEER).
 */
export default function SiteHeader() {
  return (
    <header className="kc-header">
      <div className="kc-container kc-header__row">
        <Link href="/" className="kc-brand" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt="" width={48} height={48} className="kc-brand__logo" priority />
          <span className="kc-brand__text" aria-hidden="true">
            <span className="kc-brand__word">
              Kasadya<span>Craft</span>
            </span>
            <span className="kc-brand__motd">{site.motdLine}</span>
          </span>
        </Link>
        <div className="kc-header__tools">
          <LiveStatus variant="chip" className="kc-header__status" />
          <CopyIp size="sm" className="kc-header__ip" />
          <TimeOfDayToggle className="kc-header__time" />
        </div>
      </div>
      <Bunting flags={16} sag={10} lights className="kc-header__bunting" />
    </header>
  )
}
