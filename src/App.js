import React, { Component } from 'react';

import './scss/app.scss';
import './scss/landing.scss';
import './scss/header.scss';
import './scss/about.scss';
import './scss/projects.scss';
import './scss/experience.scss';

import './scss/content.scss';
import './scss/_variables.scss';

import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Landing />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
