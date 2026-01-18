"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect } from "react";

const BackButton = () => {
  const router = useRouter();
  const locale = useLocale();
  const isAr = locale === "ar";

  // Track previous locale in sessionStorage
  useEffect(() => {
    const prevLocale = sessionStorage.getItem('prev-locale');
    const currentLocale = locale;
    
    if (prevLocale && prevLocale !== currentLocale) {
      // Locale changed on this page
      sessionStorage.setItem('locale-changed', 'true');
    }
    
    sessionStorage.setItem('prev-locale', currentLocale);
  }, [locale]);

  const handleBack = () => {
    const localeChanged = sessionStorage.getItem('locale-changed') === 'true';
    
    if (localeChanged) {
      // Clear the flag
      sessionStorage.removeItem('locale-changed');
      // Go to home instead of back when locale was changed
      router.push(`/${locale}`);
    } else {
      router.back();
    }
  };

  return (
    <Button
      title={isAr ? "عودة" : "Back"}
      icon={
        isAr ? (
          <ArrowRight className="w-5 h-5" />
        ) : (
          <ArrowLeft className="w-5 h-5" />
        )
      }
      variant="ghost"
      onClick={handleBack}
      ariaLabel="Go Back"
      className="mb-6"
    />
  );
};

export default BackButton;