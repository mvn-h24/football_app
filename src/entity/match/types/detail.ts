import { Referee } from "@football-app/entity/person";
import { TeamSummary } from "@football-app/entity/team";
import {
  CompetitionSeason,
  CompetitionSummary,
} from "@football-app/entity/competition";
import { AreaSummary } from "@football-app/entity";
import { Odds, Score } from "./common";

export interface MatchDetail {
  area: AreaSummary;
  competition: CompetitionSummary;
  season: CompetitionSeason;
  id: number;
  utcDate: string;
  status: string;
  venue: string;
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
