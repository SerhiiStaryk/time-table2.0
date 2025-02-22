import { MONTHS } from '../constants/date';

const getCurrentDate = () => new Date();

const getCurrentDay = (): number => getCurrentDate().getDay();

const getFormattedCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return `${day} ${MONTHS[month]} ${year}`;
};

const getArrFromObj = (obj: Record<string, string | number>) => Object.values(obj);

export { getArrFromObj, getCurrentDay, getCurrentDate, getFormattedCurrentDate };
