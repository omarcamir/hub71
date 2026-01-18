import { headers } from "next/headers";
import "./globals.css";
import { hasLocale } from "next-intl";
import { Toaster } from "sonner";
import { grotesk, notoArabic } from "./fonts/fonts";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerList = await headers(); // ✅ MUST await
  let locale = headerList.get("NEXT_LOCALE") || "en";

  if (!hasLocale(["en", "ar"], locale)) {
    locale = "en";
  }

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <body
        className={`flex min-h-screen flex-col ${
          locale === "ar" ? notoArabic.variable : grotesk.variable
        }`}
      >
        {children}
        <Toaster position="top-center" richColors dir={dir} />
      </body>
    </html>
  );
}
