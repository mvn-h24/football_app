import { MatchInfo } from './match-info';
import { Head2head } from './details';

export const MatchSummary = 'head-2-head';
export interface Match {
  [MatchSummary]: Head2head;
  match: MatchInfo;
}
