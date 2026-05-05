import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { BookingFlow, MyBookingsList } from "@/features/book-class";
import { SeoMeta } from "@/features/seo-meta";
import { Link } from "@/shared/ui";

import { BOOKING_SEO_KEYS } from "../model/seo";

export function Component() {
  const { t } = useTranslation();
  const [params] = useSearchParams();
  const showMyBookings = params.get("my") === "true";

  return (
    <>
      <SeoMeta
        title={t(BOOKING_SEO_KEYS.title)}
        description={t(BOOKING_SEO_KEYS.description)}
        canonicalPath={BOOKING_SEO_KEYS.canonicalPath}
        ogImage={BOOKING_SEO_KEYS.ogImage}
      />
      <div className="min-h-screen bg-washi pt-16">
        <div className="px-6 pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-[length:var(--text-body-sm)] text-text-muted transition-colors hover:text-text-primary"
          >
            ← Trang chủ
          </Link>
        </div>
        {showMyBookings ? <MyBookingsList /> : <BookingFlow />}
      </div>
    </>
  );
}
