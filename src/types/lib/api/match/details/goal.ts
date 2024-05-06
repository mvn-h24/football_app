// noinspection ES6PreferShortImport
import { ResourceLabel } from '../../resource-label';

export interface Goal {
  minute: number;
  extraTime?: unknown;
  type: string;
  team: ResourceLabel;
  scorer: ResourceLabel;
  assist: ResourceLabel;
}
