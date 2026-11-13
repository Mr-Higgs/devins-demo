import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo name="devin" height={22} />
          <p className="muted">Workshops, tutorials and slide decks for building with Devin.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="#workshops">Workshops</a>
          <a href="#how-it-works">How it works</a>
          <a href="#faq">FAQ</a>
          <a href="https://devin.ai" target="_blank" rel="noreferrer">
            devin.ai
          </a>
          <a href="https://docs.devin.ai" target="_blank" rel="noreferrer">
            Docs
          </a>
        </nav>
        <div className="footer-cognition">
          <span className="muted">Devin is built by</span>
          <Logo name="cognition" height={40} />
        </div>
      </div>
    </footer>
  )
}
