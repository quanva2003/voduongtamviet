import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMatch } from "react-router-dom";

import { LanguageSwitcher } from "@/features/language-switcher";
import { cn } from "@/shared/lib/cn";
import { Button, Container, Link, VisuallyHidden } from "@/shared/ui";

const NAV_KEYS = ["home", "about", "registration", "articles", "schedule"] as const;
const NAV_HREFS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  about: "/about",
  registration: "/registration",
  articles: "/articles",
  schedule: "/schedule",
};

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const exactMatch = useMatch(to);
  const prefixMatch = useMatch(`${to}/*`);
  const isActive = !!(exactMatch ?? prefixMatch);

  return (
    <Link
      to={to}
      className={cn(
        "relative text-[length:var(--text-body-sm)] transition-colors",
        isActive ? "text-washi" : "text-washi/70 hover:text-washi",
        "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:transition-all",
        isActive
          ? "after:w-full after:bg-[var(--color-shu-seal)]"
          : "after:w-0 hover:after:w-full hover:after:bg-washi/50",
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-sumi-ink/95 shadow-lg backdrop-blur-md"
          : "bg-gradient-to-b from-sumi-ink/80 to-transparent backdrop-blur-sm",
      )}
    >
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-[length:var(--text-h3)] text-washi after:hidden"
          >
            <span className="font-kanji text-gold">武</span> <span>Tâm Việt</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
            {NAV_KEYS.map((key) => (
              <NavLink key={key} to={NAV_HREFS[key]}>
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </nav>

          {/* Desktop: lang switcher + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Link to="/booking">
              <Button size="sm" variant="primary">
                {t("buttons.register")}
              </Button>
            </Link>
          </div>

          {/* Mobile: hamburger */}
          <button
            ref={toggleRef}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <VisuallyHidden>{menuOpen ? "Đóng menu" : "Mở menu"}</VisuallyHidden>
            <span
              className={cn(
                "h-px w-6 bg-washi transition-all",
                menuOpen && "translate-y-2 rotate-45",
              )}
            />
            <span className={cn("h-px w-6 bg-washi transition-all", menuOpen && "opacity-0")} />
            <span
              className={cn(
                "h-px w-6 bg-washi transition-all",
                menuOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </button>
        </div>
      </Container>

      {/* Mobile slide-in menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-72 bg-sumi-ink px-6 pt-20 pb-8 transition-transform duration-300 md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          {NAV_KEYS.map((key) => (
            <Link
              key={key}
              to={NAV_HREFS[key]}
              className="text-[length:var(--text-body-lg)] text-washi/80 hover:text-washi"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>
        <div className="mt-8">
          <LanguageSwitcher onSwitch={() => setMenuOpen(false)} />
        </div>
        <Link to="/booking" className="mt-6 block" onClick={() => setMenuOpen(false)}>
          <Button className="w-full" size="md">
            {t("buttons.register")}
          </Button>
        </Link>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-sumi-ink/50 md:hidden"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
