import { type ReactNode, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

import { SectionEyebrow, type SectionEyebrowProps } from "./section-eyebrow";

type ZenVariant = "washi" | "paper";

export interface ZenBlockProps extends HTMLAttributes<HTMLElement> {
  variant?: ZenVariant;
  eyebrow?: SectionEyebrowProps;
  children: ReactNode;
}

const variantClasses: Record<ZenVariant, string> = {
  washi: "bg-washi",
  paper: "bg-sumi-paper",
};

export function ZenBlock({
  variant = "washi",
  eyebrow,
  children,
  className,
  ...props
}: ZenBlockProps) {
  return (
    <section className={cn("py-[var(--space-24)]", variantClasses[variant], className)} {...props}>
      {eyebrow && <SectionEyebrow {...eyebrow} className="mb-6" />}
      {children}
    </section>
  );
}
