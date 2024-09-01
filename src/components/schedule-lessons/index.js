import './style.css';
import Card from '../card';

const ScheduleLessons = ({ item, today, index }) => {
  const active = today === item.day;

  return (
    <Card active={active} index={index}>
      <h3 className={`week-day ${active ? 'active' : null}`}>{item.day}</h3>
      <div className='lesson-wrapper'>
        {
          item.lessons.map((lesson, idx) => (
            <p key={idx} className='lesson'>
              <span>{`${idx + 1}`}.&nbsp;&nbsp;</span>
              <span>{lesson.name}</span>
              <span className='lesson-time'> {lesson.time}</span>
            </p>
          ))
        }
      </div>
    </Card>
  );
}

export default ScheduleLessons;