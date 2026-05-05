import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { BookingFlow, MyBookingsList } from "@/features/book-class";
import { SeoMeta } from "@/features/seo-meta";

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
        {showMyBookings ? <MyBookingsList /> : <BookingFlow />}
      </div>
    </>
  );
}
