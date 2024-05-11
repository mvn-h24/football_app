import { ReactNode, Suspense } from "react";
import { ContentLayout, ScrollLayout } from "@football-app/shared/ui";
import { SearchBox } from "@football-app/features";

export default function CompetitionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ContentLayout className="overflow-hidden flex flex-col">
      <h2 className="profile-heading">Соревнование</h2>
      <Suspense>
        <SearchBox className="mt-3" searchParamName="competition" />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        {children}
      </ScrollLayout>
    </ContentLayout>
  );
}
