import { Session } from "@/app/types/SessionTypes";
import SectionTitle from "../../ui/SectionTitle";
import { getTranslations } from "next-intl/server";
import SessionCard from "../../ui/SessionCard";
import NoDate from "../../ui/NoDate";
import MotionFadeSlide from "../../ui/MotionFadeSlide";

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
        {sessions?.length === 0 ? (
          <NoDate />
        ) : (
          sessions?.map((session, index) => (
            <MotionFadeSlide key={session.title} delay={index * 0.08}>
              <SessionCard
                title={session.title}
                start={session.start}
                end={session.end}
                btnLabel={t("Get Recording")}
                btnVariant="green"
                href={`/register-session/`}
                timeColor="text-green-color"
                t={t}
              />
            </MotionFadeSlide>
          ))
        )}
      </div>
    </div>
  );
};

export default PrevSessions;
