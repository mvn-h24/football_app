import { TeamSummaryExtended } from "@football-app/entity/team";

export interface TeamListing {
  count: number;
  filters: Filters;
  teams: TeamSummaryExtended[];
}

interface Filters {
  limit: number;
  offset: number;
  permission: string;
}
