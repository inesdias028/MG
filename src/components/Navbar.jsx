import { useEffect, useState } from 'react'
import { nav, couple } from '../data/content.js'
import { Menu, Close } from './Icons.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view.
  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner container">
        <a href="#inicio" className="nav__brand" onClick={(e) => go(e, 'inicio')} aria-label="Início">
          <span className="nav__mono">M<span className="nav__amp">&amp;</span>G</span>
        </a>

        <nav className="nav__links" aria-label="Navegação principal">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => go(e, n.id)}
              className={active === n.id ? 'is-active' : ''}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button className="nav__burger" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
          {open ? <Close width="24" height="24" /> : <Menu width="24" height="24" />}
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        <span className="nav__drawer-title script">{couple.bride} &amp; {couple.groom}</span>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)}>
            {n.label}
          </a>
        ))}
      </div>
    </header>
  )
}
