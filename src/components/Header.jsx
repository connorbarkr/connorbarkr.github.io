import React, { Component } from 'react';

class Header extends Component {
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
      <div className={`d-flex justify-content-between header ${this.isScrolled ? 'header-scrolled' : ''}`}>
        <div className='d-flex align-items-center header-content__left'>
          <a href='/aboutme'>{"about me"}</a>
          <a href='/projects'>{"projects"}</a>
          <a href='/experience'>{"experience"}</a>
          <a href='/resume'>{"resume"}</a>
        </div>
        <div className='d-flex align-items-center header-content__right'>
          <a href='/contact'>{"contact"}</a>
        </div>
      </div>
    );
  }
}

export default Header;
