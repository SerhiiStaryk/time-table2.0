import './style.css';
import Card from '../card'

const Holidays = () => {
  return (
    <Card index={0}>
      <h3>Канікули</h3>
      <div>
        <p><b>Канікули осінні: </b> 21.10.2024 - 25.10.2024</p>
        <p><b>Канікули зимові: </b> 23.12.2024 - 07.01.2025</p>
        <p><b>Канікули весняні: </b> 10.03.2025 - 21.04.2025</p>
        <p><b>Великодні святкування: </b> 14.04.2025 - 21.04.2025</p>
      </div>
    </Card>
  );
}

export default Holidays;