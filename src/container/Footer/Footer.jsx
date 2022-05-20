import React, { useState, useEffect} from 'react'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'
import './Footer.scss'

function Footer() {
  const [formState, setFormState] = useState({ name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formState;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormState({...formState, [name]: value});
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }
  return (
    <>
      <h2 className='head-text'>Contact Us</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:info@sophiamultivision.com' className='p-text'>info@sophiamultivision.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel:+0096566231133' className='p-text'>+00965 66 23 11 33</a>
        </div>
      </div>
      {!isFormSubmitted ? 
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <input className='p-text' type="text" placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
        </div>
        <div className='app__flex'>
          <textarea 
          className='p-text'
          placeholder='Your Message'
          value={message} 
          name="message"
          onChange={handleChangeInput}
          />
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>

      </div>
      : <div>
        <h3 className='head-text'>Thank you! Our Team will contact you soon.</h3>
      </div>
}
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)