import React, { Component } from 'react';

import './scss/app.scss';
import './scss/landing.scss';
import './scss/header.scss';
import './scss/about.scss';
import './scss/projects.scss';

import './scss/content.scss';

import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Landing />
        <About />
        <Projects />
      </div>
    );
  }
}

export default App;
