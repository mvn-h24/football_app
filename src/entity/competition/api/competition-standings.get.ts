import { ApiFetcher } from "@football-app/shared/client";
import { CompetitionStandingsListing } from "../types";

export const competitionStandingsGet = (id: string | number) =>
  ApiFetcher<CompetitionStandingsListing>(`/competitions/${id}/standings`);
