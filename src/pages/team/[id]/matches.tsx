import {useTeam, useTeamMatches} from '@football-app/app/api-client';
import {ContentLayout, ErrorMessage, MatchesCalendar, Preloader,} from '@football-app/app/ui';
import Link from 'next/link';

function ReadTeamMatches() {
    const matches = useTeamMatches();
    const team = useTeam();
    if (matches === false || team === false) {
        return <ErrorMessage className="m-5" message={'server wrong response'}/>;
    }
    return (
        <ContentLayout className="self-center my-5">
      {matches === undefined || team === undefined ? (
          <Preloader/>
      ) : (
          <div>
          <h2>{team.name}</h2>
          <Link href={`/team/${team.id}`}>team info</Link>
          <MatchesCalendar matchesList={matches.matches}/>
        </div>
      )}
    </ContentLayout>
    );
}

export default ReadTeamMatches;
