import { Match, MatchResultSet } from "@football-app/entity/match";

export interface TeamMatches {
  filters: Filters;
  resultSet: MatchResultSet;
  matches: Match[];
}

interface Filters {
  competitions: string;
  permission: string;
  limit: number;
}
