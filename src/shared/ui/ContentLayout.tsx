import { DetailedHTMLProps, HTMLAttributes } from "react";
import { clsx } from "clsx";

type ContentLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export function ContentLayout({ className, children }: ContentLayoutProps) {
  return (
    <div
      className={clsx(className, "w-11/12 rounded-lg bg-white p-5 box-border")}
    >
      {children}
    </div>
  );
}
