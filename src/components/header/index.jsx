import './style.css';
import { useState } from 'react';
import { TIME_TABLE_OPTIONS } from '../../constants/schedule';
import { getFormattedCurrentDate } from '../../helpers';

const date = getFormattedCurrentDate();

const Header = ({ srcImg, onChangeGroup, group }) => {
  const [value, setValue] = useState(group);

  const handleChangeValue = value => {
    setValue(value);
    onChangeGroup(value);
  };

  return (
    <header>
      <time
        datatime={date}
        className='date'
      >
        {date}
      </time>
      <h1>Розклад</h1>
      <select
        className='select'
        onChange={e => handleChangeValue(e.target.value)}
        value={value}
      >
        {TIME_TABLE_OPTIONS.map((option, idx) => (
          <option
            key={idx}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Header;
