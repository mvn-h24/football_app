import Fuse from "fuse.js";
import { TeamsListView } from "@football-app/features";
import { fetchTeams } from "@football-app/shared/client";
import { ResourceListingLayout } from "@football-app/widgets";

export default async function TeamsList({
  searchParams,
}: {
  searchParams?: {
    team?: string;
  };
}) {
  const teams = await fetchTeams();
  let data = teams.teams;

  const teamSearchQuery = searchParams?.team;
  if (typeof teamSearchQuery === "string") {
    data = new Fuse(data, {
      threshold: 0.2,
      keys: ["name"],
      isCaseSensitive: false,
    })
      .search(teamSearchQuery)
      .map((res) => res.item);
  }

  return (
    <ResourceListingLayout resourceName="Команды">
      <TeamsListView teams={data} />;
    </ResourceListingLayout>
  );
}
