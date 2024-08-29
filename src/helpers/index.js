import { MONTHS } from '../constants/date';

const getCurrentDate = () => new Date();

const getCurrentDay = () => getCurrentDate().getDay();

const getFormattedCurrentDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear()

  return `${day} ${MONTHS[month]} ${year}`;
}

export {
  getCurrentDay,
  getCurrentDate,
  getFormattedCurrentDate,
};