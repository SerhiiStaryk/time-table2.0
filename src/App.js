import { useState } from 'react';
import Days from './components/Days/Days';
import Header from './components/Header/Header';

function App() {
  const [group, setGroup] = useState(1)

  const changeGroup = (value) => {
    setGroup(value);
  }

  return (
    <>
      <Header onChangeGroup={changeGroup} group={group}/>
      <Days group={group} />
    </>
  );
}

export default App;
