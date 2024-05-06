import { RmlWithFilters } from '../resource-meta-list';
import { AreaListItem } from './area';

export interface AreasList extends RmlWithFilters {
  areas: Array<AreaListItem>;
}
