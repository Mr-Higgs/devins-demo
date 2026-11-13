const faqs = [
  {
    q: 'Do I need a Devin account?',
    a: 'To follow the hands-on parts, yes. You can sign up at devin.ai. The decks and tutorials are free to read without one.',
  },
  {
    q: 'Can I present these decks to my team?',
    a: 'Yes. Download the deck, present it as-is, or adapt it for your own codebase.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'The beginner workshops assume you can read a pull request. The advanced ones assume you review code regularly.',
  },
  {
    q: 'What format are the decks?',
    a: 'Decks are PDFs so they open on any device, including your phone.',
  },
]

export function Faq() {
  return (
    <section className="section" id="faq">
      <div className="container narrow">
        <div className="section-head">
          <p className="eyebrow">FAQ</p>
          <h2>Questions</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p className="muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
