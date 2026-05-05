import { forwardRef, useId, type InputHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...props }, ref) => {
    const autoId = useId();
    const radioId = id ?? autoId;

    return (
      <label htmlFor={radioId} className="inline-flex cursor-pointer items-center gap-2">
        <input
          ref={ref}
          type="radio"
          id={radioId}
          className={cn(
            "size-4 cursor-pointer border border-border-strong accent-shu-seal",
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
Radio.displayName = "Radio";
