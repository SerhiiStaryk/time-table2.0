import type { DayNames } from '@/types/date';

export const DAYS: Record<DayNames, string> = {
  sun: 'Неділя',
  mon: 'Понеділок',
  tue: 'Вівторок',
  wed: 'Середа',
  thu: 'Четвер',
  fri: "П'ятниця",
  sat: 'Субота',
};

export const SHORT_NAME_DAYS: DayNames[] = Object.keys(DAYS) as DayNames[];
