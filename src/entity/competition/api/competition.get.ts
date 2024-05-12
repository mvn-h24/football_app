import { ApiFetcher } from "@football-app/shared/client";
import { Competition } from "../types";

export const competitionGet = (id: string | number) =>
  ApiFetcher<Competition>(`/competitions/${id}`);
