import React from 'react'
import './About.scss'

import { motion } from 'framer-motion'
import { bios } from '../../../Data'
import portfolio from '../../../assets/portfolio.png'
const About = () => {
    return (
        <div className='container ' id='about'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className='title'>
                <span>Who Am I?</span>
                <h1>About Me</h1>
            </motion.div>

            <div className='about_container'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='about_left'
                >
                    <motion.img src={portfolio} whileHover={{ y: -48, x: -55 }} transition={{ duration: 0.3 }} />
                </motion.div>
                <motion.div
                    className='about_right'
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [250, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <p>
                        Hi, I'm Yaron Shapira, a fullstack developer. I specialize in both front-end and back-end
                        development to create seamless, user-friendly websites and applications. I'm passionate about
                        coding and constantly tinkering with new technologies to deliver high-quality results for my
                        clients.
                    </p>
                    <p>
                        In my free time, I enjoy gaming, reading, and hitting the gym. I'm also a passionate coder and
                        often work on personal projects to keep my skills sharp and explore new technologies.
                    </p>
                    {bios.map(bio => {
                        return (
                            <div className='bio' key={bio.id}>
                                <span className='bioKey'>
                                    {bio.icon}
                                    {bio.key}
                                </span>
                                <span className='bioValue'>{bio.value}</span>
                            </div>
                        )
                    })}
                    <motion.a
                        target='_blank'
                        href='https://drive.google.com/file/d/1VQehbhAshRAEHN9S9IfdMj-4xUtjbXsO/view?usp=sharing'
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className='download'
                    >
                        View My Resume
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default About
