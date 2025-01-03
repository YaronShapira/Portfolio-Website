import React from 'react';
import './About.scss';

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import portfolio from '../../../assets/portfolio.png';
const About = () => {
  return (
    <div className='container ' id='about'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className='title'>
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className='about_container'>
        <motion.div initial={{ x: 0, opacity: 0 }} whileInView={{ x: [-250, 0], opacity: 1 }} transition={{ duration: 1 }} className='about_left'>
          <motion.img src={portfolio} whileHover={{ y: -48, x: -55 }} transition={{ duration: 0.3 }} />
        </motion.div>
        <motion.div className='about_right' initial={{ x: 0, opacity: 0 }} whileInView={{ x: [250, 0], opacity: 1 }} transition={{ duration: 1 }}>
          <p>
            Hi, I’m Yaron Shapira, a backend-focused developer specializing in creating scalable systems, real-time data pipelines, and optimizing backend performance. I’m passionate about designing
            architectures that are efficient and maintainable while leveraging my full-stack skills for end-to-end solutions.
          </p>
          <p>In my free time, I enjoy gaming, reading, playing the guitar and hitting the gym.</p>
          {bios.map((bio) => {
            return (
              <div className='bio' key={bio.id}>
                <span className='bioKey'>
                  {bio.icon}
                  {bio.key}
                </span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            );
          })}
          <motion.a
            target='_blank'
            href='https://drive.google.com/file/d/1MZPyBDQm1JM1D8rm6-rsVS2fWktoL0UB/view?usp=sharing'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className='download'
          >
            View My Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
