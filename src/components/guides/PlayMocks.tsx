import PixelIcon from '@/components/ui/PixelIcon'
import { site } from '@/lib/site'
import s from './play-mocks.module.css'

/*
 * Illustrations for /play: original mock-ups made from the kit (no game screenshots,
 * no Mojang art). The real instructions are always in the page text next to them.
 * Owner: STARTER-GUIDE WRITER.
 */

/** Which game versions can join. Re-check when ViaVersion on the servers is updated. */
export function VersionChips() {
  return (
    <ul className={s.versions} aria-label="Which versions can join">
      <li className={s.version} data-ok="yes">
        <PixelIcon name="check" size={32} />
        <span>
          <span className={s.versionName}>Java {site.recommendedVersion}</span>
          <span className={s.versionNote}>Best choice. Everything works.</span>
        </span>
      </li>
      <li className={s.version} data-ok="maybe">
        <PixelIcon name="warning" size={32} />
        <span>
          <span className={s.versionName}>Older Java 1.21</span>
          <span className={s.versionNote}>May connect. The pack is made for {site.recommendedVersion}.</span>
        </span>
      </li>
      <li className={s.version} data-ok="no">
        <PixelIcon name="cross" size={32} />
        <span>
          <span className={s.versionName}>Java 1.21.11 and 26.x</span>
          <span className={s.versionNote}>Not yet. You will see &quot;Outdated server&quot;.</span>
        </span>
      </li>
      <li className={s.version} data-ok="no">
        <PixelIcon name="cross" size={32} />
        <span>
          <span className={s.versionName}>Bedrock Edition</span>
          <span className={s.versionNote}>Phones and consoles can&apos;t join for now.</span>
        </span>
      </li>
    </ul>
  )
}

/** The "Add Server" screen, filled in. */
export function AddServerMock() {
  return (
    <figure className={s.figure}>
      <div className={s.dialog}>
        <p className={s.dialogTitle}>Add Server</p>
        <dl className={s.fields}>
          <div>
            <dt>Server Name</dt>
            <dd className={s.field}>{site.name}</dd>
          </div>
          <div>
            <dt>Server Address</dt>
            <dd className={`${s.field} ${s.fieldActive}`}>
              {site.address}
              <span className={s.cursor} aria-hidden="true" />
            </dd>
          </div>
        </dl>
        <span className={s.fakeButton} aria-hidden="true">
          Server Resource Packs: Prompt
        </span>
        <span className={s.fakeButton} aria-hidden="true">
          Done
        </span>
      </div>
      <figcaption className={s.caption}>
        Name it anything you like. The address is what matters. Leave Server Resource Packs on Prompt or Enabled.
      </figcaption>
    </figure>
  )
}
