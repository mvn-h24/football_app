import {
  CompetitionDetailView,
  CompetitionDetailViewProps,
  Match,
  MatchesCalendar,
} from "@football-app/entity";
import { ScrollLayout } from "@football-app/shared/ui";

export interface CompetitionInfoProps extends CompetitionDetailViewProps {
  matches: Array<Match>;
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
