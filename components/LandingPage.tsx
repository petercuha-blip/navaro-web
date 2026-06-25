import type { Lang, Translations } from '@/lib/i18n'
import { LANG_LABELS, LANG_URLS } from '@/lib/i18n'

const appUrl = 'https://app.navaro.pro'
const contactUrl = 'mailto:info@navaro.pro'

const badgeStyles: Record<string, string> = {
  green: 'bg-[#ECFDF5] text-[#16A34A]',
  orange: 'bg-[#FFF3E3] text-[#EA6F0E]',
  gray: 'bg-[#F1F5F9] text-[#64748B]',
}

interface Props {
  t: Translations
  lang: Lang
}

export default function LandingPage({ t, lang }: Props) {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8FF] text-[#0F172A]">

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FAF8FF]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href={LANG_URLS[lang]} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6D35F5] text-sm font-black text-white shadow-lg shadow-[#6D35F5]/20">
              N
            </span>
            <span className="text-sm font-bold tracking-tight sm:text-base">
              {t.header.logo}
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#64748B] lg:flex">
            <a href="#product" className="transition hover:text-[#6D35F5]">{t.header.nav.product}</a>
            <a href="#modules" className="transition hover:text-[#6D35F5]">{t.header.nav.modules}</a>
            <a href="#pricing" className="transition hover:text-[#6D35F5]">{t.header.nav.pricing}</a>
            <a href="#contact" className="transition hover:text-[#6D35F5]">{t.header.nav.contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex items-center gap-1 rounded-full border border-[#E5E7EB] bg-white px-1 py-1 shadow-sm">
              {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
                <a
                  key={l}
                  href={LANG_URLS[l]}
                  className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${
                    l === lang
                      ? 'bg-[#6D35F5] text-white'
                      : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  {LANG_LABELS[l]}
                </a>
              ))}
            </div>

            <a
              href={appUrl}
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
          <div className="mb-6 inline-flex rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#6D35F5] shadow-sm">
            {t.hero.badge}
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
            {t.hero.h1_1}
            <span className="block text-[#6D35F5]">{t.hero.h1_2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
            {t.hero.subtext}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={appUrl}
              className="rounded-2xl bg-[#6D35F5] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:-translate-y-0.5 hover:bg-[#5B27D9]"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#product"
              className="rounded-2xl border border-[#E5E7EB] bg-white px-7 py-4 text-center text-sm font-bold text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#6D35F5] hover:text-[#6D35F5]"
            >
              {t.hero.cta2}
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

      {/* ── Product benefits ── */}
      <section id="product" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.product.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-6 h-11 w-11 rounded-2xl bg-[#EEE8FF]" />
                <h2 className="text-xl font-bold text-[#0F172A]">{card.title}</h2>
                <p className="mt-3 leading-7 text-[#64748B]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Modules ── */}
      <section id="modules" className="bg-[#F7F5FF]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              {t.modules.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#64748B]">{t.modules.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.modules.items.map((module) => (
              <article
                key={module.name}
                className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(109,53,245,0.12)]"
              >
                <div className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[module.badgeColor] ?? badgeStyles.gray}`}>
                  {module.badge}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">{module.name}</h3>
                <p className="mt-4 leading-7 text-[#64748B]">{module.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing / Beta ── */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid items-center gap-8 rounded-[2rem] border border-[#E5E7EB] bg-[#FAF8FF] p-7 shadow-[0_22px_60px_rgba(15,23,42,0.07)] md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF8A2A]">
                {t.pricing.badge}
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0F172A]">{t.pricing.title}</h2>
              <p className="mt-4 text-lg leading-8 text-[#64748B]">{t.pricing.description}</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href={contactUrl}
                className="w-full rounded-2xl bg-[#6D35F5] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9] sm:w-auto"
              >
                {t.pricing.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-[#FAF8FF]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#64748B]">
            {t.contact.description}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={appUrl}
              className="rounded-2xl bg-[#6D35F5] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              {t.contact.cta1}
            </a>
            <a
              href={contactUrl}
              className="rounded-2xl border border-[#E5E7EB] bg-white px-7 py-4 text-sm font-bold text-[#0F172A] shadow-sm transition hover:border-[#6D35F5] hover:text-[#6D35F5]"
            >
              {t.contact.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E5E7EB] bg-white px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#64748B] md:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-5">
            <a href={appUrl} className="transition hover:text-[#6D35F5]">App</a>
            <a href={`${appUrl}/login`} className="transition hover:text-[#6D35F5]">{t.header.login}</a>
            <a href={contactUrl} className="transition hover:text-[#6D35F5]">{t.header.nav.contact}</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
