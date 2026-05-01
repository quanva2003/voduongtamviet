import { Card } from "@/shared/ui";

import type { ClassBooking } from "../model/types";

const STATUS_LABELS: Record<string, { label: string; color: string }> = {
  pending: { label: "Chờ xác nhận", color: "text-warning" },
  confirmed: { label: "Đã xác nhận", color: "text-success" },
  cancelled: { label: "Đã huỷ", color: "text-danger" },
};

interface BookingSummaryProps {
  booking: ClassBooking;
}

export function BookingSummary({ booking }: BookingSummaryProps) {
  const status = STATUS_LABELS[booking.status] ?? {
    label: booking.status,
    color: "text-text-secondary",
  };
  const formatted = new Date(booking.sessionDate).toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Card variant="zen" padding="md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
            Thông tin đặt lịch
          </p>
          <h3 className="mt-1 font-display text-[length:var(--text-h3)] text-text-primary">
            {booking.studentName}
          </h3>
        </div>
        <span className={`text-[length:var(--text-body-sm)] font-medium ${status.color}`}>
          {status.label}
        </span>
      </div>

      <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Row label="Email" value={booking.studentEmail} />
        <Row label="Số điện thoại" value={booking.studentPhone} />
        <Row label="Tuổi" value={`${booking.studentAge} tuổi`} />
        <Row label="Buổi học" value={formatted} />
        {booking.parentName && <Row label="Phụ huynh" value={booking.parentName} />}
        {booking.parentPhone && <Row label="ĐT phụ huynh" value={booking.parentPhone} />}
        {booking.notes && <Row label="Ghi chú" value={booking.notes} className="sm:col-span-2" />}
      </dl>
    </Card>
  );
}

function Row({ label, value, className }: { label: string; value: string; className?: string }) {
  return (
    <div className={className}>
      <dt className="text-[length:var(--text-body-sm)] text-text-muted">{label}</dt>
      <dd className="mt-0.5 text-[length:var(--text-body)] text-text-primary">{value}</dd>
    </div>
  );
}
