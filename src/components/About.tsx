import { about, profile } from "@/data/portfolio";
import Counter from "./Counter";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="surface-light sheet grain py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="01" label="About me" />

        <h2
          data-reveal
          className="max-w-5xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight"
        >
          I turn ideas into{" "}
          <span className="font-serif font-normal italic text-coral">interfaces people love</span> — and wire them up to
          the <span className="relative inline-block">
            backend
            <svg
              className="absolute -bottom-2 left-0 w-full text-lime"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path d="M2 9C50 3 150 1 198 7" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </span>{" "}
          too.
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="space-y-6 text-lg leading-relaxed text-ink/75 md:text-xl">
            {about.paragraphs.map((p, i) => (
              <p key={i} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
                {p}
              </p>
            ))}
          </div>

          <div data-reveal="right" className="space-y-4">
            <div className="rounded-3xl bg-ink p-6 text-paper">
              <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Currently</p>
              <p className="mt-2 font-display text-2xl font-semibold">
                Software Developer <span className="text-lime">@ Nasheedio</span>
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-paper/50">Based in</p>
                  <p className="font-medium">{profile.location}</p>
                </div>
                <div>
                  <p className="text-paper/50">Works</p>
                  <p className="font-medium">Remote · On-site · Relocate</p>
                </div>
                <div>
                  <p className="text-paper/50">Education</p>
                  <p className="font-medium">B.Tech CSE, 2024</p>
                </div>
                <div>
                  <p className="text-paper/50">Available</p>
                  <p className="flex items-center gap-2 font-medium">
                    <span className="pulse-dot size-2 rounded-full bg-lime" /> Immediately
                  </p>
                </div>
              </div>
            </div>
            <div className="rotate-[-1.5deg] rounded-3xl border-2 border-dashed border-ink/20 p-6 transition-transform duration-500 hover:rotate-0">
              <p className="font-serif text-2xl italic leading-snug">
                &ldquo;Good UI is invisible. Great UI makes you smile.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-ink/10 md:grid-cols-4">
          {about.stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              className="group bg-paper p-6 transition-colors duration-500 hover:bg-lime md:p-8"
            >
              <p className="font-display text-5xl font-extrabold tracking-tight md:text-6xl">
                <Counter to={s.value} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
              </p>
              <p className="mt-2 text-sm text-ink/60 group-hover:text-ink">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
