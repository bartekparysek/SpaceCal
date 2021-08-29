import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, startOfDay, addDays } from "date-fns";

// generate week
export function* takeWeek(start = new Date()) {
  let date = startOfWeek(startOfDay(start));
  let week = [...Array(7)].map((el, i) => addDays(date, i));
  yield week;
}
for (const val of takeWeek()) {
  console.log(val);
}

// generate month based on week

