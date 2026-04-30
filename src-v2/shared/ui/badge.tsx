import { type HTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type BadgeColor = "info" | "success" | "warning" | "danger" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  pill?: boolean;
}

const colorClasses: Record<BadgeColor, string> = {
  info: "bg-info/15 text-info border-info/30",
  success: "bg-success/15 text-success border-success/30",
  warning: "bg-warning/15 text-warning border-warning/30",
  danger: "bg-danger/15 text-danger border-danger/30",
  neutral: "bg-border/30 text-text-secondary border-border",
};

export function Badge({
  color = "neutral",
  pill = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-0.5",
        "text-[length:var(--text-body-sm)] font-medium",
        pill ? "rounded-full" : "rounded-[var(--radius-sm)]",
        colorClasses[color],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function Pill({ className, ...props }: BadgeProps) {
  return <Badge pill className={className} {...props} />;
}
