import { ReactNode } from "react";
import { StandaloneResourceLayout } from "@football-app/widgets/StandaloneResourceLayout";

export default function CompetitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <StandaloneResourceLayout>{children}</StandaloneResourceLayout>;
}
