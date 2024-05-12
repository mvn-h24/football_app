import Fuse from "fuse.js";
import { teamListingGet, TeamsListView } from "@football-app/entity";

export default async function TeamsList({
  searchParams,
}: {
  searchParams?: {
    team?: string;
  };
}) {
  const teams = await teamListingGet();
  let data = teams.teams;

  const teamsSearchQuery = searchParams?.team;
  if (typeof teamsSearchQuery === "string") {
    data = new Fuse(data, {
      threshold: 0.2,
      keys: ["name"],
      isCaseSensitive: false,
    })
      .search(teamsSearchQuery)
      .map((res) => res.item);
  }

  return <TeamsListView teams={data} />;
}
