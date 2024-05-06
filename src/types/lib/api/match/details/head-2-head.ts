import { TeamStatistics } from '../../team';

export interface Head2head {
  numberOfMatches: number;
  totalGoals: number;
  homeTeam: TeamStatistics;
  awayTeam: TeamStatistics;
}
