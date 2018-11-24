import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PROJECTS } from '../utils/constants';
import { isMobile } from '../utils/detectMobile.js';

class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isMobile: isMobile('lg'),
    };
  }

  componendDidUpdate() {
    this.setState({isMobile: isMobile('lg')});
  }

  renderProjectRow = (projects) => {
    return (
      <div ref={this.props.refProp} className='d-flex flex-row justify-content-center align-items-center'>
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
    let rowMax;
    let index;

    if (isMobile) {
      rowMax = 2;
      if (projects.length % 2 === 0) {
        return;
      } else {
        return;
      }
    } else {
      rowMax = 3;
      if (projects.length % 2 === 0) {
        return (
          <div className='d-flex flex-column'>
            {this.renderProjectRow(projects.slice(0, projects.length / 2))}
            {this.renderProjectRow(projects.slice(projects.length / 2, projects.length))}
          </div>
        );
      } else {
        return (
          <div>
            {this.renderProjectRow(projects.slice(0, Math.ceil(projects.length / 2)))}
            {this.renderProjectRow(projects.slice(Math.ceil(projects.length / 2), projects.length))}
          </div>
        );
      }
    }
  }

  render() {
    return (
      <div className='d-flex content align-items-center'>
        <div className='d-flex justify-content-center flex-column content-left'>
          <h1>{"some of"}</h1>
          <h1>{"my projects"}</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column content-right about'>
          {this.renderProjects(PROJECTS)}
        </div>
      </div>
    );
  }
}

export default Projects;
