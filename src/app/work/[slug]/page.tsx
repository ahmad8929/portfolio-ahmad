import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Effects from "@/components/Effects";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArtCover, Browser, Phone } from "@/components/Mockups";
import { caseStudies, profile } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = caseStudies.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} — Case study · ${profile.name}`,
    description: p.summary,
    openGraph: { title: `${p.name} — ${profile.name}`, description: p.summary, images: p.cover ? [p.cover] : undefined },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((x) => x.slug === slug);
  if (index === -1) notFound();
  const p = caseStudies[index];
  const cs = p.caseStudy!;
  const next = caseStudies[(index + 1) % caseStudies.length];
  const host = p.links?.[0] ? new URL(p.links[0].href).host : p.name.toLowerCase().replace(/\s+/g, "") + ".app";

  return (
    <>
      <Effects />
      <Navbar />
      <main style={{ "--accent": p.accent } as React.CSSProperties}>
        {/* ---------- Hero ---------- */}
        <section data-spot className="surface-dark grain relative overflow-hidden pb-24 pt-32 md:pt-40">
          <div className="grid-bg pointer-events-none absolute inset-0" />
          <div className="spotlight pointer-events-none absolute inset-0" />
          <div
            className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full opacity-30 blur-[120px]"
            style={{ background: p.accent }}
          />

          <div className="relative mx-auto max-w-7xl px-6">
            <Link
              href="/#work"
              className="fade-up inline-flex items-center gap-2 font-mono text-sm text-paper/60 transition-colors hover:text-paper"
            >
              ← All work
            </Link>

            <div className="grid items-end gap-12 lg:grid-cols-[1.35fr_1fr]">
              <div>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  {p.icon && <Image src={p.icon} alt="" width={56} height={56} className="fade-up rounded-2xl" />}
                  <p className="fade-up font-mono text-sm uppercase tracking-widest" style={{ color: p.accent, "--d": "80ms" } as React.CSSProperties}>
                    {p.kind}
                  </p>
                </div>
                <h1
                  className="fade-up mt-4 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tight"
                  style={{ "--d": "120ms" } as React.CSSProperties}
                >
                  {p.name}
                </h1>
                <p className="fade-up mt-8 max-w-2xl text-xl text-paper/70" style={{ "--d": "220ms" } as React.CSSProperties}>
                  {p.summary}
                </p>
              </div>

              {/* At a glance */}
              <aside
                data-spot
                className="glow-card fade-up rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md [--glow:var(--accent)]"
                style={{ "--d": "300ms" } as React.CSSProperties}
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50">At a glance</p>
                  {p.links?.length ? (
                    <span className="flex items-center gap-2 rounded-full bg-lime/10 px-3 py-1 text-xs font-semibold text-lime">
                      <span className="pulse-dot size-1.5 rounded-full bg-lime" /> Live
                    </span>
                  ) : (
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-paper/60">Private</span>
                  )}
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col bg-ink-2/90 p-4">
                      <dt className="order-2 mt-1 text-xs text-paper/50">{m.label}</dt>
                      <dd className="font-display text-2xl font-bold" style={{ color: p.accent }}>
                        {m.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 6).map((s) => (
                    <li key={s} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-paper/70">
                      {s}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <dl
              className="fade-up mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4"
              style={{ "--d": "320ms" } as React.CSSProperties}
            >
              {[
                ["Role", cs.role],
                ["Timeline", cs.period],
                ["Team", cs.team],
                ["Platforms", p.platforms.join(" · ")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-xs uppercase tracking-widest text-paper/40">{k}</dt>
                  <dd className="mt-1.5 font-medium">{v}</dd>
                </div>
              ))}
            </dl>

            {Boolean(p.links?.length || p.private) && (
              <div className="fade-up mt-10 flex flex-wrap gap-3" style={{ "--d": "400ms" } as React.CSSProperties}>
                {p.links?.map((l, k) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn-fill rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-500 [--fill:var(--color-paper)] ${
                      k === 0 ? "text-ink" : "border border-white/20 hover:text-ink"
                    }`}
                    style={k === 0 ? { background: p.accent } : undefined}
                  >
                    {l.label} ↗
                  </a>
                ))}
                {p.private && (
                  <span className="rounded-full border border-white/15 px-5 py-3 text-sm text-paper/60">🔒 {p.private}</span>
                )}
              </div>
            )}
          </div>

          {/* Main visual */}
          <div className="fade-up relative mx-auto mt-20 max-w-6xl px-6" style={{ "--d": "500ms" } as React.CSSProperties}>
            {p.cover ? (
              <div data-tilt="4" className="tilt">
                <Browser src={p.cover} alt={`${p.name} screenshot`} url={host} sizes="(max-width: 1200px) 95vw, 1100px" priority />
              </div>
            ) : p.phones?.length ? (
              <div className="flex items-end justify-center gap-4 md:gap-8">
                {p.phones.slice(0, 3).map((s, k) => (
                  <Phone
                    key={s}
                    src={s}
                    alt={`${p.name} screen ${k + 1}`}
                    priority
                    className={`w-[30%] max-w-[240px] ${k === 1 ? "-translate-y-8" : ""}`}
                  />
                ))}
              </div>
            ) : (
              <div className="browser aspect-[16/7] overflow-hidden">
                <ArtCover name={p.name} accent={p.accent} kind={p.kind} />
              </div>
            )}
          </div>
        </section>

        {/* ---------- Metrics ---------- */}
        <section className="surface-light sheet grain py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
              <p data-reveal className="font-mono text-sm uppercase tracking-[0.2em] text-coral">Overview</p>
              <p data-reveal className="font-display text-2xl leading-snug md:text-3xl">
                {cs.overview}
              </p>
            </div>

            {/* ---------- What I built ---------- */}
            <div className="mt-24 space-y-6">
              {cs.sections.map((s, i) => (
                <article
                  key={s.title}
                  data-reveal
                  data-spot
                  className="glow-card grid gap-6 rounded-3xl border border-ink/10 bg-white/60 p-7 [--glow:var(--accent)] md:grid-cols-[1fr_2fr] md:p-10"
                >
                  <div>
                    <span className="font-mono text-sm text-ink/40">0{i + 1}</span>
                    <h2 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">{s.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-lg text-ink/80">
                        <span className="mt-2.5 size-2 shrink-0 rounded-full" style={{ background: p.accent }} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {/* ---------- Gallery ---------- */}
            {Boolean(p.gallery?.length || (p.phones && p.phones.length > 3) || (p.cover && p.phones?.length)) && (
              <div className="mt-24">
                <p data-reveal className="font-mono text-sm uppercase tracking-[0.2em] text-coral">Gallery</p>
                {p.gallery?.length ? (
                  <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {p.gallery.map((g) => (
                      <div key={g} data-reveal className="group">
                        <Browser src={g} alt={`${p.name} screenshot`} url={host} sizes="(max-width: 768px) 95vw, 600px" />
                      </div>
                    ))}
                  </div>
                ) : null}
                {p.phones?.length ? (
                  <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
                    {(p.cover ? p.phones : p.phones.slice(3)).map((s, k) => (
                      <div key={s} data-reveal style={{ "--d": `${k * 60}ms` } as React.CSSProperties}>
                        <Phone src={s} alt={`${p.name} screen`} />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            )}

            {/* ---------- Stack ---------- */}
            <div className="mt-24 grid gap-8 lg:grid-cols-[1fr_2fr]">
              <p data-reveal className="font-mono text-sm uppercase tracking-[0.2em] text-coral">Tech stack</p>
              <ul data-reveal className="flex flex-wrap gap-2.5">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-full border-2 border-ink/10 px-4 py-2 font-medium transition-colors hover:border-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {cs.note && <p className="mt-10 text-sm text-ink/50">* {cs.note}</p>}
          </div>
        </section>

        {/* ---------- Next project ---------- */}
        <section className="surface-dark sheet sheet-bottom grain py-24">
          <Link href={`/work/${next.slug}`} className="group mx-auto block max-w-7xl px-6">
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-paper/50">Next case study</p>
            <div className="mt-4 flex items-end justify-between gap-6">
              <h2 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] font-extrabold leading-none tracking-tight transition-colors duration-500 group-hover:text-lime">
                {next.name}
              </h2>
              <span className="mb-3 grid size-16 shrink-0 place-items-center rounded-full bg-lime text-2xl text-ink transition-transform duration-500 group-hover:-rotate-45 md:size-24 md:text-4xl">
                →
              </span>
            </div>
            <p className="mt-4 max-w-2xl text-paper/60">{next.summary}</p>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
