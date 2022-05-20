import React,{useState, useEffect} from 'react'
import { motion } from 'framer-motion';
import { images } from '../../constants'
import './About.scss'
import {urlFor, client } from '../../client'
import { AppWrap, MotionWrap } from '../../wrapper'
function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])
  return (
    <>
      {
        abouts.length > 0 && 
        <div className='app__about-main'>
          <div className='head-text'>{abouts[0].title}</div>
          <div className='app__about-wrapper'>
            <motion.div 
            whileInView={{ x: [-40, 0] }}
            className='app__about-text'><img src={images.logoSm} /><p>{abouts[0].description}</p></motion.div>
            <motion.div 
            whileInView={{ x: [5, 0] }}
            className='app__about-img'>
              <img  src={urlFor(abouts[0].imgUrl)} alt="about" />
              </motion.div>
          </div>
        </div>
      }
    </>
    
    /* {
      abouts.length > 0 && <> 
      <div className='head-text'>{abouts[0].title}</div>
      <div className='app__profiles'>
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
          >
            <img src={urlFor(abouts[0].imgUrl)} alt={abouts[0].title} />
          </motion.div>
            <p className='p-text' style={{ marginTop: 10 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in{abouts[0].description}</p>
      </div>
      </>
    } */
      
  )
}

export default AppWrap(MotionWrap(About, 'app__about'),
 'about',
 'app__whitebg'
 );