"use client";
import { clsx } from "clsx";
import { HTMLProps, ReactNode, useReducer } from "react";
import { addMonths, isSameMonth, subMonths } from "date-fns";
import { CalendarHead } from "./CalendarHead";
import { CalendarControl } from "./CalendarControl";
import { createCalendarMeta, getCalendarWeeksList } from "../util";
import { CalendarDay } from "./CalendarDay";
import { CalendarMeta } from "../types";
import { cloneDeep } from "lodash";

interface CalendarProps extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  currentDate?: Date;
  dayRender?: (day: Date) => ReactNode;
}

enum CalendarActions {
  addMonth = "addMonth",
  subMonth = "subMonth",
}

export function Calendar({
  className,
  currentDate = new Date(),
  dayRender,
}: CalendarProps = {}) {
  const _dayRender = dayRender ?? (() => null);
  const [state, dispatchCalendar] = useReducer(
    (state: CalendarMeta, action: CalendarActions) => {
      let result = cloneDeep(state);
      switch (action) {
        case CalendarActions.addMonth:
          result = createCalendarMeta(addMonths(state.current, 1));
          break;
        case CalendarActions.subMonth:
          result = createCalendarMeta(subMonths(state.current, 1));
          break;
        default:
          throw new Error(`Unknown action type ${action}`);
      }
      return result;
    },
    createCalendarMeta(currentDate),
  );

  return (
    <div className={clsx(className, "bg-white rounded")}>
      <CalendarControl
        date={state.current}
        nextMonth={() => dispatchCalendar(CalendarActions.addMonth)}
        prevMonth={() => dispatchCalendar(CalendarActions.subMonth)}
      />
      <table>
        <CalendarHead />
        <tbody>
          {getCalendarWeeksList(state).map((week, index) => (
            <tr
              className="text-center h-20"
              key={`${state.current.getDate()}-${index}`}
            >
              {week.map((day, i) => (
                <td
                  className={clsx(
                    "border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition ease",
                    {
                      "bg-gray-100": !isSameMonth(state.monthStart, day),
                    },
                  )}
                  key={day.getTime()}
                >
                  <CalendarDay day={day.getDate()}>
                    {_dayRender(day)}
                  </CalendarDay>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
