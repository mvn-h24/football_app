import { ApiFetcher, ApiResources } from "../utils";
import { TeamComposition } from "@football-app/types";

export const fetchTeam = (id: string | number) =>
  ApiFetcher<TeamComposition>(ApiResources.team.details(id));
