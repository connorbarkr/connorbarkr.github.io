import React, { Component } from 'react';

import Header from './Header';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

class Main extends Component {
  constructor(props) {
    super(props);

    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.experienceRef = React.createRef();
    this.contactRef = React.createRef();
  }

  conponentDidMount() {
    console.log('mounted');
  }

  render() {
    return (
      <div className='main'>
        <Header refs={[this.aboutRef, this.projectsRef, this.experienceRef, this.contactRef]}/>
        <Landing />
        <About refProp={this.aboutRef}/>
        <Projects refProp={this.projectsRef}/>
        <Experience refProp={this.experienceRef}/>
        <Contact refProp={this.contactRef}/>
      </div>
    );
  }
};

export default Main;
