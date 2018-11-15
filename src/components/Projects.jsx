import React, { Component } from 'react';

class Projects extends Component {

  renderProjectRow = (projects) => {
    return (
      <div className='d-flex flex-row align-items-between'>
        {projects.map((project) => {
          return (
            <div className='d-flex flex-columm align-items-center project'>
              <img src={project.img} alt={project.alt}/>
              <h3>{project.title}</h3>
            </div>
          );
        })}
      </div>
    );
  }

  renderProjects = (projects) => {
    if (projects.length < 4 && projects.length > 0) {
      return this.renderProjectRow(projects);
    }
  }

  render() {
    return (
      <div className='d-flex content align-items-center'>
        <div className='d-flex justify-content-center flex-column content-left'>
          <h1>{"a little"}</h1>
          <h1>{"about me"}</h1>
        </div>
        <div className='d-flex justify-content-center align-items-center flex-column content-right about'>
          {this.renderProjects()}
        </div>
      </div>
    );
  }
}

export default Projects;
