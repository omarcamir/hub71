import { Session } from "@/app/types/SessionTypes";
import SectionTitle from "../../ui/SectionTitle";
import { getTranslations } from "next-intl/server";
import SessionCard from "../../ui/SessionCard";
interface UpComingSessionsProps {
  sessions: Session[];
}

const UpComingSessions = async ({ sessions }: UpComingSessionsProps) => {
  const t = await getTranslations("");
  return (
    <div>
      <SectionTitle
        subtitle={t("Keep Updated")}
        title={t("Upcoming Sessions")}
      />
      <div className="my-5 flex flex-col gap-5">
        {sessions?.map((session) => (
          <div key={session.title}>
            <SessionCard
              title={session.title}
              start={session.start}
              end={session.end}
              btnLabel={t("Register")}
              btnVariant="red"
              href={`/register/${session.title}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpComingSessions;
