'use client'

import { useCallback, useEffect, useId, useMemo, useRef, useState, type ReactNode } from 'react'
import PixelIcon from '@/components/ui/PixelIcon'
import type { PixelIconName } from '@/components/ui/pixel-icons'
import type { WikiSearchEntry } from '@/content/wiki'
import type { WikiCategory } from '@/lib/content'
import WikiCard from './WikiCard'
import s from './WikiSearch.module.css'

export interface WikiSearchCategory {
  id: WikiCategory
  label: string
  icon: PixelIconName
  blurb: string
}

export interface WikiSearchProps {
  entries: WikiSearchEntry[]
  categories: WikiSearchCategory[]
}

type Filter = WikiCategory | 'all'

interface Hit {
  entry: WikiSearchEntry
  score: number
  section?: { id: string; text: string }
}

const SUGGESTIONS = ['/plot auto', 'Draedon', 'spawner', 'keep inventory', 'tags', '/sellall']

function terms(query: string): string[] {
  return query.toLowerCase().trim().split(/\s+/).filter(Boolean)
}

/** Every term must match somewhere. Title beats keywords beats section headings beats summary. */
function scoreEntry(entry: WikiSearchEntry, ts: string[]): Hit | null {
  const title = entry.title.toLowerCase()
  const summary = entry.summary.toLowerCase()
  const keywords = entry.keywords.map((k) => k.toLowerCase())
  let total = 0
  let section: Hit['section']
  for (const t of ts) {
    let best = 0
    if (title.startsWith(t)) best = 100
    else if (title.includes(t)) best = 70
    if (keywords.some((k) => k === t)) best = Math.max(best, 65)
    else if (keywords.some((k) => k.includes(t))) best = Math.max(best, 45)
    const sec = entry.sections.find((x) => x.text.toLowerCase().includes(t))
    if (sec) {
      best = Math.max(best, 35)
      section ??= sec
    }
    if (summary.includes(t)) best = Math.max(best, 20)
    if (best === 0) return null
    total += best
  }
  return { entry, score: total, section }
}

/** Wraps the first match of each term in <mark>. */
function highlight(text: string, ts: string[]): ReactNode {
  if (ts.length === 0) return text
  const lower = text.toLowerCase()
  const ranges: [number, number][] = []
  for (const t of ts) {
    const i = lower.indexOf(t)
    if (i >= 0) ranges.push([i, i + t.length])
  }
  if (ranges.length === 0) return text
  ranges.sort((a, b) => a[0] - b[0])
  const merged: [number, number][] = []
  for (const r of ranges) {
    const last = merged[merged.length - 1]
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1])
    else merged.push([r[0], r[1]])
  }
  const out: ReactNode[] = []
  let pos = 0
  merged.forEach(([a, b], i) => {
    if (a > pos) out.push(text.slice(pos, a))
    out.push(
      <mark key={i} className={s.mark}>
        {text.slice(a, b)}
      </mark>,
    )
    pos = b
  })
  if (pos < text.length) out.push(text.slice(pos))
  return out
}

function isTyping(el: Element | null): boolean {
  if (!el || !(el instanceof HTMLElement)) return false
  const tag = el.tagName
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable
}

/**
 * Client-side wiki search + category filter. No dependency: titles, summaries,
 * keywords and section headings are matched in the browser. Press "/" anywhere
 * on the page to jump into the box (like opening chat in game).
 * Owner: WIKI WRITER.
 */
export default function WikiSearch({ entries, categories }: WikiSearchProps) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('all')
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()
  const hintId = useId()

  // Read ?q= and ?c= once on mount (after hydration, so the server HTML matches).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q')
    const c = params.get('c')
    if (q) setQuery(q)
    if (c && categories.some((x) => x.id === c)) setFilter(c as WikiCategory)
  }, [categories])

  // Keep the URL shareable without adding history entries.
  useEffect(() => {
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (filter !== 'all') params.set('c', filter)
    const qs = params.toString()
    const url = `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`
    window.history.replaceState(window.history.state, '', url)
  }, [query, filter])

  // "/" focuses the search box, like opening chat with a slash.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
      if (isTyping(document.activeElement)) return
      e.preventDefault()
      inputRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const ts = useMemo(() => terms(query), [query])
  const inFilter = useCallback((e: WikiSearchEntry) => filter === 'all' || e.category === filter, [filter])

  const hits: Hit[] = useMemo(() => {
    if (ts.length === 0) return entries.filter(inFilter).map((entry) => ({ entry, score: 0 }))
    return entries
      .filter(inFilter)
      .map((e) => scoreEntry(e, ts))
      .filter((h): h is Hit => h !== null)
      .sort((a, b) => b.score - a.score)
  }, [entries, ts, inFilter])

  const counts = useMemo(() => {
    const m = new Map<Filter, number>([['all', entries.length]])
    for (const c of categories) m.set(c.id, entries.filter((e) => e.category === c.id).length)
    return m
  }, [entries, categories])

  const browsing = ts.length === 0
  const labelOf = (id: WikiCategory) => categories.find((c) => c.id === id)?.label ?? id

  function card(h: Hit) {
    const { entry } = h
    const showSection = !browsing && h.section && !entry.title.toLowerCase().includes(ts[0] ?? '')
    const href = showSection && h.section ? `/wiki/${entry.slug}#${h.section.id}` : `/wiki/${entry.slug}`
    return (
      <li key={entry.slug}>
        <WikiCard
          href={href}
          icon={entry.icon}
          title={highlight(entry.title, ts)}
          summary={entry.summary}
          meta={showSection && h.section ? `In section: ${h.section.text}` : browsing ? undefined : labelOf(entry.category)}
        />
      </li>
    )
  }

  return (
    <div className={s.root}>
      <div className={s.bar}>
        <label htmlFor={inputId} className="kc-sr-only">
          Search the wiki
        </label>
        <span className={s.prompt} aria-hidden="true">
          &gt;
        </span>
        <input
          ref={inputRef}
          id={inputId}
          className={s.input}
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          placeholder="Search: /plot auto, Draedon, tags..."
          value={query}
          aria-describedby={hintId}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' && query) {
              e.preventDefault()
              setQuery('')
            }
          }}
        />
        {query ? (
          <button type="button" className={s.clear} onClick={() => setQuery('')} aria-label="Clear search">
            <PixelIcon name="cross" size={16} />
          </button>
        ) : (
          <kbd className={s.kbd} aria-hidden="true">
            /
          </kbd>
        )}
      </div>
      <p id={hintId} className={s.hint}>
        Searches page titles, commands and section names. Press <kbd>/</kbd> to jump here, <kbd>Esc</kbd> to clear.
      </p>

      {browsing ? (
        <div className={s.try}>
          <span className={s.tryLabel}>Popular:</span>
          {SUGGESTIONS.map((q) => (
            <button key={q} type="button" className={s.chip} onClick={() => setQuery(q)}>
              {q}
            </button>
          ))}
        </div>
      ) : null}

      <div className={s.tabs} role="group" aria-label="Filter by category">
        <button type="button" className={s.tab} aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
          <PixelIcon name="map" size={16} />
          <span>All</span>
          <span className={s.tabCount}>{counts.get('all')}</span>
        </button>
        {categories.map((c) => (
          <button key={c.id} type="button" className={s.tab} aria-pressed={filter === c.id} onClick={() => setFilter(c.id)}>
            <PixelIcon name={c.icon} size={16} />
            <span>{c.label}</span>
            <span className={s.tabCount}>{counts.get(c.id)}</span>
          </button>
        ))}
      </div>

      <p className={s.count} aria-live="polite" aria-atomic="true">
        {browsing
          ? filter === 'all'
            ? `${entries.length} pages`
            : `${hits.length} ${hits.length === 1 ? 'page' : 'pages'} in ${labelOf(filter)}`
          : `${hits.length} ${hits.length === 1 ? 'result' : 'results'} for "${query.trim()}"`}
      </p>

      {browsing && filter === 'all' ? (
        <div className={s.sections}>
          {categories.map((c) => {
            const list = hits.filter((h) => h.entry.category === c.id)
            if (list.length === 0) return null
            return (
              <section key={c.id} className={s.section} aria-labelledby={`cat-${c.id}`}>
                <div className={s.sectionHead}>
                  <span className={s.sectionIcon} aria-hidden="true">
                    <PixelIcon name={c.icon} size={32} />
                  </span>
                  <div>
                    <h2 id={`cat-${c.id}`} className={s.sectionTitle}>
                      {c.label}
                    </h2>
                    <p className={s.sectionBlurb}>{c.blurb}</p>
                  </div>
                </div>
                <ul className={s.list}>{list.map(card)}</ul>
              </section>
            )
          })}
        </div>
      ) : hits.length > 0 ? (
        <section aria-label="Results">
          <ul className={s.list}>{hits.map(card)}</ul>
        </section>
      ) : (
        <div className={s.empty}>
          <PixelIcon name="missing" size={48} />
          <div>
            <p className={s.emptyTitle}>Nothing found.</p>
            <p className={s.emptyText}>
              {filter !== 'all' ? 'Try the All tab, or one of these:' : 'Try a command or a word from the game, like:'}
            </p>
            <div className={s.chips}>
              {SUGGESTIONS.map((q) => (
                <button
                  key={q}
                  type="button"
                  className={s.chip}
                  onClick={() => {
                    setFilter('all')
                    setQuery(q)
                    inputRef.current?.focus()
                  }}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
