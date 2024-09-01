import './style.css';

import { TIME } from '../../constants/date';
import { getArrFromObj } from '../../helpers';
import Card from '../card'

const ScheduleBells = () => {
  const times = getArrFromObj(TIME);

  return (
    <Card index={1}>
      <h3>Розклад дзвінків</h3>
      <ol>
        {times.map((item, index) => (<li key={index} className>{item}</li>))}
      </ol>
    </Card>
  );
}

export default ScheduleBells;