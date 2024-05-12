import { ApiFetcher } from "@football-app/shared/client";
import { CompetitionMatchListing } from "../types";

export const competitionMatchListingGet = (id: string | number) =>
  ApiFetcher<CompetitionMatchListing>(`/competitions/${id}/matches`);
