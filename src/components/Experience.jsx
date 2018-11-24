import React, { Component } from 'react';

import {EXPERIENCES} from '../utils/constants';
import arrow from '../assets/down-arrow.svg';

class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExperience: EXPERIENCES[0],
    };
  }

  render() {
    const {currentExperience} = this.state;

    return (
      <div ref={this.props.refProp} className='d-flex content align-items-center'>
        <div className='d-flex justify-content-center flex-column content-left'>
          <h1>{"where"}</h1>
          <h1>{"I've worked"}</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-row experience content-right'>
          <img src={arrow} className='icon-md button-left' alt='left arrow' />
          <div className='d-flex flex-column align-items-center experience-content'>
            <h1>{currentExperience.name}</h1>
            <h2>{`${currentExperience.title} | ${currentExperience.dates}`}</h2>
            <p>{currentExperience.p1}</p>
            <p>{currentExperience.p2}</p>
            <p>{currentExperience.p3}</p>
          </div>
          <img src={arrow} className='icon-md button-right' alt='right arrow' />
        </div>
      </div>
    );
  }
}

export default Experience;
