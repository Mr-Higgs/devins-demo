const steps = [
  { title: 'Pick a workshop', body: 'Start with Getting started, or jump to the topic your team needs.' },
  { title: 'Follow the tutorial', body: 'Each workshop has short steps and copy-paste prompts you can try right away.' },
  { title: 'Download the deck', body: 'Use the slides to follow along, or present the workshop to your own team.' },
  { title: 'Ship something real', body: 'Finish with a merged pull request in your own repo, written with Devin.' },
]

export function HowItWorks() {
  return (
    <section className="section section-alt" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>From zero to your first Devin PR</h2>
        </div>
        <ol className="how">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="how-hex" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p className="muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
