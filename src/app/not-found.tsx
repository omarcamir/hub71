import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
      <h1 className="text-9xl font-extrabold text-main-color mb-4">404</h1>
      <p className="text-3xl text-gray-800 mb-2">Page Not Found</p>
      <p className="text-2xl text-gray-600 mb-6 rtl text-right w-full sm:w-auto">
        الصفحة غير موجودة
      </p>
      <Link
        href="/"
        className="inline-block text-main-color border border-main-color px-6 py-3 rounded-md text-base font-medium hover:bg-main-color hover:text-white transition"
      >
        Go Home / العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
