import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HomePage.css';
import bg1 from '../assets/bg-1.png';
import bg2 from '../assets/bg-2.png';
import bg3 from '../assets/bg-3.png';

const backgroundImages = [bg1, bg2, bg3];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="homepage-container">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="background-image"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0
          }}
        />
      ))}

      <div className="overlay"></div>

      <div className="content">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Discover the Soul of India
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          An interactive journey through the vibrant cultures, traditions, and flavors of every Indian state.
        </motion.p>
        {/* --- Link now points to Login page --- */}
        <Link to="/login">
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px #FF6B00" }}
            whileTap={{ scale: 0.9 }}
            className="explore-button"
          >
            Explore States
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;