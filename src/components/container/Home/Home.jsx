import React from 'react';
import portfolio from '../../../assets/portfolio2.png';
import './Home.scss';
import { motion } from 'framer-motion';

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className='container '
      id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}
    >
      <div className='profile'>
        <img src={portfolio} alt='portfolio' />
      </div>
      <div className='profile_text'>
        <h3 className='name'>
          Hi, I'm <span>Yaron Shapira</span>
        </h3>
        <span className='job'>Backend Developer</span>
        <span className='text'>
          Dedicated to
          <br /> creating cutting-edge <br /> web solutions.
        </span>
        <motion.a href='#contact' whileHover={{ scale: 1.1 }} variants={moveVariants} animate='animation'>
          connect with me
        </motion.a>
        <div className='web'>Web Developer</div>
        <div className='ui'>Backend Developer</div>
        <div className='freelance'>DevOps</div>
      </div>
    </motion.div>
  );
};

export default Home;
