import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../i18n/routing";
import { generatePageMetadata } from "../helpers/getPageMetadata";
import Header from "../components/layout/Header";
import ScrollToTop from "../components/layout/ScrollToTop";
import Footer from "../components/layout/Footer";

// Dynamic metadata
export async function generateMetadata({ params }: LayoutProps<"/[locale]">) {
  return generatePageMetadata({ page: "home", params });
}

// Layout must be async if using await params
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // ✅ params.locale may need "await" if using server components dynamic behavior
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <NextIntlClientProvider locale={locale}>
      <Header />

      <main className="flex-1" dir={dir}>
        <ScrollToTop />
        {children}
      </main>

      <Footer />
    </NextIntlClientProvider>
  );
}
