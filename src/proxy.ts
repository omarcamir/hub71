import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Ignore paths that already include a locale
  const hasLocaleInPath = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  // Force default locale "en" if missing
  if (!hasLocaleInPath) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${request.nextUrl.pathname}`;
    url.search = request.nextUrl.search;
    url.hash = request.nextUrl.hash;
    return NextResponse.rewrite(url); // rewrite keeps it internal
  }

  // Let next-intl handle the rest
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
