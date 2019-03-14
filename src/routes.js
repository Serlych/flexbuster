import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/App';
import Error404 from './components/Errors/404.component';

const AppRoutes = () => (
  <App>
    <Route path="/" component={Error404} />
  </App>
)

export default AppRoutes;