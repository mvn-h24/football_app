import { teamGet, TeamMatches, teamMatchesGet } from "@football-app/entity";
import { TeamDetailModal } from "@football-app/widgets";

export default async function TeamDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [team, matches] = await Promise.all([
    teamGet(params.id),
    teamMatchesGet(params.id).then(
      (res) => (res as TeamMatches | undefined)?.matches ?? [],
    ),
  ]);

  return <TeamDetailModal {...{ team, matches }} />;
}
