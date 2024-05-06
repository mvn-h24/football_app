import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CalendarDayProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  day: number;
}

export function CalendarDay({ children, day }: CalendarDayProps) {
  return (
    <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
      <div className="top h-5 w-full">
        <span className="text-gray-500">{day}</span>
      </div>
      <div className="bottom flex-grow h-30 py-1 w-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
