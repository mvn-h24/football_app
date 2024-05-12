import { ReactNode } from "react";
import { ResourceListingLayout } from "@football-app/widgets";

export default function CompetitionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ResourceListingLayout
      level={2}
      resourceName="Соревнование"
      searchName="competition"
    >
      {children}
    </ResourceListingLayout>
  );
}
