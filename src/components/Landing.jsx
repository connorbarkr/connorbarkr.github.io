import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../scss/landing.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import downArrow from '../assets/down-arrow.svg';

class Landing extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.checkScroll);
  }

  checkScroll = (event) => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
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
          <h1 className='d-flex flex-column'>
            <span>{"Hello,"}</span>
            <span>{"I'm Connor."}</span>
          </h1>
        </div>
        <div className='d-flex justify-content-center flex-column landing-right'>
          <h3 className='d-flex flex-column'>
            <span>{"I write code, build tools,"}</span>
            <span>{"and create unique projects."}</span>
          </h3>
        </div>
        <div className='d-flex justify-content-center landing-cta'>
          <Link to='/#about' className='d-flex flex-column align-items-center'>
            <p>{'more about me'}</p>
            <img src={downArrow} alt='down arrow' />
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
