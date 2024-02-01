import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// TS da errore perchè non sa il tipo di context
const dateFormatter = new Intl.DateTimeFormat(window.context?.locale || 'it-IT', {
  dateStyle: 'short',
  timeStyle: 'short'
});

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms);

export const cn = (...args: ClassValue[]): string => twMerge(clsx(...args));
