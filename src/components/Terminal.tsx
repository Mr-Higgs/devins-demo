import { useEffect, useState } from 'react'

const lines: { kind: 'user' | 'devin' | 'ok'; text: string }[] = [
  { kind: 'user', text: 'Add a dark mode toggle to the settings page' },
  { kind: 'devin', text: 'Reading src/settings and the theme tokens…' },
  { kind: 'devin', text: 'Adding <ThemeToggle /> and a useTheme hook' },
  { kind: 'devin', text: 'Running tests: 128 passed' },
  { kind: 'ok', text: 'Pull request opened: feat: dark mode toggle' },
]

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Terminal() {
  const [shown, setShown] = useState(() => (reducedMotion() ? lines.length : 0))

  useEffect(() => {
    if (reducedMotion()) return
    const delay = shown >= lines.length ? 3200 : shown === 0 ? 600 : 1100
    const t = setTimeout(() => setShown((n) => (n >= lines.length ? 0 : n + 1)), delay)
    return () => clearTimeout(t)
  }, [shown])

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal-bar">
        <span className="dot dot-red" />
        <span className="dot dot-yellow" />
        <span className="dot dot-green" />
        <span className="terminal-title">devin session</span>
      </div>
      <ul className="terminal-body">
        {lines.map((l, i) => (
          <li key={`${i}-${i < shown}`} className={`t-line t-${l.kind} ${i < shown ? '' : 't-hidden'}`}>
            <span className="t-prefix">{l.kind === 'user' ? '›' : l.kind === 'ok' ? '✓' : '·'}</span>
            {l.text}
          </li>
        ))}
        <li className={`t-cursor ${shown < lines.length ? '' : 't-hidden'}`} />
      </ul>
    </div>
  )
}
