import './style.css';
import { motion } from 'framer-motion';

const Card = ({ active, children, index = 0 }) => (
  <motion.div
    className={`card ${active ? 'active' : null}`}
    initial={{
      opacity: 0,
      // if odd index card,slide from right instead of left
      x: index % 2 === 0 ? 50 : -50,
    }}
    whileInView={{
      opacity: 1,
      x: 0, // Slide in to its original position
      transition: {
        duration: 1, // Animation duration
      },
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default Card;
