import { Link } from "../i18n/navigation";
import { useLocale } from "next-intl";

export default function NotFound() {
  const isAr = useLocale() === "ar";

  return (
    <div
      className={`min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-gray-50 to-gray-100`}
    >
      <div className="max-w-md text-center">
        <h1 className="text-[120px] font-extrabold text-main-color leading-none">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          {isAr ? "الصفحة غير موجودة" : "Page Not Found"}
        </h2>

        <p className="mt-3 text-lg text-gray-600">
          {isAr
            ? "عذراً، الصفحة التي تحاول الوصول إليها غير متوفرة."
            : "Sorry, the page you are looking for doesn’t exist or was moved."}
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-8 py-3 rounded-lg
                     border border-main-color text-main-color font-medium
                     hover:bg-main-color hover:text-white transition-all duration-300"
        >
          {isAr ? "العودة إلى الصفحة الرئيسية" : "Back to Home"}
        </Link>
      </div>
    </div>
  );
}
