import type { Metadata } from 'next'
import { getT, getLangFromParam, LANG_HTML } from '@/lib/i18n'
import LandingPage from '@/components/LandingPage'

interface Props {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang: langParam } = await params
  const lang = getLangFromParam(langParam)
  const t = getT(lang)
  const url = lang === 'en' ? 'https://navaro.pro/en' : 'https://navaro.pro/pl'

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url,
      siteName: 'Navaro',
      locale: LANG_HTML[lang],
      type: 'website',
    },
    alternates: {
      canonical: url,
      languages: {
        sk: 'https://navaro.pro',
        en: 'https://navaro.pro/en',
        pl: 'https://navaro.pro/pl',
      },
    },
  }
}

export default async function LangPage({ params }: Props) {
  const { lang: langParam } = await params
  const lang = getLangFromParam(langParam)
  return <LandingPage t={getT(lang)} lang={lang} />
}
