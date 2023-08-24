import './Date.css';

import { MONTHS as months } from '../../constants/months';

const DateComponent = () => {
  const currentDate = new Date();

  const getCurrentDate = (date) => `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;


  const date = getCurrentDate(currentDate);

  return (
    <time datatime={date} className='date'>{date}</time>
  );
}

export default DateComponent;