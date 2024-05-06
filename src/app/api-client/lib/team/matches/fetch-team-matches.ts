import { AppError, MatchesList } from '@football-app/types';
import { ApiFetcher, ApiResources } from '../../utils';

export const fetchTeamMatches = (id: string | number) =>
  ApiFetcher<MatchesList | AppError>(ApiResources.team.matches(id.toString()));
