import { cookies } from "next/headers";
import "./globals.css";
import { hasLocale } from "next-intl";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Must await cookies() here
  const cookieStore = await cookies();

  // Get the locale cookie
  const localeCookie = cookieStore.get("NEXT_LOCALE");
  let locale = localeCookie?.value || "en";

  // Validate the locale
  if (!hasLocale(["en", "ar"], locale)) {
    locale = "en";
  }

  const dir = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? "font-NotoSansArabic" : "font-grotesk";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body className={`flex min-h-screen flex-col ${fontClass}`}>
        {children}
      </body>
    </html>
  );
}
