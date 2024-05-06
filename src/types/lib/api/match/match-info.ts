import { CompetitionResourceLabel, Season } from '../competition';
import { TeamResourceLabel } from '../team';
import { MatchState } from './enum';
import { Score } from './details';
import { MatchReferee } from './staff';
import { MatchResourceLabel } from './match-resource-label';

export interface MatchInfo extends MatchResourceLabel {
  competition: CompetitionResourceLabel;
  season: Season;
  utcDate: Date;
  status: MatchState;
  venue: string;
  matchday: number;
  // stage: MatchStage;
  group: null;
  lastUpdated: Date;
  odds: {
    msg: string;
  };
  score: Score;
  homeTeam: TeamResourceLabel;
  awayTeam: TeamResourceLabel;
  referees: Array<MatchReferee>;
}
