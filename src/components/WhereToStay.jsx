import { useT } from '../i18n.jsx'
import { Star } from './Icons.jsx'
import Placeholder from './Placeholder.jsx'

export default function WhereToStay() {
  const { hotels, ui } = useT()
  return (
    <section id="onde-ficar" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{ui.stayEyebrow}</span>
          <h2 className="h2 script">{ui.stayTitle}</h2>
          <p className="lead">{ui.stayLead}</p>
        </div>

        <div className="hotels">
          {hotels.map((h, i) => (
            <article className="hotel reveal" key={h.name} style={{ transitionDelay: `${i * 80}ms` }}>
              {h.img ? (
                <img className="hotel__photo" src={`${import.meta.env.BASE_URL}${h.img}`} alt={h.name} loading="lazy" />
              ) : (
                <Placeholder icon="bed" label={h.name} variant={i % 2 ? 'sea' : 'sand'} ratio="4 / 3" className="hotel__img" />
              )}
              <div className="hotel__body">
                <h3 className="hotel__name">{h.name}</h3>
                <span className="hotel__stars" aria-label={`${h.stars}`}>
                  {Array.from({ length: h.stars }).map((_, k) => (
                    <Star key={k} width="13" height="13" />
                  ))}
                </span>
                <p className="hotel__meta">
                  {h.dist}
                  {h.drive && <><br />{h.drive}</>}
                </p>
                <a className="btn btn--ghost hotel__btn" href={h.url} target="_blank" rel="noreferrer">
                  {ui.seeMore}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
