"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-3 py-2 pl-5 backdrop-blur-xl transition-all duration-500 ${
          scrolled ? "border-white/10 bg-ink/75 shadow-2xl shadow-black/30" : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/#top" className="group flex items-center gap-2 font-display text-lg font-bold text-paper">
          <span className="grid size-8 place-items-center rounded-full bg-lime text-sm text-ink transition-transform duration-500 group-hover:rotate-[360deg]">
            MA
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={`/#${l.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === l.id ? "text-ink" : "text-paper/70 hover:text-paper"
                }`}
              >
                <span
                  className={`absolute inset-0 -z-10 rounded-full bg-paper transition-all duration-500 ease-[var(--ease-out-expo)] ${
                    active === l.id ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
                />
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="btn-fill hidden rounded-full bg-lime px-4 py-2 text-sm font-semibold text-ink [--fill:var(--color-paper)] sm:inline-block"
          >
            Resume ↓
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-full bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 bg-paper transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 bg-paper transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 -z-10 flex flex-col justify-center gap-2 bg-ink px-8 transition-[clip-path] duration-700 ease-[var(--ease-out-expo)] md:hidden ${
          open ? "[clip-path:circle(150%_at_90%_5%)]" : "pointer-events-none [clip-path:circle(0%_at_90%_5%)]"
        }`}
      >
        {links.map((l, i) => (
          <Link
            key={l.id}
            href={`/#${l.id}`}
            onClick={() => setOpen(false)}
            className={`font-display text-5xl font-bold text-paper transition-all duration-700 ${
              open ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: open ? `${150 + i * 60}ms` : "0ms" }}
          >
            {l.label}
            <span className="text-lime">.</span>
          </Link>
        ))}
        <a href={profile.resume} download className="mt-6 text-lg text-lime" onClick={() => setOpen(false)}>
          Download resume ↓
        </a>
      </div>
    </header>
  );
}
