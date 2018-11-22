import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from './Main';
import ProjectDetail from './ProjectDetail';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/project/:title' component={ProjectDetail}/>
    </Switch>
  </main>
)

export default Router;
