import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { indianStates } from '../data';
import './StateDetailPage.css';

const StateDetailPage = () => {
  const { stateName } = useParams();
  const state = indianStates.find(s => s.name === stateName);

  if (!state) {
    return <div>State not found</div>;
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="detail-header" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${state.headerImage})` }}>
        <h1>{state.name}</h1>
      </header>
      
      <div className="detail-content">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
          
          <motion.section variants={itemVariants} className="detail-section">
            <h3>🍜 Famous Food</h3>
            <div className="info-card-grid">
              {state.famousFood.map(food => (
                <div key={food.name} className="info-card">
                  <img src={food.image} alt={food.name} />
                  <h4>{food.name}</h4>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="detail-section">
            <h3>💃 Dance Form: {state.danceForm.name}</h3>
            <img src={state.danceForm.image} alt={state.danceForm.name} className="feature-image" />
          </motion.section>

          <motion.section variants={itemVariants} className="detail-section">
            <h3>👗 Traditional Outfits</h3>
            <p>{state.outfits}</p>
            <img src={state.outfitImage} alt={`${state.name} Outfit`} className="feature-image" />
          </motion.section>

          <motion.section variants={itemVariants} className="detail-section">
            <h3>🏞️ Tourist Spots</h3>
            <div className="info-card-grid">
              {state.touristSpots.map(spot => (
                <div key={spot.name} className="info-card">
                  <img src={spot.image} alt={spot.name} />
                  <h4>{spot.name}</h4>
                </div>
              ))}
            </div>
          </motion.section>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default StateDetailPage;