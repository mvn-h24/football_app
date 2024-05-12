import { ApiFetcher } from "@football-app/shared/client";
import { CompetitionListing } from "../types";

export const competitionListingGet = () =>
  ApiFetcher<CompetitionListing>("/competitions");
