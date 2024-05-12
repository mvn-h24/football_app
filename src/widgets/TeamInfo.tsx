import {
  Match,
  MatchesCalendar,
  TeamDetailView,
  TeamDetailViewProps,
} from "@football-app/entity";
import { ScrollLayout } from "@football-app/shared/ui";

export interface TeamInfoProps extends TeamDetailViewProps {
  matches: Array<Match>;
}

export function TeamInfo({ matches, team }: TeamInfoProps) {
  return (
    <>
      <TeamDetailView team={team} />
      <ScrollLayout>
        <div className="flex">
          <MatchesCalendar matches={matches} />
        </div>
      </ScrollLayout>
    </>
  );
}
