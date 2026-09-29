"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { otherProjects, type Platform, type Project } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";
import { ArtCover } from "./Mockups";

const filters: ("All" | Platform)[] = ["All", "Web", "Mobile", "Backend", "AI"];

function Card({ p, i }: { p: Project; i: number }) {
  const internal = !!p.caseStudy;
  const href = internal ? `/work/${p.slug}` : p.links?.[0]?.href;
  const cta = internal ? "View case study →" : href ? "Visit live site ↗" : null;

  const body = (
    <>
      <div className="shine relative aspect-[16/10] overflow-hidden bg-ink">
        {p.scrollShot ? (
          // Tall full-page capture: pans from top to bottom on hover
          <Image
            src={p.scrollShot}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 420px"
            className="object-cover object-top transition-[object-position] duration-[5s] ease-in-out group-hover:object-bottom"
          />
        ) : p.cover ? (
          <Image
            src={p.cover}
            alt={p.name}
            fill
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 420px"
            className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-[1.08]"
          />
        ) : p.phones?.length ? (
          <div className="relative flex size-full items-end justify-center gap-3 overflow-hidden bg-ink-2 px-6 pt-6">
            <div className="absolute size-2/3 rounded-full opacity-30 blur-3xl" style={{ background: p.accent }} aria-hidden />
            {p.phones.slice(0, 3).map((src, k) => (
              <div
                key={src}
                className={`phone relative w-[28%] transition-transform duration-700 ease-[var(--ease-out-expo)] ${
                  k === 1 ? "translate-y-2 group-hover:-translate-y-3" : "translate-y-8 group-hover:translate-y-1"
                }`}
                style={{ transitionDelay: `${k * 60}ms` }}
              >
                <div className="phone-screen">
                  <Image src={src} alt={`${p.name} screen`} fill sizes="120px" className="object-cover object-top" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ArtCover name={p.name} accent={p.accent} kind={p.kind} />
        )}

        {/* Bottom fade + CTA that slides up on hover */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {cta && (
          <span className="absolute bottom-4 left-4 translate-y-4 rounded-full bg-paper px-4 py-2 text-sm font-semibold text-ink opacity-0 shadow-lg transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 group-hover:opacity-100">
            {cta}
          </span>
        )}

        <div className="absolute left-4 top-4 flex gap-1.5">
          <span className="rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">{p.category}</span>
          {internal && <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">Case study</span>}
        </div>
        {href && (
          <span className="absolute right-4 top-4 grid size-10 scale-50 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 ease-[var(--ease-spring)] group-hover:rotate-45 group-hover:scale-100 group-hover:opacity-100">
            ↑
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <span
          className="absolute left-6 top-0 h-[3px] w-8 rounded-full transition-all duration-700 ease-[var(--ease-out-expo)] group-hover:w-[calc(100%-3rem)]"
          style={{ background: p.accent }}
          aria-hidden
        />
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink/45">{p.kind.split("·").pop()}</p>
        <h3 className="mt-1 font-display text-xl font-bold transition-transform duration-500 group-hover:translate-x-1">{p.name}</h3>
        <p className="mt-2 flex-1 text-ink/65">{p.summary}</p>
        <div className="mt-5 flex flex-wrap gap-1.5">
          {p.stack.slice(0, 5).map((s, k) => (
            <span
              key={s}
              className="rounded-md bg-ink/5 px-2 py-1 font-mono text-[11px] text-ink/70 transition-colors duration-300 group-hover:bg-ink group-hover:text-paper"
              style={{ transitionDelay: `${k * 40}ms` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const cls = "pcard glow-card tilt group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/70";
  const props = {
    className: cls,
    style: { "--d": `${(i % 3) * 110 + Math.floor(i / 3) * 60}ms`, "--accent": p.accent, "--glow": p.accent } as React.CSSProperties,
    "data-reveal": "card",
    "data-spot": true,
    "data-tilt": "4",
  };

  if (internal) return <Link href={href!} {...props}>{body}</Link>;
  if (href)
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {body}
      </a>
    );
  return <div {...props}>{body}</div>;
}

export default function MoreProjects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = otherProjects.filter((p) => filter === "All" || p.platforms.includes(filter));
  const count = (f: (typeof filters)[number]) =>
    f === "All" ? otherProjects.length : otherProjects.filter((p) => p.platforms.includes(f)).length;

  return (
    <section id="projects" className="surface-light sheet grain py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="05" label="All projects" />
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 data-reveal className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
            Everything I&apos;ve <span className="font-serif font-normal italic text-violet">shipped</span>.
          </h2>

          <div data-reveal className="flex flex-wrap gap-1.5 rounded-full bg-ink/5 p-1.5" role="tablist">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  filter === f ? "bg-ink text-paper" : "text-ink/60 hover:text-ink"
                }`}
              >
                {f}
                <span className="ml-1 text-xs opacity-60">{count(f)}</span>
              </button>
            ))}
          </div>
        </div>

        <div key={filter} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Card key={p.slug} p={p} i={i} />
          ))}
        </div>

        <div data-reveal className="mt-14 text-center">
          <a
            href="https://github.com/ahmad8929?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-fill inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 font-semibold transition-colors duration-500 [--fill:var(--color-ink)] hover:text-paper"
          >
            Explore more on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
