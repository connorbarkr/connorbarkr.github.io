import React, { Component } from 'react';
import './scss/App.scss';
import './scss/Landing.scss';
import './scss/Header.scss';
import Landing from './Landing';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div style={{height: '200vh'}}>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
