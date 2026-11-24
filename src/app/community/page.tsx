import type { Metadata } from 'next'
import PageHero from '@/components/shell/PageHero'
import { Command, NameTag, Panel, PixelButton, PixelIcon, SectionHeading, type ChatColor, type PixelIconName } from '@/components/ui'
import { activities, site, team } from '@/lib/site'
import styles from './community.module.css'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'KasadyaCraft is a community that plays together and grows together, in games and in life. See what happens here, meet the team and learn how to reach us.',
}

/* One original icon per notice on the board, in the order of `activities`. */
const activityIcons: PixelIconName[] = ['controller', 'firework', 'chat', 'flower']

/* Short tag shown over each staff member, coloured like an in-game rank prefix. */
const roleTag: Record<string, { prefix: string; tone: ChatColor }> = {
  'Head Administrator': { prefix: 'Admin', tone: 'red' },
  'Senior Moderator': { prefix: 'Sr. Mod', tone: 'gold' },
  Moderator: { prefix: 'Mod', tone: 'aqua' },
  Helper: { prefix: 'Helper', tone: 'green' },
}

const contactWays: { title: string; icon: PixelIconName; body: string; commands?: { cmd: string; desc: string }[] }[] = [
  {
    title: 'Discord',
    icon: 'chat',
    body: 'Fastest answer. Ping a moderator, or open a ticket in the support channel.',
  },
  {
    title: 'In game',
    icon: 'grass',
    body: 'On the Minecraft server you can message any staff member who is online.',
    commands: [
      { cmd: '/msg <staff>', desc: 'Private message' },
      { cmd: '/helpop <message>', desc: 'Alert online staff' },
    ],
  },
  {
    title: 'Tickets',
    icon: 'scroll',
    body: 'For appeals, lost items after a server issue, or anything that needs a paper trail. Tickets live in our Discord.',
  },
]

const doContact = ['Rule breaking and griefing', 'Arguments between players', 'Bugs and technical problems', 'Ban appeals', 'Items lost because of a server issue']

const dontContact = [
  'Basic gameplay questions (ask in chat first, someone usually knows)',
  'Asking for free items or money',
  'Fair PvP deaths',
  'Asking to become staff',
]

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="People to play with. People to grow with."
        icon="heart"
        lead="Kasadya is for anyone tired of playing alone. We show up for game nights, share what we are working on, and look out for each other when life gets in the way."
      >
        <PixelButton href={site.discord} variant="discord" size="lg" icon="chat">
          Join the Discord
        </PixelButton>
        <PixelButton href="/play" variant="grass" size="lg" icon="grass">
          Hop on the server
        </PixelButton>
      </PageHero>

      {/* What happens here: a town notice board */}
      <section className="kc-container kc-section" aria-labelledby="board-title">
        <SectionHeading eyebrow="What happens here" title="More than a server list" id="board-title" icon="lantern" />
        <Panel material="darkwood" padding="lg" rivets className={styles.board}>
          <ul className={styles.notes} role="list">
            {activities.map((a, i) => (
              <li key={a.title} className={styles.note} data-pin={i % 4}>
                <span className={styles.noteIcon} aria-hidden="true">
                  <PixelIcon name={activityIcons[i] ?? 'star'} size={32} />
                </span>
                <h3 className={styles.noteTitle}>{a.title}</h3>
                <p>{a.body}</p>
              </li>
            ))}
          </ul>
          <p className={styles.boardFoot}>No application, no skill check. Just show up.</p>
        </Panel>
      </section>

      {/* Staff */}
      <section className="kc-container kc-section" aria-labelledby="staff-title">
        <SectionHeading
          eyebrow="The team"
          title="Staff"
          id="staff-title"
          icon="shield"
          lead="Open roles are filled from active members. If you want to help, say so in Discord."
        />
        <ul className={styles.staff} role="list">
          {team.map((m, i) => {
            const open = m.name === 'Open'
            const tag = roleTag[m.role] ?? { prefix: m.role, tone: 'gold' as ChatColor }
            return (
              <li key={`${m.role}-${i}`} className={styles.member} data-open={open || undefined}>
                <Panel material={open ? 'stone' : 'deepslate'} padding="md" className={styles.memberPanel}>
                  <div className={styles.memberHead}>
                    <NameTag prefix={tag.prefix} tone={tag.tone}>
                      {open ? 'Open spot' : m.name}
                    </NameTag>
                    <span className={styles.avatar} aria-hidden="true">
                      <PixelIcon name={open ? 'question' : 'player'} size={48} />
                    </span>
                  </div>
                  <h3 className={styles.memberRole}>{m.role}</h3>
                  <p className={styles.memberFocus}>{m.focus}</p>
                  {m.discord ? (
                    <p className={styles.memberDiscord}>
                      <span className="t-label">Discord</span> <span className="t-term">{m.discord}</span>
                    </p>
                  ) : null}
                  {open ? <p className={styles.memberDiscord}>Interested? Tell us in Discord.</p> : null}
                </Panel>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Support */}
      <section className="kc-container kc-section" aria-labelledby="support-title">
        <SectionHeading eyebrow="Support" title="How to reach us" id="support-title" icon="compass" />
        <div className={styles.ways}>
          {contactWays.map((c) => (
            <Panel key={c.title} as="article" material="stone" padding="md" title={c.title} titleAs="h3" titleIcon={c.icon}>
              <div className={styles.wayBody}>
                <p>{c.body}</p>
                {c.commands ? (
                  <div className={styles.wayCmds}>
                    {c.commands.map((cmd) => (
                      <Command key={cmd.cmd} command={cmd.cmd} description={cmd.desc} />
                    ))}
                  </div>
                ) : null}
              </div>
            </Panel>
          ))}
        </div>
      </section>

      {/* When to contact staff */}
      <section className="kc-container kc-section" aria-labelledby="guide-title">
        <SectionHeading eyebrow="Guidelines" title="When to contact staff" id="guide-title" icon="book" />
        <Panel material="gui" padding="lg">
          <div className={styles.lists}>
            <div>
              <h3 className={styles.listTitle}>
                <PixelIcon name="check" size={32} /> Reach out for
              </h3>
              <ul className={styles.checkList} role="list">
                {doContact.map((t) => (
                  <li key={t}>
                    <PixelIcon name="check" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={styles.listTitle}>
                <PixelIcon name="cross" size={32} /> Please skip
              </h3>
              <ul className={styles.checkList} role="list">
                {dontContact.map((t) => (
                  <li key={t}>
                    <PixelIcon name="cross" size={16} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Panel>
      </section>

      <section className="kc-container" aria-labelledby="cta-title">
        <Panel material="planks" padding="lg" rivets className={styles.cta}>
          <div>
            <h2 id="cta-title" className={styles.ctaTitle} lang="tl">
              Tara, laro tayo!
            </h2>
            <p>That means &ldquo;come on, let&apos;s play&rdquo;. Say hi in Discord, tell us what you play, and we will find you a squad.</p>
          </div>
          <PixelButton href={site.discord} variant="discord" icon="chat">
            Open Discord
          </PixelButton>
        </Panel>
      </section>
    </>
  )
}
