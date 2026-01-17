import BackButton from "@/app/components/ui/BackButton";
import SectionTitle from "@/app/components/ui/SectionTitle";
import { ChevronDown } from "lucide-react";
import { getTranslations } from "next-intl/server";

const RegisterSession = async () => {
  const t = await getTranslations();

  return (
    <div className="container py-10">
      {/* Section Title */}
      <SectionTitle
        subtitle={t("Keep Updated")}
        title={t("REGISTER_YOUR_INTEREST_NOW")}
      />

        <div className="flex justify-start">
            <BackButton/>
        </div>
      <div className="flex flex-col items-center justify-center">
        {/* Coming Soon Card */}
        <div className="p-10 flex flex-col items-center justify-center gap-6 max-w-md w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-main-color animate-pulse">
            {t("comingSoonTitle")}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("comingSoonSubtitle")}
          </p>

          <div className="mt-6 animate-bounce text-main-color">
            <ChevronDown className="w-8 h-8" />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default RegisterSession;
