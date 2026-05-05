import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";

import { beltEvents } from "@/entities/belt-event";
import { SeoMeta } from "@/features/seo-meta";
import { fadeInUp, staggerChildren } from "@/shared/lib/motion";
import { Button, Card, Container, SectionEyebrow } from "@/shared/ui";
import { CtaSection } from "@/widgets/cta-section";
import { HeroZen } from "@/widgets/hero-zen";

export function Component() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();

  const event = beltEvents.find((e) => e.slug === slug);

  if (!event) {
    throw new Response("Not Found", { status: 404 });
  }

  const dateFmt = new Intl.DateTimeFormat(i18n.language === "vi" ? "vi-VN" : i18n.language, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    location: { "@type": "Place", name: event.location },
    description: event.description,
    offers: { "@type": "Offer", price: event.fee, priceCurrency: "VND" },
  };

  return (
    <>
      <SeoMeta
        title={`${event.title} — Võ Đường Tâm Việt`}
        description={event.description}
        canonicalPath={`/belt-promotion/${event.slug}`}
        jsonLd={jsonLd}
      />

      <HeroZen
        eyebrow={{ numeral: "試", label: t("beltPromotion.hero.eyebrow") }}
        headline={event.title}
      />

      <section className="bg-washi py-[var(--space-24)]">
        <Container size="md">
          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <motion.div variants={fadeInUp}>
              <SectionEyebrow numeral="一" label="THÔNG TIN" className="mb-6" />
              <Card variant="zen" padding="md">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
                      {t("beltPromotion.detail.date")}
                    </dt>
                    <dd className="mt-1 font-medium text-text-primary">
                      {dateFmt.format(new Date(event.date))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
                      {t("beltPromotion.detail.deadline")}
                    </dt>
                    <dd className="mt-1 font-medium text-shu-seal">
                      {dateFmt.format(new Date(event.registrationDeadline))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
                      {t("beltPromotion.detail.location")}
                    </dt>
                    <dd className="mt-1 text-text-primary">{event.location}</dd>
                  </div>
                  <div>
                    <dt className="text-[length:var(--text-eyebrow)] tracking-[0.15em] text-text-muted uppercase">
                      {t("beltPromotion.detail.fee")}
                    </dt>
                    <dd className="mt-1 font-display text-[length:var(--text-h3)] text-shu-seal">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(event.fee)}
                    </dd>
                  </div>
                </dl>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <p className="mb-4 text-[length:var(--text-body-lg)] leading-relaxed text-text-secondary">
                {event.description}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SectionEyebrow
                numeral="二"
                label={t("beltPromotion.detail.requirements")}
                className="mb-4"
              />
              <ul className="flex flex-col gap-2">
                {event.requirements.map((req, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[length:var(--text-body)] text-text-secondary"
                  >
                    <span className="mt-1 text-shu-seal" aria-hidden="true">
                      ▪
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link to="/registration">
                <Button size="lg" arrow>
                  {t("beltPromotion.detail.register")}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <CtaSection
        headline={t("beltPromotion.cta.headline")}
        paragraph={t("beltPromotion.cta.paragraph")}
        cta={{ label: t("beltPromotion.cta.cta"), href: "/schedule" }}
        variant="cinematic"
        kanjiWatermark="試"
      />
    </>
  );
}
