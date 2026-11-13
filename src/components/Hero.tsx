import avatar from '../assets/brand/devin-avatar.png'
import { workshops } from '../content/workshops'
import { HexMark } from './HexMark'
import { Terminal } from './Terminal'

export function Hero() {
  const decks = workshops.filter((w) => w.downloads.length > 0).length
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <div className="hex-grid" />
        <div className="glow glow-blue" />
        <div className="glow glow-purple" />
        <div className="glow glow-green" />
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse" /> Hands-on Devin workshops
          </p>
          <h1>
            Learn to build with <span className="gradient-text">Devin</span>, the AI software engineer.
          </h1>
          <p className="lede">
            Step-by-step tutorials and free slide decks from my live workshops. Follow along on your
            laptop, or download a deck and teach it to your team.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#workshops">
              Browse workshops
            </a>
            <a className="btn btn-ghost" href="#how-it-works">
              How it works
            </a>
          </div>
          <dl className="stats">
            <div>
              <dt>Workshops</dt>
              <dd>{workshops.length}</dd>
            </div>
            <div>
              <dt>Free decks</dt>
              <dd>{decks}</dd>
            </div>
            <div>
              <dt>Cost</dt>
              <dd>$0</dd>
            </div>
          </dl>
        </div>
        <div className="hero-art">
          <div className="hero-art-top">
            <img className="hero-avatar" src={avatar} alt="" width={240} height={219} />
            <HexMark className="hero-mark" />
          </div>
          <Terminal />
        </div>
      </div>
    </section>
  )
}
