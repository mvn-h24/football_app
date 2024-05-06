import Link from 'next/link';
import {fetchTeams} from '@football-app/app/api-client';
import {ContentLayout, ErrorMessage, SearchBox} from '@football-app/app/ui';
import {useState} from 'react';
import {GetStaticProps} from 'next';
import {type TeamsList} from '@football-app/types';

interface TeamsListPageProps {
    teams: TeamsList;
}

function TeamsList({teams}: TeamsListPageProps) {
    const [teamsState] = useState(teams);
    const [teamsListState, teamsListSetter] = useState(teamsState.teams);
    if (teamsListState === undefined) {
        return <ErrorMessage className="m-5" message={'server wrong response'}/>;
    }
    return (
        <ContentLayout className="self-center my-5">
      <SearchBox
          resultSetter={teamsListSetter}
          dataSource={teamsState.teams}
          searchKeys={['name']}
      />
            {teamsListState.length ? (
                <ul>
          {teamsListState.map(({id, name}) => (
              <li key={id}>
              <Link
                  href={{
                      pathname: '/team/[id]',
                      query: {id},
                  }}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
            ) : (
                <></>
            )}
    </ContentLayout>
    );
}

export const getStaticProps: GetStaticProps<TeamsListPageProps> = async () => ({
    props: {
        teams: await fetchTeams(),
    },
});
export default TeamsList;
