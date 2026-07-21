import { hotels } from '../data/content.js'
import { Star } from './Icons.jsx'
import Placeholder from './Placeholder.jsx'
import { RopeDivider } from './Decor.jsx'

export default function WhereToStay() {
  return (
    <section id="onde-ficar" className="section">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Sugestões</span>
          <h2 className="h2 script">Onde ficar</h2>
          <p className="lead">Algumas opções a poucos minutos da quinta, para descansar depois da festa.</p>
          <RopeDivider width={220} className="section-head__rope" />
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
                <span className="hotel__stars" aria-label={`${h.stars} estrelas`}>
                  {Array.from({ length: h.stars }).map((_, k) => (
                    <Star key={k} width="13" height="13" />
                  ))}
                </span>
                <p className="hotel__meta">
                  {h.dist}
                  {h.drive && <><br />{h.drive}</>}
                </p>
                <a className="btn btn--ghost hotel__btn" href={h.url} target="_blank" rel="noreferrer">
                  Ver mais
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
