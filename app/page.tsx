const appUrl = "https://app.navaro.pro";
const loginUrl = "https://app.navaro.pro/login";
const contactUrl = "mailto:info@navaro.pro";

const benefits = [
  {
    title: "Rýchlejšia práca",
    description:
      "Vytvorte ponuku za pár minút namiesto zdĺhavej administratívy.",
  },
  {
    title: "Všetko na jednom mieste",
    description: "Ponuky, zákazníci a dokumenty máte prehľadne uložené.",
  },
  {
    title: "Profesionálny dojem",
    description: "Každá ponuka pôsobí jednotne, čisto a dôveryhodne.",
  },
  {
    title: "Viac úspešných zákaziek",
    description: "Menej ručnej práce znamená viac času na obchod.",
  },
];

const modules = [
  {
    name: "OfferGen",
    description: "Vytváranie a správa cenových ponúk a PDF dokumentov.",
  },
  {
    name: "Admin + App",
    description: "Klienti, dodávatelia a interné aplikácie na jednom mieste.",
  },
  {
    name: "Stripe",
    description: "Predplatné, fakturácia a platobné brány bez starostí.",
  },
];

const offerStats = [
  { label: "Zobrazené", value: "12", tone: "bg-[#EEE8FF] text-[#6D35F5]" },
  { label: "Spolu", value: "18", tone: "bg-[#FFF3E3] text-[#FF8A2A]" },
  { label: "Pripravené", value: "7", tone: "bg-[#ECFDF5] text-[#22C55E]" },
  { label: "Odoslané", value: "5", tone: "bg-[#F8FAFC] text-[#64748B]" },
];

const offers = [
  {
    name: "Web audit a návrh riešenia",
    customer: "Navaro klient",
    status: "Pripravená",
    price: "800 EUR",
    statusClass: "bg-[#ECFDF5] text-[#16A34A]",
  },
  {
    name: "Servisná konzultácia",
    customer: "Partner PL",
    status: "Schválená",
    price: "50 PLN",
    statusClass: "bg-[#EEE8FF] text-[#6D35F5]",
  },
  {
    name: "Implementácia OfferGen",
    customer: "Obchodný tím",
    status: "Pripravená",
    price: "800 EUR",
    statusClass: "bg-[#ECFDF5] text-[#16A34A]",
  },
];

function DashboardPreview() {
  return (
    <div className="w-full overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-3 shadow-[0_28px_80px_rgba(109,53,245,0.16)] sm:p-4">
      <div className="rounded-[1.5rem] bg-[#FAF8FF] p-4 sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6D35F5]">
              OfferGen
            </p>
            <h2 className="mt-1 text-xl font-bold text-[#0F172A]">Ponuky</h2>
          </div>
          <div className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#64748B] shadow-sm sm:block">
            app.navaro.pro
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {offerStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
            >
              <div
                className={`mb-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${stat.tone}`}
              >
                {stat.label}
              </div>
              <p className="text-2xl font-bold text-[#0F172A]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <div className="flex min-h-12 flex-1 items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm text-[#64748B] shadow-sm">
            <span className="h-4 w-4 rounded-full border-2 border-[#CBD5E1]" />
            Hľadať ponuku alebo zákazníka
          </div>
          <div className="flex min-h-12 items-center justify-between rounded-2xl border border-[#E5E7EB] bg-white px-4 text-sm font-semibold text-[#0F172A] shadow-sm sm:w-44">
            Status
            <span className="text-[#6D35F5]">Všetky</span>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {offers.map((offer) => (
            <div
              key={offer.name}
              className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-[#0F172A]">
                    {offer.name}
                  </p>
                  <p className="mt-1 text-xs text-[#64748B]">{offer.customer}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${offer.statusClass}`}
                  >
                    {offer.status}
                  </span>
                  <span className="rounded-full bg-[#FFF3E3] px-3 py-1 text-xs font-bold text-[#FF8A2A]">
                    {offer.price}
                  </span>
                  <a
                    href={loginUrl}
                    className="rounded-full border border-[#E5E7EB] px-3 py-1 text-xs font-semibold text-[#0F172A] transition hover:border-[#6D35F5] hover:text-[#6D35F5]"
                  >
                    Detail
                  </a>
                  <a
                    href={loginUrl}
                    className="rounded-full bg-[#6D35F5] px-3 py-1 text-xs font-semibold text-white transition hover:bg-[#5B27D9]"
                  >
                    Poslať
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8FF] text-[#0F172A]">
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FAF8FF]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#6D35F5] text-sm font-black text-white shadow-lg shadow-[#6D35F5]/20">
              N
            </span>
            <span className="text-sm font-bold tracking-tight sm:text-base">
              Navaro Automations
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[#64748B] lg:flex">
            <a href="#product" className="transition hover:text-[#6D35F5]">
              Produkt
            </a>
            <a href="#modules" className="transition hover:text-[#6D35F5]">
              Moduly
            </a>
            <a href="#pricing" className="transition hover:text-[#6D35F5]">
              Cenník
            </a>
            <a href="#contact" className="transition hover:text-[#6D35F5]">
              Kontakt
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-white px-3 py-2 text-xs font-bold text-[#64748B] shadow-sm sm:inline-flex">
              SK
            </span>
            <a
              href={loginUrl}
              className="rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-bold text-[#0F172A] shadow-sm transition hover:border-[#6D35F5] hover:text-[#6D35F5]"
            >
              Prihlásenie
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:pb-28 lg:pt-20">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-semibold text-[#6D35F5] shadow-sm">
            Modulárna SaaS platforma pre firemné automatizácie
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-[#0F172A] sm:text-6xl lg:text-7xl">
            Menej administratívy.
            <span className="block text-[#6D35F5]">Viac obchodu.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#64748B]">
            Vytvárajte profesionálne cenové ponuky za pár minút a majte
            všetko na jednom mieste.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={appUrl}
              className="rounded-2xl bg-[#6D35F5] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:-translate-y-0.5 hover:bg-[#5B27D9]"
            >
              Otvoriť aplikáciu
            </a>
            <a
              href={contactUrl}
              className="rounded-2xl border border-[#E5E7EB] bg-white px-7 py-4 text-center text-sm font-bold text-[#0F172A] shadow-sm transition hover:-translate-y-0.5 hover:border-[#6D35F5] hover:text-[#6D35F5]"
            >
              Požiadať o demo
            </a>
          </div>
        </div>

        <div className="min-w-0">
          <DashboardPreview />
        </div>
      </section>

      <section id="product" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="mb-6 h-11 w-11 rounded-2xl bg-[#EEE8FF]" />
                <h2 className="text-xl font-bold text-[#0F172A]">
                  {benefit.title}
                </h2>
                <p className="mt-3 leading-7 text-[#64748B]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="modules" className="bg-[#F7F5FF]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              Vyberte si moduly, ktoré vaša firma skutočne potrebuje.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#64748B]">
              Navaro Automations sa prispôsobí vášmu biznisu. Platíte len za
              to, čo používate.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {modules.map((module) => (
              <article
                key={module.name}
                className="rounded-[1.75rem] border border-[#E5E7EB] bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(109,53,245,0.12)]"
              >
                <div className="mb-7 inline-flex rounded-full bg-[#EEE8FF] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#6D35F5]">
                  {module.name}
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">
                  {module.name}
                </h3>
                <p className="mt-4 leading-7 text-[#64748B]">
                  {module.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:py-24">
          <div className="grid items-center gap-8 rounded-[2rem] border border-[#E5E7EB] bg-[#FAF8FF] p-7 shadow-[0_22px_60px_rgba(15,23,42,0.07)] md:grid-cols-[1.2fr_0.8fr] md:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF8A2A]">
                Pilotné testovanie
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#0F172A]">
                Hľadáme 10 firiem na pilotné testovanie!
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#64748B]">
                Získajte 1-2 mesiace zdarma výmenou za váš feedback.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href={contactUrl}
                className="w-full rounded-2xl bg-[#6D35F5] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9] sm:w-auto"
              >
                Chcem sa zapojiť
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#FAF8FF]">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-6 lg:py-24">
          <h2 className="text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
            Začnite ponukami, ktoré vyzerajú profesionálne a sú pod kontrolou.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#64748B]">
            Dohodnite si demo alebo otvorte aplikáciu a pozrite si OfferGen v
            praxi.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={appUrl}
              className="rounded-2xl bg-[#6D35F5] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              Otvoriť aplikáciu
            </a>
            <a
              href={contactUrl}
              className="rounded-2xl border border-[#E5E7EB] bg-white px-7 py-4 text-sm font-bold text-[#0F172A] shadow-sm transition hover:border-[#6D35F5] hover:text-[#6D35F5]"
            >
              Kontakt
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E7EB] bg-white px-5 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#64748B] md:flex-row">
          <p>© 2026 Navaro Automations. Všetky práva vyhradené.</p>
          <div className="flex gap-5">
            <a href={appUrl} className="transition hover:text-[#6D35F5]">
              App
            </a>
            <a href={loginUrl} className="transition hover:text-[#6D35F5]">
              Prihlásenie
            </a>
            <a href={contactUrl} className="transition hover:text-[#6D35F5]">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
