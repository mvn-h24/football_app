import Fuse from "fuse.js";
import { CompetitionsListView } from "@football-app/features";
import { fetchCompetitions } from "@football-app/shared/client";
import { ResourceListingLayout } from "@football-app/widgets";

export default async function CompetitionsList({
  searchParams,
}: {
  searchParams?: {
    competition?: string;
  };
}) {
  const teams = await fetchCompetitions();
  let data = teams.competitions;
  const searchQuery = searchParams?.competition;
  if (typeof searchQuery === "string") {
    data = new Fuse(data, {
      threshold: 0.2,
      keys: ["name"],
      isCaseSensitive: false,
    })
      .search(searchQuery)
      .map((res) => res.item);
  }

  return (
    <ResourceListingLayout resourceName="Соревнования">
      <CompetitionsListView competitions={data} />
    </ResourceListingLayout>
  );
}
