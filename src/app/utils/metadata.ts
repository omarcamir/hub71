import { Metadata } from "next";

type Locale = "en" | "ar";

const SITE_NAME: Record<Locale, string> = {
  en: "Hub71",
  ar: "هاب71",
};

const withSiteName = (title: string, locale: Locale): string =>
  `${title} | ${SITE_NAME[locale]}`;

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
};
