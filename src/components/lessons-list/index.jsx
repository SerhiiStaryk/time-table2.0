import './style.css';

import { DAYS, SHORT_NAME_DAYS } from '../../constants/date';
import { TIME_TABLE } from '../../constants/schedule';
import { getCurrentDay } from '../../helpers';
import ScheduleLessons from '../schedule-lessons';

const LessonsList = ({ group }) => (
  <div id='lessons-list'>
    {TIME_TABLE[group].map((day, idx) => (
      <ScheduleLessons
        key={idx}
        index={idx}
        item={day}
        today={DAYS[SHORT_NAME_DAYS[getCurrentDay()]]}
      />
    ))}
  </div>
);

export default LessonsList;
