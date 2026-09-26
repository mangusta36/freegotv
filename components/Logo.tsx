import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" aria-label="FreeGoTV home" className="inline-flex items-center gap-2 font-black tracking-tight">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--primary)] text-lg text-white shadow-lg shadow-red-500/30">F</span>
      <span className={`text-xl ${light ? "text-white" : "text-zinc-950"}`}>FreeGo<span className="text-[var(--primary)]">TV</span></span>
    </Link>
  );
}
