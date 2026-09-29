import Image from "next/image";
import { profile, rotatingWords, marqueeTech } from "@/data/portfolio";
import Ticker from "./Ticker";

function SplitName({ text, offset = 0, className = "" }: { text: string; offset?: number; className?: string }) {
  return (
    <span className={`letter-mask ${className}`} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="letter" style={{ "--i": i + offset } as React.CSSProperties} aria-hidden>
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" data-spot className="surface-dark grain relative min-h-svh overflow-hidden pb-40 pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="spotlight pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-violet/25 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[30rem] rounded-full bg-lime/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <div
            className="fade-up mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-2 pr-4 text-sm text-paper/80 backdrop-blur"
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            <span className="pulse-dot size-2.5 rounded-full bg-lime" />
            {profile.availability}
          </div>

          <p
            className="fade-up font-serif text-3xl italic text-paper/60 md:text-4xl"
            style={{ "--d": "150ms" } as React.CSSProperties}
          >
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-[clamp(4rem,13vw,10.5rem)] font-extrabold uppercase leading-[0.85] tracking-tight">
            <SplitName text={profile.firstName} />
            <br />
            <SplitName
              text={profile.lastName}
              offset={4}
              className="text-outline [--stroke:var(--color-lime)]"
            />
          </h1>

          <p
            className="fade-up mt-8 max-w-xl font-display text-2xl leading-snug md:text-3xl"
            style={{ "--d": "700ms" } as React.CSSProperties}
          >
            {profile.role} crafting{" "}
            <Ticker words={rotatingWords} className="font-bold" wordClassName="text-shimmer" />
            <br className="hidden sm:block" /> end to end.
          </p>
          <p
            className="fade-up mt-5 max-w-lg text-base text-paper/60 md:text-lg"
            style={{ "--d": "850ms" } as React.CSSProperties}
          >
            {profile.tagline}
          </p>

          <div
            className="fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ "--d": "1000ms" } as React.CSSProperties}
          >
            <span data-magnetic className="inline-block transition-transform duration-300 ease-out">
              <a
                href="#work"
                className="btn-fill group inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 font-semibold text-ink"
              >
                See my work
                <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45">→</span>
              </a>
            </span>
            <span data-magnetic className="inline-block transition-transform duration-300 ease-out">
              <button
                type="button"
                data-contact
                className="btn-fill inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-semibold transition-colors duration-500 [--fill:var(--color-paper)] hover:text-ink"
              >
                Let&apos;s talk
                <span aria-hidden>✉</span>
              </button>
            </span>
            <div className="flex gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="grid size-12 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:text-lime"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.2-3.1-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
                </svg>
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid size-12 place-items-center rounded-full border border-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-lime hover:text-lime"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="size-5 fill-current">
                  <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2Zm1.8 13.1H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Direct contact */}
          <div
            className="fade-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
            style={{ "--d": "1100ms" } as React.CSSProperties}
          >
            <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2.5 text-paper/70 transition-colors hover:text-paper">
              <span className="grid size-8 place-items-center rounded-full bg-lime/10 text-lime transition-colors group-hover:bg-lime group-hover:text-ink">
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                </svg>
              </span>
              <span className="link-draw">{profile.email}</span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="group inline-flex items-center gap-2.5 text-paper/70 transition-colors hover:text-paper">
              <span className="grid size-8 place-items-center rounded-full bg-lime/10 text-lime transition-colors group-hover:bg-lime group-hover:text-ink">
                <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden>
                  <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1l-2.2 2.2Z" />
                </svg>
              </span>
              <span className="link-draw">{profile.phone}</span>
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="fade-up relative mx-auto aspect-square w-full max-w-md" style={{ "--d": "400ms" } as React.CSSProperties}>
          <div className="orbit spin-slow inset-[-6%]">
            <span className="bg-lime shadow-[0_0_20px_var(--color-lime)]" />
          </div>
          <div className="orbit spin-rev inset-[-16%] hidden sm:block">
            <span className="bg-coral shadow-[0_0_20px_var(--color-coral)]" />
          </div>
          <div className="blob absolute inset-0 bg-gradient-to-br from-lime via-sky to-violet p-1.5">
            <div className="blob relative size-full overflow-hidden bg-ink-3">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 450px"
                className="scale-110 object-cover object-[center_25%]"
              />
            </div>
          </div>

          <div
            className="float absolute -left-4 top-10 rounded-2xl border border-white/10 bg-ink-2/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-10"
            style={{ "--r": "-6deg" } as React.CSSProperties}
          >
            <p className="font-display text-2xl font-bold text-lime">60K+ users</p>
            <p className="text-xs text-paper/60">on products I build</p>
          </div>
          <div
            className="float-2 absolute -right-2 bottom-16 rounded-2xl bg-coral px-4 py-3 text-ink shadow-xl sm:-right-8"
            style={{ "--r": "5deg" } as React.CSSProperties}
          >
            <p className="font-display text-lg font-bold">20+ products shipped ✦</p>
          </div>
          <div
            className="float absolute -bottom-4 left-10 rounded-full bg-paper px-4 py-2 font-mono text-xs font-medium text-ink shadow-xl"
            style={{ "--r": "-3deg" } as React.CSSProperties}
          >
            Web · Mobile · API
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="absolute inset-x-0 bottom-16 -rotate-1 border-y border-white/10 bg-ink-2/80 py-4 backdrop-blur">
        <div className="marquee" style={{ "--speed": "35s" } as React.CSSProperties}>
          {[0, 1].map((k) => (
            <div key={k} className="marquee-track" aria-hidden={k === 1}>
              {marqueeTech.map((t) => (
                <span key={t} className="flex items-center gap-3 whitespace-nowrap font-display text-xl font-semibold text-paper/80">
                  <span className="text-lime">✦</span> {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
