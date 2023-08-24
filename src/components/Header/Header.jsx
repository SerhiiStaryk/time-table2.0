import './Header.css';

import DateComponent from '../Date/Date';

const Header = ({ srcImg }) => (
  <header>
    <DateComponent />
    <h1>Розклад</h1>
    <select className='select'>
      <option value="">перша група</option>
      <option value="">друга група</option>
    </select>
  </header>
);


export default Header;