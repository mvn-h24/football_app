import { fetchTeam, fetchTeamMatches } from "@football-app/shared/client";
import { TeamInfo } from "@football-app/widgets";
import { MatchesList } from "@football-app/types";

export default async function TeamDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [team, matches] = await Promise.all([
    fetchTeam(params.id),
    fetchTeamMatches(params.id).then(
      (res) => (res as MatchesList | undefined)?.matches ?? [],
    ),
  ]);
  return <TeamInfo {...{ team, matches }} />;
}
