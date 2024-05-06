import Link from 'next/link';
import {useTeam} from '@football-app/app/api-client';
import {ContentLayout, ErrorMessage, Preloader} from '@football-app/app/ui';

function ReadTeam() {
    const team = useTeam();
    if (team === false) {
        return <ErrorMessage className="m-5" message={'server wrong response'}/>;
    }
    return (
        <ContentLayout className="self-center my-5">
      {team === undefined ? (
          <Preloader/>
      ) : (
          <>
          <h1>{team.name}</h1>
          <Link href={`/team/${team.id}/matches`}>
            team matches
          </Link>
        </>
      )}
    </ContentLayout>
    );
}

export default ReadTeam;
