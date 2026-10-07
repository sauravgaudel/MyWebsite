import Section from './Section'
import { achievements } from '../data'
export default function Certifications() {
  return (
    <Section id="achievements" title="Certifications & achievements" intro="Certifications, workshops, hackathons and activities.">
      <div className="grid g4">
        {achievements.map(a => (
          <article key={a.title} className="card mini reveal"><p className="meta">{a.type}</p><h3>{a.title}</h3><p>{a.note}</p></article>
        ))}
      </div>
    </Section>
  )
}
