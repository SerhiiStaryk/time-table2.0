import { DayNames, DAYS, MONTHS } from '../constants/date';

export const getCurrentDate = () => new Date();

export const getCurrentDay = (): DayNames => {
  const dayIndex = new Date().getDay();
  const days: DayNames[] = Object.keys(DAYS) as DayNames[];

  return days[dayIndex];
};

export const getFormattedCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${day} ${MONTHS[month]} ${year}`;
};

export const getArrFromObj = (obj: Record<string, string | number>) => Object.values(obj);
