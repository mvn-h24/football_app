import { Coach } from '../staff/coach';
import { Captain, Player } from '../../player';

export interface TeamComposition {
  id: number;
  name: string;
  coach: Coach;
  captain: Captain;
  lineup: Array<Player>;
  bench: Array<Player>;
}
