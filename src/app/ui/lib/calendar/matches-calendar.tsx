import { useState } from 'react';
import { MatchInfo } from '@football-app/types';
import { addMonths, isSameDay, isSameMonth, subMonths } from 'date-fns';
import { CalendarHead } from './calendar-head';
import { CalendarControl } from './calendar-control';
import {
  CalendarMeta,
  getCalendarMeta,
  getCalendarWeeksList,
} from './calendar-utils';
import { CalendarDay } from './calendar-day';
import { CalendarBadge } from './calendar-badge';

export interface MatchesCalendarProps {
  matchesList: Array<MatchInfo>;
}
export function MatchesCalendar({ matchesList }: MatchesCalendarProps) {
  const [currentDateState, setCurrentDate] = useState<CalendarMeta>(
    getCalendarMeta(new Date())
  );
  const setNextMonth = () =>
    setCurrentDate(getCalendarMeta(addMonths(currentDateState.current, 1)));
  const setPrevMonth = () =>
    setCurrentDate(getCalendarMeta(subMonths(currentDateState.current, 1)));
  const WeeksList = getCalendarWeeksList(currentDateState);

  return (
    <div className="container mx-auto mt-10">
      <div className="wrapper bg-white rounded shadow w-full ">
        <CalendarControl
          date={currentDateState.current}
          nextMonth={setNextMonth}
          prevMonth={setPrevMonth}
        />
        <table className="w-full">
          <CalendarHead />
          <tbody>
            {WeeksList.map((week, index) => (
              <tr className="text-center h-20" key={index}>
                {week.map((day, i) => (
                  <td
                    className={`border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition duration-500 ease ${
                      isSameMonth(currentDateState.monthStart, day)
                        ? ''
                        : ' bg-gray-100'
                    }`}
                    key={i}
                  >
                    <CalendarDay day={day.getDate()}>
                      {matchesList.map((match) => {
                        return isSameDay(new Date(match.utcDate), day) ? (
                          <CalendarBadge
                            key={match.id}
                            name={`
                            home-team:${match.homeTeam.name};
                            away-team:${match.awayTeam.name}
                            `}
                            info={
                              match.score.winner !== null
                                ? `winner: ${match.score.winner}`
                                : undefined
                            }
                          />
                        ) : undefined;
                      })}
                    </CalendarDay>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
