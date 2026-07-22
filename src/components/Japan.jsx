import { honeymoon } from '../data/content.js'

const japanImg = `${import.meta.env.BASE_URL}japao.jpg`

export default function Japan() {
  return (
    <section id="japao" className="section section--alt japan">
      <div className="container japan__grid">
        <div className="japan__body reveal">
          <span className="eyebrow">{honeymoon.eyebrow}</span>
          <h2 className="h1 japan__title">{honeymoon.title}</h2>
          <p className="japan__text">{honeymoon.text}</p>
        </div>
        <div className="japan__art reveal">
          <img src={japanImg} alt="Monte Fuji, pagode e cerejeiras em flor" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
