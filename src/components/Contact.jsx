import React, { Component } from 'react';

import '../scss/contact.scss';
import '../scss/content.scss';
import '../scss/_variables.scss';

import ContactForm from './ui/ContactForm';

import instagram from '../assets/instagram_b.svg';
import github from '../assets/github-logo_b.svg';
import linkedin from '../assets/linkedin-logo_b.svg';

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
      <div ref={this.props.refProp} className={`d-flex contact ${this.isScrolled ? 'contact-scrolled' : ''}`}>
        <div className='d-flex justify-content-center flex-column contact-left'>
          <h1 className='d-flex flex-column'>
            <span>{"Get in touch"}</span>
            <span>{"with me!"}</span>
          </h1>
        </div>
        <div className='d-flex justify-content-center flex-column contact-right'>
          <ContactForm />
          <div className='flex-row contact-right__logos justify-content-center'>
            <a href='https://github.com/connorbarkr'>
              <img className='icon-xs' src={github} alt='github'/>
            </a>
            <a href='https://www.linkedin.com/in/connor-barker-a49431146/'>
              <img className='icon-xs' src={linkedin} alt='linkedin'/>
            </a>
            <a href='https://www.instagram.com/eskimopies/?hl=en'>
              <img className='icon-xs' src={instagram} alt='instagram'/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
