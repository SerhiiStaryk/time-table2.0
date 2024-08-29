import './style.css';

const Card = ({ item, today }) => (
  <div className={`card ${today === item.day ? 'active' : null}`}>
    <h3>{item.day}</h3>
    <div className='card-content'>
      {
        item.lessons.map((lesson, idx) => (
          <p key={idx} className='card-item'>
            <span>{`${idx + 1}`}.&nbsp;&nbsp;</span>
            <span>{lesson.name}</span>
            <span className='card-item-time'> {lesson.time}</span>
          </p>
        ))
      }
    </div>
  </div>
);

export default Card;
