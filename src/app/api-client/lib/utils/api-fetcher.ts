import axios, { AxiosResponse } from 'axios';

export function ApiFetcher<ResponseData>(url: string) {
  return axios.request<ResponseData, AxiosResponse<ResponseData>>({
    url,
    baseURL: 'https://api.football-data.org/v4',
    method: 'GET',
    headers: {
      'X-Auth-Token': process.env['FOOTBALL_API_KEY'] ?? '',
    },
  });
}
