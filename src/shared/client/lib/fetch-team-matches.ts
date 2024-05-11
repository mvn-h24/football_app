import { ApiFetcher, ApiResources } from "../utils";
import { AppError, MatchesList } from "@football-app/types";

export const fetchTeamMatches = (id: string | number) =>
  ApiFetcher<MatchesList | AppError>(ApiResources.team.matches(id.toString()));
