const modules = [
  {
    name: "OfferGen",
    description:
      "Tvorba obchodných ponúk, evidencia, detail ponuky a PDF export pre zákazníkov.",
    status: "Aktívny modul",
    icon: "OF",
  },
  {
    name: "DocumentGen",
    description:
      "Generovanie dokumentov zo šablón, formulárov a firemných dát.",
    status: "Pripravujeme",
    icon: "DG",
  },
  {
    name: "ClientFlow",
    description:
      "Automatizácia zákazníckych požiadaviek, schvaľovaní a interných notifikácií.",
    status: "Pripravujeme",
    icon: "CF",
  },
];

const pricing = [
  {
    name: "Free",
    price: "0 €",
    description: "Na prvé testovanie automatizácií.",
    features: ["50 dokumentov mesačne", "1 aktívny modul", "Základný prístup"],
    highlighted: false,
  },
  {
    name: "Starter",
    price: "19 €",
    description: "Pre malé firmy a živnostníkov.",
    features: [
      "1000 dokumentov mesačne",
      "OfferGen modul",
      "Zákaznícky portál",
      "PDF export",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "49 €",
    description: "Pre firmy s vyšším objemom dokumentov.",
    features: [
      "5000 dokumentov mesačne",
      "Viac modulov",
      "Prioritná podpora",
      "Billing a usage prehľad",
    ],
    highlighted: false,
  },
];

const stats = [
  { label: "Produkčný modul", value: "OfferGen" },
  { label: "Portály", value: "Admin + App" },
  { label: "Billing", value: "Stripe" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070A12] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-48 h-[400px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[500px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070A12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950">
              N
            </div>
            <span className="text-base font-semibold tracking-tight">
              Navaro Automations
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#product" className="transition hover:text-white">
              Produkt
            </a>
            <a href="#modules" className="transition hover:text-white">
              Moduly
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Cenník
            </a>
            <a href="#contact" className="transition hover:text-white">
              Kontakt
            </a>
          </nav>

          <a
            href="https://app.navaro.pro/login"
            className="rounded-xl border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-200"
          >
            Prihlásenie
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            Modulárna SaaS platforma pre firemné automatizácie
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Menej ručnej práce.
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
              Viac hotových dokumentov.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Navaro Automations pomáha firmám vytvárať ponuky, dokumenty a
            automatizované workflowy cez jednoduchý zákaznícky portál.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="https://app.navaro.pro/login"
              className="rounded-2xl bg-white px-7 py-4 text-center text-sm font-bold text-slate-950 shadow-2xl shadow-cyan-500/10 transition hover:-translate-y-0.5 hover:bg-slate-200"
            >
              Otvoriť aplikáciu
            </a>

            <a
              href="mailto:info@navaro.pro"
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Požiadať o demo
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="text-lg font-bold">{item.value}</div>
                <div className="mt-1 text-xs text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-slate-400">
                app.navaro.pro/dashboard
              </span>
            </div>

            <div className="p-6">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">Firma</p>
                    <h3 className="mt-1 text-2xl font-bold">Beta Firma</h3>
                  </div>
                  <div className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    Pro plán
                  </div>
                </div>

                <div className="mt-6">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-slate-400">Mesačné využitie</span>
                    <span className="font-semibold">427 / 5000</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[34%] rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" />
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Aktívny modul</p>
                  <h4 className="mt-2 text-xl font-bold">OfferGen</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    Create / List / Detail / PDF
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <p className="text-sm text-slate-400">Posledná ponuka</p>
                  <h4 className="mt-2 text-xl font-bold">Website redesign</h4>
                  <p className="mt-2 text-sm text-slate-400">
                    PDF pripravené na otvorenie
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="font-bold">Ponuky</h4>
                  <button className="rounded-xl bg-white px-4 py-2 text-xs font-bold text-slate-950">
                    Nová ponuka
                  </button>
                </div>

                <div className="space-y-3 text-sm">
                  {["Web audit", "CRM automatizácia", "Mesačná správa"].map(
                    (offer) => (
                      <div
                        key={offer}
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3"
                      >
                        <span>{offer}</span>
                        <span className="text-cyan-200">PDF</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Produkt
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Jedna platforma pre viac firemných procesov.
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 font-bold text-cyan-200">
              APP
            </div>
            <h3 className="text-xl font-bold">Zákaznícky portál</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Klient vidí firmu, plán, usage, vytvára ponuky a otvára PDF
              dokumenty priamo v aplikácii.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-400/10 font-bold text-violet-200">
              ADM
            </div>
            <h3 className="text-xl font-bold">Admin dashboard</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Admin má prehľad o firmách, billing dátach, moduloch, usage a
              Stripe stave.
            </p>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Moduly
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Začnite jedným modulom. Platforma môže rásť s firmou.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Každý tenant môže mať zapnuté vlastné moduly, vlastný plán a vlastné
            limity používania.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.name}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950">
                  {module.icon}
                </div>
                <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {module.status}
                </div>
              </div>

              <h3 className="text-2xl font-bold">{module.name}</h3>
              <p className="mt-4 leading-7 text-slate-300">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              OfferGen
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Prvý produkčný modul je pripravený.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              OfferGen pomáha firmám vytvárať obchodné ponuky, ukladať ich v
              zákazníckom portáli a exportovať ich do PDF.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Vytvorenie ponuky",
              "Zoznam ponúk",
              "Inline detail",
              "PDF export",
              "Usage tracking",
              "Tenant access",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/70 p-5"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-200">
                  ✓
                </div>
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Cenník
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight">
            Jednoduché plány podľa objemu používania.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Začnite zdarma, potom prejdite na plán podľa počtu dokumentov a
            používaných modulov.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-7 ${
                plan.highlighted
                  ? "border-cyan-300/40 bg-gradient-to-b from-cyan-400/10 to-white/[0.04] shadow-2xl shadow-cyan-500/10"
                  : "border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-7 rounded-full bg-cyan-200 px-4 py-1 text-xs font-black text-slate-950">
                  Najvhodnejší štart
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-4 text-5xl font-black">{plan.price}</p>
              <p className="mt-4 min-h-12 leading-7 text-slate-300">
                {plan.description}
              </p>

              <ul className="mt-7 space-y-4 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-cyan-200">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.navaro.pro/login"
                className={`mt-8 block rounded-2xl px-5 py-4 text-center text-sm font-bold transition ${
                  plan.highlighted
                    ? "bg-white text-slate-950 hover:bg-slate-200"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                Začať
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-10 shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Kontakt
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Chcete automatizovať ponuky alebo dokumenty?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Začnite s OfferGen modulom alebo si dohodnite krátke demo, kde si
              prejdeme vhodný modul pre vašu firmu.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://app.navaro.pro/login"
                className="rounded-2xl bg-white px-7 py-4 text-sm font-bold text-slate-950 transition hover:bg-slate-200"
              >
                Otvoriť aplikáciu
              </a>

              <a
                href="mailto:info@navaro.pro"
                className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Kontaktovať Navaro
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
          <p>© 2026 Navaro Automations. Všetky práva vyhradené.</p>
          <div className="flex gap-5">
            <a href="https://admin.navaro.pro/dashboard" className="hover:text-white">
              Admin
            </a>
            <a href="https://app.navaro.pro/login" className="hover:text-white">
              App
            </a>
            <a href="mailto:info@navaro.pro" className="hover:text-white">
              Kontakt
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}