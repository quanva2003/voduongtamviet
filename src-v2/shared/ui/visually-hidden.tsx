import { type HTMLAttributes } from "react";

export type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

export function VisuallyHidden({ children, ...props }: VisuallyHiddenProps) {
  return (
    <span
      className="absolute h-px w-px overflow-hidden border-0 p-0 whitespace-nowrap [-webkit-clip-path:inset(50%)] [clip-path:inset(50%)]"
      style={{ margin: "-1px" }}
      {...props}
    >
      {children}
    </span>
  );
}
