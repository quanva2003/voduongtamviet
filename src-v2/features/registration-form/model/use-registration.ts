import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { registrationSchema } from "./schema";
import { REGISTRATIONS_KEY, type RegistrationEntry } from "./types";

export interface RegistrationFormValues {
  name: string;
  email: string;
  phone: string;
  age: number;
  experience: "none" | "beginner" | "intermediate" | "advanced";
  locationId: string;
  message?: string;
  honeypot: string;
  consent: boolean;
}

export function useRegistration() {
  const [success, setSuccess] = useState(false);

  const form = useForm<RegistrationFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(registrationSchema) as any,
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      age: undefined as unknown as number,
      experience: undefined as unknown as RegistrationFormValues["experience"],
      locationId: "",
      message: "",
      honeypot: "",
      consent: false,
    },
  });

  function onSubmit(values: RegistrationFormValues) {
    if (values.honeypot) return;

    const entry: RegistrationEntry = {
      id: `reg-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      name: values.name,
      email: values.email,
      phone: values.phone,
      age: values.age,
      experience: values.experience,
      locationId: values.locationId,
      message: values.message,
    };

    try {
      const existing: RegistrationEntry[] = JSON.parse(
        localStorage.getItem(REGISTRATIONS_KEY) ?? "[]",
      );
      localStorage.setItem(REGISTRATIONS_KEY, JSON.stringify([...existing, entry]));
    } catch {
      // localStorage may be unavailable
    }

    setSuccess(true);
    form.reset();
  }

  return { form, success, setSuccess, onSubmit };
}
