import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type ContentLayoutProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export function ContentLayout({ className, children }: ContentLayoutProps) {
  return (
    <div
      className={`w-11/12 rounded-lg bg-white p-5${
        className ? ` ${className}` : ''
      }`}
    >
      {children}
    </div>
  );
}
