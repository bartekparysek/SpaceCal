import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, startOfDay, addDays } from "date-fns";

// generate week
export function takeWeek(start = new Date()) {
  let date = startOfWeek(startOfDay(start));
  return function* () {
    const week = [...Array(7)].map((el, i) => addDays(date, i));
    date = addDays(week[6], 1);
    yield week;
  }

}
// for (const val of takeWeek()) {
//   console.log(val);

// }
// export function takeWeek(start = new Date()) {
//   let date = startOfWeek(startOfDay(start));

//   return function () {
//     const week = [...Array(7)].map((_, i) => addDays(date, i));
//     date = addDays(week[6], 1);
//     return week;
//   };
// }

// generate month based on week

// export function* takeMonth(start = new Date()) {
//   let month = [];
//   let date = startOfWeek(startOfDay(start));

//   yield
// }