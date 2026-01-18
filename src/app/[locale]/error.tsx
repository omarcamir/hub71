"use client";

import { useLocale } from "next-intl";
import { RefreshCw, AlertTriangle } from "lucide-react";
import Button from "../components/ui/Button";

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
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <AlertTriangle className="w-14 h-14 text-red-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">
          {isAr ? "حدث خطأ غير متوقع" : "Something went wrong"}
        </h2>

        {/* Message */}
        <p className="mt-3 text-gray-600 text-sm leading-relaxed">
          {isAr
            ? "حدث خطأ أثناء تحميل الصفحة. يرجى المحاولة مرة أخرى أو العودة إلى الصفحة الرئيسية."
            : "An unexpected error occurred while loading the page. Please try again or return to the homepage."}
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            title={isAr ? "إعادة المحاولة" : "Try Again"}
            icon={<RefreshCw className="w-4 h-4" />}
            variant="blue"
            padding="px-6 py-3"
            rounded={false}
            className="text-sm font-semibold"
          />

          <Button
            href="/"
            title={isAr ? "العودة للرئيسية" : "Back to Home"}
            variant="ghost"
            padding="px-6 py-3"
            rounded={false}
            className="text-gray-700 text-sm font-medium hover:bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}
