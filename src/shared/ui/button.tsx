import { forwardRef, type ButtonHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-sumi-ink text-washi border border-transparent hover:bg-shu-seal",
  secondary:
    "bg-transparent border border-border-strong text-text-primary hover:border-shu-seal hover:text-shu-seal",
  ghost:
    "bg-transparent border border-transparent text-text-primary underline-offset-4 hover:underline",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-[length:var(--text-body-sm)]",
  md: "h-10 px-4 text-[length:var(--text-body)]",
  lg: "h-12 px-6 text-[length:var(--text-body-lg)]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", arrow = false, className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 font-medium transition-colors duration-300 select-none",
        "rounded-[var(--radius-md)]",
        "disabled:cursor-not-allowed disabled:opacity-40",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </button>
  ),
);
Button.displayName = "Button";
