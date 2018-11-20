import React, { Component } from 'react';

import {EXPERIENCES, LOREM} from '../utils/constants';
import downArrow from '../assets/down-arrow.svg';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentExperience: EXPERIENCES[0],
    };
  }

  render() {
    return (
      <div className='d-flex content align-items-center'>
        <div className='d-flex justify-content-center flex-column content-left'>
          <h1>{"where"}</h1>
          <h1>{"I've worked"}</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-row experience content-right'>
          <img src={downArrow} className='button-left' alt='left arrow' />
          <div className='d-flex flex-column align-items-center experience-content'>
            <h1>{'Konrad Group'}</h1>
            <h2>{'web developer | September - December 2018'}</h2>
            <p>{LOREM}</p>
            <p>{LOREM}</p>
          </div>
          <img src={downArrow} className='button-right' alt='right arrow' />
        </div>
      </div>
    );
  }
}

export default Projects;
