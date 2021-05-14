import React, { Component } from 'react';

import '../scss/about.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import profilePic from '../assets/website_profile.jpg';
import {INTRO} from '../utils/constants';
import {isMobile} from '../utils/detectMobile.js';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
    };
  }

  render() {
    return (
      <div ref={this.props.refProp} style={{minHeight: isMobile('lg') ? '' : this.state.height}} className='d-flex content align-items-center'>
        <div style={{height: isMobile('lg') ? (this.state.height * 0.3) : (this.state.height * 0.6)}} className='d-flex justify-content-center flex-column content-left'>
          <h1 className='d-flex flex-column'>
            <span>{"a little"}</span>
            <span>{"about me"}</span>
          </h1>
        </div>
        <div className='d-flex align-items-center flex-column content-right about'>
          <img src={profilePic} alt='Profile'/>
          <p>{INTRO}</p>
        </div>
      </div>
    );
  }
};

export default About;
