import { AreaSummary } from "@football-app/entity/area";
import {
  CompetitionSeason,
  CompetitionSummary,
} from "@football-app/entity/competition";
import { Referee } from "@football-app/entity/person";
import { TeamSummary } from "@football-app/entity/team";
import { MatchResultSet, Odds, Score } from "./common";

export interface MatchListing {
  filters: Filters;
  resultSet: MatchResultSet;
  matches: Match[];
}

export interface Match {
  area: AreaSummary;
  competition: CompetitionSummary;
  season: CompetitionSeason;
  id: number;
  utcDate: string;
  status: string;
  matchday: number;
  stage: string;
  group?: any;
  lastUpdated: string;
  homeTeam: TeamSummary;
  awayTeam: TeamSummary;
  score: Score;
  odds: Odds;
  referees: Referee[];
}

interface Filters {
  dateFrom: string;
  dateTo: string;
  permission: string;
}
