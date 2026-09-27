"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type ProjectCategory } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

const filters: ("All" | ProjectCategory)[] = ["All", "Client", "Company"];
const placeholderBg = [
  "from-coral to-[#ffb199]",
  "from-violet to-sky",
  "from-lime to-[#7de2a8]",
  "from-sky to-[#a5f3fc]",
];

export default function MoreProjects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <section id="projects" className="surface-light sheet grain py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="05" label="More projects" />
        <div className="flex flex-wrap items-end justify-between gap-8">
          <h2 data-reveal className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
            Client sites &amp; <span className="font-serif font-normal italic text-violet">company builds</span>.
          </h2>

          <div data-reveal className="relative flex rounded-full bg-ink/5 p-1.5" role="tablist">
            <span
              className="absolute inset-y-1.5 w-[calc((100%-0.75rem)/3)] rounded-full bg-ink transition-transform duration-500 ease-[var(--ease-spring)]"
              style={{ transform: `translateX(${filters.indexOf(filter) * 100}%)` }}
              aria-hidden
            />
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`relative w-24 rounded-full py-2 text-sm font-semibold transition-colors duration-300 ${
                  filter === f ? "text-paper" : "text-ink/60 hover:text-ink"
                }`}
              >
                {f}
                <span className="ml-1 text-xs opacity-60">
                  {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div key={filter} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => {
            const link = p.href ?? p.repo;
            const Tag = link ? "a" : "div";
            return (
              <Tag
                key={p.name}
                {...(link ? { href: link, target: "_blank", rel: "noreferrer" } : {})}
                className="fade-up group flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/15"
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 400px"
                      className="object-cover object-top transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-110"
                    />
                  ) : (
                    <div
                      className={`grid size-full place-items-center bg-gradient-to-br ${placeholderBg[i % placeholderBg.length]} transition-transform duration-[1.2s] ease-[var(--ease-out-expo)] group-hover:scale-110`}
                    >
                      <span className="font-display text-6xl font-extrabold tracking-tighter text-ink/85 transition-transform duration-700 group-hover:rotate-[-4deg] group-hover:scale-110">
                        {p.name
                          .split(" ")
                          .slice(0, 2)
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {p.category}
                  </span>
                  {link && (
                    <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-lime text-ink opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
                      ↑
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-2 flex-1 text-ink/65">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-md bg-ink/5 px-2 py-1 font-mono text-[11px] text-ink/70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>

        <div data-reveal className="mt-14 text-center">
          <a
            href="https://github.com/ahmad8929?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn-fill inline-flex items-center gap-2 rounded-full border-2 border-ink px-7 py-3.5 font-semibold transition-colors duration-500 [--fill:var(--color-ink)] hover:text-paper"
          >
            Explore 35+ repos on GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
