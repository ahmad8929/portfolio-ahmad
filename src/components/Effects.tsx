"use client";

import { useEffect, useRef } from "react";

/**
 * One delegated listener set for the whole page:
 *  - [data-reveal]    fades/slides in when scrolled into view
 *  - [data-spot]      receives --mx / --my (pointer position) for spotlights & glow borders
 *  - [data-tilt]      receives --rx / --ry for a 3D tilt
 *  - [data-magnetic]  drifts toward the pointer
 *  - custom cursor that grows over interactive elements (fine pointers only)
 */
export default function Effects() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    const observeAll = () =>
      document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    observeAll();
    // Pick up elements that mount later (re-renders, hot reloads).
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let tx = -100, ty = -100, rx = -100, ry = -100, raf = 0;
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      if (dot.current) dot.current.style.transform = `translate(${tx}px, ${ty}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    if (finePointer && !reduced) {
      document.documentElement.classList.add("has-cursor");
      raf = requestAnimationFrame(loop);
    }

    const onMove = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const target = e.target as Element | null;
      if (!target?.closest) return;

      const spot = target.closest<HTMLElement>("[data-spot]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
      if (reduced) return;

      const tilt = target.closest<HTMLElement>("[data-tilt]");
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        const max = Number(tilt.dataset.tilt) || 6;
        tilt.style.setProperty("--ry", `${px * max}deg`);
        tilt.style.setProperty("--rx", `${-py * max}deg`);
      }

      const mag = target.closest<HTMLElement>("[data-magnetic]");
      if (mag) {
        const r = mag.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        mag.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
      }

      ring.current?.classList.toggle("is-hover", !!target.closest("a, button, [data-cursor]"));
    };

    const onOut = (e: PointerEvent) => {
      const from = e.target as Element | null;
      const to = e.relatedTarget as Node | null;
      const tilt = from?.closest?.<HTMLElement>("[data-tilt]");
      if (tilt && !tilt.contains(to)) {
        tilt.style.setProperty("--rx", "0deg");
        tilt.style.setProperty("--ry", "0deg");
      }
      const mag = from?.closest?.<HTMLElement>("[data-magnetic]");
      if (mag && !mag.contains(to)) mag.style.transform = "";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });
    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onOut);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px]">
        <div className="scroll-progress h-full bg-gradient-to-r from-lime via-sky to-coral" />
      </div>
      <div ref={dot} className="cursor-dot hidden [.has-cursor_&]:block" aria-hidden />
      <div ref={ring} className="cursor-ring hidden [.has-cursor_&]:block" aria-hidden />
    </>
  );
}
