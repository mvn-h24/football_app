"use client";
import Link from "next/link";
import { TeamSummaryExtended } from "@football-app/entity";

interface TeamsListViewProps {
  teams: TeamSummaryExtended[];
}

export function TeamsListView({ teams }: TeamsListViewProps) {
  return teams.length ? (
    <ul className="space-y-2 py-2">
      {teams.map(({ id, name }) => (
        <li className="card-btn sb-root w-11/12" key={id}>
          <Link className="sb-target !text-black" href={`/team/${id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
}
