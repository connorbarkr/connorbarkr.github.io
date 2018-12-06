import React from 'react';
import {Link} from 'react-router-dom';

import '../../scss/sidebar.scss';

const SidebarContent = ({clickProp}) => {
  return (
    <div className='d-flex flex-column sidebar'>
      <Link to='/#about' className='sidebar-link' onClick={clickProp}>{"about me"}</Link>
      <Link to='/#projects' className='sidebar-link' onClick={clickProp}>{"projects"}</Link>
      <Link to='/#experience' className='sidebar-link' onClick={clickProp}>{"experience"}</Link>
      <Link to='/' className='sidebar-link' onClick={clickProp}>{"resume"}</Link>
    </div>
  );
};

export default SidebarContent;
