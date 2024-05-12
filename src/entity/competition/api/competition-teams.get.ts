import { ApiFetcher } from "@football-app/shared/client";
import { CompetitionTeamsListing } from "../types";

export const competitionTeamsGet = (id: string | number) =>
  ApiFetcher<CompetitionTeamsListing>(`/competitions/${id}/teams`);
