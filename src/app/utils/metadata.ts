import { Metadata } from "next";

type Locale = "en" | "ar";

const SITE_NAME: Record<Locale, string> = {
  en: "Hub71",
  ar: "هاب71",
};

const withSiteName = (title: string, locale: Locale): string =>
  `${SITE_NAME[locale]} | ${title}`;

export const pageMetadata: Record<string, Record<Locale, Metadata>> = {
  home: {
    en: {
      title: withSiteName("Connecting Founders, Investors & Innovators", "en"),
      description:
        "Discover sessions and events that bring together the startup ecosystem to share knowledge, insights, and opportunities for growth.",
    },
    ar: {
      title: withSiteName("ربط المؤسسين والمستثمرين والمبتكرين", "ar"),
      description:
        "اكتشف الجلسات والفعاليات التي تجمع مجتمع الشركات الناشئة لتبادل المعرفة والرؤى وفرص النمو.",
    },
  },
  "register-session": {
    en: {
      title: withSiteName("Register for a Session", "en"),
      description:
        "Register to attend upcoming sessions and events with founders, investors, and innovators from the startup ecosystem.",
    },
    ar: {
      title: withSiteName("التسجيل في جلسة", "ar"),
      description:
        "سجّل لحضور الجلسات والفعاليات القادمة مع المؤسسين والمستثمرين والمبتكرين من منظومة الشركات الناشئة.",
    },
  },
};
