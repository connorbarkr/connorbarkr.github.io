import React, { Component } from 'react';

import './scss/App.scss';
import './scss/Landing.scss';
import './scss/Header.scss';
import './scss/about.scss';

import './scss/content.scss';

import Landing from './components/Landing';
import Header from './components/Header';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Landing />
        <About />
      </div>
    );
  }
}

export default App;
