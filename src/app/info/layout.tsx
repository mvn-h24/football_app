import { ReactNode } from "react";
import { ContentLayout } from "@football-app/shared/ui";

interface AppLayoutProps {
  children: ReactNode;
  teams: ReactNode;
  modal: ReactNode;
  competitions: ReactNode;
}

export default function AppLayout({
  teams,
  modal,
  competitions,
}: AppLayoutProps) {
  return (
    <div className="self-center p-5 grid grid-cols-3 grid-rows-1 w-full flex-grow overflow-hidden gap-5">
      <ContentLayout className="overflow-hidden flex flex-col w-full">
        {teams}
      </ContentLayout>
      <ContentLayout className="overflow-hidden flex flex-col w-full">
        {competitions}
      </ContentLayout>
      {modal}
    </div>
  );
}
