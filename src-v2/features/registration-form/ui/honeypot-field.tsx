import type { UseFormRegister } from "react-hook-form";

import type { RegistrationFormValues } from "../model/use-registration";

interface HoneypotFieldProps {
  register: UseFormRegister<RegistrationFormValues>;
}

export function HoneypotField({ register }: HoneypotFieldProps) {
  return (
    <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
      <input {...register("honeypot")} type="text" tabIndex={-1} autoComplete="off" />
    </div>
  );
}
