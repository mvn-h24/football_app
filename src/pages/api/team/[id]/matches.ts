import {fetchTeamMatches} from '@football-app/app/api-client';
import {AppError, MatchesList} from '@football-app/types';
import {AxiosError} from 'axios';
import {NextApiRequest, NextApiResponse} from 'next';

const endpoint = (
    req: NextApiRequest,
    res: NextApiResponse<MatchesList | AppError>
) =>
    fetchTeamMatches((Array.isArray(req.query.id) ? req.query.id[0] : req.query.id) ?? '')
        .then((apiResponse) => {
            if (apiResponse.status === 200) {
                res.json(apiResponse.data);
            } else {
                res.status(404).json({
                    status: apiResponse.status,
                    description: apiResponse.statusText,
                });
            }
            return res;
        })
        .catch((reason: AxiosError) =>
            res.status(500).json({
                status: reason.response?.status ?? 400,
                //@ts-ignore
                description: reason.response?.data?.message,
            })
        );

export default endpoint;
