import { TeamResourceLabel } from './team-resource-label';
import { AreaResourceLabel } from '../area';
import { CompetitionListItem } from '../competition';
import { PlayerDetail } from '../player';

export interface Team extends TeamResourceLabel {
  area: AreaResourceLabel;
  activeCompetitions: Array<
    Pick<
      CompetitionListItem,
      'id' | 'area' | 'name' | 'code' | 'plan' | 'lastUpdated'
    >
  >;
  shortName: string | null;
  tla: string | null;
  crestUrl: string | null;
  address: string | null;
  phone: string | null;
  website: string | null;
  email: string | null;
  founded: number;
  clubColors: string | null;
  venue: string | null;
  lastUpdated: Date;
  squad: Array<PlayerDetail>;
}
