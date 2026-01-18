"use client";

import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "../ui/LangSwitcher";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import { Link } from "@/app/i18n/navigation";
import { useTranslations } from "next-intl";
import { headerLinks } from "@/app/utils/paths";
import Button from "../ui/Button";
import { AccessibilityPanel } from "../ui/AccessibilityPanel/AccessibilityPanel";
import SearchModal from "../sections/header/SearchModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("");

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Invisible sentinel element to detect scroll position */}
      <div ref={sentinelRef} className="h-px" />

      <nav
        dir="ltr"
        className={`w-full z-50 sticky top-0 bg-white border-b border-b-gray-border
          transition-all duration-300 ease-in-out
          ${scrolled ? "py-3 md:py-4 lg:py-5 shadow-sm" : "py-8 md:py-10 lg:py-14 xl:border-b-2"}
        `}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <Logo className={scrolled ? "scale-90 transition-transform duration-300" : "scale-100 transition-transform duration-300"} />
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              <div className="hidden sm:flex gap-3">
                <SearchModal />
                <AccessibilityPanel t={t}/>
              </div>

              <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="blue"
                icon={isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                ariaLabel="menu"
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute top-full left-0 w-full bg-main-color backdrop-blur-xl border-t border-white/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
            isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="px-4 py-6 w-full container">
            {headerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-white/10"
              >
                {t(link.label)}
              </Link>
            ))}
            <div className="flex gap-2 w-full md:hidden">
              <SearchModal />
              <AccessibilityPanel t={t}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
