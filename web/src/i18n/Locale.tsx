import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Copy, Locale } from '../data/types'
import { readCopy } from '../data/types'
import { ui, type UiKey } from './ui'

const KEY = 'cholas-locale'

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (locale: Locale) => void
}>({ locale: 'en', setLocale: () => undefined })

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof localStorage === 'undefined') return 'en'
    return localStorage.getItem(KEY) === 'ta' ? 'ta' : 'en'
  })

  useEffect(() => {
    localStorage.setItem(KEY, locale)
    document.documentElement.lang = locale === 'ta' ? 'ta' : 'en'
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
}

export function useCopy() {
  const { locale } = useLocale()
  return (value: string | Copy | undefined) => readCopy(locale, value)
}

export function useT() {
  const copy = useCopy()
  return (key: UiKey) => copy(ui[key])
}
