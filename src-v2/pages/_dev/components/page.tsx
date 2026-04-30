import { MemoryRouter } from "react-router-dom";

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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 border-b border-border pb-2 font-display text-[length:var(--text-h2)] text-text-primary">
        {title}
      </h2>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
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

export function ComponentsPlayground() {
  return (
    <MemoryRouter>
      <div className="min-h-screen bg-washi p-8 text-text-primary">
        <h1 className="mb-2 font-display text-[length:var(--text-display-md)]">
          Component Playground
        </h1>
        <p className="mb-12 text-text-secondary">/_dev/components — DEV only</p>

        {/* ── Button ─────────────────────────────────── */}
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
          <Row label="States">
            <Button disabled>Disabled</Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </Row>
        </Section>

        {/* ── Input ──────────────────────────────────── */}
        <Section title="Input / Textarea / Select">
          <Row label="Input">
            <div className="w-64">
              <Input label="Full name" placeholder="Nguyễn Văn A" />
            </div>
            <div className="w-64">
              <Input label="Email" placeholder="name@example.com" error="Email không hợp lệ" />
            </div>
            <div className="w-64">
              <Input label="Disabled" placeholder="..." disabled />
            </div>
          </Row>
          <Row label="Textarea">
            <div className="w-64">
              <Textarea label="Ghi chú" placeholder="Nhập ghi chú..." />
            </div>
            <div className="w-64">
              <Textarea label="With error" error="Trường này là bắt buộc" />
            </div>
          </Row>
          <Row label="Select">
            <div className="w-64">
              <Select
                label="Cơ sở"
                options={[
                  { value: "q1", label: "Quận 1" },
                  { value: "q3", label: "Quận 3" },
                  { value: "q7", label: "Quận 7" },
                ]}
              />
            </div>
          </Row>
          <Row label="Checkbox / Radio">
            <Checkbox label="Tôi đồng ý điều khoản" />
            <Checkbox label="Disabled" disabled />
            <Radio label="Karate" name="martial-art" />
            <Radio label="Judo" name="martial-art" />
          </Row>
        </Section>

        {/* ── Card ───────────────────────────────────── */}
        <Section title="Card">
          <Row label="Variants">
            <Card variant="zen" className="w-48">
              <p className="text-[length:var(--text-body-sm)]">Zen card</p>
            </Card>
            <Card variant="paper" className="w-48">
              <p className="text-[length:var(--text-body-sm)]">Paper card</p>
            </Card>
            <Card variant="dark" className="w-48">
              <p className="text-[length:var(--text-body-sm)]">Dark card</p>
            </Card>
            <Card variant="featured" className="w-48">
              <p className="text-[length:var(--text-body-sm)]">Featured card</p>
            </Card>
          </Row>
          <Row label="Padding">
            <Card padding="sm" className="w-32 border border-border">
              sm
            </Card>
            <Card padding="md" className="w-32 border border-border">
              md
            </Card>
            <Card padding="lg" className="w-32 border border-border">
              lg
            </Card>
          </Row>
        </Section>

        {/* ── Badge / Pill ───────────────────────────── */}
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

        {/* ── Container ──────────────────────────────── */}
        <Section title="Container">
          <Row label="Sizes (outlined)">
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

        {/* ── Decorative ─────────────────────────────── */}
        <Section title="EnsoCircle">
          <Row label="Variants">
            <EnsoCircle size={64} stroke={1.5} variant="closed" />
            <EnsoCircle size={64} stroke={1.5} variant="brushed" />
            <EnsoCircle size={96} stroke={2} variant="brushed" color="var(--color-shu-seal)" />
            <EnsoCircle size={48} stroke={1} variant="closed" color="var(--color-gold)" />
          </Row>
        </Section>

        <Section title="KanjiAccent">
          <Row label="Sizes — inline">
            <KanjiAccent char="道" size="sm" />
            <KanjiAccent char="武" size="md" />
            <KanjiAccent char="心" size="lg" />
          </Row>
          <Row label="Colors">
            <KanjiAccent char="道" size="md" color="default" />
            <KanjiAccent char="武" size="md" color="gold" />
            <KanjiAccent char="心" size="md" color="shu" />
          </Row>
          <Row label="Watermark (relative container)">
            <div className="relative h-32 w-32 border border-border bg-sumi-paper">
              <KanjiAccent char="道" size="lg" position="watermark" />
              <p className="relative z-10 p-2 text-[length:var(--text-body-sm)] text-text-secondary">
                Content
              </p>
            </div>
          </Row>
        </Section>

        <Section title="SectionEyebrow">
          <Row label="Numerals">
            <SectionEyebrow numeral="一" label="GIỚI THIỆU" />
            <SectionEyebrow numeral="二" label="LỊCH HỌC" />
            <SectionEyebrow numeral="三" label="ĐĂNG KÝ" />
          </Row>
        </Section>

        {/* ── Blocks ─────────────────────────────────── */}
        <Section title="CinematicBlock">
          <div className="w-full">
            <CinematicBlock kanjiWatermark="道" className="rounded-[var(--radius-lg)]">
              <Container size="md">
                <SectionEyebrow numeral="一" label="CINEMATIC" className="mb-4" />
                <h3 className="font-display text-[length:var(--text-h2)] italic">
                  Wabi-Sabi Cinematic Block
                </h3>
                <p className="mt-2 text-text-secondary">Dark background, kanji watermark.</p>
              </Container>
            </CinematicBlock>
          </div>
        </Section>

        <Section title="ZenBlock">
          <div className="w-full">
            <ZenBlock
              variant="washi"
              eyebrow={{ numeral: "二", label: "ZEN WASHI" }}
              className="rounded-[var(--radius-lg)]"
            >
              <Container size="md">
                <h3 className="font-display text-[length:var(--text-h2)]">Washi variant</h3>
                <p className="mt-2 text-text-secondary">Light, calm, lots of space.</p>
              </Container>
            </ZenBlock>
            <ZenBlock
              variant="paper"
              eyebrow={{ numeral: "三", label: "ZEN PAPER" }}
              className="mt-4 rounded-[var(--radius-lg)]"
            >
              <Container size="md">
                <h3 className="font-display text-[length:var(--text-h2)]">Paper variant</h3>
                <p className="mt-2 text-text-secondary">Slightly darker background.</p>
              </Container>
            </ZenBlock>
          </div>
        </Section>

        {/* ── Skeleton ───────────────────────────────── */}
        <Section title="Skeleton">
          <Row label="Loading states">
            <Skeleton width={200} height={20} />
            <Skeleton width={120} height={20} />
            <Skeleton width={160} height={20} />
          </Row>
          <Row label="Card skeleton">
            <div className="flex w-48 flex-col gap-3 rounded-[var(--radius-lg)] border border-border p-4">
              <Skeleton height={120} />
              <Skeleton height={16} />
              <Skeleton width="60%" height={12} />
            </div>
          </Row>
        </Section>

        {/* ── Link / VisuallyHidden ───────────────────── */}
        <Section title="Link / VisuallyHidden">
          <Row label="Links">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/registration">Đăng ký</Link>
          </Row>
          <Row label="VisuallyHidden">
            <button
              type="button"
              className="rounded border border-border px-3 py-1 text-[length:var(--text-body-sm)]"
            >
              <VisuallyHidden>Close dialog</VisuallyHidden>
              <span aria-hidden="true">✕</span>
            </button>
            <p className="text-[length:var(--text-body-sm)] text-text-secondary">
              (button above has sr-only label "Close dialog")
            </p>
          </Row>
        </Section>

        {/* ── Picture (placeholder) ──────────────────── */}
        <Section title="Picture">
          <Row label="Responsive (placeholder path)">
            <Picture
              src="/images/dojo-placeholder"
              alt="Dojo interior"
              aspectRatio="16/9"
              className="w-64 overflow-hidden rounded-[var(--radius-lg)]"
            />
          </Row>
        </Section>
      </div>
    </MemoryRouter>
  );
}
