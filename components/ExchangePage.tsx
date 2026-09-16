import ExchangeAnalytics from "@/components/ExchangeAnalytics";

export const PARTNER_EMAIL = "partners@navaro.pro";
const PARTNER_MAILTO = `mailto:${PARTNER_EMAIL}`;

type IconName =
  | "limit"
  | "small"
  | "capacity"
  | "revenue"
  | "users"
  | "conversion"
  | "insight"
  | "check"
  | "arrow";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const common = {
    className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "limit") return <svg {...common}><path d="M12 8v4l2.5 1.5" /><circle cx="12" cy="12" r="8.5" /><path d="M6 3.8 3.8 6M18 3.8 20.2 6" /></svg>;
  if (name === "small") return <svg {...common}><path d="M4 7h16M7 4v6M17 4v6" /><rect x="4" y="5" width="16" height="15" rx="3" /><path d="M8 14h3M13 14h3" /></svg>;
  if (name === "capacity") return <svg {...common}><path d="M4 15.5 9 10l3 3 6-7" /><path d="M14 6h4v4" /><path d="M4 20h16" /></svg>;
  if (name === "revenue") return <svg {...common}><path d="M12 2v20M17 6.5c0-1.4-2.2-2.5-5-2.5S7 5.1 7 6.5 9.2 9 12 9s5 1.1 5 2.5S14.8 14 12 14s-5 1.1-5 2.5S9.2 19 12 19s5-1.1 5-2.5" /></svg>;
  if (name === "users") return <svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v2" /><path d="M16 5.2a3 3 0 0 1 0 5.6M17 13.4A5 5 0 0 1 21 18v2" /></svg>;
  if (name === "conversion") return <svg {...common}><path d="M7 7h11l-3-3M18 7l-3 3M17 17H6l3 3M6 17l3-3" /></svg>;
  if (name === "insight") return <svg {...common}><path d="M5 20v-6M12 20V9M19 20V4" /><path d="m4 9 6-5 4 3 6-5" /></svg>;
  if (name === "check") return <svg {...common}><path d="m5 12 4 4L19 6" /></svg>;
  return <svg {...common}><path d="M5 12h14M14 7l5 5-5 5" /></svg>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.78rem] font-black uppercase tracking-[0.2em] text-[#6D35F5]">
      {children}
    </p>
  );
}

function SectionHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mt-3 max-w-3xl text-3xl font-black leading-[1.12] tracking-[-0.035em] text-[#0F172A] sm:text-4xl lg:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

const problemCards = [
  { icon: "limit" as const, title: "Hit the limit", text: "A user is in the middle of productive work but reaches a weekly, monthly or credit limit." },
  { icon: "small" as const, title: "Need only a little more", text: "They do not want another €30–€100 subscription. They may need only a few euros of additional usage." },
  { icon: "capacity" as const, title: "Capacity exists elsewhere", text: "Providers already operate credit systems, PAYG APIs, top-ups and promotional capacity." },
];

const providerBenefits = [
  { icon: "revenue" as const, title: "Incremental revenue", text: "Monetize usage that may otherwise never be purchased." },
  { icon: "users" as const, title: "New-user acquisition", text: "Let users experience your product with a low-friction micro-purchase before committing." },
  { icon: "conversion" as const, title: "Conversion opportunity", text: "Move marketplace buyers into direct subscriptions and larger usage plans." },
  { icon: "insight" as const, title: "Demand intelligence", text: "Learn what users buy, when they buy it and which transaction sizes convert." },
];

const pilotSteps = [
  { number: "01", title: "User needs capacity", text: "“I need another €5 of AI right now.”" },
  { number: "02", title: "Exchange finds capacity", text: "Provider-authorized API or commercial inventory." },
  { number: "03", title: "User buys a small amount", text: "€2 / €5 / €10 / €20" },
  { number: "04", title: "Provider provisions usage", text: "Capacity is activated through an authorized integration." },
  { number: "05", title: "Work continues", text: "No waiting for the billing reset." },
];

export default function ExchangePage() {
  const year = new Date().getFullYear();

  return (
    <main lang="en" className="exchange-page min-h-screen overflow-x-hidden bg-[#FAF8FF] text-[#0F172A]">
      <ExchangeAnalytics />

      <header className="sticky top-0 z-50 border-b border-[#DDD4FF]/70 bg-[#FAF8FF]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-5 py-4 sm:px-7">
          <a href="https://navaro.pro" className="group flex min-w-0 items-center gap-3" aria-label="NAVARO homepage">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6D35F5] text-sm font-black text-white shadow-[0_8px_22px_rgba(109,53,245,0.24)] transition group-hover:-rotate-3">N</span>
            <span className="min-w-0">
              <span className="block text-sm font-black tracking-[0.08em]">NAVARO</span>
              <span className="block truncate text-xs font-medium text-[#64748B]">AI Capacity Exchange</span>
            </span>
          </a>
          <a href={PARTNER_MAILTO} data-analytics-event="exchange_pilot_cta_click" className="rounded-full bg-[#6D35F5] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_22px_rgba(109,53,245,0.22)] transition hover:-translate-y-0.5 hover:bg-[#5B27D9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6D35F5]">
            Discuss a pilot
          </a>
        </div>
      </header>

      <section className="relative">
        <div className="exchange-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1180px] items-center gap-12 px-5 pb-20 pt-14 sm:px-7 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#DDD4FF] bg-white/80 px-3.5 py-2 text-xs font-black tracking-[0.12em] text-[#6D35F5] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#6D35F5] shadow-[0_0_0_4px_rgba(109,53,245,0.12)]" />
              NAVARO EXPERIMENTAL INITIATIVE
            </div>
            <h1 className="max-w-3xl text-[2.75rem] font-black leading-[0.99] tracking-[-0.055em] text-[#0F172A] sm:text-6xl lg:text-[4.4rem]">
              Buy only the AI capacity you need, <span className="text-[#6D35F5]">exactly when you need it.</span>
            </h1>
            <div className="mt-7 max-w-xl space-y-3 text-base leading-7 text-[#475569] sm:text-lg sm:leading-8">
              <p>AI users often hit a usage limit in the middle of productive work.</p>
              <p>They may not need another subscription. They may simply need €3–€10 of additional capacity to finish.</p>
              <p className="font-bold text-[#0F172A]">AI Capacity Exchange explores a provider-authorized way to make that possible.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={PARTNER_MAILTO} data-analytics-event="exchange_pilot_cta_click" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6D35F5] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_32px_rgba(109,53,245,0.26)] transition hover:-translate-y-0.5 hover:bg-[#5B27D9]">
                Explore a pilot <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a href="#how-it-works" data-analytics-event="exchange_how_it_works_click" className="inline-flex items-center justify-center rounded-full border border-[#DDD4FF] bg-white px-6 py-3.5 text-sm font-bold text-[#334155] shadow-sm transition hover:border-[#6D35F5] hover:text-[#6D35F5]">
                See how it works
              </a>
            </div>
            <p className="mt-5 flex items-start gap-2 text-sm font-semibold leading-6 text-[#64748B]">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#6D35F5]" /> Provider-authorized capacity. No account resale. No password sharing.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[510px] lg:mr-0">
            <div className="absolute -inset-7 -z-10 rounded-[3rem] bg-[#6D35F5]/8 blur-2xl" />
            <div className="exchange-float overflow-hidden rounded-[2rem] border border-[#DDD4FF] bg-white shadow-[0_30px_80px_rgba(38,18,88,0.16)]">
              <div className="flex items-center justify-between border-b border-[#EEE8FF] px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#6D35F5]" />
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#64748B]">Capacity request</span>
                </div>
                <span className="rounded-full bg-[#F1F5F9] px-3 py-1 text-xs font-bold text-[#475569]">AI Video</span>
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-sm font-bold text-[#6D35F5]">Need more AI right now?</p>
                <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Your included capacity is exhausted.</h2>
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#F8FAFC] px-4 py-3">
                  <span className="text-sm font-medium text-[#64748B]">Resets in</span>
                  <span className="font-mono text-sm font-black text-[#0F172A]">18h 42m</span>
                </div>
                <p className="mb-3 mt-6 text-xs font-black uppercase tracking-[0.14em] text-[#64748B]">Continue now</p>
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between rounded-2xl border border-[#E5E7EB] px-4 py-3.5 text-sm"><span className="font-bold">100 credits</span><span className="font-black">€2.90</span></div>
                  <div className="relative flex items-center justify-between rounded-2xl border-2 border-[#6D35F5] bg-[#EEE8FF]/70 px-4 py-3.5 text-sm shadow-[0_8px_20px_rgba(109,53,245,0.1)]"><span className="font-bold">250 credits</span><span className="font-black text-[#6D35F5]">€5.90</span><span className="absolute -top-2.5 right-4 rounded-full bg-[#6D35F5] px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-wider text-white">Most useful</span></div>
                  <div className="flex items-center justify-between rounded-2xl border border-[#E5E7EB] px-4 py-3.5 text-sm"><span className="font-bold">500 credits</span><span className="font-black">€10.40</span></div>
                </div>
                <button type="button" className="mt-5 w-full rounded-2xl bg-[#6D35F5] px-5 py-4 text-sm font-black text-white shadow-[0_12px_24px_rgba(109,53,245,0.23)]">Buy 250 credits — €5.90</button>
                <p className="mt-4 text-center text-xs font-semibold text-[#64748B]">No new subscription required</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEE8FF] text-[#6D35F5]"><Icon name="check" className="h-4 w-4" /></span>
              <span className="text-xs"><strong className="block text-[#0F172A]">Authorized supply</strong><span className="text-[#64748B]">Provisioned by the provider</span></span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <Eyebrow>The gap</Eyebrow>
          <SectionHeading>AI usage does not follow billing cycles.</SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <article key={card.title} className="group rounded-[1.6rem] border border-[#E5E7EB] bg-[#FAF8FF] p-7 transition hover:-translate-y-1 hover:border-[#DDD4FF] hover:shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDD4FF] bg-white text-[#6D35F5]"><Icon name={card.icon} /></span>
                <h3 className="mt-6 text-xl font-black">{card.title}</h3>
                <p className="mt-3 leading-7 text-[#475569]">{card.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-2xl border-l-4 border-[#6D35F5] bg-[#EEE8FF]/60 px-6 py-5 text-lg font-bold leading-8 text-[#334155]">The missing layer is a simple way to connect immediate demand with provider-authorized supply.</p>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 bg-[#0F172A] text-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <Eyebrow>The pilot</Eyebrow>
          <SectionHeading className="!text-white">Start with distribution, not resale.</SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#CBD5E1]">The first version does not require peer-to-peer credit transfers. A participating provider supplies API, promotional or wholesale capacity. The Exchange distributes it in small units when users need more.</p>
          <div className="relative mt-12 grid gap-3 lg:grid-cols-5">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-[#6D35F5] via-[#A78BFA] to-[#6D35F5] lg:block" aria-hidden="true" />
            {pilotSteps.map((step, index) => (
              <article key={step.number} className="relative rounded-2xl border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
                <div className="relative z-10 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8B5CF6] bg-[#171B31] font-mono text-sm font-black text-[#C4B5FD]">{step.number}</span>
                  {index < pilotSteps.length - 1 && <Icon name="arrow" className="h-5 w-5 text-[#8B5CF6] lg:hidden" />}
                </div>
                <h3 className="mt-5 font-black">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#CBD5E1]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <Eyebrow>The experience</Eyebrow>
          <SectionHeading>From limit to continue in a few clicks.</SectionHeading>
          <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
            <article className="rounded-[1.6rem] border border-[#E5E7EB] bg-[#FAF8FF] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#94A3B8]">01 · Choose</span>
              <h3 className="mt-5 text-2xl font-black">Need more AI?</h3>
              <p className="mt-2 text-sm text-[#64748B]">What do you need?</p>
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                {["Coding", "Video", "Images", "Voice", "Music"].map((item, index) => <div key={item} className={`rounded-xl border px-3 py-3 text-sm font-bold ${index === 1 ? "border-[#6D35F5] bg-[#EEE8FF] text-[#6D35F5]" : "border-[#E5E7EB] bg-white text-[#475569]"}`}>{item}</div>)}
              </div>
              <div className="mt-5 rounded-xl bg-[#0F172A] py-3.5 text-center text-sm font-black text-white">Continue</div>
            </article>
            <article className="rounded-[1.6rem] border-2 border-[#6D35F5] bg-white p-6 shadow-[0_24px_55px_rgba(109,53,245,0.14)] lg:-mt-4">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#6D35F5]">02 · Purchase</span>
              <h3 className="mt-5 text-2xl font-black">AI Video capacity</h3>
              <div className="mt-5 space-y-2">
                {[["100 credits", "€2.90"], ["250 credits", "€5.90"], ["500 credits", "€10.40"]].map(([credits, price], index) => <div key={credits} className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm ${index === 1 ? "border-[#6D35F5] bg-[#EEE8FF]" : "border-[#E5E7EB]"}`}><span className="font-bold">{credits}</span><span className="font-black text-[#0F172A]">{price}</span></div>)}
              </div>
              <div className="mt-5 rounded-xl bg-[#6D35F5] py-3.5 text-center text-sm font-black text-white">Buy 250 credits — €5.90</div>
              <p className="mt-3 text-center text-xs font-semibold text-[#64748B]">No subscription required.</p>
            </article>
            <article className="rounded-[1.6rem] border border-[#DDD4FF] bg-[#F7F5FF] p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#94A3B8]">03 · Continue</span>
              <div className="mt-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F8F1] text-[#168A5B]"><Icon name="check" className="h-7 w-7" /></div>
              <h3 className="mt-5 text-2xl font-black">You&apos;re ready to continue.</h3>
              <p className="mt-4 text-4xl font-black text-[#6D35F5]">+250 credits</p>
              <p className="mt-2 text-sm text-[#64748B]">Capacity successfully activated.</p>
              <div className="mt-6 rounded-xl bg-[#0F172A] py-3.5 text-center text-sm font-black text-white">Continue creating</div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-[#F8FAFC]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <Eyebrow>For AI providers</Eyebrow>
          <SectionHeading>Turn urgent usage demand into a new distribution channel.</SectionHeading>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#475569]">AI Capacity Exchange is designed to complement provider subscriptions — not replace them.</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {providerBenefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[1.5rem] border border-[#E5E7EB] bg-white p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEE8FF] text-[#6D35F5]"><Icon name={benefit.icon} /></span>
                <h3 className="mt-5 text-lg font-black">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#64748B]">{benefit.text}</p>
              </article>
            ))}
          </div>
          <a href={PARTNER_MAILTO} data-analytics-event="exchange_pilot_cta_click" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6D35F5] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_25px_rgba(109,53,245,0.2)]">Discuss a provider pilot <Icon name="arrow" className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <SectionHeading>A pilot can start small.</SectionHeading>
          <div className="mt-10 grid overflow-hidden rounded-[1.8rem] border border-[#DDD4FF] lg:grid-cols-2">
            <div className="bg-[#0F172A] p-7 text-white sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#A78BFA]">Provider supplies</p>
              <ul className="mt-6 space-y-4">
                {["Limited API or credit pool", "Commercial or promotional pricing", "Provisioning mechanism", "Basic usage constraints"].map((item) => <li key={item} className="flex gap-3 text-[#E2E8F0]"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6D35F5]"><Icon name="check" className="h-3 w-3" /></span>{item}</li>)}
              </ul>
            </div>
            <div className="bg-[#F5F2FF] p-7 sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#6D35F5]">NAVARO tests</p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {["Checkout", "Micro-purchase behavior", "Demand", "Transaction size", "Repeat purchases", "Provider activation", "Conversion"].map((item) => <span key={item} className="rounded-full border border-[#DDD4FF] bg-white px-3.5 py-2 text-sm font-bold text-[#475569]">{item}</span>)}
              </div>
            </div>
          </div>
          <div className="mt-5 grid divide-y divide-[#E5E7EB] rounded-[1.4rem] border border-[#E5E7EB] bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[["€3–€15 hypothesis", "Average initial purchase size"], ["Micro-transactions", "No full subscription required"], ["Provider-authorized", "No unofficial credit transfer"]].map(([value, label]) => <div key={value} className="p-5"><strong className="block text-lg font-black text-[#0F172A]">{value}</strong><span className="mt-1 block text-sm text-[#64748B]">{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#EEE8FF]">
        <div className="absolute -right-28 -top-28 h-96 w-96 rounded-full border-[80px] border-white/40" aria-hidden="true" />
        <div className="relative mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <Eyebrow>Phase 2</Eyebrow>
          <SectionHeading>What if unused AI capacity did not have to disappear?</SectionHeading>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#475569]">Once demand is validated, participating providers could choose to let subscribers convert unused expiring allowance into provider-authorized transferable capacity.</p>
          <div className="mt-10 grid items-stretch gap-3 lg:grid-cols-[1.2fr_auto_0.8fr_auto_1fr_auto_1.2fr] lg:items-center">
            <div className="rounded-2xl border border-[#DDD4FF] bg-white p-5 shadow-sm"><span className="text-xs font-black uppercase tracking-wider text-[#6D35F5]">Seller</span><p className="mt-3 text-sm text-[#64748B]">Unused value <strong className="float-right text-[#0F172A]">€20</strong></p><p className="mt-2 text-sm text-[#64748B]">Expires <strong className="float-right text-[#0F172A]">3 days</strong></p><p className="mt-4 rounded-xl bg-[#EEE8FF] px-3 py-2 text-sm font-black text-[#6D35F5]">Convert €10 capacity</p></div>
            <Icon name="arrow" className="mx-auto h-5 w-5 rotate-90 text-[#6D35F5] lg:rotate-0" />
            <div className="rounded-2xl bg-[#6D35F5] p-5 text-white"><span className="text-xs font-black uppercase tracking-wider text-white/70">Exchange</span><p className="mt-3 text-sm text-white/70">Market price</p><p className="mt-1 text-3xl font-black">€6</p></div>
            <Icon name="arrow" className="mx-auto h-5 w-5 rotate-90 text-[#6D35F5] lg:rotate-0" />
            <div className="rounded-2xl border border-[#DDD4FF] bg-white p-5"><span className="text-xs font-black uppercase tracking-wider text-[#6D35F5]">Buyer</span><p className="mt-3 font-bold leading-6">Gets discounted AI capacity</p></div>
            <Icon name="arrow" className="mx-auto h-5 w-5 rotate-90 text-[#6D35F5] lg:rotate-0" />
            <div className="rounded-2xl border border-[#DDD4FF] bg-white p-5"><span className="text-xs font-black uppercase tracking-wider text-[#6D35F5]">Provider</span><p className="mt-3 text-sm leading-6 text-[#475569]">Keeps the transaction authorized and gains an active user.</p></div>
          </div>
          <p className="mt-6 rounded-2xl border border-[#CFC2FF] bg-white/70 px-5 py-4 text-sm font-bold leading-6 text-[#475569]">Capacity Recovery is a future provider-authorized model. The initial pilot does not require secondary resale.</p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-7 lg:py-28">
          <SectionHeading>Flexible economics for different providers.</SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[["Wholesale", "Provider sells capacity below retail. Exchange earns the spread."], ["Revenue share", "Provider defines pricing. Exchange receives a transaction percentage."], ["Acquisition", "Provider supplies promotional capacity. Exchange earns on qualified activation or conversion."], ["Future marketplace fee", "Transaction fee on provider-authorized recovered capacity."]].map(([title, text], index) => <article key={title} className="rounded-[1.5rem] border border-[#E5E7EB] p-6"><span className="font-mono text-xs font-black text-[#A78BFA]">0{index + 1}</span><h3 className="mt-4 text-lg font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[#64748B]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-[#0F172A] text-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-12 px-5 py-20 sm:px-7 lg:grid-cols-[1fr_0.8fr] lg:py-28">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#A78BFA]">The vision</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">One wallet for AI capacity.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#CBD5E1]">Today users manage separate subscriptions, credit systems and usage limits across many AI services. The long-term vision is a common purchasing layer where capacity can be accessed without another full subscription every time demand changes.</p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8">
            <div className="flex items-start justify-between"><div><p className="text-sm font-bold text-[#A78BFA]">AI Wallet</p><p className="mt-2 text-4xl font-black">€18.40</p><p className="mt-1 text-xs text-[#94A3B8]">available</p></div><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6D35F5] font-black">N</span></div>
            <div className="mt-7 space-y-2">
              {["AI coding", "AI video", "AI images", "AI voice"].map((item) => <div key={item} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3"><span className="text-sm font-bold text-[#E2E8F0]">{item}</span><span className="text-xs font-black text-[#A78BFA]">Buy →</span></div>)}
            </div>
            <p className="mt-4 text-center text-xs text-[#64748B]">Concept illustration — not a live wallet</p>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF8FF]">
        <div className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-7 lg:py-28">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6D35F5] text-xl font-black text-white shadow-[0_14px_32px_rgba(109,53,245,0.25)]">N</span>
          <h2 className="mt-7 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Help us test a new way to distribute AI capacity.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#475569]">We are looking for a small number of AI providers interested in exploring a controlled distribution pilot.</p>
          <a href={PARTNER_MAILTO} data-analytics-event="exchange_pilot_cta_click" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6D35F5] px-7 py-4 text-sm font-black text-white shadow-[0_14px_32px_rgba(109,53,245,0.25)] transition hover:-translate-y-0.5 hover:bg-[#5B27D9]">Discuss a pilot <Icon name="arrow" className="h-4 w-4" /></a>
          <a href={PARTNER_MAILTO} data-analytics-event="exchange_email_click" className="mt-5 block text-sm font-bold text-[#6D35F5] hover:underline">{PARTNER_EMAIL}</a>
          <p className="mt-8 text-sm text-[#64748B]">AI Capacity Exchange is an experimental initiative by NAVARO.</p>
        </div>
      </section>

      <footer className="border-t border-[#E5E7EB] bg-white">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-8 sm:px-7 md:flex-row md:items-center md:justify-between">
          <div><p className="text-sm font-black tracking-[0.08em]">NAVARO</p><p className="mt-1 text-xs text-[#64748B]">AI Capacity Exchange · Experimental initiative</p></div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-[#64748B]"><a href="https://navaro.pro" className="hover:text-[#6D35F5]">navaro.pro</a><a href="https://navaro.pro/privacy" className="hover:text-[#6D35F5]">Privacy</a><a href={PARTNER_MAILTO} data-analytics-event="exchange_email_click" className="hover:text-[#6D35F5]">Contact</a></div>
          <p className="text-xs text-[#94A3B8]">© {year} NAVARO</p>
        </div>
      </footer>
    </main>
  );
}
