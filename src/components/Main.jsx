import React, { Component } from 'react';

import Header from './Header';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

import {scrollTo} from '../utils/scrollTo.js';

class Main extends Component {
  constructor(props) {
    super(props);

    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.experienceRef = React.createRef();
    this.contactRef = React.createRef();
  }

  componentDidMount() {
    this.hashScroll();
  }

  componentDidUpdate() {
    this.hashScroll();
  };

  decodeHash = (ref) => {
    switch (ref) {
      case 'about':
        return this.aboutRef;
      case 'projects':
        return this.projectsRef;
      case 'experience':
        return this.experienceRef;
      case 'contact':
        return this.contactRef;
      default:
        return;
    }
  }

  hashScroll = () => {
    window.location.hash = window.decodeURIComponent(window.location.hash);
    const hashParts = window.location.hash.split('#');
    let bottom = false;
    if (hashParts.length > 1) {
      let hash = hashParts[1];
      if (hashParts.length > 2) {
        hash = hashParts.slice(-1)[0];
      }
      if (hash === 'contact') {bottom = true;}
      scrollTo(this.decodeHash(hash), 'smooth', bottom);
    }
  }

  render() {
    return (
      <div>
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
