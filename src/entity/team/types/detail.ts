import { AreaSummary } from "@football-app/entity/area";
import { CompetitionSummary } from "@football-app/entity/competition";
import { Coach } from "@football-app/entity/person";

export interface TeamDetail {
  area: AreaSummary;
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  runningCompetitions: CompetitionSummary[];
  coach: Coach;
  squad: Squad[];
  staff: any[];
  lastUpdated: string;
}

export interface Squad {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  nationality: string;
}
