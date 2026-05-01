import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "@/app/components/error-boundary";
import { PageSkeleton } from "@/app/components/page-skeleton";
import { SiteLayout } from "@/app/components/site-layout";

const HomePage = lazy(() => import("@/pages/home").then((m) => ({ default: m.Component })));
const AboutPage = lazy(() => import("@/pages/about").then((m) => ({ default: m.Component })));
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

export function AppRoutes() {
  return (
    <Routes>
      {/* Vietnamese — no locale prefix */}
      <Route element={<SiteLayout locale="vi" />}>
        <Route path="/" element={<LazyPage Page={HomePage} />} />
        <Route path="/about" element={<LazyPage Page={AboutPage} />} />
      </Route>

      {/* English */}
      <Route path="/en" element={<SiteLayout locale="en" />}>
        <Route index element={<LazyPage Page={HomePage} />} />
        <Route path="about" element={<LazyPage Page={AboutPage} />} />
      </Route>

      {/* Japanese */}
      <Route path="/ja" element={<SiteLayout locale="ja" />}>
        <Route index element={<LazyPage Page={HomePage} />} />
        <Route path="about" element={<LazyPage Page={AboutPage} />} />
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
