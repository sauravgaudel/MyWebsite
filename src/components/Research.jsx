import Section from './Section'
import { research } from '../data'
export default function Research() {
  return (
    <Section id="research" title="Research" intro="Academic work on AI/ML, cybersecurity and Nepali speech recognition.">
      <div className="stack">
        {research.map(r => (
          <article key={r.title} className="card paper reveal">
            <p className="meta">{r.status}</p>
            <h3>{r.title}</h3><p>{r.description}</p>
            <ul className="tags">{r.method.map(m => <li key={m}>{m}</li>)}</ul>
            <a className="btn primary sm" href={r.paper}>Read Paper</a>
          </article>
        ))}
      </div>
    </Section>
  )
}
