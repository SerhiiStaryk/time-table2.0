import './Days.css';

import Day from './Day/Day';
import { TIME_TABLE_1 } from '../../constants/time-table';
import { useState } from 'react';

const Days = () => {
  const [timetable, setTimetable] = useState(TIME_TABLE_1)
  return (
    <ul id="days">
      {timetable.map((day, idx) => (
        <Day key={idx} item={day} />
      ))}
    </ul>
  )
};

export default Days;