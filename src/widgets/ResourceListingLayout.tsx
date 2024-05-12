import { SearchBox } from "@football-app/features";
import { ScrollLayout } from "@football-app/shared/ui";
import { createElement, ReactNode, Suspense } from "react";

export function ResourceListingLayout({
  children,
  resourceName,
  searchName = "q",
  level = 1,
}: {
  children?: ReactNode;
  resourceName?: string;
  searchName?: string;
  level?: 1 | 2;
}) {
  return (
    <>
      {resourceName
        ? createElement(
            `h${level}`,
            { className: "profile-heading" },
            resourceName,
          )
        : null}
      <Suspense>
        <SearchBox className="mt-3" searchParamName={searchName} />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        {children}
      </ScrollLayout>
    </>
  );
}
