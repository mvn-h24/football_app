import { ReactNode } from "react";
import { StandaloneResourceLayout } from "@football-app/widgets";

export default function CompetitionLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <StandaloneResourceLayout>{children}</StandaloneResourceLayout>;
}
