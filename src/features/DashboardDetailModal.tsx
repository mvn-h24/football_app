"use client";

import { Dialog, DialogContent } from "@football-app/shared/ui";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export function DashboardDetailModal({ children }: { children?: ReactNode }) {
  const { back } = useRouter();
  const openChangeAction = (status: boolean) => {
    if (!status) {
      back();
    }
  };
  return (
    <Dialog initialOpen onOpenChange={openChangeAction}>
      <DialogContent className="bg-white w-full max-w-screen-md my-10  p-5 rounded-md shadow-2xl">
        {children}
      </DialogContent>
    </Dialog>
  );
}
