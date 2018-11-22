import React from 'react'

import Header from './Header';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Main = () => (
  <div className='main'>
    <Header />
    <Landing />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </div>
);

export default Main;
