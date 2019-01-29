import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../scss/projects.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import { PROJECTS } from '../utils/constants';
import { isMobile } from '../utils/detectMobile.js';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      isMobile: isMobile('md'),
    };
  }

  componendDidUpdate() {
    this.setState({isMobile: isMobile('md')});
  }

  renderProjectRow = (projects) => {
    return (
      <div className='d-flex flex-row align-items-center justify-content-center'>
        {projects.map((project) => {
          return (
            <Link to={`/project/${project.title}`} style={{textDecoration: 'none'}} className='d-flex flex-column align-items-center project'>
              <img src={`/projectImages/${project.img}.svg`} alt={project.img}/>
              <h3>{project.title}</h3>
            </Link>
          );
        })}
      </div>
    );
  }

  renderProjects = (projects) => {
    const {isMobile} = this.state;
    let allProjs = [];
    let maxLen = 3;
    let i = 0;

    if (isMobile) {
      maxLen = 2;
    }
    while (i < projects.length) {
      let newArr = [];
      for (let j = 0; j < maxLen; j++) {
        if (projects[i]) {
          newArr.push(projects[i]);
          i++;
        } else {
          break;
        }
      }
      allProjs.push(newArr);
      newArr = [];
    }
    return (
      <div className='d-flex flex-column projects'>
        {allProjs.map((projects) => {
          return this.renderProjectRow(projects);
        })}
      </div>
    );
  }

  render() {
    return (
      <div ref={this.props.refProp} style={{minHeight: isMobile('lg') ? '' : this.state.height}} className='d-flex content align-items-center'>
        <div style={{height: isMobile('lg') ? (this.state.height * 0.3) : (this.state.height * 0.6)}} className='d-flex justify-content-center flex-column content-left'>
          <h1 className='d-flex flex-column'>
            <span>{"some of"}</span>
            <span>{"my projects"}</span>
          </h1>
        </div>
        <div className='d-flex align-items-center flex-column content-right'>
          {this.renderProjects(PROJECTS)}
          {isMobile('lg') ? <p className='mobile-project-label'>{"tap on one to learn more about it"}</p> :
            <p className='desktop-project-label'>{"click on one to learn more about it"}</p>}
        </div>
      </div>
    );
  }
}

export default Projects;
