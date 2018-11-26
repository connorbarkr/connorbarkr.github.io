import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainRouter from './MainRouter';
import ProjectDetail from './ProjectDetail';

const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainRouter}/>
      <Route path='/project/:title' component={ProjectDetail}/>
    </Switch>
  </main>
)

export default Router;
