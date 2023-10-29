export function formatDateTime(date?: string, time?: string) {
  if (!date || !time) {
    return "";
  }

  const dateObject = new Date(`${date}:${time}`);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  return new Intl.DateTimeFormat("en-GB", options).format(dateObject);
}
