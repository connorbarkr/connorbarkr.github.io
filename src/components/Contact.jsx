import React, { Component } from 'react';

import downArrow from '../assets/down-arrow.svg';

class Landing extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.checkScroll);
  }

  checkScroll = (event) => {
    let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    let scrollTop = window.scrollY;

    if (scrollTop < limit - window.innerHeight) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    this.forceUpdate();
  }

  isScrolled = false;

  render() {
    return (
      <div className={`d-flex landing ${this.isScrolled ? 'landing-scrolled' : ''}`}>
        <div className='d-flex justify-content-center flex-column landing-left'>
          <h1>{"Get in touch"}</h1>
          <h1>{"with me!"}</h1>
        </div>
        <div className='d-flex justify-content-center flex-column landing-right'>
          <h3>{"I write code, build tools,"}</h3>
          <h3>{"and create unique projects."}</h3>
        </div>
        <div className='d-flex justify-content-center landing-cta'>
          <div className='d-flex flex-column align-items-center'>
            <p>{'more about me'}</p>
            <img src={downArrow} alt='down arrow' />
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
