import Link from "next/link";
import { experience } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" className="surface-light sheet grain py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionLabel index="03" label="Experience" />
          <h2 data-reveal className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
            Where I&apos;ve <span className="font-serif font-normal italic text-coral">shipped</span> things.
          </h2>
          <p data-reveal className="mt-6 max-w-sm text-lg text-ink/65">
            From an agile services team to a Dubai-based platform with 60K+ users — 2+ years of building, shipping and owning
            features in production.
          </p>
        </div>

        <ol className="relative space-y-8 pl-10 md:pl-14">
          <span className="absolute bottom-2 left-[11px] top-2 w-0.5 bg-ink/10 md:left-[15px]" aria-hidden />
          <span
            className="timeline-fill absolute bottom-2 left-[11px] top-2 w-0.5 bg-gradient-to-b from-coral via-violet to-lime md:left-[15px]"
            aria-hidden
          />

          {experience.map((job, i) => (
            <li key={job.company} data-reveal style={{ "--d": `${i * 80}ms` } as React.CSSProperties} className="relative">
              <span
                className={`absolute -left-10 top-8 grid size-6 place-items-center rounded-full border-4 border-paper md:-left-14 md:size-8 ${
                  job.current ? "bg-lime" : "bg-ink"
                }`}
              >
                {job.current && <span className="pulse-dot size-2 rounded-full bg-ink" />}
              </span>

              <article
                data-spot
                className="glow-card group rounded-3xl border border-ink/10 bg-white/60 p-7 shadow-[0_1px_0_#fff_inset] backdrop-blur transition-all duration-500 [--glow:var(--color-coral)] hover:-translate-y-1 hover:bg-white hover:shadow-2xl hover:shadow-ink/10 md:p-9"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-sm text-ink/55">{job.period}</span>
                  <div className="flex gap-2">
                    {job.current && (
                      <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold uppercase tracking-wider">Now</span>
                    )}
                    <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-medium">{job.type}</span>
                  </div>
                </div>
                <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">
                  {job.link ? (
                    <a href={job.link} target="_blank" rel="noreferrer" className="link-draw">
                      {job.company} ↗
                    </a>
                  ) : (
                    job.company
                  )}
                </h3>
                <p className="mt-1 text-lg font-medium text-coral">
                  {job.role} <span className="text-ink/40">· {job.location}</span>
                </p>
                <p className="mt-4 text-ink/60">{job.about}</p>
                <ul className="mt-5 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-ink/80">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-coral transition-transform duration-300 group-hover:scale-150" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap items-center gap-2">
                  {job.stack.map((s) => (
                    <span key={s} className="rounded-md bg-ink px-2.5 py-1 font-mono text-xs text-paper">
                      {s}
                    </span>
                  ))}
                  {job.caseStudy && (
                    <Link
                      href={`/work/${job.caseStudy}`}
                      className="link-draw ml-auto text-sm font-semibold text-coral"
                    >
                      Read case study →
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
