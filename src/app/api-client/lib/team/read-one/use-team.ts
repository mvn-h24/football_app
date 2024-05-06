import { useRouter } from 'next/router';
import useSWR from 'swr';
import { AppError, Team } from '@football-app/types';
import { AppFetcher, AppResources } from '../../utils';

export function useTeam(): Team | undefined | false {
  const router = useRouter();
  const id = Array.isArray(router.query['id'])
    ? router.query['id'].join('/')
    : router.query['id'];
  const teamResponse = useSWR<Team | AppError>(
    id === undefined ? undefined : AppResources.team.details(id),
    AppFetcher
  );
  if ((teamResponse.data as AppError | undefined)?.status !== undefined) {
    return false;
  }
  return teamResponse.data as Team | undefined;
}
