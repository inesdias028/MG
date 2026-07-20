import { useState } from 'react'
import { faqs } from '../data/content.js'
import { Plus } from './Icons.jsx'
import { RopeDivider } from './Decor.jsx'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section section--alt">
      <div className="container faq">
        <div className="section-head reveal">
          <span className="eyebrow">Antes de partir</span>
          <h2 className="h2 script">Perguntas frequentes</h2>
          <RopeDivider width={220} className="section-head__rope" />
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
