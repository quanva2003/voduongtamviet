import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { I18nProvider } from "@/app/providers/i18n-provider";
import { ROUTES } from "@/app/routes";

const DevComponents = import.meta.env.DEV ? lazy(() => import("@/pages/_dev/components")) : null;

export function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.home} element={<div>Home — Sprint 3</div>} />
          {import.meta.env.DEV && DevComponents && (
            <Route
              path={ROUTES.devComponents}
              element={
                <Suspense fallback={null}>
                  <DevComponents />
                </Suspense>
              }
            />
          )}
        </Routes>
      </BrowserRouter>
    </I18nProvider>
  );
}
