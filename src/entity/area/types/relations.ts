import { AreaDetail } from "./resource";

export type AreaSummary = Pick<AreaDetail, "id" | "name" | "code" | "flag">;
