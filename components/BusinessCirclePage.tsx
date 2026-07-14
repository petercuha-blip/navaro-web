import Link from "next/link";
import BusinessCircleAnalytics from "@/components/BusinessCircleAnalytics";
import {
  BUSINESS_CIRCLE_CAPACITY,
  BUSINESS_CIRCLE_EVENT,
  BUSINESS_CIRCLE_NEXT_EDITION_URL,
  BUSINESS_CIRCLE_REGISTRATION_URL,
  BUSINESS_CIRCLE_STATUS,
} from "@/lib/businessCircle";

const valueBullets = [
  "nové pohľady na proces tvorby cenových ponúk",
  "skúsenosti ďalších podnikateľov a manažérov",
  "praktické nápady, čo sa dá robiť jednoduchšie",
  "možnosť stretnúť nové business kontakty",
  "priestor stručne predstaviť svoju firmu",
  "možnosť povedať, akého partnera, dodávateľa alebo kontakt hľadáte",
];

const expectedItems = [
  "otvorená a moderovaná diskusia",
  "malá skupina",
  "praktické skúsenosti",
  "priestor pre každého účastníka",
  "krátky Business Exchange na záver",
  "krátky vstup Navaro",
];

const notExpectedItems = [
  "dlhý webinár",
  "agresívny predaj",
  "45-minútová produktová prezentácia",
  "anonymné publikum bez možnosti zapojiť sa",
];

const agenda = [
  {
    time: "08:00–08:05",
    title: "Privítanie a krátke predstavenie",
    text: null as string | null,
  },
  {
    time: "08:05–08:30",
    title: "Moderovaná diskusia",
    text: "Ako dnes firmy vytvárajú cenové ponuky, kde vzniká zbytočná práca a čo ich najviac spomaľuje.",
  },
  {
    time: "08:30–08:37",
    title: "Možné prístupy a krátky vstup Navaro",
    text: "Ako možno mať proces cenových ponúk lepšie pod kontrolou.",
  },
  {
    time: "08:37–08:45",
    title: "Business Exchange",
    text: "Krátky priestor predstaviť svoju firmu, povedať, čomu sa venujete alebo aký kontakt či spoluprácu hľadáte.",
  },
];

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function DotIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function EventDetailChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-sm font-bold text-[#0F172A] shadow-sm">
      <span className="text-[#6D35F5]">{icon}</span>
      {text}
    </div>
  );
}

function RegistrationCta() {
  const hasUrl = BUSINESS_CIRCLE_REGISTRATION_URL.length > 0;
  const hasNextEditionUrl = BUSINESS_CIRCLE_NEXT_EDITION_URL.length > 0;

  if (BUSINESS_CIRCLE_STATUS === "completed") {
    return (
      <div>
        <p className="text-lg font-black text-[#0F172A]">Prvé stretnutie už prebehlo</p>
        <p className="mt-2 max-w-xl text-base font-medium leading-7 text-[#475569]">
          Chcete vedieť o ďalšom termíne Navaro Business Circle? Nechajte nám na seba kontakt.
        </p>
        <div className="mt-6">
          {hasNextEditionUrl ? (
            <a
              href={BUSINESS_CIRCLE_NEXT_EDITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="business_circle_registration_click"
              className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              Chcem vedieť o ďalšom termíne
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F1F5F9] px-6 py-3 text-sm font-bold text-[#94A3B8]"
            >
              Formulár sa pripravuje
            </button>
          )}
        </div>
      </div>
    );
  }

  if (BUSINESS_CIRCLE_STATUS === "full") {
    return (
      <div>
        <p className="text-lg font-black text-[#0F172A]">Kapacita prvého termínu je naplnená</p>
        <p className="mt-2 max-w-xl text-base font-medium leading-7 text-[#475569]">
          Môžete sa prihlásiť na čakaciu listinu. Ak bude záujem väčší, otvoríme ďalší termín.
        </p>
        <div className="mt-6">
          {hasUrl ? (
            <a
              href={BUSINESS_CIRCLE_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="business_circle_registration_click"
              className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
            >
              Prihlásiť sa na čakaciu listinu
            </a>
          ) : (
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F1F5F9] px-6 py-3 text-sm font-bold text-[#94A3B8]"
            >
              Formulár sa pripravuje
            </button>
          )}
        </div>
        <p className="mt-4 text-sm font-medium text-[#64748B]">
          Po registrácii vám pošleme potvrdenie a kalendárovú pozvánku s Google Meet odkazom.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="max-w-xl text-base font-medium leading-7 text-[#475569]">
        Aby mal každý priestor zapojiť sa do diskusie, počet účastníkov je obmedzený na {BUSINESS_CIRCLE_CAPACITY}.
      </p>
      <div className="mt-6">
        {hasUrl ? (
          <a
            href={BUSINESS_CIRCLE_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-analytics-event="business_circle_registration_click"
            className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
          >
            Otvoriť registráciu
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#E5E7EB] bg-[#F1F5F9] px-6 py-3 text-sm font-bold text-[#94A3B8]"
          >
            Registrácia sa pripravuje
          </button>
        )}
      </div>
      <p className="mt-4 text-sm font-medium text-[#64748B]">
        Po registrácii vám pošleme potvrdenie a kalendárovú pozvánku s Google Meet odkazom.
      </p>
    </div>
  );
}

export default function BusinessCirclePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#FAF8FF] text-[#0F172A]">
      <BusinessCircleAnalytics />
      <header className="border-b border-[#E5E7EB]/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3 font-semibold text-[#0F172A]">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#6D35F5] text-sm font-black text-white">N</span>
            <span className="whitespace-nowrap">Navaro</span>
          </Link>
          <Link href="/" className="text-sm font-bold text-[#64748B] transition hover:text-[#6D35F5]">
            navaro.pro
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-5 py-14 text-center sm:px-8 sm:py-20">
        <div className="mx-auto mb-6 inline-flex rounded-full border border-[#DDD4FF] bg-[#EEE8FF] px-4 py-2 text-sm font-semibold text-[#6D35F5]">
          {BUSINESS_CIRCLE_EVENT.name}
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-black leading-[1.08] tracking-normal text-[#0F172A] sm:text-5xl lg:text-6xl">
          {BUSINESS_CIRCLE_EVENT.topic}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-[#334155] sm:text-xl">
          Malá online diskusia podnikateľov a manažérov o tom, kde firmy strácajú čas pri tvorbe
          cenových ponúk a čo by sa dalo robiť jednoduchšie.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <EventDetailChip icon={<CalendarIcon />} text={BUSINESS_CIRCLE_EVENT.dateLabel} />
          <EventDetailChip icon={<ClockIcon />} text={BUSINESS_CIRCLE_EVENT.timeLabel} />
          <EventDetailChip icon={<PinIcon />} text={BUSINESS_CIRCLE_EVENT.location} />
          <EventDetailChip icon={<UsersIcon />} text={`Maximálne ${BUSINESS_CIRCLE_CAPACITY} účastníkov`} />
        </div>

        <div className="mt-10">
          <a
            href="#registracia"
            className="inline-flex items-center justify-center rounded-full bg-[#6D35F5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#6D35F5]/20 transition hover:bg-[#5B27D9]"
          >
            Rezervovať si miesto
          </a>
          <p className="mt-4 text-sm font-medium text-[#64748B]">
            Účasť je bezplatná. Registrácia je potrebná.
          </p>
        </div>
      </section>

      {/* What this meeting is */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
            Čo je Navaro Business Circle?
          </h2>
          <div className="mt-6 space-y-5 text-lg font-medium leading-8 text-[#475569]">
            <p>
              Navaro Business Circle je nový formát malých business stretnutí, na ktorých sa
              podnikatelia a manažéri otvorene rozprávajú o konkrétnych problémoch z každodennej
              praxe.
            </p>
            <p>
              Nechceme vytvárať business softvér na základe domnienok. Najprv chceme počúvať ľudí,
              pochopiť ich procesy a až potom navrhovať riešenia.
            </p>
            <p>
              Prvé stretnutie otvoríme témou cenových ponúk – ich tvorbou, úpravami, hľadaním
              starších verzií, odosielaním a kontrolou celého procesu.
            </p>
          </div>
        </div>
      </section>

      {/* Participant value */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
            Čo si zo stretnutia môžete odniesť
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {valueBullets.map((benefit) => (
            <div key={benefit} className="flex items-start gap-4 rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#EEE8FF] text-[#6D35F5]">
                <CheckIcon />
              </span>
              <p className="text-base font-bold leading-7 text-[#0F172A]">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What it is not */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
              Čo môžete očakávať
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-[#DDD4FF] bg-[#F5F3FF] p-6 sm:p-8">
              <h3 className="text-lg font-black text-[#0F172A]">Áno</h3>
              <ul className="mt-5 space-y-4">
                {expectedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6D35F5] text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-base font-medium leading-7 text-[#334155]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 sm:p-8">
              <h3 className="text-lg font-black text-[#0F172A]">Nie</h3>
              <ul className="mt-5 space-y-4">
                {notExpectedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E2E8F0] text-[#64748B]">
                      <DotIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-base font-medium leading-7 text-[#64748B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
          Program stretnutia
        </h2>

        <ol className="mt-10 space-y-4">
          {agenda.map((item) => (
            <li key={item.time} className="rounded-xl border border-[#E5E7EB] bg-white p-5 shadow-sm sm:p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="shrink-0 text-sm font-black text-[#6D35F5]">{item.time}</span>
                <span className="text-base font-black text-[#0F172A]">{item.title}</span>
              </div>
              {item.text ? (
                <p className="mt-2 text-base font-medium leading-7 text-[#64748B] sm:pl-[4.75rem]">{item.text}</p>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-6 text-sm font-medium italic text-[#64748B]">
          Po 08:45 môže neformálna diskusia dobrovoľne pokračovať ešte niekoľko minút.
        </p>
      </section>

      {/* About Navaro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-black uppercase tracking-[0.14em] text-[#6D35F5]">O organizátorovi</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
            Prečo toto stretnutie organizuje Navaro
          </h2>
          <div className="mt-6 space-y-5 text-lg font-medium leading-8 text-[#475569]">
            <p>
              Navaro vytvára softvér, ktorému môžu firmy dôverovať a ktorý preberá rutinnú prácu,
              aby sa ľudia mohli sústrediť na to, čo robia najlepšie.
            </p>
            <p>
              Naše produkty nechceme stavať za zatvorenými dverami. Chceme ich vytvárať na základe
              skutočných problémov, skúseností a spätnej väzby ľudí z praxe.
            </p>
          </div>

          <blockquote className="mt-8 rounded-xl border-l-4 border-[#6D35F5] bg-[#F5F3FF] p-6 text-lg font-bold italic leading-8 text-[#0F172A] sm:p-8">
            &ldquo;Navaro is software you can trust that takes care of your routine work, so you
            can focus on what you do best.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Registration */}
      <section id="registracia" className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="rounded-2xl border border-[#DDD4FF] bg-[#F5F3FF] p-6 sm:p-10">
          <h2 className="text-3xl font-black leading-tight text-[#0F172A] sm:text-4xl">
            Rezervujte si miesto
          </h2>
          <div className="mt-6">
            <RegistrationCta />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#E5E7EB] bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm font-medium text-[#94A3B8] sm:flex-row sm:px-8">
          <span>© 2026 Navaro</span>
          <div className="flex items-center gap-5">
            <a href="https://app.navaro.pro/legal/privacy-notice" className="transition hover:text-[#6D35F5]">
              Ochrana osobných údajov
            </a>
            <a href="https://app.navaro.pro/legal/beta-terms" className="transition hover:text-[#6D35F5]">
              Podmienky
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
