interface CalendarBadgeProps {
  name: string;
  info?: string;
}
export function CalendarBadge({ name, info }: CalendarBadgeProps) {
  return (
    <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
      <div>{name}</div>
      <div>{info}</div>
    </div>
  );
}
