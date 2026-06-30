const foundingPartnerBenefits = [
  "Bezplatný prístup počas beta verzie",
  "Priamy kontakt s vývojárom",
  "Možnosť ovplyvniť budúce funkcie",
  "Zvýhodnené podmienky po spustení",
  "Prístup k produktu ešte pred verejným uvedením",
]

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export default function OfferGenEarlyAccessPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8FF] text-[#0F172A]">
      <header className="border-b border-[#E5E7EB]/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-3 font-semibold text-[#0F172A]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6D35F5] text-sm font-black text-white">N</span>
            <span className="whitespace-nowrap">Navaro</span>
          </a>

          <a
            href="https://app.navaro.pro/dashboard"
            className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-bold text-[#0F172A] transition hover:border-[#6D35F5] hover:text-[#6D35F5]"
          >
            Prihlásenie
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#DDD4FF] bg-[#EEE8FF] px-4 py-2 text-sm font-semibold text-[#6D35F5]">
            OfferGen Early Access
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.04] tracking-normal text-[#0F172A] sm:text-6xl lg:text-7xl">
            Staňte sa Founding Partnerom Navaro
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[#334155] sm:text-xl">
            Pomôžte nám vytvoriť najlepší nástroj na tvorbu cenových ponúk.
          </p>

          <div className="mt-8">
            <a
              href="mailto:info@navaro.pro?subject=OfferGen%20Founding%20Partner"
              className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              Chcem sa zapojiť
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-2xl shadow-[#6D35F5]/10 sm:p-8">
          <div className="space-y-5 text-base font-medium leading-7 text-[#475569]">
            <p>
              Vyvíjame OfferGen, jednoduchý nástroj, ktorý pomáha firmám vytvárať profesionálne
              cenové ponuky za pár minút.
            </p>
            <p>
              Teraz hľadáme prvé firmy, ktoré chcú byť pri jeho vzniku.
            </p>
            <p>
              Vaša spätná väzba bude priamo ovplyvňovať ďalší vývoj produktu.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6D35F5]">Čo získate</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
              Skorý prístup a reálny vplyv na produkt.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {foundingPartnerBenefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-4 rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEE8FF] text-[#6D35F5]">
                  <CheckIcon />
                </span>
                <p className="text-base font-bold leading-7 text-[#0F172A]">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="mailto:info@navaro.pro?subject=OfferGen%20Founding%20Partner"
              className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              Chcem sa zapojiť
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
