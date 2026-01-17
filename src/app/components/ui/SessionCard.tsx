import { Calendar } from "lucide-react";
import Button, { ButtonVariant } from "./Button";

export interface SessionProps {
  start: string;
  end: string;
  title: string;
  onClick: () => void;
  btnVariant: ButtonVariant;
  btnLabel: string;
  timeColor?: string;
}

export default function SessionCard({
  start,
  end,
  title,
  onClick,
  btnVariant,
  btnLabel,
  timeColor,
}: SessionProps
) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <div className={`flex items-start gap-1 ${timeColor}`}>
          <Calendar className="w-4 h-4" />
          <p className="text-sm text-gray-500">
            {new Date(start).toLocaleString()} –{"TO"}
            {new Date(end).toLocaleTimeString()}
          </p>
        </div>
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>

      <Button
        variant={btnVariant}
        padding="px-4 py-2"
        onClick={onClick}
        title={btnLabel}
      />
    </div>
  );
}
