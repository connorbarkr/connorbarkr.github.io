import React from 'react';
import {Link} from 'react-router-dom';

import '../../scss/sidebar.scss';

import resume from '../../assets/resume_interactive.pdf';

const SidebarContent = ({clickProp}) => {
  return (
    <div className='d-flex flex-column sidebar'>
      <Link to='/#about' className='sidebar-link' onClick={clickProp}>{"about"}</Link>
      <Link to='/#projects' className='sidebar-link' onClick={clickProp}>{"projects"}</Link>
      <Link to='/#experience' className='sidebar-link' onClick={clickProp}>{"experience"}</Link>
      <a href={resume} className='sidebar-link' onClick={clickProp}>{"resume"}</a>
    </div>
  );
};

export default SidebarContent;
