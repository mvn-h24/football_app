import { CompetitionListItem } from './index';
import { RmlWithFilters } from '../resource-meta-list';

export interface CompetitionsList extends RmlWithFilters {
  competitions: Array<CompetitionListItem>;
}
