"use client";
import { ReactNode } from "react";
import { StandaloneResourceLayout } from "@football-app/widgets/StandaloneResourceLayout";

export default function TeamsLayout({ children }: { children: ReactNode }) {
  return <StandaloneResourceLayout>{children}</StandaloneResourceLayout>;
}
