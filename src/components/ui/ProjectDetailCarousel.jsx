import React, { Component } from 'react';

import '../../scss/content.scss';
import '../../scss/_variables.scss';

import {PROJECT_DETAIL} from '../../utils/constants';

import arrow from '../../assets/down-arrow.svg';
import github_b from '../../assets/github-logo_b.svg';

class ProjectDetailCarousel extends Component {
  state = {
    index: 0,
    currentDetail: PROJECT_DETAIL[0],
  }

  changeDetail = (direction) => {
    const {index} = this.state;
    let newIndex = index;

    if (direction === 'next') {
      newIndex++;
      if (newIndex === PROJECT_DETAIL.length) {
        newIndex = 0;
      }
    } else {
      newIndex--;
      if (newIndex === -1) {
        newIndex = PROJECT_DETAIL.length - 1;
      }
    }
    this.setState({index: newIndex, currentDetail: PROJECT_DETAIL[newIndex]});
  }

  render() {
    const {project} = this.props;
    const {currentDetail} = this.state;

    return (
      <div className='d-flex flex-column justify-content-center align-items-center project-detail__body'>
        <div className='d-flex flex-column align-items-center project-detail__body-info'>
          <img className='icon-md' src={`/projectImages/${currentDetail.value}.svg`} alt={currentDetail.value}/>
          <h3>{currentDetail.title}</h3>
          <div className='d-flex flex-row justify-content-center align-items-center'>
            <img src={arrow} className='button-left clickable arrow' alt='left arrow' onClick={() => {this.changeDetail('prev')}} />
            <p>{project ? project[currentDetail.value] : null}</p>
            <img src={arrow} className='button-right clickable arrow' alt='right arrow' onClick={() => {this.changeDetail('next')}} />
          </div>
        </div>
        <a href={project ? project.link : null} className='d-flex justify-content-center align-items-center project-detail__body-link'>
          <img className='icon-xxs' src={github_b} alt='github'/>
          <span>{'View this project on Github!'}</span>
        </a>
      </div>
    );
  }
}

export default ProjectDetailCarousel;
