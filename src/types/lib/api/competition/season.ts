import { Winner } from './winner';

export interface SeasonDetail extends Season {
  availableStages?: Array<string>;
}

export interface Season extends SeasonMeta {
  currentMatchday: number;
}

export interface SeasonMeta {
  id: number;
  startDate: Date;
  endDate: Date;
  currentMatchday: number;
  winner: Winner | null;
}
