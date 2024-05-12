import { AreaSummary } from "@football-app/entity/area";
import { CompetitionSeason } from "./common";

export interface Competition {
  area: AreaSummary;
  id: number;
  name: string;
  code: string;
  type: string;
  emblem: string;
  currentSeason: CompetitionSeason;
  seasons: CompetitionSeason[];
  lastUpdated: string;
}

export interface CompetitionListing {
  count: number;
  filters: Filters;
  competitions: CompetitionListItem[];
}

interface Filters {
  client: string;
}

export interface CompetitionListItem {
  id: number;
  area: AreaSummary;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  currentSeason: CompetitionSeason;
  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
