import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Home from './containers/Home/Home.component';
import Posts from './containers/Posts/Posts.component';
import Styler from './containers/Styler/Styler.component';
import Error404 from './components/errors/404/404.component';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/styler' component={Styler} />
      
      {/*Fallback*/}
      <Route component={Error404} />
    </Switch>
  </App>
)

export default AppRoutes;