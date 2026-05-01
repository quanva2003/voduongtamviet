import { Badge } from "@/shared/ui";

import type { ClassSchedule } from "../model/types";

const DAY_LABELS: Record<string, string> = {
  monday: "Thứ 2",
  tuesday: "Thứ 3",
  wednesday: "Thứ 4",
  thursday: "Thứ 5",
  friday: "Thứ 6",
  saturday: "Thứ 7",
  sunday: "Chủ nhật",
};

const AGE_LABELS: Record<string, string> = {
  kids: "Thiếu nhi",
  teens: "Thanh thiếu niên",
  adults: "Người lớn",
  all: "Mọi lứa tuổi",
};

const LEVEL_LABELS: Record<string, string> = {
  beginner: "Cơ bản",
  intermediate: "Trung cấp",
  advanced: "Nâng cao",
  all: "Mọi cấp độ",
};

interface ScheduleRowProps {
  schedule: ClassSchedule;
  locationName: string;
  instructorName: string;
  className?: string;
}

export function ScheduleRow({
  schedule,
  locationName,
  instructorName,
  className,
}: ScheduleRowProps) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 rounded-[var(--radius-md)] border border-border bg-washi px-4 py-3 ${className ?? ""}`}
    >
      <span className="min-w-[60px] font-medium text-text-primary">
        {DAY_LABELS[schedule.dayOfWeek]}
      </span>
      <span className="text-[length:var(--text-body-sm)] text-text-secondary">
        {schedule.startTime}–{schedule.endTime}
      </span>
      <span className="flex-1 truncate text-[length:var(--text-body-sm)] text-text-muted">
        {locationName}
      </span>
      <Badge color="info">{AGE_LABELS[schedule.ageGroup]}</Badge>
      <Badge color="neutral">{LEVEL_LABELS[schedule.level]}</Badge>
      <span className="text-[length:var(--text-body-sm)] text-text-secondary">
        {instructorName}
      </span>
    </div>
  );
}
