import { Competition } from "@football-app/types";
import { HTMLProps } from "react";

export interface CompetitionDetailViewProps
  extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  competition: Competition;
}

export function CompetitionDetailView({
  competition,
  className,
}: CompetitionDetailViewProps) {
  return (
    <div className={className}>
      <h1 className="profile-heading">{competition.name}</h1>
    </div>
  );
}
