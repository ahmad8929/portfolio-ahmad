import { achievements, education } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

const tones = ["text-lime", "text-coral", "text-sky", "text-violet"];

export default function Achievements() {
  return (
    <section id="achievements" className="surface-dark sheet grain py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="06" label="Achievements & education" dark />
        <h2 data-reveal className="max-w-3xl font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-tight">
          Wins along <span className="font-serif font-normal italic text-sky">the way</span>.
        </h2>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <article
              key={a.title}
              data-reveal
              data-spot
              style={{ "--d": `${i * 90}ms` } as React.CSSProperties}
              className="glow-card group rounded-3xl border border-white/10 bg-ink-2 p-7 transition-colors duration-500 hover:bg-ink-3"
            >
              <span
                className={`inline-block font-display text-5xl transition-transform duration-700 ease-[var(--ease-spring)] group-hover:-rotate-12 group-hover:scale-125 ${tones[i]}`}
              >
                {a.icon}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">{a.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <article
              key={e.school}
              data-reveal={i === 0 ? "left" : "right"}
              className="ticket relative flex overflow-hidden bg-paper text-ink transition-transform duration-500 hover:-rotate-1"
            >
              <div className="flex-1 p-7 md:p-8">
                <p className="font-mono text-xs uppercase tracking-widest text-ink/50">{e.period}</p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-tight">{e.degree}</h3>
                <p className="mt-2 text-ink/70">{e.school}</p>
                <p className="text-sm text-ink/50">{e.place}</p>
              </div>
              <div className="grid w-32 shrink-0 place-items-center border-l-2 border-dashed border-ink/20 p-4 text-center md:w-40">
                <div>
                  <p className="font-display text-3xl font-extrabold">{e.score.replace("CGPA ", "")}</p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-ink/50">
                    {e.score.startsWith("CGPA") ? "CGPA" : "Score"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
