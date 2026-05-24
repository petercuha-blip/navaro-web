export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
          Navaro Automations · SaaS automatizácie pre firmy
        </div>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Automatizujte ponuky, dokumenty a firemné procesy cez jednu platformu.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Navaro Automations je modulárna SaaS platforma pre firmy, ktoré chcú
          rýchlejšie vytvárať dokumenty, spracovávať dáta a automatizovať opakujúce
          sa procesy bez zbytočnej technickej zložitosti.
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
    </main>
  );
}