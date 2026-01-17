import { toast } from "sonner";

type NotifyType = "success" | "error" | "info" | "warning";

export function notify(type: NotifyType, message: string) {
  switch (type) {
    case "success":
      toast.success(message);
      break;

    case "error":
      toast.error(message);
      break;

    case "info":
      toast(message);
      break;

    case "warning":
      toast.warning(message);
      break;

    default:
      toast(message);
  }
}
