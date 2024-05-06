import { TeamComposition } from '@football-app/types';
import { ApiFetcher, ApiResources } from '../../utils';

export const fetchTeam = (id: string | number) =>
  ApiFetcher<TeamComposition>(ApiResources.team.details(id));
