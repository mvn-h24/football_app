import Fuse from "fuse.js";
import { CompetitionsListView, SearchBox } from "@football-app/features";
import { fetchCompetitions } from "@football-app/shared/client";
import { ScrollLayout } from "@football-app/shared/ui";
import { Suspense } from "react";

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
    <>
      <h2 className="text-xl uppercase font-bold font-mono">Соревнования</h2>
      <Suspense>
        <SearchBox className="mt-3" searchParamName="competition" />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        <CompetitionsListView competitions={data} />
      </ScrollLayout>
    </>
  );
}
