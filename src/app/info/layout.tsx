import { ReactNode } from "react";

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
    <div className="self-center p-5 grid grid-cols-3 grid-rows-1 w-full flex-grow overflow-hidden">
      {teams}
      {competitions}
      {modal}
    </div>
  );
}
