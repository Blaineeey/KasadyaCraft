import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import LiveStatus from '@/components/interactive/LiveStatus'
import PageHero from '@/components/shell/PageHero'
import StoreSprite from '@/components/store/StoreSprite'
import { Command, Panel, PixelButton, PixelIcon, SectionHeading, TooltipCard, type PixelIconName } from '@/components/ui'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'
import { formatPrice, getStoreItem, priceLabel } from '@/lib/store'
import { voteRewards, voteSites } from '@/lib/vote'
import VoteChest from './VoteChest'
import VoteList from './VoteList'
import s from './vote.module.css'

/*
 * /vote. Owner: INTERACTIVITY ENGINEER.
 * Sites and rewards: src/lib/vote.ts (mirrors KasadyaVote config.yml). Crate contents and the
 * Token price: src/lib/store.ts. Numbers are never typed by hand here.
 */
const { keysPerVote, flyMinutes, xpPerVote, partyVotes, partyKeys, pinataMinutes, pendingDays, pendingMax } = voteRewards
const total = voteSites.length

function count(n: number, name: string) {
  return `${n} ${name}${n === 1 ? '' : 's'}`
}

export const metadata: Metadata = pageMetadata({
  title: 'Vote',
  description: `Vote for ${site.name} on ${total} server list sites. Every vote gives you ${count(keysPerVote, 'Vote crate key')}, ${flyMinutes} minutes of fly time and ${xpPerVote} XP. Every ${partyVotes} votes everyone online on Survival gets ${count(partyKeys, 'Vote key')} and a piñata appears.`,
  path: '/vote',
})

/** "Most take one vote a day. TopG takes one every 6 hours." */
const paceText = [
  'Most take one vote a day.',
  ...voteSites.filter((v) => v.cooldownHours < 24).map((v) => `${v.name} takes one every ${v.cooldownHours} hours.`),
].join(' ')

const STEPS: { icon: PixelIconName; title: string; text: ReactNode }[] = [
  {
    icon: 'player',
    title: 'Enter your exact name',
    text: 'Open a site and type your Minecraft name, spelled exactly like in game.',
  },
  { icon: 'star', title: 'Vote', text: `Do it on as many of the ${total} as you like. ${paceText}` },
  {
    icon: 'key',
    title: 'Come online on Survival',
    text: (
      <>
        Your key, fly time and XP arrive there. Keep one inventory slot free. Open keys at <code className="kc-cmd-inline">/warp crates</code>, fly with <code className="kc-cmd-inline">/fly</code> on your plot.
        If you are offline, votes wait up to {pendingDays} days, {pendingMax} at most.
      </>
    ),
  },
]

const MORE = [
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
        art={<VoteChest />}
        title={`Vote for ${site.name}`}
        eyebrow="Ballot chest: unlocked"
        icon="chest"
        lead={
          <>
            Every vote gives you {count(keysPerVote, 'Vote crate key')}, {flyMinutes} minutes of fly time and {xpPerVote} XP on Survival. Use all {total} sites, or type{' '}
            <code className="kc-cmd-inline">/vote</code> in game for the same list.
          </>
        }
      >
        {/* Phones and tablets only: on wide screens the list is already in view. */}
        <div className={s.jump}>
          <PixelButton href="#vote-sites" variant="gold" block>
            Pick a vote site
          </PixelButton>
        </div>
      </PageHero>

      <div className={`kc-container ${s.page}`}>
        <div className={s.board}>
          <section id="vote-sites" className={s.screen} aria-labelledby="vote-sites-title">
            <div className={s.screenHead}>
              <span className={s.slot} aria-hidden="true">
                <PixelIcon name="star" size={32} />
              </span>
              <h2 id="vote-sites-title" className={s.screenTitle}>
                Vote on these sites
              </h2>
              <p className={s.perVote}>
                <StoreSprite shape="key" tone="vote" size={32} />
                {count(keysPerVote, 'key')} per vote
              </p>
            </div>
            <VoteList />
          </section>

          <div className={s.aside}>
            <LiveStatus variant="card" highlight className={s.server} />
            <Panel material="darkwood" as="section" title="How it works" titleIcon="quest" aria-label="How voting works">
              <ol className={s.steps} role="list">
                {STEPS.map((st) => (
                  <li key={st.title} className={s.step}>
                    <span className={s.slot} aria-hidden="true">
                      <PixelIcon name={st.icon} size={32} />
                    </span>
                    <div>
                      <h3 className={s.stepTitle}>{st.title}</h3>
                      <p className={s.stepText}>{st.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Panel>
            <section className={s.party} aria-labelledby="vote-party">
              <PixelIcon name="firework" size={48} />
              <div>
                <h2 id="vote-party" className={s.partyTitle}>
                  Vote party
                </h2>
                <p>
                  Every {partyVotes} votes, everyone online on Survival gets {count(partyKeys, 'Vote key')}, and a piñata appears at <code className="kc-cmd-inline">/warp crates</code> for {pinataMinutes} minutes. Every hit can drop keys, points or a snack, and the last hit wins a key.
                </p>
              </div>
            </section>
          </div>
        </div>

        {voteKey ? (
          <section className={s.crate} aria-labelledby="vote-crate">
            <SectionHeading
              variant="sign"
              icon="key"
              as="h2"
              id="vote-crate"
              eyebrow="What the key opens"
              title="Inside the Vote crate"
              lead="Every vote gives you a key for free. The store sells the same key for Tokens."
            />
            <div className={s.crateRow}>
              <TooltipCard
                title={voteKey.name}
                titleAs="h3"
                rarity={voteKey.rarity}
                lines={[voteKey.summary]}
                as="article"
                className={s.card}
              >
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
                  <span className={s.priceNote}> per key in the store, free when you vote</span>
                </p>
              </TooltipCard>
              <div className={s.crateCmds}>
                <Command command="/warp crates" description="Open your keys here" />
                <Command command={voteKey.commands?.[0] ?? '/keys'} description="Opens the key shop. Vote keys cost Tokens." />
                <PixelButton href="/store" variant="wood" icon="key">
                  Keys in the store
                </PixelButton>
              </div>
            </div>
          </section>
        ) : null}

        <section className={s.more} aria-labelledby="vote-more">
          <SectionHeading variant="chat" as="h2" id="vote-more" eyebrow="Also free" title="More rewards in game" />
          <Panel material="stone" padding="md">
            <ul className={s.moreList}>
              {MORE.map((t) => (
                <li key={t.command}>
                  <Command command={t.command} description={t.description} />
                </li>
              ))}
            </ul>
          </Panel>
        </section>
      </div>
    </>
  )
}
