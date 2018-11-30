import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../scss/header.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import instagram from '../assets/instagram.svg';
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import menu from '../assets/menu.svg';

import {isMobile} from '../utils/detectMobile.js';

class Header extends Component {
  constructor(props) {
    super(props);

    if (window.location.href.split('/').length < 5) {
      window.addEventListener('scroll', this.checkScroll);
    } else {
      this.isScrolled = true;
      this.forceUpdate();
    }
  }

  checkScroll = (event) => {
    let limit = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    let scrollTop = window.scrollY;

    if (scrollTop > 0 && !(scrollTop >= limit - window.innerHeight)) {
      this.isBottom = false;
      this.isScrolled = true;
    } else if (scrollTop >= limit - window.innerHeight) {
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
      <div className={`d-flex justify-content-between header ${this.isScrolled ? 'header-scrolled' : this.isBottom ? 'header-bottom' : ''}`}>
        <div className='header-content__left'>
          <div className='d-flex justify-content-start align-items-center header-content__left-mobile'>
            <img className='icon-sm' src={menu} alt='menu'/>
          </div>
          <div className='d-flex align-items-center header-content__left-desktop'>
            <Link to='/#about'>{"about me"}</Link>
            <Link to='/#projects'>{"projects"}</Link>
            <Link to='/#experience'>{"experience"}</Link>
            <Link to='/'>{"resume"}</Link>
          </div>
        </div>
        {this.isBottom ?
          !isMobile('lg') ?
          <div className='d-flex flex-row justify-content-end align-items-center header-content__right-alt'>
            <a href=''>
              <img className='icon-sm' src={github} alt='github'/>
            </a>
            <a href=''>
              <img className='icon-sm' src={linkedin} alt='linkedin'/>
            </a>
            <a href=''>
              <img className='icon-sm' src={instagram} alt='instagram'/>
            </a>
          </div> : null :
          <div className='d-flex align-items-center header-content__right'>
            <Link to='/#contact'>{"contact"}</Link>
          </div>}
      </div>
    );
  }
}

export default Header;
