import { skills, type SkillGroup } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

const accentVar: Record<SkillGroup["accent"], string> = {
  lime: "var(--color-lime)",
  coral: "var(--color-coral)",
  violet: "var(--color-violet)",
  sky: "var(--color-sky)",
};

function OrbitArt() {
  return (
    <div className="relative mx-auto size-40">
      <div className="orbit spin-slow inset-0">
        <span className="bg-lime" />
      </div>
      <div className="orbit spin-rev inset-6">
        <span className="bg-sky" />
      </div>
      <div className="orbit spin-slow inset-12 [animation-duration:9s]">
        <span className="bg-paper" />
      </div>
      <div className="absolute inset-[60px] grid place-items-center rounded-full bg-lime font-mono text-sm font-bold text-ink shadow-[0_0_40px_var(--color-lime)]">
        {"</>"}
      </div>
    </div>
  );
}

function MorphArt() {
  return (
    <div className="relative mx-auto grid size-40 place-items-center">
      <div className="morph absolute size-24 bg-coral/90" />
      <div className="morph absolute size-24 border-2 border-paper/40 [animation-delay:-1.5s]" />
      <span className="relative font-mono text-xs font-bold text-ink">.css</span>
    </div>
  );
}

function TerminalArt() {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4 font-mono text-[13px]">
      <div className="mb-3 flex gap-1.5">
        <i className="size-2.5 rounded-full bg-[#ff5f57]" />
        <i className="size-2.5 rounded-full bg-[#febc2e]" />
        <i className="size-2.5 rounded-full bg-[#28c840]" />
      </div>
      <p className="text-paper/50">$ curl api/v1/products</p>
      <p className="typing text-violet" style={{ "--chars": 22 } as React.CSSProperties}>
        200 OK · 48 items · 92ms
      </p>
    </div>
  );
}

function BarsArt() {
  return (
    <div className="flex h-28 items-end gap-2">
      {[60, 90, 45, 100, 70, 85, 55].map((h, i) => (
        <div
          key={i}
          className="bar-grow flex-1 rounded-t-md bg-gradient-to-t from-sky/30 to-sky"
          style={{ height: `${h}%`, "--d": `${i * 150}ms` } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

const art = [OrbitArt, MorphArt, TerminalArt, BarsArt];
const spans = ["md:col-span-2 lg:col-span-4", "md:col-span-1 lg:col-span-2", "md:col-span-1 lg:col-span-2", "md:col-span-2 lg:col-span-4"];

const principles = [
  {
    title: "Own it end to end",
    text: "UI, API, database and release — I take features from idea to production.",
    icon: "M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 16.5 6.5 19.5l1-6.2L3 8.9 9 8z",
  },
  {
    title: "Ship, then sharpen",
    text: "Small, frequent releases — then measure and optimize, like the 25% faster loads at Plutonic.",
    icon: "M13 2 3 14h9l-1 8 10-12h-9l1-8z",
  },
  {
    title: "Build for the team",
    text: "Admin tools and dashboards the Nasheedio content team and leadership rely on.",
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "Remote-ready",
    text: "Async, clear updates with a Dubai-based team and direct clients — no surprises.",
    icon: "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="surface-dark sheet grain py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="02" label="Skills & stack" dark />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 data-reveal className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
            A toolkit built for <span className="text-shimmer">shipping</span>.
          </h2>
          <p data-reveal className="max-w-sm text-paper/60">
            Every animation on this page is hand-written CSS — no animation libraries. Hover around, it&apos;s all
            alive.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((g, i) => {
            const Art = art[i];
            return (
              <article
                key={g.title}
                data-reveal
                data-spot
                data-tilt="5"
                style={{ "--d": `${i * 100}ms`, "--glow": accentVar[g.accent] } as React.CSSProperties}
                className={`glow-card tilt group flex flex-col gap-8 rounded-3xl border border-white/10 bg-ink-2 p-7 ${spans[i]}`}
              >
                <div className="flex min-h-40 items-center">
                  <div className="w-full">
                    <Art />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="size-3 rounded-full" style={{ background: accentVar[g.accent] }} />
                    <h3 className="font-display text-2xl font-bold">{g.title}</h3>
                  </div>
                  <p className="mt-2 text-paper/60">{g.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-paper/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--glow)] hover:text-[var(--glow)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}

          <article
            data-reveal
            className="relative overflow-hidden rounded-3xl bg-lime p-7 text-ink md:col-span-3 md:p-10 lg:col-span-6"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border-[28px] border-ink/5" aria-hidden />
            <div className="relative flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/60">Beyond the code</p>
                <h3 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">How I work</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {["Collaboration", "Leadership", "Problem-solving", "Client communication"].map((s) => (
                  <li key={s} className="rounded-full border-2 border-ink/80 px-3.5 py-1.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-lime">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((pr, i) => (
                <div
                  key={pr.title}
                  className="group rounded-2xl border-2 border-ink/10 bg-paper/50 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:text-paper"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-xl bg-ink text-lime transition-colors duration-500 group-hover:bg-lime group-hover:text-ink">
                      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d={pr.icon} />
                      </svg>
                    </span>
                    <span className="font-mono text-xs text-ink/40 group-hover:text-paper/40">0{i + 1}</span>
                  </div>
                  <p className="mt-4 font-display text-lg font-bold">{pr.title}</p>
                  <p className="mt-1.5 text-sm text-ink/70 group-hover:text-paper/70">{pr.text}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
