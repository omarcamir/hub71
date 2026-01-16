import { getTranslations } from "next-intl/server";
import LanguageSwitcher from "../components/LangSwitcher";

export default async function HomePage() {
  const t = await getTranslations("");
  return (
    <div className="container py-10 h-screen">
      <div className="flex flex-col gap-5 items-center justify-center text-center h-full">
        <div className="flex justify-center gap-5">
          <h1 className="text-center text-6xl md:text-7xl lg:text-8xl mb-5">
          next-intl
        </h1>
        <LanguageSwitcher/>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-14">
          {t("title")}
        </h2>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">
          {t("description")}
        </p>
      </div>
    </div>
  );
}
