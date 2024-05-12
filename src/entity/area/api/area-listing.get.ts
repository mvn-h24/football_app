import { ApiFetcher } from "@football-app/shared/client";
import { AreaListingResponse } from "..";

export const areaListingGet = () => ApiFetcher<AreaListingResponse>("/areas");
