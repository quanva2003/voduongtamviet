export type AgeGroup = "kids" | "teens" | "adults" | "all";
export type Level = "beginner" | "intermediate" | "advanced" | "all";
export type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export interface ClassSchedule {
  id: string;
  locationId: string;
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
  ageGroup: AgeGroup;
  level: Level;
  instructorId: string;
  capacity?: number;
}
