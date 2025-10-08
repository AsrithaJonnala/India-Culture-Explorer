import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './StateCard.css';

const StateCard = ({ state }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={cardVariants}>
      <Link to={`/state/${state.name}`} className="state-card-link">
        <div className="state-card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${state.headerImage})` }}>
          <h3 className="card-title">{state.name}</h3>
          <p className="card-description">{state.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default StateCard;