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

export const getArrFromObj = (obj: Record<string, { start: string; end: string }>) => Object.values(obj);

export const getCurrentMinutes = () => {
  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();
};

export const getActiveLessonCurrent = (start: string, end: string): boolean => {
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);

  const nowMinutes = getCurrentMinutes();
  const startMinutes = sh * 60 + sm;
  const endMinutes = eh * 60 + em;

  return nowMinutes >= startMinutes && nowMinutes <= endMinutes;
};
