import { ApiFetcher } from "@football-app/shared/client";
import { TeamMatches } from "../types";

export const teamMatchesGet = (id: string | number) =>
  ApiFetcher<TeamMatches>(`/teams/${id}/matches`);
