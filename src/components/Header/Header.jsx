import './Header.css';

import DateComponent from '../Date/Date';
import { TIME_TABLE_OPTIONS } from '../../constants/time-table';
import { useState } from 'react';

const Header = ({ srcImg, onChangeGroup, group }) => {
  const [value, setValue] = useState(group);

  const changeValueHandler = (value) => {
    setValue(value);
    onChangeGroup(value)
  }

  console.log(value)
  return (
    <header>
      <DateComponent />
      <h1>Розклад</h1>
      <select className='select' onChange={(e) => changeValueHandler(e.target.value)} value={value}>
        {
          TIME_TABLE_OPTIONS.map((option, idx) => (
            <option
              key={idx}
              value={option.value}
            >
              {option.label}
            </option>
          ))
        }
      </select>
    </header>
  )
};


export default Header;