import { ApiFetcher, ApiResources } from "../utils";
import { TeamsList } from "@football-app/types";

export const fetchTeams = () =>
  ApiFetcher<TeamsList>(`${ApiResources.teams}?plan=TIER_ONE`);
