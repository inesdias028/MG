import { useState } from 'react'
import { useT } from '../i18n.jsx'
import { Plus } from './Icons.jsx'

export default function FAQ() {
  const { faqs, ui } = useT()
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section section--alt">
      <div className="container faq">
        <div className="section-head reveal">
          <span className="eyebrow">{ui.faqEyebrow}</span>
          <h2 className="h2 script">{ui.faqTitle}</h2>
        </div>

        <div className="faq__list reveal">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq__item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <button className="faq__q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  <span>{f.q}</span>
                  <span className="faq__icon"><Plus width="18" height="18" /></span>
                </button>
                <div className="faq__a" style={{ maxHeight: isOpen ? '260px' : '0' }}>
                  <p>{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
