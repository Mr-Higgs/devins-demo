import { useEffect, useRef } from 'react'
import type { Workshop } from '../content/workshops'
import { DownloadIcon } from './WorkshopCard'

type Props = { workshop: Workshop | undefined; onClose: () => void }

export function WorkshopSheet({ workshop: w, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (w && !dialog.open) dialog.showModal()
    if (!w && dialog.open) dialog.close()
    document.body.classList.toggle('no-scroll', !!w)
  }, [w])

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="sheet-title"
      onCancel={(e) => {
        e.preventDefault()
        onClose()
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {w && (
        <div className="sheet-inner">
          <div className="sheet-handle" aria-hidden="true" />
          <div className="sheet-head">
            <div>
              <div className="card-top">
                <span className={`badge badge-${w.level.toLowerCase()}`}>{w.level}</span>
                <span className="muted">{w.duration}</span>
              </div>
              <h2 id="sheet-title">{w.title}</h2>
            </div>
            <button className="icon-btn" aria-label="Close" onClick={onClose}>
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <p className="muted">{w.summary}</p>

          <div className="sheet-downloads">
            {w.downloads.length > 0 ? (
              w.downloads.map((d) => (
                <a key={d.href} className="btn btn-primary" href={d.href} download>
                  <DownloadIcon /> {d.label} ({d.format}
                  {d.size ? `, ${d.size}` : ''})
                </a>
              ))
            ) : (
              <span className="soon">Deck coming soon</span>
            )}
          </div>

          <h3 className="sheet-sub">Tutorial</h3>
          <ol className="steps">
            {w.steps.map((s, i) => (
              <li key={s.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                  {s.snippet && (
                    <pre>
                      <code>{s.snippet}</code>
                    </pre>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </dialog>
  )
}
