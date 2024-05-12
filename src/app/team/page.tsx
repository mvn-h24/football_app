import Fuse from "fuse.js";
import { TeamsListView } from "@football-app/features";
import { ResourceListingLayout } from "@football-app/widgets";
import { teamListingGet } from "@football-app/entity";

export default async function TeamsList({
  searchParams,
}: {
  searchParams?: {
    team?: string;
  };
}) {
  const teams = await teamListingGet();
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
