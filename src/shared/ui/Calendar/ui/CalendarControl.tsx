import NextIcon from "../icons/NextIcon.svg";
import PrevIcon from "../icons/PrevIcon.svg";

export interface CalendarControlProps {
  date: Date;
  prevMonth(): void;
  nextMonth(): void;
}
export function CalendarControl({
  date,
  prevMonth,
  nextMonth,
}: CalendarControlProps) {
  return (
    <div className="header flex justify-between border-b p-2">
      <span className="text-lg font-bold">
        {date.getMonth() + 1}-{date.getFullYear()}
      </span>
      <div className="buttons">
        <button className="p-1" onClick={prevMonth}>
          <PrevIcon className="bi bi-arrow-left-circle hover:opacity-60 size-6" />
        </button>
        <button className="p-1" onClick={nextMonth}>
          <NextIcon className="bi bi-arrow-left-circle hover:opacity-60 size-6" />
        </button>
      </div>
    </div>
  );
}
