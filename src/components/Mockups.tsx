import Image from "next/image";

export function Browser({
  src,
  alt,
  url,
  className = "",
  sizes = "(max-width: 1024px) 95vw, 700px",
  priority = false,
}: {
  src: string;
  alt: string;
  url: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`browser bg-ink-3 ${className}`}>
      <div className="browser-bar">
        <i />
        <i />
        <i />
        <span className="ml-3 truncate rounded-md bg-black/30 px-3 py-0.5 font-mono text-[10px] text-paper/50">{url}</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top transition-transform duration-[1.5s] ease-[var(--ease-out-expo)] group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export function Phone({ src, alt, className = "", priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <Image src={src} alt={alt} fill sizes="240px" priority={priority} className="object-cover object-top" />
      </div>
    </div>
  );
}

/** Three phones fanned out — used for mobile-first projects. */
export function PhoneFan({ shots, name }: { shots: string[]; name: string }) {
  const [a, b, c] = shots;
  return (
    <div className="relative mx-auto flex aspect-[4/3] w-full max-w-xl items-center justify-center">
      {c && <Phone src={c} alt={`${name} screen 3`} className="absolute right-[6%] w-[30%] rotate-[8deg] opacity-90 [transform:translateZ(20px)]" />}
      {b && <Phone src={b} alt={`${name} screen 2`} className="absolute left-[6%] w-[30%] -rotate-[8deg] opacity-90 [transform:translateZ(20px)]" />}
      {a && <Phone src={a} alt={`${name} screen 1`} className="relative z-10 w-[36%] [transform:translateZ(60px)]" />}
    </div>
  );
}

/** Styled cover for projects without a screenshot. */
export function ArtCover({ name, accent, kind }: { name: string; accent: string; kind: string }) {
  const initials = name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <div
      className="relative grid size-full place-items-center overflow-hidden bg-ink-2"
      style={{ "--c": accent } as React.CSSProperties}
    >
      <div className="art-grid absolute inset-0" aria-hidden />
      <div className="absolute size-[70%] rounded-full bg-[var(--c)] opacity-25 blur-3xl" aria-hidden />
      <div className="relative text-center">
        <span className="font-display text-6xl font-extrabold tracking-tighter text-[var(--c)] transition-transform duration-700 group-hover:scale-110">
          {initials}
        </span>
        <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-paper/50">{kind.split("·").pop()}</p>
      </div>
    </div>
  );
}
