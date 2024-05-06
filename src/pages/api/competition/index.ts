import { NextApiRequest, NextApiResponse } from 'next';
import { AppError, CompetitionsList } from '@football-app/types';
import { fetchCompetitions } from '@football-app/app/api-client';

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<CompetitionsList | AppError>
) =>
  fetchCompetitions().then(async (response) => {
    res.json(response);
    return res;
  });
export default handler;
