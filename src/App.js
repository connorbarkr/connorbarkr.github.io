import React, { Component } from 'react';

import './scss/app.scss';
import './scss/landing.scss';
import './scss/header.scss';
import './scss/about.scss';
import './scss/projects.scss';
import './scss/experience.scss';
import './scss/project-detail.scss';

import './scss/content.scss';
import './scss/_variables.scss';

import Router from './components/Router';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Router />
      </div>
    );
  }
}

export default App;
