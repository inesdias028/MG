import { useState } from 'react'
import { gifts, rsvpEndpoint, googleForm } from '../data/content.js'
import { Gift, Heart } from './Icons.jsx'
import { RopeDivider } from './Decor.jsx'

export default function GiftsRSVP() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [copied, setCopied] = useState(false)
  const [form, setForm] = useState({ name: '', guests: '1', diet: '', message: '' })
  const [error, setError] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) {
      setError('Por favor, indique o seu nome.')
      return
    }
    setError('')

    const useGoogle = googleForm.action && googleForm.fields.name

    // Nothing configured yet → just confirm locally (see content.js).
    if (!useGoogle && !rsvpEndpoint) {
      setSent(true)
      return
    }

    setSending(true)
    try {
      if (useGoogle) {
        // Post to the Google Form; responses land in its linked Sheet.
        // no-cors → the response is opaque, so a resolved fetch means "sent".
        const body = new URLSearchParams()
        body.append(googleForm.fields.name, form.name)
        if (googleForm.fields.guests) body.append(googleForm.fields.guests, form.guests)
        if (googleForm.fields.diet) body.append(googleForm.fields.diet, form.diet)
        if (googleForm.fields.message) body.append(googleForm.fields.message, form.message)
        await fetch(googleForm.action, { method: 'POST', mode: 'no-cors', body })
        setSent(true)
      } else {
        // Deliver by e-mail via Formspree / Getform.
        const res = await fetch(rsvpEndpoint, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Nome: form.name,
            'Nº de convidados': form.guests,
            'Restrições alimentares': form.diet,
            Mensagem: form.message,
            _subject: `RSVP · ${form.name}`,
          }),
        })
        if (!res.ok) throw new Error('bad status')
        setSent(true)
      }
    } catch {
      setError('Não foi possível enviar. Tente novamente ou contacte-nos diretamente.')
    } finally {
      setSending(false)
    }
  }

  const copyIban = async () => {
    try {
      await navigator.clipboard.writeText(gifts.iban)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <section id="presentes" className="section giftsrsvp">
      <div className="container giftsrsvp__grid">
        {/* Presentes */}
        <div className="gifts reveal">
          <span className="gifts__ico"><Gift width="40" height="40" /></span>
          <h2 className="h2 script">{gifts.title}</h2>
          <p className="gifts__lead">{gifts.lead}</p>
          <p className="gifts__text">{gifts.text}</p>
          <div className="gifts__iban">
            <span className="gifts__iban-label">IBAN</span>
            <code>{gifts.iban}</code>
            <button type="button" className="btn btn--ghost gifts__copy" onClick={copyIban}>
              {copied ? 'Copiado ✓' : 'Copiar'}
            </button>
          </div>
        </div>

        {/* RSVP */}
        <div id="rsvp" className="rsvp reveal">
          <div className="rsvp__head">
            <span className="eyebrow">RSVP</span>
            <h2 className="h2 script">Confirma a tua presença</h2>
            <RopeDivider width={160} />
          </div>

          {sent ? (
            <div className="rsvp__thanks" role="status">
              <Heart width="42" height="42" />
              <h3 className="h3">Obrigado, {form.name.split(' ')[0]}!</h3>
              <p>Recebemos a tua confirmação. Mal podemos esperar por celebrar contigo.</p>
            </div>
          ) : (
            <form className="rsvp__form" onSubmit={submit} noValidate>
              <div className="field field--row">
                <label className="field field--grow">
                  <span>Nome completo</span>
                  <input type="text" value={form.name} onChange={update('name')} placeholder="Nome completo" autoComplete="name" />
                </label>
                <label className="field">
                  <span>Nº de convidados</span>
                  <select value={form.guests} onChange={update('guests')}>
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="field">
                <span>Restrições alimentares</span>
                <input type="text" value={form.diet} onChange={update('diet')} placeholder="Restrições alimentares (opcional)" />
              </label>
              <label className="field">
                <span>Mensagem para os noivos</span>
                <textarea rows="4" value={form.message} onChange={update('message')} placeholder="Mensagem (opcional)" />
              </label>
              {error && <p className="field__error">{error}</p>}
              <button type="submit" className="btn rsvp__submit" disabled={sending}>
                {sending ? 'A enviar…' : 'Confirmar presença'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
