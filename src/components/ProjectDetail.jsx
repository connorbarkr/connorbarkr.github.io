import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectDetailCarousel from './ui/ProjectDetailCarousel';

import '../scss/project-detail.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import {PROJECTS} from '../utils/constants';
import {scrollTo} from '../utils/scrollTo.js';
import {getProjectIndex} from '../utils/projectApi.js';
import {isMobile} from '../utils/detectMobile.js';
import siren from '../assets/siren.svg';
import code from '../assets/code.svg';
import how from '../assets/how.svg';
import arrow from '../assets/down-arrow.svg';
import link_r from '../assets/link_r.svg';

import Header from './Header';

class ProjectDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      project: null,
    };
  }

  componentDidMount() {
    window.previousLocation = 'project';
    this.getProjectDetails(this.props);
    scrollTo(0, 'auto');
  }

  getProjectDetails = (props) => {
    const index = getProjectIndex(props.match.params.title);

    this.setState({
      project: PROJECTS[index],
    });
  }

  render() {
    const {project} = this.state;

    return (
      <div>
        <Header />
        <div style={{height: this.state.height}} className='d-flex flex-column align-items-center project-detail'>
          <div className='project-detail__header'>
            <Link to='/#projects' style={{textDecoration: 'none'}} className='d-flex flex-row project-detail__header-back'>
              <img src={arrow} className='icon-xxs button-left' alt='left arrow' />
              <p>{'back to projects'}</p>
            </Link>
            {isMobile('lg') ?
              <h1 className='project-detail__header-title'>
                {project ? project.title : null}
              </h1> :
              <a className='project-detail__header-title' href={project ? project.link : null}>
                <img className='icon-xs' src={link_r} alt='link'/>
                {project ? project.title : null}
              </a>
            }
          </div>
          {isMobile('lg') ?
            <ProjectDetailCarousel project={project} /> :
            <div className='d-flex flex-row justify-content-between project-detail__body'>
              <div className='d-flex flex-column align-items-center project-detail__body-info'>
                <img className='icon-lg' src={how} alt='how'/>
                <h3>{'what it does'}</h3>
                <p>{project ? project.what : null}</p>
              </div>
              <div className='d-flex flex-column align-items-center project-detail__body-info'>
                <img className='icon-lg' src={code} alt='code'/>
                <h3>{'how it does it'}</h3>
                <p>{project ? project.how : null}</p>
              </div>
              <div className='d-flex flex-column align-items-center project-detail__body-info'>
                <img className='icon-lg' src={siren} alt='siren'/>
                <h3>{'challenges'}</h3>
                <p>{project ? project.challenges : null}</p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
