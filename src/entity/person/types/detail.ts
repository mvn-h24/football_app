import { AreaSummary } from "@football-app/entity/area";
import { CompetitionSummary } from "@football-app/entity/competition";
import { Contract } from "./relations";

export interface PersonDetail {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  section?: string;
  position?: any;
  shirtNumber?: number;
  lastUpdated: string;
  currentTeam: CurrentTeam;
}

export interface CurrentTeam {
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
  contract: Contract;
}
