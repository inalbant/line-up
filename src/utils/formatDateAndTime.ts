export function formatDateAndTime(date: string, time: string) {
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
