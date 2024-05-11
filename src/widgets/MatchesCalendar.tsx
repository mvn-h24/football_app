"use client";

import { HTMLProps, ReactNode, useMemo } from "react";
import { MatchInfo } from "@football-app/types";
import { Calendar, CalendarBadge } from "@football-app/shared/ui";

const createDateKey = (date: Date) => {
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};

interface MatchesCalendarProps
  extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  currentDate?: Date;
  dayRender?: (day: Date) => ReactNode;
  matches?: MatchInfo[];
}
export function MatchesCalendar({ matches }: MatchesCalendarProps) {
  const matchMap = useMemo(
    () =>
      (matches ?? []).reduce((result, match) => {
        const dateKey = createDateKey(new Date(match.utcDate));
        const buffer = result.get(dateKey) ?? [];
        buffer.push(match);
        result.set(dateKey, buffer);

        return result;
      }, new Map<string, Array<MatchInfo>>()),
    [matches],
  );

  const dayRender = (day: Date) => {
    const dayKey = createDateKey(day);
    const dayMatches = matchMap.get(dayKey);
    return dayMatches
      ? dayMatches.map((match) => (
          <CalendarBadge
            key={match.id}
            name={`home-team:${match.homeTeam.name};away-team:${match.awayTeam.name}`}
            info={
              match.score.winner !== null
                ? `winner: ${match.score.winner}`
                : undefined
            }
          />
        ))
      : null;
  };
  return <Calendar dayRender={dayRender} />;
}
