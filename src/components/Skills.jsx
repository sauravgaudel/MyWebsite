import Section from './Section'
import { skills } from '../data'
export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="Tools and topics I work with, grouped by area.">
      <div className="grid g3">
        {skills.map(s => (
          <article key={s.title} className="card reveal"><h3>{s.title}</h3>
            <ul className="tags">{s.items.map(i => <li key={i}>{i}</li>)}</ul></article>
        ))}
      </div>
    </Section>
  )
}
