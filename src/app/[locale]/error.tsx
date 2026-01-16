"use client"
import { useLocale } from "next-intl";
import { Link } from "../i18n/navigation";


export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-slate-50 px-4"
      dir={isAr ? "rtl" : "ltr"}
    >
      <h3>
        {isAr
          ? "حدث خطأ ما يرجى المحاولة لاحقا"
          : "Unexpected Error, please try again later!"}
      </h3>

      <Link
        href={`/`}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition"
      >
        {isAr ? "العوده للصفحة الرئيسية" : "Back to Home"}
      </Link>
    </div>
  );
}
