import useSWR from 'swr';
import { AppFetcher, AppResources } from '../../utils';
import { CompetitionsList } from '@football-app/types';

export function useCompetitions() {
  return useSWR<CompetitionsList>(AppResources.competitions, AppFetcher).data;
}
