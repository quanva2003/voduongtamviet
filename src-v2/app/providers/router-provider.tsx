import { BrowserRouter } from "react-router-dom";

import { ScrollToTop } from "@/app/components/scroll-to-top";
import { AppRoutes } from "@/app/routes/routes";

import { MotionProvider } from "./motion-provider";

export function RouterProvider() {
  return (
    <BrowserRouter>
      <MotionProvider>
        <ScrollToTop />
        <AppRoutes />
      </MotionProvider>
    </BrowserRouter>
  );
}
