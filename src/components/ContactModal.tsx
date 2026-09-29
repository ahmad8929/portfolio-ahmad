"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import { sendMessage } from "@/lib/sendMessage";

const topics = ["Full-time role", "Freelance project", "Just saying hi"];
type Status = "idle" | "sending" | "sent" | "mailto" | "error";

/**
 * Global "Let's talk" dialog. Any element with `data-contact` opens it,
 * so server components can trigger it without becoming client components.
 */
export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(topics[0]);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState<"" | "email" | "phone">("");
  const firstField = useRef<HTMLInputElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const trigger = (e.target as Element | null)?.closest?.("[data-contact]");
      if (!trigger) return;
      e.preventDefault();
      setStatus("idle");
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    const t = setTimeout(() => firstField.current?.focus(), 350);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, close]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const result = await sendMessage({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        message: String(data.get("message") ?? ""),
        topic,
      });
      setStatus(result);
      if (result === "sent") form.reset();
    } catch {
      setStatus("error");
    }
  }

  async function copy(value: string, which: "email" | "phone") {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(which);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      /* clipboard blocked — links still work */
    }
  }

  const phoneDigits = profile.phone.replace(/\D/g, "");
  const field =
    "peer w-full rounded-2xl border border-ink/10 bg-white px-4 pb-2.5 pt-6 text-base text-ink outline-none transition-colors placeholder:text-transparent focus:border-ink";
  const label =
    "pointer-events-none absolute left-4 top-4 text-base text-ink/45 transition-all duration-300 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-coral peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[11px]";

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-end justify-center p-0 transition-[visibility] sm:items-center sm:p-6 ${
        open ? "visible" : "invisible delay-500"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      aria-hidden={!open}
    >
      <div
        onClick={close}
        className={`absolute inset-0 bg-ink/70 backdrop-blur-md transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
      />

      <div
        className={`relative grid max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-[2rem] bg-paper text-ink shadow-2xl transition-all duration-700 ease-[var(--ease-out-expo)] sm:rounded-[2rem] md:grid-cols-[0.9fr_1.1fr] md:overflow-hidden ${
          open ? "translate-y-0 scale-100 opacity-100" : "translate-y-16 scale-95 opacity-0"
        }`}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-ink/5 text-lg transition-all duration-300 hover:rotate-90 hover:bg-ink hover:text-paper"
        >
          ✕
        </button>

        {/* Left: direct contact */}
        <div className="relative overflow-hidden bg-ink p-8 text-paper md:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-lime/20 blur-3xl" />
          <p className="relative flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-lime">
            <span className="pulse-dot size-2 rounded-full bg-lime" /> Available now
          </p>
          <h2 id="contact-title" className="relative mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight">
            Let&apos;s <span className="font-serif font-normal italic text-lime">talk</span>.
          </h2>
          <p className="relative mt-3 text-paper/60">
            Hiring, a freelance project or an idea — drop a message and I&apos;ll reply within a day.
          </p>

          <ul className="relative mt-8 space-y-3">
            <li className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <a href={`mailto:${profile.email}`} className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/40">Email</span>
                <span className="block truncate font-medium">{profile.email}</span>
              </a>
              <button
                type="button"
                onClick={() => copy(profile.email, "email")}
                className="shrink-0 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink"
              >
                {copied === "email" ? "Copied ✓" : "Copy"}
              </button>
            </li>
            <li className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <a href={`tel:+${phoneDigits}`} className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-widest text-paper/40">Phone</span>
                <span className="block font-medium">{profile.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => copy(profile.phone, "phone")}
                className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-xs font-bold"
              >
                {copied === "phone" ? "Copied ✓" : "Copy"}
              </button>
            </li>
          </ul>

          <div className="relative mt-4 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/${phoneDigits}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25d366] px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              WhatsApp ↗
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-paper hover:text-ink"
            >
              Resume ↓
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="p-8 md:p-10">
          {status === "sent" ? (
            <div className="flex h-full min-h-80 flex-col items-center justify-center text-center">
              <span className="grid size-20 place-items-center rounded-full bg-lime text-4xl">✓</span>
              <h3 className="mt-6 font-display text-3xl font-bold">Message sent!</h3>
              <p className="mt-2 text-ink/60">Thanks for reaching out — I&apos;ll get back to you within a day.</p>
              <button onClick={close} className="mt-8 rounded-full bg-ink px-6 py-3 font-semibold text-paper">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <p className="font-mono text-xs uppercase tracking-widest text-ink/50">I&apos;m reaching out about</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {topics.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTopic(t)}
                    className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                      topic === t ? "border-ink bg-ink text-lime" : "border-ink/15 hover:border-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="relative">
                  <input ref={firstField} id="m-name" name="name" required placeholder="Name" className={field} />
                  <label htmlFor="m-name" className={label}>Your name</label>
                </div>
                <div className="relative">
                  <input id="m-email" name="email" type="email" required placeholder="Email" className={field} />
                  <label htmlFor="m-email" className={label}>Email address</label>
                </div>
              </div>
              <div className="relative mt-3">
                <textarea id="m-message" name="message" required rows={5} placeholder="Message" className={`${field} resize-none`} />
                <label htmlFor="m-message" className={label}>Tell me about it</label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-fill group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-ink py-4 text-lg font-semibold text-paper transition-colors duration-500 [--fill:var(--color-lime)] hover:text-ink disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45">→</span>
              </button>
              {status === "mailto" && (
                <p className="mt-3 text-center text-sm text-ink/60">Your email app opened with the message ready — just hit send.</p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center text-sm text-coral">
                  Couldn&apos;t send — please email me at {profile.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
