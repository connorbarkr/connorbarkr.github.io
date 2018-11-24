import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
          <div className='d-flex flex-row justify-content-between align-items-bottom project-detail__header'>
            <Link to='/' style={{textDecoration: 'none'}} className='d-flex flex-row justify-content project-detail__header-back'>
              <img src={arrow} className='icon-xs button-left' alt='left arrow' />
              <p>{'back to projects'}</p>
            </Link>
            <h1>{project ? project.title : null}</h1>
          </div>
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
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
