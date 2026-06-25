import { getT } from '@/lib/i18n'
import LandingPage from '@/components/LandingPage'

export default function HomePage() {
  return <LandingPage t={getT('sk')} lang="sk" />
}
