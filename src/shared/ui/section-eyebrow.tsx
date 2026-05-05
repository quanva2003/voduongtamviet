import { cn } from "@/shared/lib/cn";

export interface SectionEyebrowProps {
  numeral: string;
  label: string;
  className?: string;
}

export function SectionEyebrow({ numeral, label, className }: SectionEyebrowProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2",
        "text-[length:var(--text-eyebrow)] font-medium tracking-[0.15em] text-gold uppercase",
        className,
      )}
    >
      {/* Kanji numerals have no case — reset tracking so they render correctly */}
      <span className="font-kanji tracking-normal normal-case" aria-hidden="true">
        {numeral}
      </span>
      <span aria-hidden="true">·</span>
      <span>{label}</span>
    </p>
  );
}
