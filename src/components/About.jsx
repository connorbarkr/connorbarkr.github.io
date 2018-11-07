import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className={`d-flex landing ${this.isScrolled ? 'landing-scrolled' : ''}`}>
        <div className='d-flex justify-content-center flex-column landing-left'>
          <h1>{"Hello,"}</h1>
          <h1>{"I'm Connor."}</h1>
        </div>
        <div className='d-flex justify-content-center flex-column landing-right'>
          <h3>{"I write code, build tools,"}</h3>
          <h3>{"and create unique projects."}</h3>
        </div>
        <div className='d-flex flex-column align-items-center landing-cta'>
          <p>{'more about me'}</p>
          <img src={downArrow} alt='' />
        </div>
      </div>
    );
  }
}

export default About;
