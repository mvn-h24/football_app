import { TeamDetailView, TeamDetailViewProps } from "@football-app/features";
import { Match } from "@football-app/entity";
import { MatchesCalendar } from "@football-app/widgets/MatchesCalendar";
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
