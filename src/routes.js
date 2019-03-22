import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Home from './containers/Home/Home.component';
import Posts from './containers/Posts/Posts.component';
import Error404 from './components/errors/404/404.component';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      
      {/*Posts*/}
      <Route exact path='/posts' component={Posts} />
      
      {/*Fallback*/}
      <Route component={Error404} />
    </Switch>
  </App>
)

export default AppRoutes;