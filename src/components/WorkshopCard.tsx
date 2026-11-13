import type { Workshop } from '../content/workshops'

type Props = { workshop: Workshop; index: number; onOpen: (slug: string) => void }

export function WorkshopCard({ workshop: w, index, onOpen }: Props) {
  const deck = w.downloads[0]
  return (
    <article className="card" style={{ animationDelay: `${index * 60}ms` }}>
      <div className="card-top">
        <span className={`badge badge-${w.level.toLowerCase()}`}>{w.level}</span>
        <span className="muted">{w.duration}</span>
      </div>
      <h3>{w.title}</h3>
      <p className="muted">{w.summary}</p>
      <ul className="tags">
        {w.topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="card-actions">
        <button className="btn btn-secondary" onClick={() => onOpen(w.slug)}>
          View tutorial
        </button>
        {deck ? (
          <a className="btn btn-primary" href={deck.href} download>
            <DownloadIcon /> {deck.format}
          </a>
        ) : (
          <span className="soon">Deck coming soon</span>
        )}
      </div>
    </article>
  )
}

export function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3v12m0 0 5-5m-5 5-5-5M4 19h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
