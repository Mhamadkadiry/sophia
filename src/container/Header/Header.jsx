import React from 'react'

import './Header.scss'
import { motion } from "framer-motion"

import { images } from "../../constants"

import {AppWrap} from '../../wrapper';
 
function Header() {
  return (
    <div>
      <div  className='app__header app__flex' >
      <motion.div
      whileInView={{x: [-30, 0], opacity: [0, 1]}} //means it'go animate from -100 and the opacity will animate from 0 to 1
      transition={{ duration: 2 }}
      className="app__header-info"
      >
          <p ><span style={{ color: "#cba558" }}><img src={images.logoSm} />Sophia Multivison </span><br></br>  At Sophia's we aim to give you the best results by building the bridge between our clients with their customers</p>
          <a href='#about'>get started</a>
      </motion.div>
      <motion.div
      
      whileInView={{x: [10, 0], opacity: [0, 1]}}
      transition={{ duration: 2, delayChildren: 0.5}}
      className="app__header-img"
      >
        <img src={images.background} alt="background" />
      </motion.div>
      
      </div>
      {/* <div className='app__header-footer'>
      <motion.div
      whileInView={{x: [50, 0], opacity: [0, 1]}} //means it'go animate from -100 and the opacity will animate from 0 to 1
      transition={{ duration: 1 }}
      className="app__header-footer-info"
      >
        <p> ❛ No matter what it will takes we will get you to your point ❜</p>
        </motion.div>
        </div> */}
      
    </div>
  )
}

export default AppWrap(Header, 'home');