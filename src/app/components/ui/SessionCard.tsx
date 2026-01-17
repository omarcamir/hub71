import { Calendar } from "lucide-react";
import Button, { ButtonVariant } from "./Button";

export interface SessionProps {
  start: string;
  end: string;
  title: string;
  onClick: () => void;
  btnVariant: ButtonVariant;
  btnLabel: string;
  timeColor?:string
}

export default function SessionCard({ session }: { session: SessionProps }) {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <div className={`flex items-start gap-1 ${session.timeColor}`}>
          <Calendar className="w-4 h-4" />
          <p className="text-sm text-gray-500">
            {new Date(session.start).toLocaleString()} –{"TO"}
            {new Date(session.end).toLocaleTimeString()}
          </p>
        </div>
        <h3 className="font-semibold text-xl">{session.title}</h3>
      </div>

      <Button
        variant={session.btnVariant}
        padding="px-4 py-2"
        onClick={session.onClick}
        title={session.btnLabel}
      />
    </div>
  );
}
