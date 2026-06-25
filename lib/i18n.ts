import sk from '@/locales/sk.json'
import en from '@/locales/en.json'
import pl from '@/locales/pl.json'

export type Lang = 'sk' | 'en' | 'pl'

const translations = { sk, en, pl } as const

export type Translations = typeof sk

export function getT(lang: Lang): Translations {
  return translations[lang] ?? translations.sk
}

export function getLangFromParam(param: string | undefined): Lang {
  if (param === 'en' || param === 'pl') return param
  return 'sk'
}

export const LANG_LABELS: Record<Lang, string> = {
  sk: 'SK',
  en: 'EN',
  pl: 'PL',
}

export const LANG_URLS: Record<Lang, string> = {
  sk: '/',
  en: '/en',
  pl: '/pl',
}

export const LANG_HTML: Record<Lang, string> = {
  sk: 'sk',
  en: 'en',
  pl: 'pl',
}
