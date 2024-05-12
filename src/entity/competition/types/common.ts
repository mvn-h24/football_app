import { TeamSummaryExtended } from "@football-app/entity/team";
import { Competition } from "./resource";

export interface CompetitionSeason {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number;
  winner?: TeamSummaryExtended;
}

export type CompetitionSummary = Pick<
  Competition,
  "id" | "name" | "code" | "type" | "emblem"
>;
