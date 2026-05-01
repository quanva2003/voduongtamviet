import { Container, EnsoCircle, KanjiAccent } from "@/shared/ui";

import { footerContact, footerNav } from "../model/data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sumi-ink text-washi">
      <Container size="xl" className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo + tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              <EnsoCircle size={40} stroke={1.5} variant="brushed" color="var(--color-gold)" />
              <span className="font-display text-[length:var(--text-h3)]">Tâm Việt</span>
            </div>
            <p className="mt-3 text-[length:var(--text-body-sm)] text-washi/60">
              Rèn tâm · Luyện thân · Tinh thuật
            </p>
            <KanjiAccent
              char="道"
              size="md"
              position="watermark"
              color="inherit"
              className="mt-4 opacity-20"
            />
          </div>

          {/* Quick links: nav */}
          <div>
            <p className="mb-4 text-[length:var(--text-eyebrow)] tracking-[0.15em] text-gold uppercase">
              Trang
            </p>
            <ul className="flex flex-col gap-2">
              {footerNav.main.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[length:var(--text-body-sm)] text-washi/70 transition-colors hover:text-washi"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Social */}
          <div>
            <p className="mb-4 text-[length:var(--text-eyebrow)] tracking-[0.15em] text-gold uppercase">
              Pháp lý & Mạng xã hội
            </p>
            <ul className="flex flex-col gap-2">
              {[...footerNav.legal, ...footerNav.social].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[length:var(--text-body-sm)] text-washi/70 transition-colors hover:text-washi"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <p className="mb-4 text-[length:var(--text-eyebrow)] tracking-[0.15em] text-gold uppercase">
              Liên hệ
            </p>
            <ul className="flex flex-col gap-2 text-[length:var(--text-body-sm)] text-washi/70">
              <li>{footerContact.address}</li>
              <li>
                <a href={`tel:${footerContact.phone}`} className="hover:text-washi">
                  {footerContact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${footerContact.email}`} className="hover:text-washi">
                  {footerContact.email}
                </a>
              </li>
              <li>{footerContact.hours}</li>
            </ul>
          </div>
        </div>

        {/* Copyright row */}
        <div className="mt-12 border-t border-washi/10 pt-6 text-center text-[length:var(--text-body-sm)] text-washi/40">
          © {year} Võ đường Tâm Việt. Bảo lưu mọi quyền.
        </div>
      </Container>
    </footer>
  );
}
