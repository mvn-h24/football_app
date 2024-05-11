import Fuse from "fuse.js";
import { SearchBox, TeamsListView } from "@football-app/features";
import { fetchTeams } from "@football-app/shared/client";
import { ScrollLayout } from "@football-app/shared/ui";
import { Suspense } from "react";

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
    <>
      <h2 className="text-xl uppercase font-bold font-mono">Команды</h2>
      <Suspense>
        <SearchBox className="mt-3" searchParamName="team" />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        <TeamsListView teams={data} />;
      </ScrollLayout>
    </>
  );
}
