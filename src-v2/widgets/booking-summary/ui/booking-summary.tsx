import type { ClassBooking } from "@/entities/class-booking";
import type { ClassSchedule } from "@/entities/class-schedule";
import { Card, Container, Link, SectionEyebrow } from "@/shared/ui";

const DAY_LABELS: Record<string, string> = {
  monday: "Thứ 2",
  tuesday: "Thứ 3",
  wednesday: "Thứ 4",
  thursday: "Thứ 5",
  friday: "Thứ 6",
  saturday: "Thứ 7",
  sunday: "Chủ nhật",
};

interface BookingSummaryWidgetProps {
  schedule: ClassSchedule;
  bookingDraft: Omit<ClassBooking, "id" | "scheduleId" | "status" | "createdAt">;
  locationName: string;
  instructorName: string;
  editHrefs?: {
    schedule?: string;
    student?: string;
  };
}

export function BookingSummaryWidget({
  schedule,
  bookingDraft,
  locationName,
  instructorName,
  editHrefs,
}: BookingSummaryWidgetProps) {
  return (
    <section className="bg-sumi-paper py-[var(--space-24)]">
      <Container size="md">
        <SectionEyebrow numeral="三" label="XÁC NHẬN" className="mb-6" />
        <h1 className="mb-10 font-display text-[length:var(--text-display-md)] text-text-primary">
          Xem lại thông tin đăng ký
        </h1>

        <div className="flex flex-col gap-6">
          {/* Class info */}
          <Card variant="zen" padding="md">
            <SectionHeader label="Thông tin lớp học" editHref={editHrefs?.schedule} />
            <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Row label="Địa điểm" value={locationName} />
              <Row label="Thứ" value={DAY_LABELS[schedule.dayOfWeek]} />
              <Row label="Giờ học" value={`${schedule.startTime}–${schedule.endTime}`} />
              <Row label="Huấn luyện viên" value={instructorName} />
              {bookingDraft.sessionDate && (
                <Row
                  label="Ngày học thử"
                  value={new Date(bookingDraft.sessionDate).toLocaleDateString("vi-VN")}
                />
              )}
            </dl>
          </Card>

          {/* Student info */}
          <Card variant="zen" padding="md">
            <SectionHeader label="Thông tin học viên" editHref={editHrefs?.student} />
            <dl className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Row label="Họ và tên" value={bookingDraft.studentName} />
              <Row label="Email" value={bookingDraft.studentEmail} />
              <Row label="Số điện thoại" value={bookingDraft.studentPhone} />
              <Row label="Tuổi" value={`${bookingDraft.studentAge} tuổi`} />
              {bookingDraft.parentName && <Row label="Phụ huynh" value={bookingDraft.parentName} />}
              {bookingDraft.parentPhone && (
                <Row label="ĐT phụ huynh" value={bookingDraft.parentPhone} />
              )}
              {bookingDraft.notes && (
                <Row label="Ghi chú" value={bookingDraft.notes} className="sm:col-span-2" />
              )}
            </dl>
          </Card>

          {/* Pricing */}
          <Card variant="featured" padding="md">
            <p className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
              Học phí
            </p>
            <p className="mt-2 font-display text-[length:var(--text-h2)] text-shu-seal">
              350.000 VNĐ/tháng
            </p>
            <p className="mt-1 text-[length:var(--text-body-sm)] text-text-secondary">
              Buổi đầu tiên hoàn toàn miễn phí.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}

function SectionHeader({ label, editHref }: { label: string; editHref?: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-display text-[length:var(--text-h3)] text-text-primary">{label}</p>
      {editHref && (
        <Link to={editHref} className="text-[length:var(--text-body-sm)] text-shu-seal">
          Chỉnh sửa
        </Link>
      )}
    </div>
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
