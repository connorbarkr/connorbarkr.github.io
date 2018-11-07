import React, { Component } from 'react';
import './scss/App.scss';
import './scss/Landing.scss';
import './scss/Header.scss';
import Landing from './components/Landing';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <Landing />
      </div>
    );
  }
}

export default App;
