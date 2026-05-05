import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "@/app/components/error-boundary";
import { PageSkeleton } from "@/app/components/page-skeleton";
import { SiteLayout } from "@/app/components/site-layout";

const HomePage = lazy(() => import("@/pages/home").then((m) => ({ default: m.Component })));
const AboutPage = lazy(() => import("@/pages/about").then((m) => ({ default: m.Component })));
const RegistrationPage = lazy(() =>
  import("@/pages/registration").then((m) => ({ default: m.Component })),
);
const ArticlesPage = lazy(() => import("@/pages/articles").then((m) => ({ default: m.Component })));
const ArticleDetailPage = lazy(() =>
  import("@/pages/article-detail").then((m) => ({ default: m.Component })),
);
const InstructorDetailPage = lazy(() =>
  import("@/pages/instructor-detail").then((m) => ({ default: m.Component })),
);
const BeltPromotionPage = lazy(() =>
  import("@/pages/belt-promotion").then((m) => ({ default: m.Component })),
);
const SchedulePage = lazy(() => import("@/pages/schedule").then((m) => ({ default: m.Component })));
const BookingPage = lazy(() => import("@/pages/booking").then((m) => ({ default: m.Component })));
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((m) => ({ default: m.Component })),
);
const DevComponents = import.meta.env.DEV ? lazy(() => import("@/pages/_dev/components")) : null;

function LazyPage({ Page }: { Page: React.ComponentType }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageSkeleton />}>
        <Page />
      </Suspense>
    </ErrorBoundary>
  );
}

function sharedRoutes(locale: "vi" | "en" | "ja") {
  void locale; // used by parent Route for context only
  return (
    <>
      <Route index element={<LazyPage Page={HomePage} />} />
      <Route path="about" element={<LazyPage Page={AboutPage} />} />
      <Route path="registration" element={<LazyPage Page={RegistrationPage} />} />
      <Route path="articles" element={<LazyPage Page={ArticlesPage} />} />
      <Route path="articles/:slug" element={<LazyPage Page={ArticleDetailPage} />} />
      <Route path="instructors/:slug" element={<LazyPage Page={InstructorDetailPage} />} />
      <Route path="belt-promotion/:slug" element={<LazyPage Page={BeltPromotionPage} />} />
      <Route path="schedule" element={<LazyPage Page={SchedulePage} />} />
      <Route path="booking" element={<LazyPage Page={BookingPage} />} />
    </>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {/* Vietnamese — no locale prefix */}
      <Route element={<SiteLayout locale="vi" />}>
        <Route path="/" element={<LazyPage Page={HomePage} />} />
        <Route path="/about" element={<LazyPage Page={AboutPage} />} />
        <Route path="/registration" element={<LazyPage Page={RegistrationPage} />} />
        <Route path="/articles" element={<LazyPage Page={ArticlesPage} />} />
        <Route path="/articles/:slug" element={<LazyPage Page={ArticleDetailPage} />} />
        <Route path="/instructors/:slug" element={<LazyPage Page={InstructorDetailPage} />} />
        <Route path="/belt-promotion/:slug" element={<LazyPage Page={BeltPromotionPage} />} />
        <Route path="/schedule" element={<LazyPage Page={SchedulePage} />} />
        <Route path="/booking" element={<LazyPage Page={BookingPage} />} />
      </Route>

      {/* English */}
      <Route path="/en" element={<SiteLayout locale="en" />}>
        {sharedRoutes("en")}
      </Route>

      {/* Japanese */}
      <Route path="/ja" element={<SiteLayout locale="ja" />}>
        {sharedRoutes("ja")}
      </Route>

      {/* Dev — component playground */}
      {import.meta.env.DEV && DevComponents && (
        <Route
          path="/_dev/components"
          element={
            <Suspense fallback={null}>
              <DevComponents />
            </Suspense>
          }
        />
      )}

      {/* 404 catch-all */}
      <Route path="*" element={<LazyPage Page={NotFoundPage} />} />
    </Routes>
  );
}
