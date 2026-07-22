import { useEffect, useState } from 'react'
import { useT, useLang } from '../i18n.jsx'
import { Menu, Close } from './Icons.jsx'

function LangToggle() {
  const { lang, setLang } = useLang()
  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      <button type="button" className={`lang__btn ${lang === 'pt' ? 'is-active' : ''}`} onClick={() => setLang('pt')} aria-pressed={lang === 'pt'}>
        PT
      </button>
      <span className="lang__sep" aria-hidden="true">|</span>
      <button type="button" className={`lang__btn ${lang === 'en' ? 'is-active' : ''}`} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
        EN
      </button>
    </div>
  )
}

export default function Navbar() {
  const t = useT()
  const { nav, couple } = t
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the section currently in view (ids are language-independent).
  useEffect(() => {
    const ids = ['inicio', 'historia', 'cerimonia', 'celebracao', 'programa', 'dress-code', 'como-chegar', 'onde-ficar', 'japao', 'presentes', 'rsvp']
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
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
        <a href="#inicio" className="nav__brand" onClick={(e) => go(e, 'inicio')} aria-label={nav[0].label}>
          <span className="nav__mono">M<span className="nav__amp">&amp;</span>G</span>
        </a>

        <nav className="nav__links" aria-label="Navegação principal">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)} className={active === n.id ? 'is-active' : ''}>
              {n.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <LangToggle />
          <button className="nav__burger" onClick={() => setOpen((v) => !v)} aria-label="Menu" aria-expanded={open}>
            {open ? <Close width="24" height="24" /> : <Menu width="24" height="24" />}
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        <span className="nav__drawer-title script">
          {couple.bride} &amp; {couple.groom}
        </span>
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)}>
            {n.label}
          </a>
        ))}
      </div>
    </header>
  )
}
