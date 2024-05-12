"use client";

import Link from "next/link";
import { CompetitionListItem } from "@football-app/entity";

interface CompetitionsListProps {
  competitions: CompetitionListItem[];
}

export function CompetitionsListView({ competitions }: CompetitionsListProps) {
  return competitions ? (
    <ul className="space-y-2 py-2">
      {competitions.map(({ id, name }) => (
        <li className="card-btn sb-root w-11/12" key={id}>
          <Link className="sb-target !text-black" href={`/competition/${id}`}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  ) : undefined;
}
