import {NextRouter, useRouter} from 'next/router';

export function useRequestSearchQuery(queryName = 'q'): [string, NextRouter] {
    const router = useRouter();
    const route = router.query[queryName];
    return [
        route !== undefined
            ? Array.isArray(route)
                ?
                route.join('/')
                : route
            : '',
        router,
    ];
}
