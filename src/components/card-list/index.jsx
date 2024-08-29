import './style.css';

import Card from '../card';
import { DAYS, SHORT_NAME_DAYS } from '../../constants/date';
import { TIME_TABLE } from '../../constants/schedule';
import { getCurrentDay } from '../../helpers';

const CardList = ({ group }) => (
  <div id='card-list'>
    {TIME_TABLE[group].map((day, idx) => (
      <Card
        key={idx}
        item={day}
        today={DAYS[SHORT_NAME_DAYS[getCurrentDay()]]}
      />
    ))}
  </div>
);

export default CardList;
