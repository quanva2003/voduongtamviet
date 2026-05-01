import { useState } from "react";
import { MemoryRouter } from "react-router-dom";

import { articles } from "@/entities/article";
import { classSchedules } from "@/entities/class-schedule";
import { instructors } from "@/entities/instructor";
import { locations } from "@/entities/location";
import { values } from "@/entities/value";
import {
  Badge,
  Button,
  Card,
  Checkbox,
  CinematicBlock,
  Container,
  EnsoCircle,
  Input,
  KanjiAccent,
  Link,
  Pill,
  Picture,
  Radio,
  SectionEyebrow,
  Select,
  Skeleton,
  Textarea,
  VisuallyHidden,
  ZenBlock,
} from "@/shared/ui";
import { ArticleContent } from "@/widgets/article-content";
import { ArticlesGrid } from "@/widgets/articles-grid";
import { BenefitsGrid } from "@/widgets/benefits-grid";
import { BookingSummaryWidget } from "@/widgets/booking-summary";
import { CourseInfo, courseInfoData } from "@/widgets/course-info";
import { CtaSection } from "@/widgets/cta-section";
import { HeroCinematic } from "@/widgets/hero-cinematic";
import { HeroZen } from "@/widgets/hero-zen";
import { InstructorProfile } from "@/widgets/instructor-profile";
import { InstructorsList } from "@/widgets/instructors-list";
import { JourneyTimeline } from "@/widgets/journey-timeline";
import { LocationsMap } from "@/widgets/locations-map";
import { MissionStatement } from "@/widgets/mission-statement";
import { ScheduleTable } from "@/widgets/schedule-table";
import { SiteFooter } from "@/widgets/site-footer";
import { SiteHeader } from "@/widgets/site-header";
import { ValuesGrid } from "@/widgets/values-grid";

import "@/shared/i18n";

type Tab = "primitives" | "widgets";

const LOCATION_NAMES: Record<string, string> = {
  "thuan-giao-1": "Thuận Giao 1",
  "thuan-giao-2": "Thuận Giao 2",
  "thuan-giao-3": "Thuận Giao 3",
  "thcs-thuan-giao": "THCS Thuận Giao",
  "thanh-nha": "Thanh Nhã",
  "an-thanh": "An Thạnh",
};
const INSTRUCTOR_NAMES: Record<string, string> = {
  "nguyen-van-viet": "Thầy Nguyễn Văn Việt",
  "vo-thi-yen-nhi": "Cô Võ Thị Yến Nhi",
  "van-anh-quan": "Thầy Văn Anh Quân",
};

const JOURNEY_ITEMS = [
  {
    year: "2010",
    title: "Thành lập Võ đường Tâm Việt",
    description: "Võ đường Tâm Việt được thành lập với sứ mệnh truyền bá karate truyền thống.",
  },
  {
    year: "2015",
    title: "Đạt chứng nhận quốc tế",
    description: "Được công nhận bởi WKF và trở thành trung tâm uy tín tại Việt Nam.",
  },
  {
    year: "2020",
    title: "Thích ứng với thời đại mới",
    description: "Áp dụng công nghệ vào giảng dạy.",
  },
  {
    year: "2024",
    title: "Tiếp tục phát triển",
    description: "Mở rộng với nhiều cơ sở mới và đội ngũ HLV chuyên nghiệp.",
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-b border-border pb-2 font-display text-[length:var(--text-h2)] text-text-primary">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="w-full">
      <p className="mb-2 text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
        {label}
      </p>
      <div className="flex flex-wrap items-start gap-3">{children}</div>
    </div>
  );
}

function PrimitivesTab() {
  return (
    <div className="min-h-screen bg-washi p-8 text-text-primary">
      <Section title="Button">
        <Row label="Variants">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </Row>
        <Row label="Sizes">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </Row>
        <Row label="With arrow">
          <Button arrow>Register now</Button>
          <Button variant="secondary" arrow>
            Learn more
          </Button>
        </Row>
      </Section>

      <Section title="Card">
        <Row label="Variants">
          <Card variant="zen" className="w-48">
            <p className="text-[length:var(--text-body-sm)]">Zen</p>
          </Card>
          <Card variant="paper" className="w-48">
            <p className="text-[length:var(--text-body-sm)]">Paper</p>
          </Card>
          <Card variant="dark" className="w-48">
            <p className="text-[length:var(--text-body-sm)]">Dark</p>
          </Card>
          <Card variant="featured" className="w-48">
            <p className="text-[length:var(--text-body-sm)]">Featured</p>
          </Card>
        </Row>
      </Section>

      <Section title="Badge / Pill">
        <Row label="Badge colors">
          <Badge color="info">Info</Badge>
          <Badge color="success">Success</Badge>
          <Badge color="warning">Warning</Badge>
          <Badge color="danger">Danger</Badge>
          <Badge color="neutral">Neutral</Badge>
        </Row>
        <Row label="Pill">
          <Pill color="info">Active</Pill>
          <Pill color="success">Published</Pill>
          <Pill color="danger">Removed</Pill>
        </Row>
      </Section>

      <Section title="Input / Textarea / Select">
        <Row label="Input">
          <div className="w-64">
            <Input label="Full name" placeholder="Nguyễn Văn A" />
          </div>
          <div className="w-64">
            <Input label="Email" placeholder="name@example.com" error="Email không hợp lệ" />
          </div>
        </Row>
        <Row label="Textarea">
          <div className="w-64">
            <Textarea label="Ghi chú" placeholder="Nhập ghi chú..." />
          </div>
        </Row>
        <Row label="Select">
          <div className="w-64">
            <Select
              label="Cơ sở"
              options={[
                { value: "q1", label: "Quận 1" },
                { value: "q3", label: "Quận 3" },
              ]}
            />
          </div>
        </Row>
        <Row label="Checkbox / Radio">
          <Checkbox label="Tôi đồng ý điều khoản" />
          <Radio label="Karate" name="martial-art" />
          <Radio label="Judo" name="martial-art" />
        </Row>
      </Section>

      <Section title="Container">
        <Row label="Sizes">
          {(["sm", "md", "lg", "xl"] as const).map((s) => (
            <Container
              key={s}
              size={s}
              className="border border-dashed border-shu-seal py-2 text-center text-[length:var(--text-body-sm)] text-text-secondary"
            >
              {s}
            </Container>
          ))}
        </Row>
      </Section>

      <Section title="Decorative">
        <Row label="EnsoCircle">
          <EnsoCircle size={64} stroke={1.5} variant="closed" />
          <EnsoCircle size={64} stroke={1.5} variant="brushed" />
          <EnsoCircle size={96} stroke={2} variant="brushed" color="var(--color-shu-seal)" />
        </Row>
        <Row label="KanjiAccent">
          <KanjiAccent char="道" size="sm" />
          <KanjiAccent char="武" size="md" color="gold" />
          <KanjiAccent char="心" size="lg" color="shu" />
        </Row>
        <Row label="SectionEyebrow">
          <SectionEyebrow numeral="一" label="GIỚI THIỆU" />
          <SectionEyebrow numeral="二" label="LỊCH HỌC" />
        </Row>
      </Section>

      <Section title="Blocks">
        <div className="w-full space-y-4">
          <CinematicBlock kanjiWatermark="道" className="rounded-[var(--radius-lg)]">
            <Container size="md">
              <SectionEyebrow numeral="一" label="CINEMATIC" className="mb-4" />
              <h3 className="font-display text-[length:var(--text-h2)] italic">CinematicBlock</h3>
            </Container>
          </CinematicBlock>
          <ZenBlock
            variant="washi"
            eyebrow={{ numeral: "二", label: "ZEN" }}
            className="rounded-[var(--radius-lg)]"
          >
            <Container size="md">
              <h3 className="font-display text-[length:var(--text-h2)]">ZenBlock</h3>
            </Container>
          </ZenBlock>
        </div>
      </Section>

      <Section title="Skeleton / Link / Picture">
        <Row label="Skeleton">
          <Skeleton width={200} height={20} />
          <Skeleton width={120} height={20} />
        </Row>
        <Row label="Links">
          <Link to="/">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
        </Row>
        <Row label="Picture">
          <Picture
            src="/images/dojo-placeholder"
            alt="Dojo interior"
            aspectRatio="16/9"
            className="w-64 overflow-hidden rounded-[var(--radius-lg)]"
          />
        </Row>
        <Row label="VisuallyHidden">
          <button
            type="button"
            className="rounded border border-border px-3 py-1 text-[length:var(--text-body-sm)]"
          >
            <VisuallyHidden>Close dialog</VisuallyHidden>
            <span aria-hidden="true">✕</span>
          </button>
        </Row>
      </Section>
    </div>
  );
}

function WidgetsTab() {
  const [articlePage, setArticlePage] = useState(1);

  return (
    <div className="min-h-screen bg-washi text-text-primary">
      {/* Site Header */}
      <div className="relative h-32 bg-sumi-ink">
        <SiteHeader />
        <p className="pt-20 text-center text-[length:var(--text-body-sm)] text-washi/50">
          ↑ SiteHeader (sticky)
        </p>
      </div>

      {/* Hero Cinematic */}
      <HeroCinematic
        eyebrow={{ numeral: "一", label: "VÕ ĐƯỜNG" }}
        headline="Rèn Tâm"
        headlineItalic="Luyện Thân"
        subline="Karate truyền thống — tinh thần võ đạo — phát triển toàn diện."
        ctaPrimary={{ label: "Đăng ký ngay", href: "/registration" }}
        ctaSecondary={{ label: "Tìm hiểu thêm", href: "/about" }}
        kanjiWatermark="武"
      />

      {/* Hero Zen */}
      <HeroZen
        eyebrow={{ numeral: "二", label: "GIỚI THIỆU" }}
        headline="Về Võ đường Tâm Việt"
        subline="Hành trình phát triển và giá trị cốt lõi."
        ctaPrimary={{ label: "Xem chi tiết", href: "/about" }}
      />

      {/* Mission Statement */}
      <MissionStatement
        eyebrow={{ numeral: "三", label: "SỨ MỆNH" }}
        title="Sứ mệnh của chúng tôi"
        paragraphs={[
          "Võ đường Tâm Việt được thành lập với sứ mệnh truyền bá nghệ thuật karate truyền thống.",
          "Chúng tôi tin rằng karate là một môn thể thao toàn diện, giúp con người trở nên mạnh mẽ hơn, tự tin hơn.",
        ]}
      />

      {/* Benefits Grid */}
      <BenefitsGrid
        values={values.vi}
        eyebrow={{ numeral: "四", label: "GIÁ TRỊ" }}
        title="Giá trị cốt lõi"
      />

      {/* Values Grid */}
      <ValuesGrid
        values={values.vi}
        eyebrow={{ numeral: "五", label: "TÂM THÂN THUẬT" }}
        title="Ba trụ cột"
      />

      {/* Journey Timeline */}
      <JourneyTimeline
        items={JOURNEY_ITEMS}
        eyebrow={{ numeral: "六", label: "HÀNH TRÌNH" }}
        title="Hành trình phát triển"
      />

      {/* Instructors List — preview */}
      <InstructorsList
        instructors={instructors.vi}
        variant="preview"
        eyebrow={{ numeral: "七", label: "HUẤN LUYỆN VIÊN" }}
        title="Đội ngũ huấn luyện viên"
        viewAllHref="/instructors"
      />

      {/* Instructor Profile */}
      <div className="border-t border-border">
        <InstructorProfile instructor={instructors.vi[0]!} />
      </div>

      {/* Locations Map */}
      <LocationsMap
        locations={locations.vi}
        eyebrow={{ numeral: "八", label: "CƠ SỞ" }}
        title="Địa điểm học"
      />

      {/* Course Info */}
      <CourseInfo
        items={courseInfoData.vi}
        eyebrow={{ numeral: "九", label: "KHÓA HỌC" }}
        title="Thông tin khóa học"
      />

      {/* Schedule Table */}
      <ScheduleTable
        schedules={classSchedules}
        locationNames={LOCATION_NAMES}
        instructorNames={INSTRUCTOR_NAMES}
        eyebrow={{ numeral: "十", label: "LỊCH HỌC" }}
        title="Lịch học tuần"
      />

      {/* Articles Grid */}
      <ArticlesGrid
        articles={articles.vi}
        page={articlePage}
        perPage={3}
        onPageChange={setArticlePage}
        eyebrow={{ numeral: "十一", label: "BÀI VIẾT" }}
        title="Bài viết & Tin tức"
        getCategoryLabel={(cat) => cat}
      />

      {/* Article Content */}
      <div className="border-t border-border">
        <ArticleContent article={articles.vi[0]!} categoryLabel="Kỹ thuật" />
      </div>

      {/* Booking Summary Widget */}
      <BookingSummaryWidget
        schedule={classSchedules[0]!}
        bookingDraft={{
          studentName: "Nguyễn Văn An",
          studentEmail: "an@example.com",
          studentPhone: "0901234567",
          studentAge: 10,
          sessionDate: "2024-03-15",
        }}
        locationName={LOCATION_NAMES[classSchedules[0]!.locationId] ?? ""}
        instructorName={INSTRUCTOR_NAMES[classSchedules[0]!.instructorId] ?? ""}
        editHrefs={{ schedule: "/booking/schedule", student: "/booking/student" }}
      />

      {/* CTA Section */}
      <CtaSection
        headline="Tham gia cùng chúng tôi"
        paragraph="Hãy trở thành một phần của gia đình Võ đường Tâm Việt."
        cta={{ label: "Đăng ký học ngay", href: "/registration" }}
        variant="cinematic"
        kanjiWatermark="道"
      />

      {/* CTA Zen */}
      <CtaSection
        headline="Buổi học thử miễn phí"
        paragraph="Trải nghiệm lớp học đầu tiên hoàn toàn không mất phí."
        cta={{ label: "Đặt lịch ngay", href: "/booking" }}
        variant="zen"
      />

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}

export function ComponentsPlayground() {
  const [tab, setTab] = useState<Tab>("primitives");

  return (
    <MemoryRouter>
      <div className="min-h-screen bg-sumi-paper">
        {/* Tab bar */}
        <div className="sticky top-0 z-50 flex gap-0 border-b border-border bg-washi shadow-sm">
          {(["primitives", "widgets"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 text-[length:var(--text-body-sm)] font-medium capitalize transition-colors ${
                tab === t
                  ? "border-b-2 border-shu-seal text-shu-seal"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {t === "primitives" ? "Primitives (Sprint 1)" : "Widgets (Sprint 2)"}
            </button>
          ))}
          <p className="ml-auto self-center pr-4 text-[length:var(--text-eyebrow)] text-text-muted">
            /_dev/components — DEV only
          </p>
        </div>

        {tab === "primitives" ? <PrimitivesTab /> : <WidgetsTab />}
      </div>
    </MemoryRouter>
  );
}
