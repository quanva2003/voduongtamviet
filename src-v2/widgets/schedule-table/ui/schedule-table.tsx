import { useState } from "react";

import { ScheduleRow } from "@/entities/class-schedule";
import type { ClassSchedule } from "@/entities/class-schedule";
import { Button, Container, SectionEyebrow } from "@/shared/ui";

const DAYS_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const DAY_LABELS: Record<string, string> = {
  monday: "Thứ 2",
  tuesday: "Thứ 3",
  wednesday: "Thứ 4",
  thursday: "Thứ 5",
  friday: "Thứ 6",
  saturday: "Thứ 7",
  sunday: "CN",
};

interface ScheduleTableProps {
  schedules: ClassSchedule[];
  view?: "grid" | "list";
  filterLocationId?: string;
  filterAgeGroup?: string;
  locationNames: Record<string, string>;
  instructorNames: Record<string, string>;
  eyebrow?: { numeral: string; label: string };
  title?: string;
}

export function ScheduleTable({
  schedules,
  view: defaultView = "list",
  filterLocationId,
  filterAgeGroup,
  locationNames,
  instructorNames,
  eyebrow,
  title,
}: ScheduleTableProps) {
  const [view, setView] = useState<"grid" | "list">(defaultView);

  const filtered = schedules.filter((s) => {
    if (filterLocationId && s.locationId !== filterLocationId) return false;
    if (filterAgeGroup && filterAgeGroup !== "all" && s.ageGroup !== filterAgeGroup) return false;
    return true;
  });

  // Force list on mobile (< 640px handled by CSS)
  return (
    <section className="bg-washi py-[var(--space-24)]">
      <Container size="xl">
        {eyebrow && (
          <SectionEyebrow numeral={eyebrow.numeral} label={eyebrow.label} className="mb-3" />
        )}
        {title && (
          <h2 className="mb-8 font-display text-[length:var(--text-h2)] text-text-primary">
            {title}
          </h2>
        )}

        {/* View toggle — hidden on mobile */}
        <div className="mb-6 hidden items-center gap-2 sm:flex">
          <Button
            size="sm"
            variant={view === "list" ? "primary" : "secondary"}
            onClick={() => setView("list")}
          >
            Danh sách
          </Button>
          <Button
            size="sm"
            variant={view === "grid" ? "primary" : "secondary"}
            onClick={() => setView("grid")}
          >
            Lịch tuần
          </Button>
        </div>

        {/* Always list on mobile */}
        <div className="flex flex-col gap-3 sm:hidden">
          {filtered.map((s) => (
            <ScheduleRow
              key={s.id}
              schedule={s}
              locationName={locationNames[s.locationId] ?? s.locationId}
              instructorName={instructorNames[s.instructorId] ?? s.instructorId}
            />
          ))}
        </div>

        {/* Desktop: list or grid */}
        <div className="hidden sm:block">
          {view === "list" ? (
            <div className="flex flex-col gap-3">
              {filtered.map((s) => (
                <ScheduleRow
                  key={s.id}
                  schedule={s}
                  locationName={locationNames[s.locationId] ?? s.locationId}
                  instructorName={instructorNames[s.instructorId] ?? s.instructorId}
                />
              ))}
            </div>
          ) : (
            <GridView
              schedules={filtered}
              locationNames={locationNames}
              instructorNames={instructorNames}
            />
          )}
        </div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-text-muted">Không có lịch học phù hợp.</p>
        )}
      </Container>
    </section>
  );
}

function GridView({
  schedules,
  locationNames,
  instructorNames,
}: {
  schedules: ClassSchedule[];
  locationNames: Record<string, string>;
  instructorNames: Record<string, string>;
}) {
  const byDay = Object.fromEntries(
    DAYS_ORDER.map((day) => [day, schedules.filter((s) => s.dayOfWeek === day)]),
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-[length:var(--text-body-sm)]">
        <thead>
          <tr>
            {DAYS_ORDER.map((day) => (
              <th
                key={day}
                className="border border-border bg-sumi-paper px-3 py-2 text-center font-medium text-text-secondary"
              >
                {DAY_LABELS[day] ?? day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {DAYS_ORDER.map((day) => (
              <td key={day} className="border border-border px-2 py-2 align-top">
                <div className="flex flex-col gap-2">
                  {(byDay[day] ?? []).map((s) => (
                    <div key={s.id} className="rounded-[var(--radius-sm)] bg-sumi-paper p-2">
                      <p className="font-medium text-text-primary">
                        {s.startTime}–{s.endTime}
                      </p>
                      <p className="text-text-muted">
                        {locationNames[s.locationId] ?? s.locationId}
                      </p>
                      <p className="text-text-secondary">
                        {instructorNames[s.instructorId] ?? s.instructorId}
                      </p>
                    </div>
                  ))}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
