import { I18nProvider } from "@/app/providers/i18n-provider";
import { RouterProvider } from "@/app/providers/router-provider";

export function App() {
  return (
    <I18nProvider>
      <RouterProvider />
    </I18nProvider>
  );
}
