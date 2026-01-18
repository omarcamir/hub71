import { Session } from "@/app/types/SessionTypes";
import SectionTitle from "../../ui/SectionTitle";
import { getTranslations } from "next-intl/server";
import SessionCard from "../../ui/SessionCard";
import NoDate from "../../ui/NoDate";
import MotionFadeSlide from "../../ui/MotionFadeSlide";
interface UpComingSessionsProps {
  sessions: Session[];
}

const UpComingSessions = async ({ sessions }: UpComingSessionsProps) => {
  // const sessions: Session[] = [];
  const t = await getTranslations("");
  return (
    <div>
      <SectionTitle
        subtitle={t("Keep Updated")}
        title={t("Upcoming Sessions")}
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
                btnLabel={t("Register Now")}
                btnVariant="red"
                href={`/register-session`}
                timeColor="text-red-color"
                t={t}
              />
            </MotionFadeSlide>
          ))
        )}
      </div>
    </div>
  );
};

export default UpComingSessions;
