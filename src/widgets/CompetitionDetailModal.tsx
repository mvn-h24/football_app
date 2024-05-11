"use client";

import { Dialog, DialogContent } from "@football-app/shared/ui";
import { useRouter } from "next/navigation";
import {
  CompetitionInfo,
  CompetitionInfoProps,
} from "@football-app/widgets/CompetitionInfo";

export function CompetitionDetailModal(props: CompetitionInfoProps) {
  const { back } = useRouter();
  const openChangeAction = (status: boolean) => {
    if (!status) {
      back();
    }
  };
  return (
    <Dialog initialOpen onOpenChange={openChangeAction}>
      <DialogContent className="bg-white w-full max-w-screen-md my-10  p-5 rounded-md shadow-2xl">
        <CompetitionInfo {...props} />
      </DialogContent>
    </Dialog>
  );
}
