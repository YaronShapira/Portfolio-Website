/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import './Experience.scss';
import { workNavs } from '../../../Data';
import { experiences } from '../../../Data';
import { FiGithub, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Experience = () => {
  const [tab, setTab] = useState({ name: 'all' });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === 'all') {
      setWorks(experiences);
    } else {
      const newWork = experiences.filter((workImage) => {
        return workImage.category.toLowerCase() === tab.name;
      });
      setWorks(newWork);
    }
  }, [tab]);

  const activeTab = (e, index) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className='container' id='portfolio'>
      <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className='title'>
        <span>My Work</span>
        <h1>My Experience</h1>
      </motion.div>
      {/* <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}}
        className="buttons"
      >
        {workNavs.map((workNav ,index) => {
          return (
            <button
              onClick={(e) => activeTab(e, index)}
              className={`${active === index ? "active" : ""}`}
              key={index}>{workNav}</button>
          )
        })}
      </motion.div> */}
      <motion.div initial={{ x: 0, opacity: 0 }} whileInView={{ x: [-250, 0], opacity: 1 }} transition={{ duration: 1 }} exit={{ opacity: 0, y: -50 }} className='workImages'>
        {works.map((work) => {
          return (
            <div className='workImage' key={work.id} style={{ width: '800px', justifyContent: 'center' }}>
              {/* <a href={work.demo} target='_blank' rel='noreferrer'>
                <img src={work.img} alt='workImg' />
              </a> */}
              <h3 style={{ fontWeight: '400', fontSize: '22px', justifySelf: 'flex-end', marginTop: '6px' }}>{work.subTitle}</h3>

              <div className='col' style={{ justifyContent: 'center' }}>
                <h3>{work.title}</h3>
                <p>{work.data1}</p>
                <p>{work.data2}</p>
                <div className='btns'>
                  {work.demo && (
                    <a href={work.demo} target='_blank' rel='noreferrer'>
                      Live Demo
                    </a>
                  )}
                  {work.github && (
                    <a href={work.github} target='_blank' rel='noreferrer'>
                      Github Code
                    </a>
                  )}
                </div>
              </div>
              {/* <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                  
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiGithub />
                </motion.a>
                  
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiEye />
                </motion.a>
              </motion.div> */}
            </div>
          );
        })}
      </motion.div>
      {/* <motion.div
        initial={{x: 0 ,opacity: 0}}
          whileInView={{ x: [250,0], opacity: 1 }}
          transition={{duration: 1}}
        className="talk"
      >
        <div className="talk_left">
          <h3>so let's talk about <br /> <span>your next projects</span></h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{duration: 0.3}}
          className="talk_right">
          <a href="#contact"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export default Experience;
