import { PixelButton, Slot, SlotGrid } from '@/components/ui'
import BossFight from './BossFight'
import s from './DungeonTeaser.module.css'

/**
 * Lab of Horrors teaser. Every fact comes from the in-game dungeon codex and
 * locksmith menus (plugins/DeluxeMenus/gui_menus/DUNGEON/Codex.yml, Locksmith.yml).
 * Owner: INTERACTIVITY ENGINEER.
 */

const FACTS = [
  { k: 'Players', v: '1 to 5' },
  { k: 'Rooms', v: '7, then the boss' },
  { k: 'Time limit', v: 'None' },
  { k: 'If you die', v: 'Back to the last door' },
]

const MOBS = ['Infected Scientist', 'Uncaged Subject', 'Half-Converted Researcher', 'Converted Undead', 'Silver Parasite', 'Confused Hextechnologist', 'Draedon Disciple']

export default function DungeonTeaser() {
  return (
    <div className={s.wrap}>
      <div className={s.intro}>
        <p className={s.eyebrow}>Dungeon</p>
        <h2 id="home-dungeon" className={s.title}>
          Lab of Horrors
        </h2>
        <p className={s.quote}>&ldquo;When science goes wrong...&rdquo;</p>
        <p className={s.lead}>
          A wrecked lab that still smells of what happened there. Clear seven rooms, slay the Disciple, then face Draedon.
          Each door opens once its room is clear.
        </p>

        <dl className={s.facts}>
          {FACTS.map((f) => (
            <div key={f.k} className={s.fact}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>

        <ol className={s.howto}>
          <li>
            Go to the lab with <code className="kc-cmd-inline">/warp dungeon</code>.
          </li>
          <li>
            Open <code className="kc-cmd-inline">/dungeon</code> and play solo or with friends.
          </li>
          <li>
            Check what drops where with <code className="kc-cmd-inline">/dungeoninfo</code>.
          </li>
          <li>
            Forge Chamber keys at <code className="kc-cmd-inline">/locksmith</code>. They open the raid chests behind Draedon.
          </li>
        </ol>

        <details className={s.bestiary}>
          <summary>Who lives in the lab?</summary>
          <ul>
            {MOBS.map((m) => (
              <li key={m}>{m}</li>
            ))}
            <li className={s.bossLine}>Draedon (boss)</li>
          </ul>
        </details>

        <div className={s.keys}>
          <SlotGrid label="Chamber keys" title="Chamber keys" columns={3}>
            <Slot label="Diamond Chamber Key" icon="key" rarity="rare" lines={['Opens a Diamond Raid Chest (2 items).', 'Forged at the Locksmith.']} />
            <Slot label="Emerald Chamber Key" icon="key" rarity="rare" lines={['Opens an Emerald Raid Chest (3 items).', 'Forged at the Locksmith.']} />
            <Slot label="Star Chamber Key" icon="key" rarity="rare" lines={['Opens a Star Raid Chest (3 items).', 'Forged at the Locksmith.']} />
          </SlotGrid>
        </div>

        <div className={s.ctas}>
          <PixelButton href="/wiki/dungeon" variant="redstone" icon="skull">
            Dungeon guide
          </PixelButton>
          <PixelButton href="/guides/first-dungeon" variant="stone" icon="book">
            Your first run
          </PixelButton>
        </div>
      </div>

      <div className={s.side}>
        <p className={s.sideLabel}>Try the boss fight (website edition)</p>
        <BossFight />
        <p className={s.sideNote}>
          The real Draedon has 10,000 health, a close-range Wave of Pain, Soul Blast and Sonic Boom, and he summons lab
          subjects to help. At 80, 50, 25 and 10% he floats up and rains soul lanterns. From 50% he is immune until you kill
          the Lost Souls.
        </p>
      </div>
    </div>
  )
}
