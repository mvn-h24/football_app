import Link from 'next/link';
import {useCompetition} from '@football-app/app/api-client';
import {ContentLayout, ErrorMessage, Preloader} from '@football-app/app/ui';

function CompetitionRead() {
    const competition = useCompetition();
    if (competition === false) {
        return <ErrorMessage className="m-5" message={'server wrong response'}/>;
    }
    return (
        <ContentLayout className="self-center my-5">
      {competition === undefined ? (
          <Preloader/>
      ) : (
          <>
          <h1>{competition.name}</h1>
          <Link href={`/competition/${competition.id}/matches`}>
            Matches
          </Link>
        </>
      )}
    </ContentLayout>
    );
}

export default CompetitionRead;
