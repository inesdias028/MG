import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './data/content.js'

const LangContext = createContext(null)

const STORAGE_KEY = 'mg-lang'

function initialLang() {
  // Portuguese is the primary language; remember the visitor's last choice.
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  }
  return 'pt'
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LangContext.Provider>
}

// Returns the content object for the active language.
export function useT() {
  return useContext(LangContext).t
}

// Returns { lang, setLang } for the language toggle.
export function useLang() {
  const { lang, setLang } = useContext(LangContext)
  return { lang, setLang }
}
