import { NextRouter, useRouter } from 'next/router';

export function useRequestSearchQuery(queryName = 'q'): [string, NextRouter] {
  const router = useRouter();
  return [
    router.query[queryName] !== undefined
      ? Array.isArray(router.query[queryName])
        ? // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          router.query[queryName].join('/')
        : router.query[queryName]
      : '',
    router,
  ];
}
