import { ReactNode } from "react";
import { DashboardResourceLayout } from "@football-app/widgets";

export default function TeamsLayout({ children }: { children: ReactNode }) {
  return (
    <DashboardResourceLayout resourceName="Команды" searchName="team">
      {children}
    </DashboardResourceLayout>
  );
}
