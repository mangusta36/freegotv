import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = { href: string; children: ReactNode; variant?: "primary" | "secondary" | "outline" | "ghost"; className?: string };

export function CTAButton({ href, children, variant = "primary", className = "" }: Props) {
  return <Link href={href} className={`btn-${variant} ${className}`}>{children}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>;
}
