// noinspection ES6PreferShortImport
import { ResourceLabel } from '../../resource-label';

export interface Substitution {
  minute: number;
  team: ResourceLabel;
  playerOut: ResourceLabel;
  playerIn: ResourceLabel;
}
