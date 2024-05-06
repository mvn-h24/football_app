import { RmlWithFilters } from '../../resource-meta-list';
import { TeamsListItem } from './team-list-item';

export interface TeamsList extends RmlWithFilters {
  teams: Array<TeamsListItem>;
}
