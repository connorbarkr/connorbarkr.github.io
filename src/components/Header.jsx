import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import instagram from '../assets/instagram.svg';
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import menu from '../assets/menu.svg';

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
          <div className='d-flex align-items-start header-content__left-mobile'>
            <img className='icon-md' src={menu} alt='menu'/>
          </div>
          <div className='d-flex align-items-center header-content__left-desktop'>
            <Link to='/aboutMe'>{"about me"}</Link>
            <Link to='/projects'>{"projects"}</Link>
            <Link to='/experience'>{"experience"}</Link>
            <Link to='/resume'>{"resume"}</Link>
          </div>
        </div>
        {this.isBottom ?
          <div className='d-flex flex-row align-items-left header-content__right-alt'>
            <a href='/contact'>
              <img className='icon-sm' src={github} alt='instagram'/>
            </a>
            <a href='/contact'>
              <img className='icon-sm' src={linkedin} alt='instagram'/>
            </a>
            <a href='/contact'>
              <img className='icon-sm' src={instagram} alt='instagram'/>
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
