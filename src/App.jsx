import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Research from './components/Research'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { nav } from './data'

export default function App() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    nav.forEach(n => { const el = document.getElementById(n.toLowerCase()); el && io.observe(el) })
    const rv = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rv.unobserve(e.target) } }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => rv.observe(el))
    return () => { io.disconnect(); rv.disconnect() }
  }, [])
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar active={active} />
    <main id="main">
      <Hero /><About /><Skills /><Projects /><Research /><Experience /><Certifications /><Contact />
    </main>
    <Footer />
  </>)
}
