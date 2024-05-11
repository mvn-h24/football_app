import { ApiFetcher, ApiResources } from "../utils";
import { CompetitionsList } from "@football-app/types";

export const fetchCompetitions = () =>
  ApiFetcher<CompetitionsList>(`${ApiResources.competitions}?plan=TIER_ONE`);
