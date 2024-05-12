import { ReactNode } from "react";
import { StandaloneResourceLayout } from "@football-app/widgets";
import { ContentLayout } from "@football-app/shared/ui";

export default function CompetitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StandaloneResourceLayout>
      <ContentLayout className="overflow-hidden flex flex-col w-full">
        {children}
      </ContentLayout>
    </StandaloneResourceLayout>
  );
}
