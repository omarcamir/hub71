import { Metadata } from "next";
import { notFound } from "next/navigation";
import { routing } from "../i18n/routing";
import { pageMetadata } from "../utils/metadata";

type Locale = "en" | "ar";

export async function generatePageMetadata({
  page,
  params,
}: {
  page: keyof typeof pageMetadata;
  params: Promise<{ locale: string }> | { locale: string };
}): Promise<Metadata> {
  // unwrap params if it's a promise
  const resolvedParams = await params;
  const { locale } = resolvedParams;

  // validate locale
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // validate page metadata exists
  const localizedMetadata = pageMetadata[page][locale as Locale];
  if (!localizedMetadata) {
    notFound();
  }

  return localizedMetadata;
}
