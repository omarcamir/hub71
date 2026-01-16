"use client";
import { useState } from "react";
import LanguageSwitcher from "../ui/LangSwitcher";
import { Menu, PersonStanding, Search, X } from "lucide-react";
import Logo from "../ui/Logo";
import { Link } from "@/app/i18n/navigation";
import { useTranslations } from "next-intl";
import { headerLinks } from "@/app/utils/paths";
import Button from "../ui/Button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("");

  return (
    <nav
      className={`w-full z-50 transition-all duration-500 border-b bg-white border-white/10 py-4 shadow-lg sticky top-0
      `}
      dir="ltr"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button icon={<Search className="w-6 h-6" />} variant="white" />
            <Button icon={<PersonStanding className="w-6 h-6" />} variant="white" />

            <div className="-mr-2 flex">
              <Button onClick={() => setIsOpen(!isOpen)} variant="blue"
              icon = {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-main-color backdrop-blur-xl border-t border-white/10 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 space-y-2">
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
