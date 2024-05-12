import { ReactNode } from "react";
import { ResourceListingLayout } from "@football-app/widgets";

export default function TeamsLayout({ children }: { children: ReactNode }) {
  return (
    <ResourceListingLayout level={2} resourceName="Команды" searchName="team">
      {children}
    </ResourceListingLayout>
  );
}
