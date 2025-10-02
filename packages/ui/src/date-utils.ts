/**
 * Date utility functions for consistent date formatting across the monorepo
 */

export type DateFormat = 'short' | 'long' | 'time' | 'datetime' | 'relative';

/**
 * Formats a date according to the specified format
 * @param date - The date to format (Date object, string, or timestamp)
 * @param format - The desired format type
 * @param locale - The locale to use for formatting (defaults to 'en-US')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string | number,
  format: DateFormat = 'short',
  locale: string = 'en-US'
): string {
  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    throw new Error('Invalid date provided');
  }

  const options: Intl.DateTimeFormatOptions = {};

  switch (format) {
    case 'short':
      options.dateStyle = 'short';
      break;
    case 'long':
      options.dateStyle = 'long';
      break;
    case 'time':
      options.timeStyle = 'short';
      break;
    case 'datetime':
      options.dateStyle = 'short';
      options.timeStyle = 'short';
      break;
    case 'relative':
      return getRelativeTime(dateObj);
    default:
      options.dateStyle = 'short';
  }

  return new Intl.DateTimeFormat(locale, options).format(dateObj);
}

/**
 * Gets a relative time string (e.g., "2 hours ago", "in 3 days")
 * @param date - The date to compare
 * @param locale - The locale to use for formatting
 * @returns Relative time string
 */
function getRelativeTime(date: Date, locale: string = 'en-US'): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  
  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds);
    if (count !== 0) {
      return rtf.format(-count, interval.label as Intl.RelativeTimeFormatUnit);
    }
  }

  return rtf.format(0, 'second');
}

/**
 * Checks if a date is today
 * @param date - The date to check
 * @returns True if the date is today
 */
export function isToday(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  const today = new Date();
  
  return dateObj.toDateString() === today.toDateString();
}

/**
 * Checks if a date is in the past
 * @param date - The date to check
 * @returns True if the date is in the past
 */
export function isPast(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  const now = new Date();
  
  return dateObj < now;
}

/**
 * Checks if a date is in the future
 * @param date - The date to check
 * @returns True if the date is in the future
 */
export function isFuture(date: Date | string | number): boolean {
  const dateObj = new Date(date);
  const now = new Date();
  
  return dateObj > now;
}
