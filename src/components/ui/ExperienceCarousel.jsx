import React, { Component } from 'react';

import '../../scss/content.scss';
import '../../scss/_variables.scss';

import arrow from '../../assets/down-arrow.svg';

class ExperienceCarousel extends Component {

  render() {
    const {experience} = this.props;

    return (
      <div className='d-flex justify-content-center align-items-center flex-row experience'>
        <img src={arrow} style={{height: '2.5rem'}} className='button-left clickable' alt='left arrow' onClick={() => {this.props.onClick('prev')}} />
        <div className='d-flex flex-column align-items-center experience-content'>
          <h1>{experience.name}</h1>
          <h2>{`${experience.title} | ${experience.dates}`}</h2>
          <p>{experience.p1}</p>
          <p>{experience.p2}</p>
          <p>{experience.p3}</p>
        </div>
        <img src={arrow} style={{height: '2.5rem'}} className='button-right clickable' alt='right arrow' onClick={() => {this.props.onClick('next')}} />
      </div>
    );
  }
}

export default ExperienceCarousel;
