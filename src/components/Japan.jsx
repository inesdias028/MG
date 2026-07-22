import { useT } from '../i18n.jsx'

const japanImg = `${import.meta.env.BASE_URL}japao.jpg`

export default function Japan() {
  const { honeymoon, ui } = useT()
  return (
    <section id="japao" className="section section--alt japan">
      <div className="container japan__grid">
        <div className="japan__body reveal">
          <span className="eyebrow">{honeymoon.eyebrow}</span>
          <h2 className="h1 japan__title">{honeymoon.title}</h2>
          <p className="japan__text">{honeymoon.text}</p>
        </div>
        <div className="japan__art reveal">
          <img src={japanImg} alt={ui.japanAlt} loading="lazy" />
        </div>
      </div>
    </section>
  )
}
