import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { classSchedules } from "@/entities/class-schedule";
import { locations } from "@/entities/location";
import type { Locale } from "@/shared/i18n";
import { Button, Card, Container } from "@/shared/ui";

import { localBookingStore } from "../model/booking-store";
import type { Booking } from "../model/types";

const DAY_LABELS: Record<string, string> = {
  monday: "Thứ 2",
  tuesday: "Thứ 3",
  wednesday: "Thứ 4",
  thursday: "Thứ 5",
  friday: "Thứ 6",
  saturday: "Thứ 7",
  sunday: "CN",
};

export function MyBookingsList() {
  const { t, i18n } = useTranslation();
  const locale = i18n.language as Locale;
  const localeLocations = locations[locale] ?? locations.vi;
  const [bookings, setBookings] = useState<Booking[]>([]);

  const locationMap = Object.fromEntries(localeLocations.map((l) => [l.id, l.name]));

  useEffect(() => {
    void localBookingStore.list().then(setBookings);
  }, []);

  async function handleCancel(id: string) {
    await localBookingStore.cancel(id);
    setBookings(await localBookingStore.list());
  }

  const dateFmt = new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  if (bookings.length === 0) {
    return (
      <Container size="md" className="py-16 text-center">
        <p className="text-[length:var(--text-body-lg)] text-text-muted">
          {t("booking.myBookings.empty")}
        </p>
      </Container>
    );
  }

  return (
    <Container size="md" className="py-10">
      <h1 className="mb-8 font-display text-[length:var(--text-h1)] text-text-primary">
        {t("booking.myBookings.title")}
      </h1>
      <div className="flex flex-col gap-4">
        {bookings.map((b) => {
          const schedule = classSchedules.find((s) => s.id === b.scheduleId);
          const locationName = schedule
            ? (locationMap[schedule.locationId] ?? schedule.locationId)
            : "—";
          const isCancelled = b.status === "cancelled";
          return (
            <Card key={b.id} variant="zen" padding="md" className={isCancelled ? "opacity-50" : ""}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-[length:var(--text-body-sm)] text-text-muted">
                    {b.id}
                  </p>
                  <p className="font-medium text-text-primary">{locationName}</p>
                  {schedule && (
                    <p className="text-[length:var(--text-body-sm)] text-text-secondary">
                      {DAY_LABELS[schedule.dayOfWeek]} · {schedule.startTime}–{schedule.endTime}
                    </p>
                  )}
                  <p className="text-[length:var(--text-body-sm)] text-text-secondary">
                    {dateFmt.format(new Date(b.sessionDate))}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`text-[length:var(--text-body-sm)] ${isCancelled ? "text-text-muted" : "text-shu-seal"}`}
                  >
                    {isCancelled
                      ? t("booking.myBookings.cancelled")
                      : t("booking.myBookings.confirmed")}
                  </span>
                  {!isCancelled && (
                    <Button size="sm" variant="ghost" onClick={() => void handleCancel(b.id)}>
                      {t("booking.myBookings.cancel")}
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}
