import { TeamDetailView, TeamDetailViewProps } from "@football-app/features";
import { MatchInfo } from "@football-app/types";
import { MatchesCalendar } from "@football-app/widgets/MatchesCalendar";
import { ScrollLayout } from "@football-app/shared/ui";

export interface TeamInfoProps extends TeamDetailViewProps {
  matches: Array<MatchInfo>;
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
