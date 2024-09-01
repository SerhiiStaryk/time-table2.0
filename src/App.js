import { useState } from 'react';
import Header from './components/header';
import LessonsList from './components/lessons-list';
import ScheduleBells from './components/schedule-bells';
import Holidays from './components/holiday';

function App() {
  const [group, setGroup] = useState(1)

  const changeGroup = (value) => {
    setGroup(value);
  }

  return (
    <>
      <Header onChangeGroup={changeGroup} group={group} />
      <LessonsList group={group} />
      <div className='container'>
        <ScheduleBells />
        <Holidays />
      </div>
    </>
  );
}

export default App;
