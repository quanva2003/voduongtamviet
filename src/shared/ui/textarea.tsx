import { forwardRef, useId, type TextareaHTMLAttributes } from "react";

import { cn } from "@/shared/lib/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const autoId = useId();
    const textareaId = id ?? autoId;
    const errorId = `${textareaId}-error`;

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label
            htmlFor={textareaId}
            className="text-[length:var(--text-eyebrow)] font-medium tracking-[0.15em] text-text-muted uppercase"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? errorId : undefined}
          className={cn(
            "w-full resize-y border-0 border-b border-border bg-transparent",
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
Textarea.displayName = "Textarea";
