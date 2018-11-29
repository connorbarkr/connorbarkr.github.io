import React, { Component } from 'react';

import './scss/app.scss';

import Router from './components/Router';

class App extends Component {
  constructor(props) {
    super(props);
    window.previousLocation = 'start';
  }
  render() {
    return (
      <div>
        <Router />
      </div>
    );
  }
}

export default App;
