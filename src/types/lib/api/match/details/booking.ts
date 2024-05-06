// noinspection ES6PreferShortImport
import { ResourceLabel } from '../../resource-label';
import { Player } from '../../player';

export interface Booking {
  minute: number;
  team: ResourceLabel;
  player: Player;
  card: string;
}
