import { forwardRef, useId, type SelectHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options?: SelectOption[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, id, children, ...props }, ref) => {
    const autoId = useId();
    const selectId = id ?? autoId;
    const errorId = `${selectId}-error`;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={selectId}
            className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.15em] text-text-muted uppercase"
          >
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full border-0 border-b border-border bg-transparent",
            "py-2 text-[length:var(--text-body)] text-text-primary",
            "transition-colors duration-300",
            "focus-visible:border-b-2 focus-visible:border-shu-seal focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-40",
            error && "border-danger",
            className,
          )}
          {...props}
        >
          {children ??
            options?.map(({ value, label: optLabel }) => (
              <option key={value} value={value}>
                {optLabel}
              </option>
            ))}
        </select>
        {error && (
          <span id={errorId} role="alert" className="text-[12px] text-danger">
            {error}
          </span>
        )}
      </div>
    );
  },
);
Select.displayName = "Select";
