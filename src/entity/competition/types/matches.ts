import { Match, MatchResultSet } from "@football-app/entity/match";
import { CompetitionSummary } from "./common";

export interface CompetitionMatchListing {
  filters: Filters;
  resultSet: MatchResultSet;
  competition: CompetitionSummary;
  matches: Match[];
}

interface Filters {
  season: string;
}
