export type { RegistrationValues } from "./schema";

export interface RegistrationEntry {
  id: string;
  submittedAt: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  experience: string;
  locationId: string;
  message?: string;
}

export const REGISTRATIONS_KEY = "vdtv_registrations";
