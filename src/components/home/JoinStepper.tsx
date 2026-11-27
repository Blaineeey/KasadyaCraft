'use client'

import { useId, useState, type ReactNode } from 'react'
import CopyIp from '@/components/interactive/CopyIp'
import { useToast } from '@/components/interactive/ToastProvider'
import { PixelButton, PixelIcon, XpBar } from '@/components/ui'
import { site } from '@/lib/site'
import s from './JoinStepper.module.css'

/**
 * "How to join" in four steps, as a little wizard: numbered step tabs, an XP
 * bar for progress, a pixel mock-up of what you will see on screen, Back/Next.
 * Every step is in the HTML (inactive ones are `hidden`), the full guide with
 * troubleshooting lives on /play.
 * Facts: hub spawn, portal / Survival Guide NPC / compass in slot 4 and the boss
 * bar lines come from the hub configs (KasadyaLobby, TAB animations.yml); the
 * resource pack is forced on Survival (server.properties require-resource-pack).
 * Owner: INTERACTIVITY ENGINEER.
 */

interface Step {
  id: string
  tab: string
  title: string
  body: ReactNode
  art: ReactNode
}

function Cmd({ children }: { children: string }) {
  return <code className="kc-cmd-inline">{children}</code>
}

const STEPS: Step[] = [
  {
    id: 'launch',
    tab: 'Open the game',
    title: 'Open Minecraft: Java Edition',
    body: (
      <>
        <p>
          In the launcher, pick version <strong>{site.recommendedVersion}</strong> and press Play. Any 1.21.x version works,
          but {site.recommendedVersion} is the smoothest.
        </p>
        <p className={s.small}>
          On Bedrock (phone, tablet, Windows)? Use the same address with port {site.bedrockPort}. No paid account? You can join too and
          pick a password.
        </p>
      </>
    ),
    art: (
      <div className={s.launcher}>
        <span className={s.launcherBar} />
        <span className={s.select}>
          <span className={s.selectLabel}>Version</span>
          <span className={s.selectValue}>Release {site.recommendedVersion}</span>
        </span>
        <span className={s.bigPlay}>PLAY</span>
      </div>
    ),
  },
  {
    id: 'add',
    tab: 'Add the server',
    title: 'Add KasadyaCraft to your list',
    body: (
      <>
        <p>
          Click <strong>Multiplayer</strong>, then <strong>Add Server</strong>. Paste our address in Server Address and press
          Done.
        </p>
        <CopyIp size="md" />
      </>
    ),
    art: (
      <div className={s.form}>
        <span className={s.formTitle}>Edit Server Info</span>
        <span className={s.field}>
          <span className={s.fieldLabel}>Server Name</span>
          <span className={s.input}>{site.name}</span>
        </span>
        <span className={s.field}>
          <span className={s.fieldLabel}>Server Address</span>
          <span className={s.input}>
            {site.address}
            <span className={s.caret} />
          </span>
        </span>
        <span className={s.fakeBtn}>Done</span>
      </div>
    ),
  },
  {
    id: 'hub',
    tab: 'Land in the hub',
    title: 'You land in the festival plaza',
    body: (
      <>
        <p>
          Double-click {site.name} to join. Everyone starts in the hub. To play Survival, walk through the portal, click the{' '}
          <strong>Survival Guide</strong>, or right-click the <strong>compass</strong> in your hotbar.
        </p>
        <p className={s.small}>
          Type <Cmd>/hub</Cmd> on any server to come back here.
        </p>
      </>
    ),
    art: (
      <div className={s.hub}>
        <span className={s.bossbar}>
          <span className={s.bossText}>Step through the portal to play Survival</span>
          <span className={s.bossTrack} />
        </span>
        <span className={s.gate}>
          <span className={s.gateGlow} />
        </span>
        <span className={s.miniHotbar}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <span key={n} className={s.miniSlot} data-on={n === 3 || undefined}>
              {n === 3 ? <PixelIcon name="compass" size={16} /> : null}
            </span>
          ))}
        </span>
      </div>
    ),
  },
  {
    id: 'pack',
    tab: 'Accept the pack',
    title: 'Say yes to the resource pack',
    body: (
      <>
        <p>
          When you step into Survival, the server asks to load our resource pack. Click <strong>Proceed</strong>. It holds the
          custom items, dungeon mobs and menus, so you cannot play Survival without it.
        </p>
        <p className={s.small}>
          First things to type: <Cmd>/plot auto</Cmd> for your free plot and <Cmd>/dquests</Cmd> for today&apos;s quests.
        </p>
      </>
    ),
    art: (
      <div className={s.pack}>
        <span className={s.packText}>This server requires a custom resource pack.</span>
        <span className={s.packBtns}>
          <span className={s.fakeBtn} data-hot>
            Proceed
          </span>
          <span className={s.fakeBtn}>Disconnect</span>
        </span>
        <span className={s.chat}>
          <span className={s.chatLine}>/plot auto</span>
        </span>
      </div>
    ),
  },
]

export default function JoinStepper() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const { toast } = useToast()
  const uid = useId()
  const last = STEPS.length - 1
  const current = STEPS[step]

  function go(i: number) {
    setStep(Math.max(0, Math.min(last, i)))
  }

  function finish() {
    if (!done) toast({ frame: 'goal', icon: 'grass', title: 'Ready for Survival. See you in the plaza!' })
    setDone(true)
  }

  return (
    <div className={s.stepper}>
      <ol className={s.tabs}>
        {STEPS.map((st, i) => (
          <li key={st.id}>
            <button
              type="button"
              className={s.tab}
              data-state={i === step ? 'current' : i < step || done ? 'done' : 'todo'}
              aria-current={i === step ? 'step' : undefined}
              aria-controls={`${uid}-${st.id}`}
              onClick={() => go(i)}
            >
              <span className={s.tabNum} aria-hidden="true">
                {i < step || (done && i !== step) ? '✓' : i + 1}
              </span>
              <span className={s.tabLabel}>
                <span className="kc-sr-only">Step {i + 1}: </span>
                {st.tab}
              </span>
            </button>
          </li>
        ))}
      </ol>

      <XpBar value={done ? STEPS.length : step + 1} max={STEPS.length} label="Join progress" className={s.xp} />

      {STEPS.map((st, i) => (
        <div key={st.id} id={`${uid}-${st.id}`} className={s.panel} hidden={i !== step}>
          <div className={s.screen} aria-hidden="true">
            {st.art}
          </div>
          <div className={s.copy}>
            <p className={s.stepNo}>
              Step {i + 1} of {STEPS.length}
            </p>
            <h3 className={s.title}>{st.title}</h3>
            <div className={s.body}>{st.body}</div>
          </div>
        </div>
      ))}

      <div className={s.nav}>
        {/* aria-disabled, not disabled: a focused button that becomes disabled drops keyboard focus */}
        <PixelButton variant="stone" icon="arrow-left" onClick={() => go(step - 1)} aria-disabled={step === 0 || undefined}>
          Back
        </PixelButton>
        {step < last ? (
          <PixelButton iconRight="arrow-right" onClick={() => go(step + 1)}>
            Next step
          </PixelButton>
        ) : (
          <PixelButton variant="gold" icon="check" onClick={finish}>
            {done ? 'You are ready!' : 'I am in!'}
          </PixelButton>
        )}
      </div>

      <p className="kc-sr-only" aria-live="polite">
        Step {step + 1} of {STEPS.length}: {current.title}
      </p>
    </div>
  )
}
