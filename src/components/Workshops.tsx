import { useMemo, useState } from 'react'
import { levels, workshops, type Level } from '../content/workshops'
import { WorkshopCard } from './WorkshopCard'

type Props = { onOpen: (slug: string) => void }

export function Workshops({ onOpen }: Props) {
  const [level, setLevel] = useState<Level | 'All'>('All')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return workshops.filter(
      (w) =>
        (level === 'All' || w.level === level) &&
        (!q || [w.title, w.summary, ...w.topics].join(' ').toLowerCase().includes(q)),
    )
  }, [level, query])

  return (
    <section className="section" id="workshops">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Workshops</p>
          <h2>Tutorials and slide decks</h2>
          <p className="muted">
            Open a workshop for the step-by-step tutorial, or grab the deck to run it yourself.
          </p>
        </div>

        <div className="filters">
          <div className="chips" role="group" aria-label="Filter by level">
            {(['All', ...levels] as const).map((l) => (
              <button
                key={l}
                className={`chip ${level === l ? 'is-active' : ''}`}
                aria-pressed={level === l}
                onClick={() => setLevel(l)}
              >
                {l}
              </button>
            ))}
          </div>
          <label className="search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="sr-only">Search workshops</span>
            <input
              type="search"
              placeholder="Search workshops"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {filtered.length > 0 ? (
          <div className="grid" key={`${level}-${query}`}>
            {filtered.map((w, i) => (
              <WorkshopCard key={w.slug} workshop={w} index={i} onOpen={onOpen} />
            ))}
          </div>
        ) : (
          <p className="empty">No workshops match that search.</p>
        )}
      </div>
    </section>
  )
}
