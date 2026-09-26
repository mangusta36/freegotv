export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  const position = align === "center" ? "mx-auto text-center" : "";
  return <div className={`max-w-2xl ${position}`}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-zinc-950 sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">{description}</p>}
  </div>;
}
