import { ApiFetcher } from "@football-app/shared/client";
import { TeamListing } from "../types";

export const teamListingGet = () => ApiFetcher<TeamListing>("/teams");
