export const AppFetcher = (url: string) => fetch(url).then((r) => r.json());
