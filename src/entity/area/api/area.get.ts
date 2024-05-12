import { ApiFetcher } from "@football-app/shared/client";
import { AreaListingResponse } from "..";

export const areaGet = (id: string | number) =>
  ApiFetcher<AreaListingResponse>(`/areas/${id}`);
