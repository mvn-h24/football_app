import useSWR from 'swr';
import { AppFetcher, AppResources } from '../../utils';
import { TeamsList } from '@football-app/types';

export function useTeams() {
  return useSWR<TeamsList>(AppResources.teams, AppFetcher).data;
}
