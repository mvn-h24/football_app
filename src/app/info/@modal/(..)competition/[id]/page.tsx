import {
  fetchCompetition,
  fetchCompetitionMatches,
} from "@football-app/shared/client";
import { CompetitionDetailModal } from "@football-app/widgets";
import { MatchesList } from "@football-app/types";

export default async function CompetitionDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [competition, matches] = await Promise.all([
    fetchCompetition(params.id),
    fetchCompetitionMatches(params.id).then(
      (res) => (res as MatchesList | undefined)?.matches ?? [],
    ),
  ]);

  return <CompetitionDetailModal {...{ competition, matches }} />;
}
