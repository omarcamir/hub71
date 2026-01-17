
import SectionTitle from "../../ui/SectionTitle";
import { getTranslations } from "next-intl/server";

const UpComingSessions = async () => {
  const t = await getTranslations("");
    return (
      <div>
        <SectionTitle
          subtitle={t("Keep Updated")}
          title={t("Upcoming Sessions")}
        />
      </div>
    );
  return (
    <div>UpComingSessions</div>
  )
}

export default UpComingSessions