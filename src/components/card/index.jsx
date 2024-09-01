import './style.css';

const Card = ({ active, children }) => <div className={`card ${active ? 'active' : null}`}>{children}</div>;

export default Card;
