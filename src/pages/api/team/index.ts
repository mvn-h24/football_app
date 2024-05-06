import { fetchTeams } from '@football-app/app/api-client';
import { NextApiRequest, NextApiResponse } from 'next';
import { AppError, TeamsList } from '@football-app/types';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<TeamsList | AppError>
) =>
  fetchTeams().then((response) => {
    res.json(response);
    return res;
  });
export default handler;
