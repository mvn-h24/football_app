import {
  CompetitionDetailView,
  CompetitionDetailViewProps,
} from "@football-app/features";
import { MatchInfo } from "@football-app/types";
import { MatchesCalendar } from "@football-app/widgets/MatchesCalendar";
import { ScrollLayout } from "@football-app/shared/ui";

export interface CompetitionInfoProps extends CompetitionDetailViewProps {
  matches: Array<MatchInfo>;
}

export function CompetitionInfo({
  matches,
  competition,
}: CompetitionInfoProps) {
  return (
    <>
      <CompetitionDetailView competition={competition} className="mb-5" />
      <ScrollLayout>
        <div className="flex px-5">
          <MatchesCalendar matches={matches} />
        </div>
      </ScrollLayout>
    </>
  );
}
