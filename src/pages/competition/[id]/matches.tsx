import Link from 'next/link';
import {useCompetition, useCompetitionMatches,} from '@football-app/app/api-client';
import {ContentLayout, ErrorMessage, MatchesCalendar, Preloader,} from '@football-app/app/ui';

function CompetitionReadMatches() {
    const competition = useCompetition();
    const matchesInfo = useCompetitionMatches();
    if (competition === false || matchesInfo === false) {
        return <ErrorMessage className="m-5" message={'server wrong response'}/>;
    }
    return (
        <>
      <ContentLayout className="self-center my-5">
        {competition === undefined || matchesInfo === undefined ? (
            <Preloader/>
        ) : (
            <>
            <h1>Action calendar</h1>
            <Link href={`/competition/${competition.id}`}>
              competition info
            </Link>
                {matchesInfo.count ? (
                    <MatchesCalendar matchesList={matchesInfo.matches}/>
                ) : (
                    <div>Competition without matches!</div>
                )}
          </>
        )}
      </ContentLayout>
    </>
    );
}

export default CompetitionReadMatches;
