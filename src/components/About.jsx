import React from 'react';

import profilePic from '../assets/website_profile.JPG';
import {INTRO} from '../utils/constants';

const About = () => {
  return (
    <div className='d-flex content align-items-center'>
      <div className='d-flex justify-content-center flex-column content-left'>
        <h1>{"a little"}</h1>
        <h1>{"about me"}</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center flex-column content-right about'>
        <img src={profilePic} alt='Profile'/>
        <p>{INTRO}</p>
      </div>
    </div>
  );
};

export default About;
