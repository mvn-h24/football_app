import { ApiFetcher } from "@football-app/shared/client";
import { TeamDetail } from "../types";

export const teamGet = (id: string) => ApiFetcher<TeamDetail>(`/teams/${id}`);
