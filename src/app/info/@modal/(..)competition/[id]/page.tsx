import {
  competitionGet,
  CompetitionMatchListing,
  competitionMatchListingGet,
} from "@football-app/entity";
import { DashboardDetailModal } from "@football-app/features";
import { CompetitionInfo } from "@football-app/widgets";

export default async function CompetitionDetailPage({
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

  return (
    <DashboardDetailModal>
      <CompetitionInfo {...{ competition, matches }} />
    </DashboardDetailModal>
  );
}
