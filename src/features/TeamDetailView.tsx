import { TeamComposition } from "@football-app/types";
import { HTMLProps } from "react";

export interface TeamDetailViewProps
  extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  team: TeamComposition;
}

export function TeamDetailView({ team, className }: TeamDetailViewProps) {
  return (
    <div className={className}>
      <h2 className="profile-heading">{team.name}</h2>
    </div>
  );
}
