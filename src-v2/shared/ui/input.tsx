import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const errorId = `${inputId}-error`;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.15em] text-text-muted uppercase"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full border-0 border-b border-border bg-transparent",
            "py-2 text-[length:var(--text-body)] text-text-primary",
            "placeholder:text-text-muted",
            "transition-colors duration-300",
            "focus-visible:border-b-2 focus-visible:border-shu-seal focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error && "border-danger",
            className,
          )}
          {...props}
        />
        {error && (
          <span id={errorId} role="alert" className="text-[12px] text-danger">
            {error}
          </span>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
