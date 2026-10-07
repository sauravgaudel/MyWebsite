import { useState } from 'react'
import { nav } from '../data'
export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="logo" aria-label="Saurav Gaudel, home"><span>SG</span>Saurav Gaudel</a>
        <button className="burger" aria-expanded={open} aria-controls="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}><i /><i /><i /></button>
        <nav id="menu" aria-label="Primary" className={open ? 'open' : ''}>
          {nav.map(n => { const id = n.toLowerCase(); return (
            <a key={n} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>{n}</a>) })}
        </nav>
      </div>
    </header>
  )
}
