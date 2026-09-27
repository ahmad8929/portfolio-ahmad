"use client";

import { useEffect, useState } from "react";

export default function Ticker({
  words,
  className = "",
  wordClassName = "",
}: {
  words: string[];
  className?: string;
  wordClassName?: string;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => n + 1), 2200);
    return () => clearInterval(id);
  }, []);

  // Duplicate the first word at the end so the loop wraps seamlessly.
  const list = [...words, words[0]];
  const idx = i % list.length;

  return (
    <span className={`ticker ${className}`}>
      <span
        className="ticker-track"
        style={{
          transform: `translateY(-${idx * 1.15}em)`,
          transition: idx === 0 ? "none" : "transform 0.8s var(--ease-out-expo)",
        }}
        onTransitionEnd={() => idx === list.length - 1 && setI(0)}
      >
        {list.map((w, k) => (
          <span key={k} className={wordClassName} aria-hidden={k !== idx}>
            {w}
          </span>
        ))}
      </span>
    </span>
  );
}
