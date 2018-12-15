import React, { Component } from 'react';

import ExperienceCarousel from './ui/ExperienceCarousel';

import '../scss/experience.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import {EXPERIENCES} from '../utils/constants';

class Experience extends Component {

  constructor(props) {
    super(props);
    this.state = {
      height: window.innerHeight,
      index: 0,
    };
  }

  changeExperience = (direction) => {
    const {index} = this.state;
    let newIndex = index;

    if (direction === 'next') {
      newIndex++;
      if (newIndex === EXPERIENCES.length) {
        newIndex = 0;
      }
    } else {
      newIndex--;
      if (newIndex === -1) {
        newIndex = EXPERIENCES.length - 1;
      }
    }
    this.setState({index: newIndex, currentExperience: EXPERIENCES[newIndex]});
  }

  render() {
    const {currentExperience} = this.state;
    let exp = currentExperience ? currentExperience : EXPERIENCES[0];

    return (
      <div ref={this.props.refProp} style={{height: this.state.height}} className='d-flex content align-items-center'>
        <div className='d-flex justify-content-center flex-column content-left'>
          <h1 className='d-flex flex-column'>
            <span>{"where"}</span>
            <span>{"I've worked"}</span>
          </h1>
        </div>
        <div className='d-flex justify-content-center align-items-center content-right'>
          <ExperienceCarousel onClick={this.changeExperience} experience={exp}/>
        </div>
      </div>
    );
  }
}

export default Experience;
