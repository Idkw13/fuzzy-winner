"use client";

import { formatDate, isToday, isPast, isFuture, type DateFormat } from "./date-utils";

interface DateDisplayProps {
  date: Date | string | number;
  format?: DateFormat;
  showRelative?: boolean;
  className?: string;
}

export const DateDisplay = ({ 
  date, 
  format = 'short', 
  showRelative = false,
  className = '' 
}: DateDisplayProps) => {
  const formattedDate = formatDate(date, format);
  const relativeDate = showRelative ? formatDate(date, 'relative') : null;
  
  const getDateStatus = () => {
    if (isToday(date)) return 'today';
    if (isPast(date)) return 'past';
    if (isFuture(date)) return 'future';
    return 'unknown';
  };

  const status = getDateStatus();
  const statusClasses = {
    today: 'text-blue-600 font-semibold',
    past: 'text-gray-600',
    future: 'text-green-600',
    unknown: 'text-gray-500'
  };

  return (
    <div className={`date-display ${className}`}>
      <span className={statusClasses[status]}>
        {formattedDate}
      </span>
      {showRelative && relativeDate && (
        <span className="ml-2 text-sm text-gray-500">
          ({relativeDate})
        </span>
      )}
    </div>
  );
};
