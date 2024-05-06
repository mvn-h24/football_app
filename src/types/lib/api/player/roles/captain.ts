import { Player } from '../player';

export type Captain = Omit<Player, 'position'>;
