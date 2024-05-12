import { HTMLProps } from "react";
import { TeamDetail } from "@football-app/entity";

export interface TeamDetailViewProps
  extends Pick<HTMLProps<HTMLDivElement>, "className"> {
  team: TeamDetail;
}

export function TeamDetailView({ team, className }: TeamDetailViewProps) {
  return (
    <div className={className}>
      <h2 className="profile-heading">{team.name}</h2>
    </div>
  );
}
