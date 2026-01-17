export interface FormattedSessionDate {
  date: string;
  startTime: string;
  endTime: string;
}

export function formatSessionDate(
  start: string | Date,
  end: string | Date,
  locale: string = "en"
): FormattedSessionDate {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Format the date in the locale
  const date = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(startDate);

  // Start time
  const startTime = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  }).format(startDate);

  // End time
  const endTime = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(endDate);

  return { date, startTime, endTime };
}
