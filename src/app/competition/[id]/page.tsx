import {
  fetchCompetition,
  fetchCompetitionMatches,
} from "@football-app/shared/client";
import { CompetitionInfo } from "@football-app/widgets";
import { MatchesList } from "@football-app/types";

export default async function TeamDetailPage({
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
  return <CompetitionInfo {...{ competition, matches }} />;
}
