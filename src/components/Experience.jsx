import Section from './Section'
import { experience } from '../data'
export default function Experience() {
  return (
    <Section id="experience" title="Experience" intro="Teams, programs and hands-on technical work." alt>
      <ol className="timeline">
        {experience.map(e => (
          <li key={e.role + e.date} className="reveal">
            <div className="card"><p className="meta">{e.date}</p>
              <h3>{e.role} <span>{e.org}</span></h3><p>{e.description}</p>
              <ul className="tags">{e.tags.map(t => <li key={t}>{t}</li>)}</ul></div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
