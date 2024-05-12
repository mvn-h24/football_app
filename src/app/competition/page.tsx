import Fuse from "fuse.js";
import { ResourceListingLayout } from "@football-app/widgets";
import {
  competitionListingGet,
  CompetitionsListView,
} from "@football-app/entity";

export default async function CompetitionsList({
  searchParams,
}: {
  searchParams?: {
    competition?: string;
  };
}) {
  const teams = await competitionListingGet();
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
    <ResourceListingLayout resourceName="Соревнования" searchName="competition">
      <CompetitionsListView competitions={data} />
    </ResourceListingLayout>
  );
}
