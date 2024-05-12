import { CompetitionInfo } from "@football-app/widgets";
import {
  competitionGet,
  CompetitionMatchListing,
  competitionMatchListingGet,
} from "@football-app/entity";

export default async function TeamDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [competition, matches] = await Promise.all([
    competitionGet(params.id),
    competitionMatchListingGet(params.id).then(
      (res) => (res as CompetitionMatchListing | undefined)?.matches ?? [],
    ),
  ]);
  return <CompetitionInfo {...{ competition, matches }} />;
}
