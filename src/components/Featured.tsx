import Image from "next/image";
import { featured } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

function Browser({ src, alt, url, className = "" }: { src: string; alt: string; url: string; className?: string }) {
  return (
    <div className={`browser bg-ink-3 ${className}`}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span className="ml-3 truncate rounded-md bg-black/30 px-3 py-0.5 font-mono text-[10px] text-paper/50">{url}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 95vw, 700px"
          className="object-cover object-top transition-transform duration-[1.5s] ease-[var(--ease-out-expo)] group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default function Featured() {
  return (
    <section id="work" className="surface-dark sheet grain overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="04" label="Featured work" dark />
        <h2 data-reveal className="max-w-4xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
          Real products, <span className="font-serif font-normal italic text-lime">real customers</span>.
        </h2>

        <div className="mt-20 space-y-32">
          {featured.map((p, i) => {
            const host = new URL(p.links[0].href).host;
            const flip = i % 2 === 1;
            return (
              <article key={p.name} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                <div
                  data-reveal={flip ? "right" : "left"}
                  className={`group relative ${flip ? "lg:order-2" : ""}`}
                >
                  <div
                    className="absolute -inset-8 rounded-[3rem] opacity-30 blur-3xl transition-opacity duration-700 group-hover:opacity-50"
                    style={{ background: p.accent }}
                    aria-hidden
                  />
                  <div data-tilt="8" className="tilt relative z-10">
                    <Browser src={p.images[0]} alt={`${p.name} screenshot`} url={host} />
                    {p.images[1] && (
                      <Browser
                        src={p.images[1]}
                        alt={`${p.name} admin screenshot`}
                        url={`admin.${host.replace(/^www\./, "")}`}
                        className="absolute -bottom-10 -right-4 w-1/2 [transform:translateZ(60px)] md:-right-10"
                      />
                    )}
                  </div>
                  <span
                    className="text-outline pointer-events-auto absolute -top-16 font-display text-[9rem] font-extrabold leading-none [--stroke-w:1.5px] [--stroke:rgb(244_240_232/0.25)]"
                    style={flip ? { right: "-1rem" } : { left: "-1rem" }}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                </div>

                <div data-reveal style={{ "--d": "150ms" } as React.CSSProperties}>
                  <p className="font-mono text-sm uppercase tracking-widest" style={{ color: p.accent }}>
                    {p.kind}
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">{p.name}</h3>
                  <p className="mt-5 text-lg text-paper/70">{p.summary}</p>
                  <ul className="mt-7 space-y-3">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-paper/85">
                        <span style={{ color: p.accent }}>✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs text-paper/70">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-9 flex flex-wrap gap-3">
                    {p.links.map((l, k) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`btn-fill rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-500 ${
                          k === 0 ? "text-ink [--fill:var(--color-paper)]" : "border border-white/20 [--fill:var(--color-paper)] hover:text-ink"
                        }`}
                        style={k === 0 ? { background: p.accent } : undefined}
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
