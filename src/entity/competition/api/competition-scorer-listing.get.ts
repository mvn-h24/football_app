import { ApiFetcher } from "@football-app/shared/client";
import { CompetitionScorerListing } from "../types";

export const competitionScorerListingGet = (id: string | number) =>
  ApiFetcher<CompetitionScorerListing>(`/competitions/${id}/scorers`);
