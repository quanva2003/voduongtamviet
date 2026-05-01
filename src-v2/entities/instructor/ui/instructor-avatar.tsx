import { cn } from "@/shared/lib/cn";
import { Picture } from "@/shared/ui";

import type { Instructor } from "../model/types";

interface InstructorAvatarProps {
  instructor: Instructor;
  showBeltRank?: boolean;
  className?: string;
}

export function InstructorAvatar({
  instructor,
  showBeltRank = false,
  className,
}: InstructorAvatarProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <Picture
        src={instructor.photo}
        alt={instructor.name}
        aspectRatio="1/1"
        className="w-full overflow-hidden rounded-full"
      />
      {showBeltRank && (
        <span className="absolute right-0 bottom-0 rounded-full bg-sumi-ink px-2 py-0.5 text-[length:var(--text-body-sm)] text-washi">
          {instructor.beltRank}
        </span>
      )}
    </div>
  );
}
