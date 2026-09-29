import { Monitor, Tv, Smartphone, Laptop, Box, Apple } from "lucide-react";
import type { Device } from "@/lib/devices";
import { brandedHeading } from "@/lib/headings";
import { CTAButton } from "./CTAButton";

const icons = { tv: Tv, box: Box, phone: Smartphone, apple: Apple, monitor: Monitor, laptop: Laptop };

export function DeviceCard({ device }: { device: Device }) {
  const Icon = icons[device.kind];
  return <article className="card group p-6 transition hover:-translate-y-1">
    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-zinc-950 text-white shadow-lg shadow-zinc-900/15 transition group-hover:bg-[var(--primary)]"><Icon className="h-7 w-7" /></div>
    <h3 className="mt-5 text-lg font-black">{brandedHeading(device.name)}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-zinc-600">{device.description}</p>
    <CTAButton href="/install#guides" variant="ghost" className="mt-4 -ml-3">View guide</CTAButton>
  </article>;
}
