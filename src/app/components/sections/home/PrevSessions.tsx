import SectionTitle from "../../ui/SectionTitle";
import { getTranslations } from "next-intl/server";

const PrevSessions = async () => {
  const t = await getTranslations("");
  return (
    <div>
      <SectionTitle
        subtitle={t("Keep Updated")}
        title={t("Previous Sessions")}
      />
    </div>
  );
};

export default PrevSessions;
