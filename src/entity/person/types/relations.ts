import { PersonDetail } from "./detail";

export type Player = Pick<
  PersonDetail,
  | "id"
  | "name"
  | "firstName"
  | "lastName"
  | "dateOfBirth"
  | "nationality"
  | "section"
  | "position"
  | "shirtNumber"
  | "lastUpdated"
>;

export interface Coach
  extends Pick<
    PersonDetail,
    "id" | "firstName" | "lastName" | "name" | "dateOfBirth" | "nationality"
  > {
  contract: Contract;
}

export interface Referee
  extends Pick<PersonDetail, "id" | "name" | "nationality"> {
  type: string;
}

export interface Contract {
  start: string;
  until: string;
}
