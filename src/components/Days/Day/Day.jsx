import './Day.css';

import { TIME as times } from '../../../constants/time'

const Day = ({ item }) => {
  console.log(item)
  return (
    <li className={`card ${item.isToday ? 'active' : null}`}>
      <h3>{item.day}</h3>
      <div className='card-content'>
        <div className='card-content-lesson'>
          {item.lessons.map((lesson, idx) => (
            <p key={idx} className='card-item'>
              <span>{idx + 1}.</span>
              <span> {lesson.name}</span>
            </p>
          ))}
        </div>
        <div className='card-content-bells'>
          {
            times.map((time, idx) => (
              <p key={idx} className='card-item'>{time}</p>
            ))
          }
        </div>
      </div>
    </li>
  )
};


export default Day;