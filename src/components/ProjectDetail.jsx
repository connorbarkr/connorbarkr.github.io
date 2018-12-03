import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProjectDetailCarousel from './ui/ProjectDetailCarousel';

import '../scss/project-detail.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import {PROJECTS} from '../utils/constants';
import { getProjectIndex } from '../utils/projectApi.js';
import siren from '../assets/siren.svg';
import code from '../assets/code.svg';
import how from '../assets/how.svg';
import arrow from '../assets/down-arrow.svg';

import Header from './Header';

class ProjectDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      project: null,
    };
  }

  componentDidMount() {
    window.previousLocation = 'project';
    this.getProjectDetails(this.props);
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
        <div className='d-flex flex-column align-items-center project-detail'>
          <div className='project-detail__header'>
            <Link to='/#projects' style={{textDecoration: 'none'}} className='d-flex flex-row project-detail__header-back'>
              <img src={arrow} className='icon-xxs button-left' alt='left arrow' />
              <p>{'back to projects'}</p>
            </Link>
            <h1>{project ? project.title : null}</h1>
          </div>
          <ProjectDetailCarousel project={project} />
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
