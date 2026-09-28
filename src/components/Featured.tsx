import Link from "next/link";
import Image from "next/image";
import { featuredProjects, type Project } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { Browser, Phone, PhoneFan } from "./Mockups";

function Visual({ p }: { p: Project }) {
  if (p.cover && p.phones?.length) {
    // Web + mobile: browser with a phone overlapping the corner
    return (
      <div className="relative pb-10">
        <Browser src={p.cover} alt={`${p.name} website`} url={new URL(p.links![0].href).host} />
        <Phone
          src={p.phones[0]}
          alt={`${p.name} app`}
          className="absolute -bottom-2 -right-2 w-[26%] [transform:translateZ(60px)] md:-right-8"
        />
      </div>
    );
  }
  if (p.cover) {
    const host = p.links?.[0] ? new URL(p.links[0].href).host : p.name;
    return (
      <div className="relative pb-10">
        <Browser src={p.cover} alt={`${p.name} screenshot`} url={host} />
        {p.gallery?.[0] && (
          <Browser
            src={p.gallery[0]}
            alt={`${p.name} second screenshot`}
            url={host}
            className="absolute -bottom-2 -right-4 w-1/2 [transform:translateZ(60px)] md:-right-10"
            sizes="350px"
          />
        )}
      </div>
    );
  }
  return <PhoneFan shots={p.phones ?? []} name={p.name} />;
}

export default function Featured() {
  return (
    <section id="work" className="surface-dark sheet grain overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="04" label="Featured work" dark />
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 data-reveal className="max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
            Real products, <span className="font-serif font-normal italic text-lime">real users</span>.
          </h2>
          <p data-reveal className="max-w-sm text-paper/60">
            Each one has a full case study — what I built, how, and the numbers behind it.
          </p>
        </div>

        <div className="mt-20 space-y-36">
          {featuredProjects.map((p, i) => {
            const flip = i % 2 === 1;
            const cs = p.caseStudy!;
            return (
              <article key={p.slug} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div data-reveal={flip ? "right" : "left"} className={`group relative ${flip ? "lg:order-2" : ""}`}>
                  <div
                    className="absolute -inset-8 rounded-[3rem] opacity-25 blur-3xl transition-opacity duration-700 group-hover:opacity-45"
                    style={{ background: p.accent }}
                    aria-hidden
                  />
                  <Link href={`/work/${p.slug}`} data-tilt="7" className="tilt relative z-10 block" aria-label={`${p.name} case study`}>
                    <Visual p={p} />
                  </Link>
                  <span
                    className="text-outline pointer-events-auto absolute -top-16 font-display text-[9rem] font-extrabold leading-none [--stroke-w:1.5px] [--stroke:rgb(244_240_232/0.2)]"
                    style={flip ? { right: "-1rem" } : { left: "-1rem" }}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                </div>

                <div data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
                  <div className="flex items-center gap-3">
                    {p.icon && (
                      <Image src={p.icon} alt="" width={36} height={36} className="rounded-xl" />
                    )}
                    <p className="font-mono text-sm uppercase tracking-widest" style={{ color: p.accent }}>
                      {p.kind}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">{p.name}</h3>
                  <p className="mt-5 text-lg text-paper/70">{p.summary}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-4">
                    {cs.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col bg-ink-2 p-4">
                        <dt className="order-2 mt-1 text-xs text-paper/50">{m.label}</dt>
                        <dd className="font-display text-2xl font-bold" style={{ color: p.accent }}>
                          {m.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.stack.slice(0, 7).map((s) => (
                      <span key={s} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-paper/70">
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/work/${p.slug}`}
                      className="btn-fill group/cta inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-ink [--fill:var(--color-paper)]"
                      style={{ background: p.accent }}
                    >
                      Read case study
                      <span className="transition-transform duration-500 group-hover/cta:translate-x-1">→</span>
                    </Link>
                    {p.links?.slice(0, 2).map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-fill rounded-full border border-white/20 px-5 py-3 text-sm font-semibold transition-colors duration-500 [--fill:var(--color-paper)] hover:text-ink"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
