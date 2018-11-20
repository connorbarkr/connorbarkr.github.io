import React, { Component } from 'react';

import instagram from '../assets/instagram.svg';
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';

class Header extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.checkScroll);
  }

  checkScroll = (event) => {
    let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    let scrollTop = window.scrollY;

    if (scrollTop > 0 && scrollTop !== limit - window.innerHeight) {
      this.isScrolled = true;
    } else if (scrollTop === limit - window.innerHeight) {
      this.isBottom = true;
      this.isScrolled = false;
    } else {
      this.isBottom = false;
      this.isScrolled = false;
    }
    this.forceUpdate();
  }

  isBottom = false;
  isScrolled = false;

  render() {
    return (
      <div className={`d-flex justify-content-between header ${this.isScrolled ? 'header-scrolled' : ''}`}>
        <div className='d-flex align-items-center header-content__left'>
          <a href='/aboutme'>{"about me"}</a>
          <a href='/projects'>{"projects"}</a>
          <a href='/experience'>{"experience"}</a>
          <a href='/resume'>{"resume"}</a>
        </div>
        {this.isBottom ?
          <div className='d-flex flex-row align-items-left header-content__right-alt'>
            <a href='/contact'>
              <img className='icon-md' src={github} alt='instagram'/>
            </a>
            <a href='/contact'>
              <img className='icon-md' src={linkedin} alt='instagram'/>
            </a>
            <a href='/contact'>
              <img className='icon-md' src={instagram} alt='instagram'/>
            </a>
          </div> :
          <div className='d-flex align-items-center header-content__right'>
            <a href='/contact'>{"contact"}</a>
          </div>}
      </div>
    );
  }
}

export default Header;