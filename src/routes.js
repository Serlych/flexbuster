import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home/Home.component';
import Posts from './components/Posts/Posts.component';
import Error404 from './components/Errors/404/404.component';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route exact path='/' component={Home} />
      
      {/*Posts*/}
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/posts/:postId' component={Posts} />
      <Route component={Error404} />
    </Switch>
  </App>
)

export default AppRoutes;