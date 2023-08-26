import './Days.css';

import Day from './Day/Day';
import { DAYS, SHORT_NAME_DAYS } from '../../constants/days';
import { TIME_TABLE } from '../../constants/time-table';

const Days = ({ group }) => {
  const today = new Date();
  const today_day = DAYS[SHORT_NAME_DAYS[today.getDay()]];

  return (
    <ul id="days">
      {TIME_TABLE[group].map((day, idx) => (
        <Day
          key={idx}
          item={day}
          today={today_day}
        />
      ))}
    </ul>
  )
};

export default Days;