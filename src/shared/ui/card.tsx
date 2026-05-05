import { forwardRef, type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type CardVariant = "zen" | "paper" | "dark" | "featured";
type CardPadding = "sm" | "md" | "lg";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  padding?: CardPadding;
}

const variantClasses: Record<CardVariant, string> = {
  zen: "bg-washi border border-border",
  paper: "bg-sumi-paper",
  dark: "bg-sumi-ink text-washi",
  featured: "bg-washi border border-border border-l-2 border-l-shu-seal",
};

const paddingClasses: Record<CardPadding, string> = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "zen", padding = "md", className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-[var(--radius-lg)]",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Card.displayName = "Card";
