import { TeamSummaryExtended } from "@football-app/entity/team";
import { Player } from "@football-app/entity/person";
import { CompetitionSeason, CompetitionSummary } from "./common";

export interface CompetitionScorerListing {
  count: number;
  filters: Filters;
  competition: CompetitionSummary;
  season: CompetitionSeason;
  scorers: Scorer[];
}

interface Scorer {
  player: Player;
  team: TeamSummaryExtended;
  playedMatches: number;
  goals: number;
  assists?: number;
  penalties?: number;
}

interface Filters {
  season: string;
  limit: number;
}
