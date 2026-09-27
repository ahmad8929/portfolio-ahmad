import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden pb-10 pt-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-paper/60">
          <p>Designed &amp; built by {profile.name} — Next.js, TypeScript &amp; a lot of CSS.</p>
          <div className="flex gap-6">
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="link-draw hover:text-paper">
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="link-draw hover:text-paper">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="link-draw hover:text-paper">
              Email
            </a>
            <a href="#top" className="link-draw text-lime">
              Back to top ↑
            </a>
          </div>
        </div>
        <p
          className="text-outline mt-12 select-none text-center font-display text-[clamp(4rem,17vw,16rem)] font-extrabold uppercase leading-[0.8] tracking-tighter [--stroke-w:1.5px] [--stroke:var(--color-lime)]"
          aria-hidden
        >
          {profile.name}
        </p>
        <p className="mt-8 text-center font-mono text-xs text-paper/40">© {new Date().getFullYear()} · Made in India</p>
      </div>
    </footer>
  );
}
