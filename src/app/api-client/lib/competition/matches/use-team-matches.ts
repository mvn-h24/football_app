import useSWR from 'swr';
import { AppError, MatchesList } from '@football-app/types';
import { AppFetcher, AppResources } from '../../utils';
import { useRouter } from 'next/router';

export function useCompetitionMatches() {
  const router = useRouter();
  const id = Array.isArray(router.query['id'])
    ? router.query['id'].join('/')
    : router.query['id'];
  const matchesResponse = useSWR<MatchesList | AppError>(
    id === undefined ? undefined : AppResources.competition.matches(id),
    AppFetcher
  );
  if ((matchesResponse.data as AppError | undefined)?.status !== undefined) {
    return false;
  }
  return matchesResponse.data as MatchesList | undefined;
}
