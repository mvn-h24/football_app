import { Competition } from '@football-app/types';
import { ApiFetcher, ApiResources } from '../../utils';

export const fetchCompetition = (id: string | number) =>
  ApiFetcher<Competition>(`${ApiResources.competitions}/${id}`);
