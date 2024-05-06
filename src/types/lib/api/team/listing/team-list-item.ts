import { Team } from '..';

export type TeamsListItem = Omit<Team, 'activeCompetitions' | 'squad'>;
