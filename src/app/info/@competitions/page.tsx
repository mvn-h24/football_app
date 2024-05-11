import { CompetitionsListView } from "@football-app/features";
import { fetchCompetitions } from "@football-app/shared/client";
import Fuse from "fuse.js";

export default async function CompetitionsList({
  searchParams,
}: {
  searchParams?: {
    competition?: string;
  };
}) {
  const competitions = await fetchCompetitions();
  let data = competitions.competitions;

  const competitionSearchQuery = searchParams?.competition;
  if (typeof competitionSearchQuery === "string") {
    new Fuse(competitions.competitions, {
      threshold: 0.2,
      keys: ["name"],
    })
      .search(competitionSearchQuery)
      .map((res) => res.item);
  }

  return <CompetitionsListView competitions={data} />;
}
