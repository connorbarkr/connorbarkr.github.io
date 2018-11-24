import React, { Component } from 'react';

import downArrow from '../assets/down-arrow.svg';
import ContactForm from './ui/ContactForm';

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
      <div ref={this.props.refProp} className={`d-flex landing ${this.isScrolled ? 'landing-scrolled' : ''}`}>
        <div className='d-flex justify-content-center flex-column landing-left'>
          <h1>{"Get in touch"}</h1>
          <h1>{"with me!"}</h1>
        </div>
        <div className='d-flex justify-content-center flex-column landing-right'>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default Landing;
