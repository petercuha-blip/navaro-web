import type { Lang, Translations } from '@/lib/i18n'
import { LANG_LABELS, LANG_URLS } from '@/lib/i18n'

const badgeStyles: Record<string, string> = {
  green: 'bg-[#ECFDF5] text-[#16A34A]',
  orange: 'bg-[#FFF3E3] text-[#EA6F0E]',
  gray: 'bg-[#F1F5F9] text-[#64748B]',
}

function Icon({ name }: { name: string }) {
  const common = {
    className: 'h-5 w-5',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (name === 'Clock') return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
  if (name === 'Pdf') return <svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" /></svg>
  if (name === 'Send') return <svg {...common}><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
  return <svg {...common}><path d="M4 18 10 12l4 4 6-8" /><path d="M15 8h5v5" /></svg>
}

interface Props {
  t: Translations
  lang: Lang
}

export default function LandingPage({ t, lang }: Props) {
  const earlyAccessUrl = lang === 'sk' ? '/offergen-early-access' : `/${lang}/offergen-early-access`
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8FF] text-[#0F172A]">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FAF8FF]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href={LANG_URLS[lang]} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6D35F5] text-sm font-black text-white shadow-lg shadow-[#6D35F5]/20">
              N
            </span>
            <span className="text-sm font-bold tracking-tight sm:text-base">{t.header.logo}</span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#64748B] lg:flex">
            <a href="#riesenia" className="transition hover:text-[#6D35F5]">{t.header.nav.solutions}</a>
            <a href="#o-nas" className="transition hover:text-[#6D35F5]">{t.header.nav.about}</a>
            <a href="#preco" className="transition hover:text-[#6D35F5]">{t.header.nav.why}</a>
            <a href={earlyAccessUrl} className="transition hover:text-[#6D35F5]">{t.header.nav.offergen}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-1 py-1 shadow-sm">
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <a
                  key={l}
                  href={LANG_URLS[l]}
                  className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
                    l === lang ? 'bg-[#6D35F5] text-white' : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  {LANG_LABELS[l]}
                </a>
              ))}
            </div>

            <a
              href="https://app.navaro.pro/login"
              className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-bold text-[#0F172A] shadow-sm transition hover:border-[#6D35F5] hover:text-[#6D35F5]"
            >
              {t.header.login}
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#DDD4FF] bg-[#EEE8FF] px-4 py-2 text-sm font-semibold text-[#6D35F5]">
            {t.hero.badge}
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
            {t.hero.h1_1}
            <span className="block text-[#6D35F5]">{t.hero.h1_2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">{t.hero.subtext}</p>

          <div className="mt-8">
            <a
              href="#riesenia"
              className="inline-block rounded-2xl bg-[#6D35F5] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:-translate-y-0.5 hover:bg-[#5B27D9]"
            >
              {t.hero.cta1}
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <img
            src="/screenshot-dashboard.png"
            alt="Navaro OfferGen dashboard"
            className="w-full rounded-2xl border border-gray-200 shadow-2xl"
          />
        </div>
      </section>

      {/* ── Solutions ── */}
      <section id="riesenia" className="bg-[#F7F5FF]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">{t.solutions.title}</h2>
            <p className="mt-4 text-lg leading-8 text-[#64748B]">{t.solutions.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.solutions.items.map((item) => (
              <article
                key={item.name}
                className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(109,53,245,0.12)]"
              >
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[item.badgeColor] ?? badgeStyles.gray}`}>
                  {item.badge}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">{item.name}</h3>
                <p className="mt-4 leading-7 text-[#64748B]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="o-nas" className="bg-white">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-6 lg:py-24">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6D35F5]">{t.about.label}</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-5 text-lg font-medium leading-8 text-[#475569]">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
        </div>
      </section>

      {/* ── Why Navaro ── */}
      <section id="preco" className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6D35F5]">{t.why.label}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
              {t.why.title}
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((item) => (
              <article key={item.title} className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-[#EEE8FF] text-[#6D35F5]">
                  <Icon name={item.icon} />
                </div>
                <h3 className="text-lg font-black text-[#0F172A]">{item.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-[#64748B]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Early Access CTA ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-6 rounded-2xl border border-[#DDD4FF] bg-[#F5F3FF] p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6D35F5]">{t.earlyAccess.label}</p>
              <h2 className="mt-3 text-3xl font-black text-[#0F172A]">{t.earlyAccess.title}</h2>
              <p className="mt-3 text-base font-medium leading-7 text-[#475569]">
                {t.earlyAccess.description}
              </p>
            </div>
            <a
              href={earlyAccessUrl}
              className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              {t.earlyAccess.cta}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E5E7EB] bg-white px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#64748B] md:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-5">
            <a href={earlyAccessUrl} className="transition hover:text-[#6D35F5]">{t.header.nav.offergen}</a>
            <a href="mailto:info@navaro.pro" className="transition hover:text-[#6D35F5]">{t.header.nav.about}</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
