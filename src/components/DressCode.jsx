import { dressCode } from '../data/content.js'

const dressImg = `${import.meta.env.BASE_URL}dresscode.jpg`

export default function DressCode() {
  return (
    <section id="dress-code" className="section">
      <div className="container dress">
        <div className="dress__body reveal">
          <span className="eyebrow">Dress Code</span>
          <h2 className="h2 script">{dressCode.title}</h2>
          <p className="dress__sub">{dressCode.subtitle}</p>
          <ul className="dress__list">
            {dressCode.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <img className="dress__photo reveal" src={dressImg} alt="Sugestões de traje — fato e vestidos" loading="lazy" />
      </div>
    </section>
  )
}
