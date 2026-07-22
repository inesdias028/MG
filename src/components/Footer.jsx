import { couple, nav } from '../data/content.js'
import { KnotEmblem } from './Decor.jsx'

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <KnotEmblem size={64} className="footer__knot" />
        <h2 className="h1 footer__names">
          {couple.bride} &amp; {couple.groom}
        </h2>
        <p className="footer__date">{couple.date}</p>
        <p className="footer__tag">Obrigado por fazer parte da nossa viagem.</p>

        <nav className="footer__nav" aria-label="Rodapé">
          {nav.slice(1).map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={(e) => go(e, n.id)}>
              {n.label}
            </a>
          ))}
        </nav>

        <p className="footer__place">{couple.region}</p>
      </div>
    </footer>
  )
}
