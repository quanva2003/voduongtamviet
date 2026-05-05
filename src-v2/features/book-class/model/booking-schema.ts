import { z } from "zod";

import { isVNPhone } from "@/features/registration-form";

export const contactSchema = z
  .object({
    studentName: z.string().min(2, "booking.errors.nameMin").max(80, "booking.errors.nameMax"),
    studentAge: z.coerce.number().min(5, "booking.errors.ageMin").max(80, "booking.errors.ageMax"),
    studentPhone: z.string().refine(isVNPhone, { message: "booking.errors.phoneInvalid" }),
    studentEmail: z.string().email("booking.errors.emailInvalid"),
    parentName: z.string().max(80).optional(),
    parentPhone: z
      .string()
      .optional()
      .refine((v) => !v || isVNPhone(v), { message: "booking.errors.phoneInvalid" }),
    notes: z.string().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.studentAge < 18 && !data.parentName) {
      ctx.addIssue({
        path: ["parentName"],
        code: z.ZodIssueCode.custom,
        message: "booking.errors.parentRequired",
      });
    }
  });

export type ContactValues = z.infer<typeof contactSchema>;
