import { CompetitionDetailViewProps, SearchBox } from "@football-app/features";
import { Match } from "@football-app/entity";
import { ScrollLayout } from "@football-app/shared/ui";
import { ReactNode, Suspense } from "react";

export interface CompetitionInfoProps extends CompetitionDetailViewProps {
  matches: Array<Match>;
}

export function ResourceListingLayout({
  children,
  resourceName,
}: {
  children?: ReactNode;
  resourceName?: string;
}) {
  return (
    <>
      {resourceName ? (
        <h2 className="text-xl uppercase font-bold font-mono">
          {resourceName}
        </h2>
      ) : null}
      <Suspense>
        <SearchBox className="mt-3" searchParamName="competition" />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        {children}
      </ScrollLayout>
    </>
  );
}
