"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import SectionLabel from "./SectionLabel";

// Free key from https://web3forms.com (sent to your inbox). Without it the form falls back to opening the mail app.
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "sent" | "error";

const topics = ["Full-time role", "Freelance project", "Just saying hi"];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);
  const [topic, setTopic] = useState(topics[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n— ${name} (${email})`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`${topic} — from ${name}`)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio: ${topic} — from ${name}`,
          from_name: name,
          name,
          email,
          topic,
          message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const field =
    "peer w-full border-b-2 border-ink/15 bg-transparent pb-3 pt-6 text-lg outline-none transition-colors placeholder:text-transparent focus:border-ink";
  const label =
    "pointer-events-none absolute left-0 top-6 text-lg text-ink/45 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-coral peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs";

  return (
    <section id="contact" className="surface-light sheet sheet-bottom grain py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="07" label="Contact" />

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h2 data-reveal className="font-display text-[clamp(2.8rem,7vw,6rem)] font-extrabold leading-[0.95] tracking-tight">
              Let&apos;s build
              <br />
              <span className="font-serif font-normal italic text-coral">something</span> great.
            </h2>
            <p data-reveal className="mt-8 max-w-md text-lg text-ink/65">
              Hiring for a full-time role, need a website for your business, or have an idea you want built? I reply
              within a day.
            </p>

            <div data-reveal className="mt-10 space-y-4">
              <button
                onClick={copyEmail}
                className="group flex w-full max-w-md items-center justify-between rounded-2xl bg-ink px-6 py-5 text-left text-paper transition-transform duration-300 hover:scale-[1.02]"
              >
                <span>
                  <span className="block font-mono text-xs uppercase tracking-widest text-paper/50">Email</span>
                  <span className="text-lg font-medium">{profile.email}</span>
                </span>
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                  {copied ? "Copied ✓" : "Copy"}
                </span>
              </button>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn", href: profile.socials.linkedin },
                  { label: "GitHub", href: profile.socials.github },
                  { label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="btn-fill rounded-full border-2 border-ink px-5 py-2.5 font-semibold transition-colors duration-500 [--fill:var(--color-ink)] hover:text-paper"
                  >
                    {s.label} ↗
                  </a>
                ))}
              </div>
              <a
                href={profile.resume}
                download
                className="link-draw inline-block pt-2 text-lg font-semibold text-coral"
              >
                Download my resume (PDF) ↓
              </a>
            </div>
          </div>

          <form
            data-reveal="right"
            onSubmit={onSubmit}
            className="rounded-[2rem] border border-ink/10 bg-white/70 p-7 shadow-2xl shadow-ink/5 backdrop-blur md:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-ink/50">I&apos;m reaching out about</p>
            <div className="mt-4 flex flex-wrap gap-2">
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

            <div className="mt-8 space-y-6">
              <div className="relative">
                <input id="name" name="name" required placeholder="Name" className={field} />
                <label htmlFor="name" className={label}>
                  Your name
                </label>
              </div>
              <div className="relative">
                <input id="email" name="email" type="email" required placeholder="Email" className={field} />
                <label htmlFor="email" className={label}>
                  Email address
                </label>
              </div>
              <div className="relative">
                <textarea id="message" name="message" required rows={4} placeholder="Message" className={`${field} resize-none`} />
                <label htmlFor="message" className={label}>
                  Tell me about it
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-fill group mt-10 flex w-full items-center justify-center gap-3 rounded-full bg-ink py-4 text-lg font-semibold text-paper transition-colors duration-500 [--fill:var(--color-lime)] hover:text-ink disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent — talk soon!" : "Send message"}
              <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45">→</span>
            </button>
            {status === "error" && (
              <p className="mt-4 text-center text-sm text-coral">
                Something went wrong — please email me directly at {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
