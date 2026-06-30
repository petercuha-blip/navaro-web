import { getT, getLangFromParam } from '@/lib/i18n'
import OfferGenEarlyAccessPage from '@/components/OfferGenEarlyAccessPage'

interface Props {
  params: Promise<{ lang: string }>
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }]
}

export default async function Page({ params }: Props) {
  const { lang: langParam } = await params
  const lang = getLangFromParam(langParam)
  return <OfferGenEarlyAccessPage t={getT(lang)} lang={lang} />
}
