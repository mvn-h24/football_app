"use client";
import { ReactNode } from "react";
import { StandaloneResourceLayout } from "@football-app/widgets";

export default function TeamsLayout({ children }: { children: ReactNode }) {
  return <StandaloneResourceLayout>{children}</StandaloneResourceLayout>;
}
