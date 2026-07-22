import { useT } from '../i18n.jsx'

const dressImg = `${import.meta.env.BASE_URL}dresscode.jpg`

export default function DressCode() {
  const { dressCode, ui } = useT()
  return (
    <section id="dress-code" className="section section--flush-top">
      <div className="container dress">
        <div className="dress__body reveal">
          <span className="eyebrow">{ui.dressEyebrow}</span>
          <h2 className="h2 script">{dressCode.title}</h2>
          <ul className="dress__list">
            {dressCode.notes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
        <img className="dress__photo reveal" src={dressImg} alt={ui.dressAlt} loading="lazy" />
      </div>
    </section>
  )
}
