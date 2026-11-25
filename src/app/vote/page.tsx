import type { Metadata } from 'next'
import PageHero from '@/components/shell/PageHero'
import { Callout, Command, Panel, PixelButton, PixelIcon, SectionHeading, TooltipCard } from '@/components/ui'
import { formatPrice, getStoreItem, priceLabel } from '@/lib/store'
import { site } from '@/lib/site'
import { pageMetadata } from '@/lib/seo'
import VoteChest from './VoteChest'
import s from './vote.module.css'

/*
 * /vote. Owner: INTERACTIVITY ENGINEER.
 * Honest placeholder. Facts checked 2026-11-25:
 * - No Votifier plugin is installed and KasadyaCraft is not on any vote site yet
 *   (plugins/Skript/scripts/vote.sk; /root/launch/CHANGELOG.md).
 * - In game, /vote says: "Voting for KasadyaCraft opens soon! Vote links and rewards
 *   will be announced on our Discord."
 * - The Vote crate is placed at /warp crates; its key and contents come from
 *   src/lib/store.ts (PURCHASE/Keys.yml + ExcellentCrates vote_crate.yml).
 */
export const metadata: Metadata = pageMetadata({
  title: 'Vote',
  description: 'Voting for KasadyaCraft is not open yet. Here is what is missing, what already exists, and what you can do today.',
  path: '/vote',
})

const NEEDED = [
  { title: 'Listings on server-list sites', text: 'KasadyaCraft has to be listed before there is anything to vote on.' },
  { title: 'A vote plugin on the server', text: 'It connects a vote on a site to your player, so the reward reaches you.' },
  { title: 'Rewards, announced on Discord', text: 'We will say exactly what a vote gives once it is set up. No guesses here.' },
]

const TODAY = [
  { command: '/rewards', description: 'Your daily reward. Claim it every day you log in.' },
  { command: '/dquests', description: 'Fresh daily quests with their own rewards.' },
  { command: '/levels', description: 'Playtime milestones. Some of them pay out Tokens.' },
  { command: '/warp afk', description: 'The AFK pool: 10 points every 20 minutes.' },
]

export default function VotePage() {
  const voteKey = getStoreItem('key-vote')

  return (
    <>
      <PageHero
        scene="ballot"
        art={<VoteChest size={192} />}
        title="Voting opens soon"
        eyebrow="Ballot box: locked"
        icon="chest"
        lead={
          <>
            We are not on any server-list sites yet, so there is nothing to vote on today. Type{' '}
            <code className="kc-cmd-inline">/vote</code> in game and you get the same news. When voting opens, the links and
            rewards go up on Discord first.
          </>
        }
      >
        <PixelButton href={site.discord} variant="discord" icon="chat">
          Get told on Discord
        </PixelButton>
      </PageHero>

      <div className={`kc-container ${s.page}`}>
        <Panel material="stone" padding="lg" as="section" aria-labelledby="vote-needed">
          <SectionHeading variant="frame" icon="quest" as="h2" id="vote-needed" eyebrow="To do" title="What voting still needs" />
          <ol className={s.todo}>
            {NEEDED.map((n) => (
              <li key={n.title} className={s.todoItem}>
                <span className={s.todoBox} aria-hidden="true">
                  <PixelIcon name="cross" size={16} />
                </span>
                <span>
                  <strong className={s.todoTitle}>{n.title}</strong>
                  <span className={s.todoText}>{n.text}</span>
                  <span className="kc-sr-only"> Not done yet.</span>
                </span>
              </li>
            ))}
          </ol>
        </Panel>

        {voteKey ? (
          <section className={s.crate} aria-labelledby="vote-crate">
            <SectionHeading
              variant="sign"
              icon="key"
              as="h2"
              id="vote-crate"
              eyebrow="Already in game"
              title="The Vote crate is waiting"
              lead="The crate is set up at the crates warp, and you can open it today with a key from the store."
            />
            <div className={s.crateRow}>
              <TooltipCard title={voteKey.name} rarity={voteKey.rarity} lines={[voteKey.summary]} as="article" className={s.card}>
                {voteKey.contents && voteKey.contents.length > 0 ? (
                  <ul className={s.contents} aria-label="What can be inside">
                    {voteKey.contents.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                ) : null}
                <p className={s.price}>
                  <span aria-hidden="true">{formatPrice(voteKey.price)}</span>
                  <span className="kc-sr-only">Price: {priceLabel(voteKey.price)}</span>
                  <span className={s.priceNote}> per key, paid in Tokens</span>
                </p>
              </TooltipCard>
              <div className={s.crateCmds}>
                <Command command="/warp crates" description="Walk to the crates at spawn" />
                <Command command={voteKey.commands?.[0] ?? '/keys'} description="Opens the key shop. Vote keys cost Tokens." />
                <PixelButton href="/store" variant="gold" icon="key">
                  Keys in the store
                </PixelButton>
              </div>
            </div>
          </section>
        ) : null}

        <section className={s.today} aria-labelledby="vote-today">
          <SectionHeading variant="chat" as="h2" id="vote-today" eyebrow="Meanwhile" title="Free things you can do today" />
          <Panel material="paper" padding="lg">
            <ul className={s.todayList}>
              {TODAY.map((t) => (
                <li key={t.command}>
                  <Command command={t.command} description={t.description} />
                </li>
              ))}
            </ul>
          </Panel>
          <Callout tone="lore" title="Straight talk">
            No placeholder vote links here. When voting is live, this page changes and Discord hears it first.
          </Callout>
        </section>
      </div>
    </>
  )
}
