import { type ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

import { i18n } from "@/shared/i18n";

interface Props {
  children: ReactNode;
  initialEntries?: string[];
}

export function TestWrapper({ children, initialEntries = ["/"] }: Props) {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </MemoryRouter>
  );
}
