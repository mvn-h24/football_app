import { CompetitionDetailViewProps } from "@football-app/features";
import { MatchInfo } from "@football-app/types";
import { ContentLayout } from "@football-app/shared/ui";
import { ReactNode } from "react";
import Link from "next/link";

export interface CompetitionInfoProps extends CompetitionDetailViewProps {
  matches: Array<MatchInfo>;
}

export function StandaloneResourceLayout({
  children,
}: {
  children?: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 w-full px-10 py-5 overflow-hidden">
      <div className="w-11/12">
        <Link className="btn" href="/info">
          К табло
        </Link>
      </div>
      <ContentLayout className="overflow-hidden flex flex-col w-full">
        {children}
      </ContentLayout>
    </div>
  );
}
