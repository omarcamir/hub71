import type { Metadata } from "next";
import "../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../i18n/routing";

// Dynamic metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isArabic = locale === "ar";

  return {
    title: isArabic
      ? "مرحبًا بكم في مكتبات عمر القابلة لإعادة الاستخدام في ريأكت":"Welcome to Omar Reusable React Libraries",
    description: isArabic
      ? "هذه مكتبة ريأكت قابلة لإعادة الاستخدام لبناء تطبيقات الويب بكفاءة." : "This is a reusable React library for building web applications efficiently.",
  };
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
      <div dir={dir} className="flex min-h-screen flex-col">
        {/* <Navbar /> */}

        <main className="flex-1" dir={dir}>
          {/* <ScrollToTop /> */}
          {children}
        </main>

        {/* <Footer /> */}
      </div>
    </NextIntlClientProvider>
  );
}
