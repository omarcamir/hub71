import { Session } from "@/app/types/SessionTypes";
import SectionTitle from "../../ui/SectionTitle";
import { getTranslations } from "next-intl/server";
import SessionCard from "../../ui/SessionCard";

interface PrevSessionsProps {
  sessions: Session[];
}
const PrevSessions = async ({ sessions }: PrevSessionsProps) => {
  const t = await getTranslations("");
  return (
    <div>
      <SectionTitle
        subtitle={t("Keep Updated")}
        title={t("Previous Sessions")}
      />
      <div className="my-5 flex flex-col gap-4">
        {sessions?.map((session) => (
          <div key={session.title}>
            <SessionCard
              title={session.title}
              start={session.start}
              end={session.end}
              btnLabel={t("Get Recording")}
              btnVariant="green"
              href={`/register/${session.title}`}
              timeColor="text-green-color"
              t={t}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrevSessions;
