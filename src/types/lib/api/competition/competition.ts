import { Season, SeasonMeta } from './index';
import { CompetitionResourceLabel } from './competition-resource-label';

export interface Competition extends CompetitionListItem {
  seasons: Array<SeasonMeta>;
}

export interface CompetitionListItem extends CompetitionResourceLabel {
  numberOfAvailableSeasons: number | null;
  code: string | null;
  emblemUrl: string | null;
  plan: string;
  currentSeason: Season;
  lastUpdated: Date;
}
