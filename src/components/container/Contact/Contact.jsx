import React from 'react'
import './Contact.scss'
import { contacts } from '../../../Data'
import { socialIcons } from '../../../Data'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        <div className='container' id='contact'>
            <motion.div initial={{ opacity: 0 }} whileInView={{ y: [-50, 0], opacity: 1 }} className='title'>
                <span>get in touch</span>
                <h1>Contact Me</h1>
            </motion.div>
            <form className='contact_form' action='https://formspree.io/f/xnqllqky' method='POST'>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [-150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='contact_left_container'
                >
                    <h3>Just Say Hi</h3>
                    <p className='contact_text'>
                        Let's connect and make something amazing together! I'm always open to exploring new
                        opportunities and expanding my horizons.
                    </p>
                    {contacts.map(contact => {
                        return (
                            <div className='contact_left' key={contact.id}>
                                <div className='icon'>{contact.icon}</div>
                                <p>{contact.infoText}</p>
                            </div>
                        )
                    })}
                    <div className='social_icons'>
                        {socialIcons.map((socialIcon, index) => {
                            return <div key={index}>{socialIcon.icon}</div>
                        })}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: [150, 0], opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='contact_right'
                >
                    <h3>Get In Touch</h3>
                    <div className='row'>
                        <input type='text' placeholder='First Name' />
                        <input type='text' placeholder='Last name' />
                    </div>
                    <div className='row'>
                        <input type='email' placeholder='Email' name='email' />
                    </div>
                    <div className='row'>
                        <textarea placeholder='message' name='message'></textarea>
                    </div>
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} className='btn'>
                        <button type='submit'>Send</button>
                    </motion.div>
                </motion.div>
            </form>
        </div>
    )
}

export default Contact
