export default function getDateFromUTC(date) {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "short", day: "2-digit" };
  const formattedDate = newDate.toLocaleDateString("en-IN", options);
  return formattedDate;
}
