import { AreaSummary } from "@football-app/entity/area";
import { CompetitionSeason, CompetitionSummary } from "./common";
import { TeamSummary } from "@football-app/entity/team";

export interface CompetitionStandingsListing {
  filters: Filters;
  area: AreaSummary;
  competition: CompetitionSummary;
  season: CompetitionSeason;
  standings: Standing[];
}

export interface Standing {
  stage: string;
  type: string;
  group?: any;
  table: Table[];
}

export interface Table {
  position: number;
  team: TeamSummary;
  playedGames: number;
  form?: any;
  won: number;
  draw: number;
  lost: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

interface Filters {
  season: string;
}
