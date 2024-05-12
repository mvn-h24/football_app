import Fuse from "fuse.js";
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
  const competitions = await competitionListingGet();
  let data = competitions.competitions;

  const competitionSearchQuery = searchParams?.competition;
  if (typeof competitionSearchQuery === "string") {
    data = new Fuse(data, {
      threshold: 0.2,
      keys: ["name"],
    })
      .search(competitionSearchQuery)
      .map((res) => res.item);
  }

  return <CompetitionsListView competitions={data} />;
}
