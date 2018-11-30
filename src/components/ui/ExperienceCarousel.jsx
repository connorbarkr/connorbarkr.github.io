import React, { Component } from 'react';

import '../../scss/content.scss';
import '../../scss/_variables.scss';

import arrow from '../../assets/down-arrow.svg';

class ExperienceCarousel extends Component {

  render() {
    const {experience} = this.props;

    return (
      <div className='d-flex justify-content-center align-items-center flex-column experience'>
        <h1>{experience.name}</h1>
        <h2>{`${experience.title} | ${experience.dates}`}</h2>
        <div className='d-flex flex-row align-items-center experience-content'>
          <img src={arrow} className='button-left clickable' alt='left arrow' onClick={() => {this.props.onClick('prev')}} />
          <span className='experience-content__desktop'>
            <p>{experience.p1}</p>
            <p>{experience.p2}</p>
            <p>{experience.p3}</p>
          </span>
          <span className='experience-content__mobile'>
            <p>{experience.p1} {experience.p2} {experience.p3}</p>
          </span>
          <img src={arrow} className='button-right clickable' alt='right arrow' onClick={() => {this.props.onClick('next')}} />
        </div>
      </div>
    );
  }
}

export default ExperienceCarousel;
