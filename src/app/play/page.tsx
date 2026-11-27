import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { HubHotbar } from '@/components/guides/GuideFigures'
import PackPrompt from '@/components/guides/PackPrompt'
import { AddServerMock, VersionChips } from '@/components/guides/PlayMocks'
import CopyIp from '@/components/interactive/CopyIp'
import LiveStatus from '@/components/interactive/LiveStatus'
import PageHero from '@/components/shell/PageHero'
import Command from '@/components/ui/Command'
import Panel from '@/components/ui/Panel'
import PixelButton from '@/components/ui/PixelButton'
import PixelIcon from '@/components/ui/PixelIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import { STARTING_BALANCE, VERSIONS, money } from '@/content/guides/facts'
import { site } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import s from './play.module.css'

/*
 * /play: the definitive "how to join" page. Owner: STARTER-GUIDE WRITER.
 * Facts (checked 2026-11-25): Velocity proxy on play.kasadyacraft.com sends everyone to the hub;
 * ViaVersion + ViaBackwards 5.12.3 on hub + Survival (since the 05:13-05:19 restarts) accept 1.13 to 26.3
 * (VERSIONS in content/guides/facts.ts); older clients get "Minecraft 1.13 or newer" (Via block message /
 * Velocity), newer than 26.3 are refused by Velocity; 1.21.10 stays recommended because the pack is made for it;
 * VeloAuth 1.6.2 on the proxy (2026-11-25): paid accounts are checked with Mojang and log in by themselves, other names get a login
 * room with /register and /login (8+ characters, kicked after 120 s, names of paid accounts are reserved, 5 accounts per address);
 * Geyser 2.12.1 + Floodgate 2.2.5: Bedrock on port 19132, names start with a dot, no password; Survival server.properties require-resource-pack=true,
 * so the game shows Proceed / Disconnect; Disconnect makes the client close its connection to the proxy,
 * so the player leaves the whole network (no failover to the hub);
 * Hub KasadyaLobby: portal, Survival Guide NPC, compass in the middle hotbar slot, /survival /smp /hub /lobby /menu.
 */
export const metadata: Metadata = pageMetadata({
  title: 'How to join',
  description: `Join KasadyaCraft in three steps: open Minecraft Java ${site.recommendedVersion}, add ${site.address}, accept the resource pack.`,
  path: '/play',
})

const troubles: { q: string; a: ReactNode }[] = [
  {
    q: 'It says my version is incompatible',
    a: (
      <p>
        We take Java {VERSIONS.oldest} up to {VERSIONS.newest}. If your game is newer than {VERSIONS.newest}, we have not caught up yet. In
        the launcher, set your installation to release {site.recommendedVersion}, the version our resource pack is made for.
      </p>
    ),
  },
  {
    q: `It says I need Minecraft ${VERSIONS.oldest} or newer`,
    a: (
      <p>
        Your game is too old for us. Update your installation to release {site.recommendedVersion}. Anything from {VERSIONS.oldest} up
        can join, but {site.recommendedVersion} looks best.
      </p>
    ),
  },
  {
    q: 'I clicked Disconnect on the resource pack',
    a: (
      <>
        <p>No problem. Disconnect means you leave the server. Rejoin, head back into Survival and click Proceed this time.</p>
        <p>
          No question at all? In your server list, select KasadyaCraft, click Edit and set Server Resource Packs to Prompt or Enabled.
        </p>
      </>
    ),
  },
  {
    q: 'The resource pack fails to download',
    a: (
      <p>
        Check your internet connection and try again from the hub. Still failing? Tell us in <a href={site.discord}>Discord</a> and
        include the error you see.
      </p>
    ),
  },
  {
    q: '"Failed to log in" or "Invalid session"',
    a: (
      <p>
        Paid account? Restart the Minecraft Launcher and sign in again. No paid account? The name you picked belongs to somebody who
        has one, so it is reserved for them. Choose another name and join again.
      </p>
    ),
  },
  {
    q: 'Do I need a paid account?',
    a: (
      <>
        <p>No. Paid accounts are logged in automatically.</p>
        <p>
          Without one you land in a login room first. New here? Type <code className="kc-cmd-inline">/register password password</code>.
          Back again? Type <code className="kc-cmd-inline">/login password</code>. Use at least 8 characters and a password you use
          nowhere else. Our staff will never ask for it.
        </p>
      </>
    ),
  },
  {
    q: 'I forgot my password',
    a: (
      <p>
        Ask a staff member in <a href={site.discord}>Discord</a> to reset your account. You can change a password you still know with{' '}
        <code className="kc-cmd-inline">/changepassword</code>.
      </p>
    ),
  },
  {
    q: 'Can I play on Bedrock (phone, tablet, Windows or console)?',
    a: (
      <>
        <p>
          Yes. On phones, tablets and Windows add a server with the address <strong>{site.address}</strong> and port{' '}
          <strong>{site.bedrockPort}</strong>. You need no password. Your name gets a dot in front, like .Maria. The first time, Minecraft
          may ask if you trust the server.
        </p>
        <p>
          Xbox, PlayStation and Switch have no button to add a server. They need a helper app such as BedrockConnect. Custom dungeon
          monsters and some icons are made for Java and may look different or not show on Bedrock.
        </p>
      </>
    ),
  },
  {
    q: 'I can’t connect at all',
    a: (
      <p>
        Look at the server status at the top of this page. If it says offline, we are probably restarting, so give it a minute. Still
        nothing? Ask in <a href={site.discord}>Discord</a>.
      </p>
    ),
  },
  {
    q: 'Does it cost anything?',
    a: (
      <p>
        No. Joining and playing are free. Ranks are bought with Tokens you earn in game, see{' '}
        <Link href="/guides/ranks-and-kits">Ranks and kits</Link>.
      </p>
    ),
  },
]

export default function PlayPage() {
  return (
    <>
      <PageHero
        title="How to join"
        eyebrow={`${site.edition} · ${site.versionLabel}`}
        lead="Three steps, about two minutes. Java or Bedrock, with or without a paid account."
        icon="grass"
      >
        <div className={s.heroStatus}>
          <CopyIp size="lg" showHint />
          <LiveStatus variant="card" />
        </div>
      </PageHero>

      <div className={`kc-container kc-section ${s.page}`}>
        <ol className={s.steps}>
          <li>
            <Panel as="section" material="darkwood" padding="lg" aria-labelledby="step-1">
              <div className={s.stepGrid}>
                <div className={s.stepText}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum} aria-hidden="true">
                      1
                    </span>
                    <h2 id="step-1" className={s.stepTitle}>
                      Open Minecraft Java {site.recommendedVersion}
                    </h2>
                  </div>
                  <p>
                    Open the Minecraft Launcher and go to <strong>Installations</strong>. Click <strong>New installation</strong>, pick{' '}
                    <strong>release {site.recommendedVersion}</strong> as the version, save it and press <strong>Play</strong>.
                  </p>
                  <p>Already on {site.recommendedVersion}? Skip ahead.</p>
                </div>
                <VersionChips />
              </div>
            </Panel>
          </li>

          <li>
            <Panel as="section" material="darkwood" padding="lg" aria-labelledby="step-2">
              <div className={s.stepGrid}>
                <div className={s.stepText}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum} aria-hidden="true">
                      2
                    </span>
                    <h2 id="step-2" className={s.stepTitle}>
                      Add the server
                    </h2>
                  </div>
                  <ol className={s.list}>
                    <li>
                      On the title screen, click <strong>Multiplayer</strong>.
                    </li>
                    <li>
                      Click <strong>Add Server</strong>.
                    </li>
                    <li>Type any name, then paste the address below.</li>
                    <li>
                      Click <strong>Done</strong>, pick KasadyaCraft in the list and click <strong>Join Server</strong>.
                    </li>
                  </ol>
                  <Command command={site.address} description="The server address" />
                </div>
                <AddServerMock />
              </div>
            </Panel>
          </li>

          <li>
            <Panel as="section" material="darkwood" padding="lg" aria-labelledby="step-3">
              <div className={s.stepGrid}>
                <div className={s.stepText}>
                  <div className={s.stepHead}>
                    <span className={s.stepNum} aria-hidden="true">
                      3
                    </span>
                    <h2 id="step-3" className={s.stepTitle}>
                      Accept the resource pack
                    </h2>
                  </div>
                  <p>
                    The first time you step into Survival, the game asks to download our resource pack. Click <strong>Proceed</strong>.
                    It holds the custom items, dungeon mobs and menus, and it only downloads once.
                  </p>
                  <p>
                    Click Disconnect and you leave the server. Nothing breaks: rejoin, head back into Survival and click Proceed this
                    time.
                  </p>
                </div>
                <PackPrompt />
              </div>
            </Panel>
          </li>
        </ol>

        <Panel as="section" material="stone" padding="lg" aria-labelledby="hub">
          <div className={s.section}>
            <SectionHeading
              variant="frame"
              icon="portal"
              id="hub"
              eyebrow="Then what?"
              title="You land in the hub"
              lead="Everyone starts in the hub: a festival plaza floating in the sky. Nobody can get hurt here, and you can double jump. There are three ways into Survival."
            />
            <ul className={s.ways}>
              <li className={s.way}>
                <PixelIcon name="portal" size={48} />
                <h3 className={s.wayTitle}>Walk through the portal</h3>
                <p>The big gate at the north end of the plaza.</p>
              </li>
              <li className={s.way}>
                <PixelIcon name="chat" size={48} />
                <h3 className={s.wayTitle}>Click the Survival Guide</h3>
                <p>The guide standing right next to the portal.</p>
              </li>
              <li className={s.way}>
                <PixelIcon name="compass" size={48} />
                <h3 className={s.wayTitle}>Use your compass</h3>
                <p>Right-click the compass in the middle of your hotbar and pick Survival.</p>
              </li>
            </ul>
            <HubHotbar onDark />
            <div className={s.cmds}>
              <Command command="/survival" description="In the hub: straight to Survival (/smp works too)" />
              <Command command="/hub" description="Back to the hub from anywhere (/lobby works too)" />
              <Command command="/menu" description="In the hub: open the server selector" />
            </div>
            <p>
              If Survival restarts while you play, you drop back into the hub and stay connected. Give it a minute and hop back in.
            </p>
          </div>
        </Panel>

        <Panel as="section" material="deepslate" padding="lg" aria-labelledby="first-join">
          <div className={s.section}>
            <SectionHeading
              id="first-join"
              eyebrow="First time?"
              title="What you get on day one"
              lead={`The hub sets off fireworks and announces your member number. In Survival you start at spawn with a starter kit on you (wooden tools, leather armour and bread) and ${money(STARTING_BALANCE)}.`}
            />
            <div className={s.cta}>
              <PixelButton href="/guides/first-day" variant="gold" iconRight="arrow-right">
                Your first 30 minutes
              </PixelButton>
              <PixelButton href="/guides" variant="stone" icon="book">
                All starter guides
              </PixelButton>
            </div>
          </div>
        </Panel>

        <Panel as="section" material="obsidian" padding="lg" aria-labelledby="trouble">
          <div className={s.section}>
            <SectionHeading variant="chat" id="trouble" eyebrow="Stuck?" title="Fixes for common problems" />
            <div className={s.faq}>
              {troubles.map((t) => (
                <details key={t.q} className={s.faqItem}>
                  <summary>{t.q}</summary>
                  <div className={s.faqBody}>{t.a}</div>
                </details>
              ))}
            </div>
            <div className={s.cta}>
              <PixelButton href={site.discord} variant="discord" icon="chat">
                Still stuck? Ask in Discord
              </PixelButton>
            </div>
          </div>
        </Panel>
      </div>
    </>
  )
}
