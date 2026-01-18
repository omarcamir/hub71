import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const locale =
    routing.locales.find(
      (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
    ) ?? "en";

  // Rewrite if locale missing
  if (!pathname.startsWith(`/${locale}`)) {
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    const res = NextResponse.rewrite(url);
    res.headers.set("NEXT_LOCALE", locale);
    return res;
  }

  const res = intlMiddleware(request);
  res.headers.set("NEXT_LOCALE", locale);
  return res;
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};
