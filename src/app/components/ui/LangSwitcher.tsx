"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import Button from "./Button";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isAr = useLocale() === "ar";

  // Determine the target locale
  const newLocale = isAr ? "en" : "ar";
  const buttonLabel = isAr ? "EN" : "عربي";

  const fontClass = isAr ?  "font-grotesk" : "font-NotoSansArabic";

  const handleLocaleSwitch = () => {
    // Replace the locale part in the pathname
    const segments = pathname.split("/");
    segments[1] = newLocale; // Assuming /[locale]/... structure
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <Button
      title={buttonLabel}
      onClick={handleLocaleSwitch}
      variant="blue"
      className={fontClass}
    />
  );
};

export default LanguageSwitcher;
