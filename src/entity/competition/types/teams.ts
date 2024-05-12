import { TeamDetail } from "@football-app/entity/team";
import { CompetitionSeason, CompetitionSummary } from "./common";

export interface CompetitionTeamsListing {
  count: number;
  filters: Filters;
  competition: CompetitionSummary;
  season: CompetitionSeason;
  teams: TeamDetail[];
}

interface Filters {
  season: string;
}
