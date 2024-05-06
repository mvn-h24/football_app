import Link from 'next/link';
import { fetchCompetitions } from '@football-app/app/api-client';
import { ContentLayout, ErrorMessage, SearchBox } from '@football-app/app/ui';
import { useState } from 'react';
import { GetStaticProps } from 'next';
import { type CompetitionsList } from '@football-app/types';

interface CompetitionsListPageProps {
  competitions: CompetitionsList;
}

function CompetitionsList({ competitions }: CompetitionsListPageProps) {
  const [competitionsState] = useState(competitions);
  const [competitionsListState, competitionsListSetter] = useState(
    competitionsState.competitions
  );
  return competitionsListState === undefined ? (
    <ErrorMessage className="m-5" message={'server wrong response'} />
  ) : (
    <ContentLayout className="self-center my-5">
      <SearchBox
        resultSetter={competitionsListSetter}
        dataSource={competitionsState.competitions}
        searchKeys={['name']}
      />
      {competitionsListState.length ? (
        <ul>
          {competitionsListState.map(({ id, name }) => (
            <li key={id}>
              <Link
                href={{
                  pathname: '/competition/[id]',
                  query: { id },
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
export const getStaticProps: GetStaticProps<
  CompetitionsListPageProps
> = async () => ({
  props: {
    competitions: await fetchCompetitions(),
  },
});
export default CompetitionsList;
