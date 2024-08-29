import { useState } from 'react';
import CardList from './components/card-list';
import Header from './components/header';

function App() {
  const [group, setGroup] = useState(1)

  const changeGroup = (value) => {
    setGroup(value);
  }

  return (
    <>
      <Header onChangeGroup={changeGroup} group={group}/>
      <CardList group={group} />
    </>
  );
}

export default App;
