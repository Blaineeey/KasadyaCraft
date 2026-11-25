import PixelIcon from '@/components/ui/PixelIcon'
import { VERSIONS } from '@/content/guides/facts'
import { site } from '@/lib/site'
import s from './play-mocks.module.css'

/*
 * Illustrations for /play: original mock-ups made from the kit (no game screenshots,
 * no Mojang art). The real instructions are always in the page text next to them.
 * Owner: STARTER-GUIDE WRITER.
 */

/**
 * Which game versions can join (VERSIONS in content/guides/facts.ts: Via 5.12.3 + Velocity).
 * Re-check when ViaVersion or the proxy on the servers is updated.
 */
export function VersionChips() {
  return (
    <ul className={s.versions} aria-label="Which versions can join">
      <li className={s.version} data-ok="yes">
        <PixelIcon name="check" size={32} />
        <span>
          <span className={s.versionName}>Java {site.recommendedVersion}</span>
          <span className={s.versionNote}>Best choice. Our resource pack is made for it.</span>
        </span>
      </li>
      <li className={s.version} data-ok="maybe">
        <PixelIcon name="warning" size={32} />
        <span>
          <span className={s.versionName}>Java 1.21.11 to {VERSIONS.newest}</span>
          <span className={s.versionNote}>Joins fine. A few custom items may look a little off.</span>
        </span>
      </li>
      <li className={s.version} data-ok="maybe">
        <PixelIcon name="warning" size={32} />
        <span>
          <span className={s.versionName}>Java {VERSIONS.oldest} to 1.21.9</span>
          <span className={s.versionNote}>Joins too. The older your game, the more custom items look wrong.</span>
        </span>
      </li>
      <li className={s.version} data-ok="no">
        <PixelIcon name="cross" size={32} />
        <span>
          <span className={s.versionName}>
            Below {VERSIONS.oldest}, above {VERSIONS.newest}
          </span>
          <span className={s.versionNote}>Can&apos;t join. Switch to {site.recommendedVersion} in the launcher.</span>
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
