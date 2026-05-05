import { z } from "zod";

import { isVNPhone } from "../lib/validators";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(2, "registration.form.errors.nameMin")
    .max(80, "registration.form.errors.nameMax"),
  email: z.string().email("registration.form.errors.emailInvalid"),
  phone: z.string().refine(isVNPhone, { message: "registration.form.errors.phoneInvalid" }),
  age: z.coerce
    .number()
    .min(5, "registration.form.errors.ageMin")
    .max(80, "registration.form.errors.ageMax"),
  experience: z.enum(["none", "beginner", "intermediate", "advanced"] as const, {
    message: "registration.form.errors.experienceRequired",
  }),
  locationId: z.string().min(1, "registration.form.errors.locationRequired"),
  message: z.string().max(500, "registration.form.errors.messageMax").optional(),
  honeypot: z.string().max(0),
  consent: z.literal(true, {
    message: "registration.form.errors.consentRequired",
  }),
});

export type RegistrationValues = z.infer<typeof registrationSchema>;
