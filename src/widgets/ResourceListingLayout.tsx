import { SearchBox } from "@football-app/features";
import { ScrollLayout } from "@football-app/shared/ui";
import { ReactNode, Suspense } from "react";

export function ResourceListingLayout({
  children,
  resourceName,
  searchName = "q",
}: {
  children?: ReactNode;
  resourceName?: string;
  searchName?: string;
}) {
  return (
    <>
      {resourceName ? (
        <h2 className="text-xl uppercase font-bold font-mono">
          {resourceName}
        </h2>
      ) : null}
      <Suspense>
        <SearchBox className="mt-3" searchParamName={searchName} />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        {children}
      </ScrollLayout>
    </>
  );
}
