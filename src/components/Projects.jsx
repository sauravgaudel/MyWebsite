import Section from './Section'
import { projects } from '../data'
import { GitHub } from './Icons'
export default function Projects() {
  return (
    <Section id="projects" title="Projects" intro="Practical AI/ML, software and networking work." alt>
      <div className="grid g2">
        {projects.map(p => (
          <article key={p.name} className="card project reveal">
            {p.image && <img src={p.image} alt={`${p.name} preview`} loading="lazy" />}
            <h3>{p.name}</h3><p>{p.description}</p>
            <ul className="tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="btns sm">
              <a className="btn primary" href={p.github}><GitHub /> GitHub</a>
              {p.demo && <a className="btn" href={p.demo}>Live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
