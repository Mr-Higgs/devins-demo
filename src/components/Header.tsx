import { useEffect, useState } from 'react'
import { Logo } from './Logo'

const links = [
  { href: '#workshops', label: 'Workshops' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
  }, [open])

  return (
    <>
    <header className={`header ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Logo name="devin" height={24} />
          <span className="brand-tag">Workshops</span>
        </a>
        <nav className="nav-desktop" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary btn-sm" href="#workshops">
            Get the decks
          </a>
        </nav>
        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger ${open ? 'is-open' : ''}`} />
        </button>
      </div>
    </header>
      <nav id="mobile-nav" className={`nav-mobile ${open ? 'is-open' : ''}`} aria-label="Mobile">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <a className="btn btn-primary" href="#workshops" onClick={() => setOpen(false)}>
          Get the decks
        </a>
      </nav>
    </>
  )
}
