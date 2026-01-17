import { Calendar } from "lucide-react";
import Button, { ButtonVariant } from "./Button";
import { formatSessionDate } from "@/app/helpers/formatSessionDate";
import { getLocale } from "next-intl/server";

export interface SessionProps {
  start: string;
  end: string;
  title: string;
  href: string;
  btnVariant: ButtonVariant;
  btnLabel: string;
  timeColor?: string;
  t: (key: string) => string;
}

export default async function SessionCard({
  start,
  end,
  title,
  href,
  btnVariant,
  btnLabel,
  timeColor,
  t
}: SessionProps) {
  const locale = await getLocale();
  const { date, startTime, endTime } = formatSessionDate(start, end, locale);
  return (
    <div className="py-9 px-6 bg-gray-card/50 flex flex-col md:flex-row justify-between items-center gap-5">
      <div className="md:max-w-3/5">
        <div className={`flex items-start gap-1 ${timeColor}`}>
          <Calendar className="w-4 h-4" />
          <p className="text-xs leading-5">
            {date}
            <span className="mx-2 inline-block md:inline">|</span>
            {startTime}
            <span className="mx-2">{t("TO")}</span>
            {endTime}
          </p>
        </div>
        <h3 className="font-semibold text-xl wrap-break-word mt-2">{title}</h3>
      </div>

      <Button
        variant={btnVariant}
        padding="px-9 py-5"
        href={href}
        title={btnLabel}
        rounded={false}
        className="font-bold uppercase"
      />
    </div>
  );
}
