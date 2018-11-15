import React, { Component } from 'react';
import profilePic from '../assets/website_profile.JPG';

class About extends Component {
  render() {
    return (
      <div className='d-flex content align-items-center'>
        <div className='d-flex justify-content-center flex-column content-left'>
          <h1>{"a little"}</h1>
          <h1>{"about me"}</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column content-right about'>
          <img src={profilePic} alt='Profile'/>
          <p>{"Hey there! I’m Connor, a Computer Engineering student at the University of Waterloo. I’ve been writing code since I was 11 years old, when I built a text-based adventure game in JavaScript. Since then, I’ve worked on a lot of cool projects in a lot of languages, which you can check out below!"}</p>
        </div>
      </div>
    );
  }
}

export default About;
