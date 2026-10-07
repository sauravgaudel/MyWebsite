import { profile, featured } from '../data'
import { GitHub, LinkedIn, Mail } from './Icons'
// Small network graph: a nod to networking + neural nets + security
const nodes = [[60,50],[170,30],[270,80],[110,140],[220,160],[320,170],[150,250],[260,260]]
const edges = [[0,1],[1,2],[0,3],[1,3],[1,4],[2,4],[2,5],[3,4],[3,6],[4,6],[4,7],[5,7],[6,7]]
export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="chip">{profile.role} · Nepal</p>
          <h1>Hi, I'm <span>Saurav Gaudel</span></h1>
          <p className="lead">I'm drawn to AI/ML, cybersecurity and networking, and I learn by building: practical software, research experiments and real network setups.</p>
          <div className="btns">
            <a className="btn primary" href={profile.cv}>View CV</a>
            <a className="btn" href="#projects">Explore Projects</a>
            <a className="btn ghost" href="#contact">Contact Me</a>
          </div>
          <div className="socials">
            <a href={profile.github} aria-label="GitHub"><GitHub /></a>
            <a href={profile.linkedin} aria-label="LinkedIn"><LinkedIn /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
          </div>
        </div>
        <div className="avatar-card" aria-hidden="true">
          <svg viewBox="0 0 380 300" className="graph">
            {edges.map(([a,b],i) => <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} style={{animationDelay:`${i*70}ms`}} />)}
            {nodes.map(([x,y],i) => <circle key={i} cx={x} cy={y} r={i===4?11:6} className={i===4?'hub':''} />)}
          </svg>
          <div className="avatar">{/* Replace with <img src="/profile.jpg" alt="Saurav Gaudel" /> */}SG</div>
        </div>
      </div>
      <div className="wrap feat">
        {featured.map(f => <a key={f.title} href={f.href} className="feat-card"><h3>{f.title}</h3><p>{f.text}</p></a>)}
      </div>
    </section>
  )
}
