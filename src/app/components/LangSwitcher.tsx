"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // Determine the target locale
  const newLocale = locale === "ar" ? "en" : "ar";

  const handleLocaleSwitch = () => {
    // Replace the locale part in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale; // Assuming /[locale]/... structure
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <button
      className="self-center border-2 rounded-sm border-main-color
             hover:bg-main-color transition-all duration-200 cursor-pointer
             py-1 px-3 hover:text-white text-main-color font-bold"
      onClick={handleLocaleSwitch}
    >
      {newLocale.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;
