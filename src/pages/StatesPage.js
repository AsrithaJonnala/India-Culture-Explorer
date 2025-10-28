import { motion } from 'framer-motion';
import { indianStates } from '../data';
import StateCard from '../components/StateCard';
import './StatesPage.css';

const StatesPage = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="states-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="page-title">Explore South India</h1>
      <motion.div 
        className="states-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {indianStates.map(state => (
          <StateCard key={state.name} state={state} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default StatesPage;