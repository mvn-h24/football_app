import { ReactNode, Suspense } from "react";
import { ContentLayout, ScrollLayout } from "@football-app/shared/ui";
import { SearchBox } from "@football-app/features";

export default function TeamsLayout({ children }: { children: ReactNode }) {
  return (
    <ContentLayout className="overflow-hidden flex flex-col">
      <h2 className="profile-heading">Команды</h2>
      <Suspense>
        <SearchBox className="mt-3" searchParamName="team" />
      </Suspense>
      <ScrollLayout className="overflow-hidden mt-5 flex-grow">
        {children}
      </ScrollLayout>
    </ContentLayout>
  );
}
