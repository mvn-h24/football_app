import { AppError, MatchesList } from "@football-app/types";
import { ApiFetcher, ApiResources } from "../utils";

export const fetchCompetitionMatches = (id: string | number) =>
  ApiFetcher<MatchesList | AppError>(
    ApiResources.competition.matches(id.toString()),
  );
