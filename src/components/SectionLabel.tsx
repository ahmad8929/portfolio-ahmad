export default function SectionLabel({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  return (
    <div data-reveal className="mb-10 flex items-center gap-4 font-mono text-sm uppercase tracking-[0.2em]">
      <span className={dark ? "text-lime" : "text-coral"}>{index}</span>
      <span className={`h-px w-12 ${dark ? "bg-paper/30" : "bg-ink/30"}`} />
      <span className={dark ? "text-paper/60" : "text-ink/60"}>{label}</span>
    </div>
  );
}
