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
            className="flex flex-col justify-between gap-6 rounded-3xl bg-lime p-7 text-ink md:col-span-3 lg:col-span-6 lg:flex-row lg:items-center"
          >
            <p className="font-display text-2xl font-bold md:text-3xl">Beyond the code</p>
            <ul className="flex flex-wrap gap-3">
              {["Effective collaboration", "Leadership", "Problem-solving", "Client communication", "Ownership end-to-end"].map(
                (s) => (
                  <li key={s} className="rounded-full border-2 border-ink px-4 py-2 font-medium transition-colors hover:bg-ink hover:text-lime">
                    {s}
                  </li>
                ),
              )}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
