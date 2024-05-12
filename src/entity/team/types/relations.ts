import { TeamDetail } from "@football-app/entity/team";

export type TeamSummary = Pick<
  TeamDetail,
  "id" | "name" | "crest" | "shortName" | "tla"
>;

export type TeamSummaryExtended = Pick<
  TeamDetail,
  | "id"
  | "name"
  | "shortName"
  | "tla"
  | "crest"
  | "address"
  | "website"
  | "founded"
  | "clubColors"
  | "venue"
  | "lastUpdated"
>;
