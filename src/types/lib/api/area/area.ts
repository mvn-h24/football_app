import { CountryCodes } from '../enum';
import { AreaResourceLabel } from './area-resource-label';

export interface Area extends AreaResourceLabel {
  countryCode: CountryCodes;
  ensignUrl: string | null;
  parentAreaId: number;
  parentArea: string;
  childAreas: Array<AreaListItem>;
}
export type AreaListItem = Omit<Area, 'childAreas'>;
