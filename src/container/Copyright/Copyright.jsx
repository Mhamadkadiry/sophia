import React from 'react'
import './Copyright.scss'
import { images } from '../../constants'
function Copyright() {
  return (
    <div className='copyright__container app__flex'>
        <div className='copyright__logo'>
            <img src={images.logoSm} alt="logo" />
        </div>
        <div className='copyright__text'>
            <p>&copy; Sophia Multivision 2022</p>
            <p>All Rights are reserved</p>
        </div>
    </div>
  )
}

export default Copyright