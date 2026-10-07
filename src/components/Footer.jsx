import { profile, nav } from '../data'
import { GitHub, LinkedIn, Mail } from './Icons'
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap foot-in">
      <div><strong>{profile.name}</strong><p>{profile.tagline}</p>
        <div className="socials"><a href={profile.github} aria-label="GitHub"><GitHub /></a><a href={profile.linkedin} aria-label="LinkedIn"><LinkedIn /></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a></div></div>
      <nav aria-label="Footer">{nav.map(n => <a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
      <p className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </div></footer>
  )
}
