import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...props }, ref) => {
    const autoId = useId();
    const checkId = id ?? autoId;

    return (
      <label htmlFor={checkId} className="inline-flex cursor-pointer items-center gap-2">
        <input
          ref={ref}
          type="checkbox"
          id={checkId}
          className={cn(
            "size-4 cursor-pointer rounded-[var(--radius-sm)] border border-border-strong accent-shu-seal",
            "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-shu-seal",
            className,
          )}
          {...props}
        />
        {label && (
          <span className="text-[length:var(--text-body)] text-text-primary select-none">
            {label}
          </span>
        )}
      </label>
    );
  },
);
Checkbox.displayName = "Checkbox";
