import { DELVE_LIST, DELVE_REWARDS, DELVE_RULES, livesFor } from '@/content/wiki/delve-facts'
import { PixelButton, Slot, SlotGrid } from '@/components/ui'
import BossFight from './BossFight'
import s from './DungeonTeaser.module.css'

/**
 * Lab of Horrors teaser. Every fact comes from the in-game dungeon codex and
 * locksmith menus (plugins/DeluxeMenus/gui_menus/DUNGEON/Codex.yml, Locksmith.yml).
 * Below it, the two delves (KasadyaDelves 1.0.0, 2026-11-26): names, difficulty, menu line, boss, gear,
 * lives and points from src/content/wiki/delve-facts.ts (script-A/B.json, rewards.yml, config.yml).
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
            Open <code className="kc-cmd-inline">/dungeon</code>, click Lab of Horrors and play solo or with friends.
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
          The real Draedon has 2,048 health, a close-range Wave of Pain, Soul Blast and Sonic Boom, and he summons lab
          subjects to help. At 80, 50, 25 and 10% he floats up and rains soul lanterns. From 50% he is immune until you kill
          the Lost Souls.
        </p>
      </div>

      <section className={s.delves} aria-labelledby="home-delves">
        <p className={s.eyebrow}>New dungeons</p>
        <h2 id="home-delves" className={s.delvesTitle}>
          The delves
        </h2>
        <p className={s.lead}>
          Five floors and a boss each, and every floor teaches you one idea. The boss bar, an arrow and a glowing floor show the
          way. Go alone or bring up to {DELVE_RULES.maxPlayers - 1} friends, on Java or Bedrock.
        </p>
        <ul className={s.delveCards}>
          {DELVE_LIST.map((d) => (
            <li key={d.id} className={s.delveCard} data-delve={d.id}>
              <h3 className={s.delveName}>{d.name}</h3>
              <p className={s.delveAbout}>{d.about}</p>
              <dl className={s.delveFacts}>
                <div>
                  <dt>Difficulty</dt>
                  <dd>{d.difficulty}</dd>
                </div>
                <div>
                  <dt>Boss</dt>
                  <dd>{d.boss}</dd>
                </div>
                <div>
                  <dt>Meter</dt>
                  <dd>{d.meter}</dd>
                </div>
                <div>
                  <dt>Points</dt>
                  <dd>{d.points} per clear</dd>
                </div>
              </dl>
              <p className={s.delveGear}>Gear: {d.gear}</p>
              <PixelButton href={`/wiki/${d.slug}`} variant="stone" icon={d.id === 'gloomhold' ? 'lantern' : 'spawner'}>
                {d.name}
              </PixelButton>
            </li>
          ))}
        </ul>
        <ol className={s.howto}>
          <li>
            Open <code className="kc-cmd-inline">/dungeon</code> and click a delve, or type{' '}
            <code className="kc-cmd-inline">/dungeon solo gloomhold</code>.
          </li>
          <li>
            The party shares {livesFor(1)} lives alone, {DELVE_RULES.livesPerPlayer} more per extra player. You keep your items when you
            die.
          </li>
          <li>
            Beat the boss for points, the vault and a chance at a crate key or special gear. {DELVE_REWARDS.paidClearsPerDay} paid
            clears a day.
          </li>
        </ol>
        <div className={s.ctas}>
          <PixelButton href="/wiki/delves" variant="redstone" icon="boss">
            Delves guide
          </PixelButton>
          <PixelButton href="/guides/first-delve" variant="stone" icon="book">
            Your first delve
          </PixelButton>
        </div>
      </section>
    </div>
  )
}
