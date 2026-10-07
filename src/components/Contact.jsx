import { useState } from 'react'
import Section from './Section'
import { profile } from '../data'
import { GitHub, LinkedIn, Mail, Pin } from './Icons'
export default function Contact() {
  const [sent, setSent] = useState(false)
  // No backend: opens the visitor's email client. Swap for Formspree/your API when ready.
  const submit = e => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `${f.get('message')}\n\nFrom: ${f.get('name')} (${f.get('email')})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }
  return (
    <Section id="contact" title="Contact" intro="Open to internships, research collaboration and hackathon teams." alt>
      <div className="contact">
        <ul className="info reveal">
          <li><Mail /><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><GitHub /><a href={profile.github}>GitHub</a></li>
          <li><LinkedIn /><a href={profile.linkedin}>LinkedIn</a></li>
          <li><Pin /><span>{profile.location}</span></li>
        </ul>
        <form className="card form reveal" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label className="full">Subject<input name="subject" required /></label>
          <label className="full">Message<textarea name="message" rows="5" required /></label>
          <button className="btn primary" type="submit">Send Message</button>
          <p role="status" className="meta">{sent && 'Opening your email app to send the message.'}</p>
        </form>
      </div>
    </Section>
  )
}
