import { Dispatch, ReactNode, SetStateAction } from "react";
import { useDialog } from "@football-app/shared/ui/Dialog/hooks";

export interface DialogOptions {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export type DialogContextType =
  | (ReturnType<typeof useDialog> & {
      setLabelId: Dispatch<SetStateAction<string | undefined>>;
      setDescriptionId: Dispatch<SetStateAction<string | undefined>>;
    })
  | null;

export interface DialogTriggerProps {
  children: ReactNode;
  asChild?: boolean;
}
