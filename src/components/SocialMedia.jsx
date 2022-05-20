import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='#'>
      <div>
        <BsTwitter />
      </div>
    </a>
    <a href='#'>
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a href='https://www.instagram.com/sophiamultivision/'>
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;