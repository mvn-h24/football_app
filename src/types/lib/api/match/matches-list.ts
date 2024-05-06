import { MatchInfo } from './match-info';
import { RmlWithFilters } from '../resource-meta-list';

export interface MatchesList extends RmlWithFilters {
  matches: Array<MatchInfo>;
}
