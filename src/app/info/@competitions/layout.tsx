import { ReactNode } from "react";
import { DashboardResourceLayout } from "@football-app/widgets/DashboardResourceLayout";

export default function CompetitionsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DashboardResourceLayout
      resourceName="Соревнование"
      searchName="competition"
    >
      {children}
    </DashboardResourceLayout>
  );
}
