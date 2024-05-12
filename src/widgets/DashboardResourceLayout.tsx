import { ReactNode, Suspense } from "react";
import { SearchBox } from "@football-app/features";
import { ContentLayout, ScrollLayout } from "@football-app/shared/ui";

export function DashboardResourceLayout({
  children,
  resourceName,
  searchName = "q",
}: {
  children?: ReactNode;
  resourceName?: string;
  searchName?: string;
}) {
  return (
    <ContentLayout className="overflow-hidden flex flex-col">
      {resourceName ? (
        <h2 className="profile-heading">{resourceName}</h2>
      ) : null}
      <Suspense>
        <SearchBox className="mt-3" searchParamName={searchName} />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        {children}
      </ScrollLayout>
    </ContentLayout>
  );
}
