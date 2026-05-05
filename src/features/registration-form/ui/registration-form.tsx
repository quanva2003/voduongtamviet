import { useTranslation } from "react-i18next";

import { locations } from "@/entities/location";
import type { Locale } from "@/shared/i18n";
import { Button, Checkbox, Input, Select, Textarea } from "@/shared/ui";

import { useRegistration } from "../model/use-registration";

import { HoneypotField } from "./honeypot-field";
import { SuccessMessage } from "./success-message";

const EXPERIENCE_VALUES = ["none", "beginner", "intermediate", "advanced"] as const;

export function RegistrationForm() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const { form, success, setSuccess, onSubmit } = useRegistration();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const localeLocations = locations[locale] ?? locations.vi;

  if (success) {
    return <SuccessMessage onReset={() => setSuccess(false)} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="relative flex flex-col gap-6"
      aria-label={t("registration.form.ariaLabel")}
    >
      <HoneypotField register={register} />

      <Input
        label={t("registration.form.name")}
        {...register("name")}
        error={errors.name ? t(errors.name.message ?? "") : undefined}
        autoComplete="name"
        required
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label={t("registration.form.email")}
          type="email"
          {...register("email")}
          error={errors.email ? t(errors.email.message ?? "") : undefined}
          autoComplete="email"
          required
        />
        <Input
          label={t("registration.form.phone")}
          type="tel"
          {...register("phone")}
          error={errors.phone ? t(errors.phone.message ?? "") : undefined}
          autoComplete="tel"
          placeholder="0912 345 678"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Input
          label={t("registration.form.age")}
          type="number"
          min={5}
          max={80}
          {...register("age")}
          error={errors.age ? t(errors.age.message ?? "") : undefined}
          required
        />
        <Select
          label={t("registration.form.experience")}
          {...register("experience")}
          error={errors.experience ? t(errors.experience.message ?? "") : undefined}
          required
        >
          <option value="">{t("registration.form.experiencePlaceholder")}</option>
          {EXPERIENCE_VALUES.map((v) => (
            <option key={v} value={v}>
              {t(`registration.form.experienceOptions.${v}`)}
            </option>
          ))}
        </Select>
      </div>

      <Select
        label={t("registration.form.location")}
        {...register("locationId")}
        error={errors.locationId ? t(errors.locationId.message ?? "") : undefined}
        required
      >
        <option value="">{t("registration.form.locationPlaceholder")}</option>
        {localeLocations.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </Select>

      <Textarea
        label={t("registration.form.message")}
        {...register("message")}
        error={errors.message ? t(errors.message.message ?? "") : undefined}
        rows={4}
        placeholder={t("registration.form.messagePlaceholder")}
      />

      <div className="flex flex-col gap-1">
        <Checkbox {...register("consent")} label={t("registration.form.consent")} />
        {errors.consent && (
          <span role="alert" className="text-[12px] text-danger">
            {t(errors.consent.message ?? "")}
          </span>
        )}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} arrow className="self-start">
        {t("registration.form.submit")}
      </Button>
    </form>
  );
}
