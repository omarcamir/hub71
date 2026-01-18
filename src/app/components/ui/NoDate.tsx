import { getTranslations } from "next-intl/server";

const NoDate = async () => {
  const t = await getTranslations("");
  return (
    <p className="text-gray-500 text-sm mt-4">
      {t("No Data available")}
    </p>
  );
};

export default NoDate;
