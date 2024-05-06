import { ResourceLabel } from '../resource-label';

export interface Winner extends ResourceLabel {
  shortName: string | null;
  tla: string | null;
  crestUrl: string | null;
}
