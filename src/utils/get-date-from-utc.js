export default function getDateFromUTC(date) {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = newDate.toLocaleDateString("en-IN", options);
  return formattedDate;
}
