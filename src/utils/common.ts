import { format, parseISO } from "date-fns";

export function formatDate(dateString: string) {
  const date = parseISO(dateString);
  return isNaN(date.getTime()) ? null : format(date, "yyyy-MM-dd");
}
