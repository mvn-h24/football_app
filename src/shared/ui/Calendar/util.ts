import {
  addDays,
  endOfMonth,
  getWeeksInMonth,
  startOfMonth,
  subDays,
} from "date-fns";
import { CalendarMeta } from "./types";

export const createCalendarMeta = (d: Date) => {
  return {
    current: d,
    monthStart: startOfMonth(d),
    monthEnd: endOfMonth(d),
  };
};

export const getWeeksCount = (startFrom: Date = new Date(), count: number) => {
  let daysCount = 0;
  return Array.from(
    Array.from(Array(count).keys()).map(() =>
      Array.from(
        Array.from(Array(7).keys()).map(() => {
          return addDays(startFrom, daysCount++);
        }),
      ),
    ),
  );
};
export const weekBetweenMonth = (date: Date) =>
  Array.from(
    Array.from(Array(date.getDay() !== 0 ? date.getDay() - 1 : 6).keys())
      .map((v, i) => subDays(date, i + 1))
      .sort(() => -1),
  ).concat(
    Array.from(Array(date.getDay() === 0 ? 1 : 8 - date.getDay()).keys()).map(
      (v, i) => addDays(date, i),
    ),
  );

export const getCalendarWeeksList = (meta: CalendarMeta) => {
  let weeksBetweenMonths = 0;
  let weeksFirstDay = meta.monthStart;
  let FirstWeek = undefined;
  let LastWeek = undefined;
  if (meta.monthStart.getDay() !== 1) {
    FirstWeek = weekBetweenMonth(meta.monthStart);
    weeksFirstDay = FirstWeek[FirstWeek.length - 1];
    weeksBetweenMonths++;
  }
  if (meta.monthEnd.getDay() !== 0) {
    LastWeek = weekBetweenMonth(meta.monthEnd);
    weeksBetweenMonths++;
  }

  const weeks = getWeeksCount(
    weeksFirstDay,
    getWeeksInMonth(meta.current) - weeksBetweenMonths,
  );
  if (FirstWeek) weeks.unshift(FirstWeek);
  if (LastWeek) weeks.push(LastWeek);

  return weeks;
};
