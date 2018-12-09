import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Sidebar from 'react-sidebar';

import {isMobile} from '../utils/detectMobile.js';

import '../scss/header.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import instagram from '../assets/instagram.svg';
import github from '../assets/github-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

import SidebarContent from './ui/SidebarContent';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false,
    };

    if (window.location.href.split('/').length < 5) {
      window.addEventListener('scroll', this.checkScroll);
    } else {
      this.isScrolled = true;
      this.forceUpdate();
    }
  }

  conponentDidUpdate() {
    clearAllBodyScrollLocks();
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

  toggleSidebar = () => {
    this.setState({sidebarOpen: !this.state.sidebarOpen}, () => {
      this.state.sidebarOpen ? disableBodyScroll() : enableBodyScroll();
    });
  }

  setSidebarOpen = () => {
    this.setState({sidebarOpen: true}, () => {
      disableBodyScroll();
    });
  }

  setSidebarClose = () => {
    this.setState({sidebarOpen: false}, () => {
      enableBodyScroll();
    });
  }

  isBottom = false;
  isScrolled = false;

  render() {
    const sidebarStyle = {
      background: '#F4F5F6',
      position: 'fixed',
    }
    return (
      <div>
        <Sidebar
          sidebar={<SidebarContent clickProp={this.setSidebarClose}/>}
          open={this.state.sidebarOpen}
          onSetOpen={this.setSidebarOpen}
          touch={false}
          styles={{sidebar: sidebarStyle}}
        />
        <div className={`d-flex justify-content-between header ${this.isScrolled ? 'header-scrolled' : this.isBottom ? 'header-bottom' : ''}`}>
          <div className='header-content__left'>
            <div className='d-flex justify-content-start align-items-center header-content__left-mobile'>
              <img className='icon-sm' src={this.state.sidebarOpen ? close : menu} alt='menu' onClick={this.toggleSidebar} />
            </div>
            <div className='d-flex align-items-center header-content__left-desktop'>
              <Link to='/#about'>{"about"}</Link>
              <Link to='/#projects'>{"projects"}</Link>
              <Link to='/#experience'>{"experience"}</Link>
              <Link to='/'>{"resume"}</Link>
            </div>
          </div>
          {this.isBottom ?
            !isMobile('lg') ?
            <div className='d-flex flex-row justify-content-end align-items-center header-content__right-alt'>
              <a href='https://github.com/connorbarkr'>
                <img className='icon-sm' src={github} alt='github'/>
              </a>
              <a href='https://www.linkedin.com/in/connor-barker-a49431146/'>
                <img className='icon-sm' src={linkedin} alt='linkedin'/>
              </a>
              <a href='https://www.instagram.com/eskimopies/?hl=en'>
                <img className='icon-sm' src={instagram} alt='instagram'/>
              </a>
            </div> : null :
            <div className='d-flex align-items-center header-content__right'>
              <Link to='/#contact'>{"contact"}</Link>
            </div>}
        </div>
      </div>
    );
  }
}

export default Header;
