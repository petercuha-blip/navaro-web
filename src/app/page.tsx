const modules = [
  {
    name: "OfferGen",
    description:
      "Tvorba obchodných ponúk, ich evidencia, detail a PDF export pre zákazníkov.",
    status: "Aktívny modul",
  },
  {
    name: "DocumentGen",
    description:
      "Generovanie dokumentov zo šablón, dát a formulárov pre opakované firemné procesy.",
    status: "Pripravujeme",
  },
  {
    name: "ClientFlow",
    description:
      "Automatizácia zákazníckych požiadaviek, interných schvaľovaní a notifikácií.",
    status: "Pripravujeme",
  },
];

const pricing = [
  {
    name: "Free",
    price: "0 €",
    description: "Na prvé testovanie automatizácií.",
    features: ["50 dokumentov mesačne", "1 aktívny modul", "Základný prístup"],
  },
  {
    name: "Starter",
    price: "19 €",
    description: "Pre malé firmy a živnostníkov.",
    features: ["1000 dokumentov mesačne", "OfferGen modul", "Zákaznícky portál"],
  },
  {
    name: "Pro",
    price: "49 €",
    description: "Pre firmy s vyšším objemom dokumentov.",
    features: ["5000 dokumentov mesačne", "Viac modulov", "Prioritná podpora"],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-lg font-bold">
            Navaro Automations
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#product" className="hover:text-white">
              Produkt
            </a>
            <a href="#modules" className="hover:text-white">
              Moduly
            </a>
            <a href="#pricing" className="hover:text-white">
              Cenník
            </a>
            <a href="#contact" className="hover:text-white">
              Kontakt
            </a>
          </nav>

          <a
            href="https://app.navaro.pro/login"
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Prihlásenie
          </a>
        </div>
      </header>

      <section className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          Navaro Automations · SaaS automatizácie pre firmy
        </div>

        <h1 className="max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
          Automatizujte ponuky, dokumenty a firemné procesy cez jednu platformu.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Modulárna SaaS platforma pre firmy, ktoré chcú rýchlejšie vytvárať
          dokumenty, spracovávať dáta a automatizovať opakujúce sa procesy bez
          zbytočnej technickej zložitosti.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://app.navaro.pro/login"
            className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Prihlásiť sa do aplikácie
          </a>

          <a
            href="mailto:info@navaro.pro"
            className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Požiadať o demo
          </a>
        </div>
      </section>

      <section id="product" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-24 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-slate-400">Produkt</p>
            <h2 className="mt-3 text-3xl font-bold">Jedna platforma, viac firemných modulov.</h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Pre zákazníkov</h3>
            <p className="mt-3 text-slate-300">
              Zákaznícky portál umožňuje vytvárať ponuky, sledovať využitie a
              pracovať s firemnými dokumentmi na jednom mieste.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-semibold">Pre administrátora</h3>
            <p className="mt-3 text-slate-300">
              Admin dashboard dáva prehľad o firmách, plánoch, používaní modulov
              a billing dátach.
            </p>
          </div>
        </div>
      </section>

      <section id="modules" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-slate-400">Moduly</p>
          <h2 className="mt-3 text-3xl font-bold">Začnite jedným modulom. Rozšírte podľa potreby.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {modules.map((module) => (
            <div key={module.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                {module.status}
              </div>
              <h3 className="text-xl font-semibold">{module.name}</h3>
              <p className="mt-3 text-slate-300">{module.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-slate-400">OfferGen</p>
            <h2 className="mt-3 text-3xl font-bold">Prvý produkčný modul je pripravený.</h2>
            <p className="mt-5 text-slate-300">
              OfferGen pomáha firmám vytvárať obchodné ponuky, uchovávať ich v
              zákazníckom portáli a exportovať ich do PDF.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <ul className="space-y-4 text-slate-300">
              <li>✅ Vytvorenie ponuky</li>
              <li>✅ Zoznam ponúk</li>
              <li>✅ Detail ponuky</li>
              <li>✅ PDF export</li>
              <li>✅ Usage limit podľa plánu</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-slate-400">Cenník</p>
          <h2 className="mt-3 text-3xl font-bold">Jednoduché plány podľa objemu používania.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold">{plan.price}</p>
              <p className="mt-3 text-slate-300">{plan.description}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✅ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="text-3xl font-bold">Chcete automatizovať firemné dokumenty?</h2>
          <p className="mt-4 text-slate-300">
            Začnite s OfferGen modulom alebo si dohodnite krátke demo.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://app.navaro.pro/login"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Otvoriť aplikáciu
            </a>

            <a
              href="mailto:info@navaro.pro"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Kontaktovať Navaro
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Navaro Automations. Všetky práva vyhradené.
      </footer>
    </main>
  );
}