"use client";

import { Dialog, DialogContent } from "@football-app/shared/ui";
import { useRouter } from "next/navigation";
import { TeamInfo, TeamInfoProps } from "@football-app/widgets/TeamInfo";

export function TeamDetailModal(props: TeamInfoProps) {
  const { back } = useRouter();
  const openChangeAction = (status: boolean) => {
    if (!status) {
      back();
    }
  };
  return (
    <Dialog initialOpen onOpenChange={openChangeAction}>
      <DialogContent className="bg-white w-full max-w-[768px] my-10 p-5 rounded-md">
        <TeamInfo {...props} />
      </DialogContent>
    </Dialog>
  );
}
